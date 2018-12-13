import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Column } from 'primereact/column'
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { StepsExpandedTemplate } from './expanded_template'
import TableWrapper from '../../../../shared_components/datatable_wrapper/TableWrapper'
import UserToolBar from './StepsToolBar'
import ConfirmMessage from '../../../../shared_components/dialogs/ConfirmMessage'
import StepsToolBar from './StepsToolBar'

const enabled = [
  { label: 'Enabled', value: 'Enabled' },
  { label: 'Disabled', value: 'Disabled' },
  { label: 'Clear', value: '' }
]
const required = [
  { label: 'Required', value: 'Required' },
  { label: 'Clear', value: '' }
]
export default class StepsDatatableDisaply extends Component {
  static propTypes = {
    steps: PropTypes.object.isRequired
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
    console.log(e)

    this.dt.filter(e.value, 'enabledLabel', 'equals')
    this.setState({ enabled: e.value === '' ? null : e.value })
  }

  render () {
    const enabledDropdown = (
      <Dropdown
        style={{ width: '100%' }}
        value={this.state.locked}
        options={enabled}
        onChange={this.enabledFilter}
      />
    )
    const requiredDropdown = (
      <Dropdown
        style={{ width: '100%' }}
        value={this.state.locked}
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
          addNew={e => console.log(e)}
        >
          <Column selectionMode='multiple' style={{ width: '2em' }} />
          <Column
            field='enabled'
            body={props => StepsToolBar(props, this.props.updateSteps)}
          />
          <Column
            field='enabledLabel'
            header='Enabled'
            sortable
            filter
            filterElement={enabledDropdown}
          />
          <Column field='name' header='Name' sortable filter />
          <Column field='level' header='Level' sortable filter />
          <Column field='weight' header='Weight %' sortable filter />
          <Column field='requiredLabel' header='Required' sortable filter />
        </TableWrapper>
      </div>
    )
  }
}
