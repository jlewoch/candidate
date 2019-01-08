import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Column } from 'primereact/column'
import { Dropdown } from 'primereact/dropdown'
import TableWrapper from '../../../shared_components/datatable_wrapper/TableWrapper'
import ConfirmMessage from '../../../shared_components/dialogs/ConfirmMessage'
import { ToggleButton } from 'primereact/togglebutton'
import { StepsForm } from '../forms/steps'
const enabled = [
  { label: 'Enabled', value: true },
  { label: 'Disabled', value: false },
  { label: 'Clear', value: '' }
]

export default class StepsAdminDisaply extends Component {
  static propTypes = {
    steps: PropTypes.object.isRequired,
    updateSteps: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      checkboxItems: [],
      contextItem: {},
      showDialog: false
    }
    this.dt = createRef()
  }
  saveAction = e => {}
  notSaved = e => {
    this.setState({ tempHolder: e })
    this.toggleDialog()
  }
  toggleDialog = () => {
    this.setState({ showDialog: !this.state.showDialog })
  }
  enabledFilter = e => {
    this.dt.filter(e.value, 'enabled', 'equals')
    this.setState({ enabled: e.value === '' ? null : e.value })
  }
  requiredFilter = e => {
    this.dt.filter(e.value, 'requiredLabel', 'equals')
    this.setState({ required: e.value === '' ? null : e.value })
  }
  componentDidMount () {
    this.props.getSteps()
  }

  render () {
    const enabledDropdown = (
      <Dropdown
        style={{ width: '100%' }}
        value={this.state.enabled}
        options={enabled}
        onChange={this.enabledFilter}
      />
    )

    const menu = [
      this.state.contextItem.enabled
        ? {
          label: 'Disable',
          icon: 'pi pi-disabled',
          command: () =>
            this.props.updateSteps({
              _: this.state.contextItem._,
              update: { enabled: false }
            })
        }
        : {
          label: 'Enable',
          icon: 'pi pi-lock',
          command: () =>
            this.props.updateSteps({
              _: this.state.contextItem._,
              update: { enabled: true }
            })
        },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => this.props.destroy({ _: this.state.contextItem._ })
      }
    ]

    return (
      <div>
        <ConfirmMessage
          show={this.state.showDialog}
          toggle={this.toggleDialog}
          saveAction={() => console.log('need')}
        />
        <TableWrapper
          dt={el => (this.dt = el)}
          contextSelectedItem={this.state.contextItem}
          contextSelectedItemChange={e =>
            this.setState({ contextItem: e.value })
          }
          checkSelectionChange={e => this.setState({ checkboxItems: e.value })}
          checkSelectionState={this.state.checkboxItems}
          list={Object.keys(this.props.steps).map(key => this.props.steps[key])}
          menu={menu}
          addNew={<StepsForm />}
        >
          <Column selectionMode='multiple' style={{ width: '2em' }} />

          <Column
            field='enabled'
            header='Enabled'
            sortable
            filter
            body={props => (
              <div className='p-fluid'>
                <ToggleButton
                  checked={props.enabled}
                  onLabel='Disable'
                  offLabel='Enable'
                  tooltip={props.enabled ? 'Disable Step' : 'Enable Step'}
                  tooltipOptions={{ position: 'top' }}
                  onChange={e =>
                    this.props.updateSteps({
                      _: props._,
                      update: { enabled: e.value }
                    })
                  }
                />
              </div>
            )}
            filterElement={enabledDropdown}
          />
          <Column field='name' header='Name' sortable filter />
          <Column field='level' header='Progression Level' sortable />
          <Column field='weight' header='Weight %' sortable />
        </TableWrapper>
      </div>
    )
  }
}
