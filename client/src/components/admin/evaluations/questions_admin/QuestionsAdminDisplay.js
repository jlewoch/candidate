import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Column } from 'primereact/column'
import { Dropdown } from 'primereact/dropdown'
import TableWrapper from '../../../../shared_components/datatable_wrapper/TableWrapper'
import ConfirmMessage from '../../../../shared_components/dialogs/ConfirmMessage'
import { ToggleButton } from 'primereact/togglebutton'
import QuestionsExpandedTemplate from './QuestionsExpandedTemplate'
export const enabled = [
  { label: 'Enabled', value: true },
  { label: 'Disabled', value: false },
  { label: 'Clear', value: '' }
]

export default class QuestionsAdminDisaply extends Component {
  static propTypes = {
    questions: PropTypes.object.isRequired,
    updateQuestions: PropTypes.func.isRequired,
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
    this.dt.filter(e.value, 'enabled', 'equals')
    this.setState({ enabled: e.value === '' ? null : e.value })
  }
  stepsFilter = e => {
    console.log(e)
    this.dt.filter(e.value.level, 'step', 'equals')
    this.setState({ step: e.value.level === '' ? null : e.value.level })
  }
  expand = e => {
    console.log(e)
    if (e.originalEvent.target.className) {
      return
    }

    let row =
      this.state.expandedRow && this.state.expandedRow[0] === e.data
        ? []
        : [e.data]
    this.setState({ expandedRow: row })
  }
  componentDidMount = () => {
    this.props.getQuestions()
  }

  render () {
    const { steps } = this.props

    const stepsDropdown = (
      <Dropdown
        optionLabel='name'
        dataKey='step'
        style={{ width: '100%' }}
        value={this.state.step}
        options={Object.keys(steps).map(i => steps[i])}
        onChange={this.stepsFilter}
      />
    )

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
            this.props.updateQuestions({
              _: this.state.contextItem._,
              update: { enabled: false }
            })
        }
        : {
          label: 'Enable',
          icon: 'pi pi-lock',
          command: () =>
            this.props.updateQuestions({
              _: this.state.contextItem._,
              update: { enabled: true }
            })
        }
    ]

    return (
      <div>
        <div>
          <div>
            <h1>Questions Admin</h1>
          </div>
        </div>
        <ConfirmMessage
          show={this.state.showDialog}
          toggle={this.toggleDialog}
          saveAction={() => console.log('need')}
        />
        <TableWrapper
          rowClick={this.expand}
          dt={el => (this.dt = el)}
          contextSelectedItem={this.state.contextItem}
          contextSelectedItemChange={e =>
            this.setState({ contextItem: e.value })
          }
          expandedRows={this.state.expandedRow}
          expandedTemplate={e => (
            <QuestionsExpandedTemplate
              selectedQuestion={e}
              steps={this.props.steps}
            />
          )}
          checkSelectionChange={e => this.setState({ checkboxItems: e.value })}
          checkSelectionState={this.state.checkboxItems}
          list={Object.keys(this.props.questions).map(
            key => this.props.questions[key]
          )}
          menu={menu}
          addNew={e => console.log(e)}
        >
          <Column selectionMode='multiple' style={{ width: '2em' }} />

          <Column
            field='enabled'
            header='Enabled'
            sortable
            filter
            style={{ width: '2em' }}
            body={props => (
              <div className='p-fluid'>
                <ToggleButton
                  checked={props.enabled}
                  onLabel='Disable'
                  offLabel='Enable'
                  tooltip={props.enabled ? 'Disable Step' : 'Enable Step'}
                  tooltipOptions={{ position: 'top' }}
                  onChange={e =>
                    this.props.updateQuestions({
                      _: props._,
                      update: { enabled: e.value }
                    })
                  }
                />
              </div>
            )}
            filterElement={enabledDropdown}
          />
          <Column field='question' header='Question' sortable filter />
          <Column
            field='step'
            header='Associated Step'
            sortable
            filter
            filterElement={stepsDropdown}
          />
          <Column field='weight' header='Weight %' sortable />
        </TableWrapper>
      </div>
    )
  }
}
