import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Column } from 'primereact/column'
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { UserExpandedTemplate } from '../expanded_template'
import TableWrapper from '../../../../shared_components/datatable_wrapper/TableWrapper'
import { Button } from 'primereact/button'
import ConfirmMessage from '../../../../shared_components/dialogs/ConfirmMessage'

const locked = [
  { label: 'Locked', value: 'Locked' },
  { label: 'Clear', value: '' }
]
export default class UserDatatableDisaply extends Component {
  static propTypes = {
    employees: PropTypes.object.isRequired,
    addNew: PropTypes.func.isRequired
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

  lockedFilter = e => {
    console.log(e)

    this.dt.filter(e.value, 'lockedLabel', 'equals')
    this.setState({ locked: e.value === '' ? null : e.value })
  }

  departmentFilter = e => {
    let x = e.value.map(i => i.name)

    this.dt.filter(x, 'deptName', 'in')
    this.setState({ departments: e.value })
  }
  accessGroupFilter = e => {
    let x = e.value.map(i => i.name)

    this.dt.filter(x, 'level_name', 'in')
    this.setState({ accessGroups: e.value })
  }

  notSaved = e => {
    this.setState({ tempHolder: e })
    this.toggleDialog()
  }
  toggleDialog = () => {
    this.setState({ showDialog: !this.state.showDialog })
  }
  render () {
    const lockedDropDown = (
      <Dropdown
        style={{ width: '100%' }}
        value={this.state.locked}
        options={locked}
        onChange={this.lockedFilter}
      />
    )
    const departmentDropDown = (
      <div>
        <MultiSelect
          optionLabel='name'
          dataKey='name'
          value={this.state.departments}
          options={Object.keys(this.props.departments).map(
            i => this.props.departments[i]
          )}
          onChange={this.departmentFilter}
          style={{ maxWidth: '250px' }}
        />
      </div>
    )
    const accessGroupDropDown = (
      <div>
        <MultiSelect
          optionLabel='name'
          dataKey='id'
          value={this.state.accessGroups}
          options={this.props.account_levels}
          onChange={this.accessGroupFilter}
          style={{ maxWidth: '250px' }}
        />
      </div>
    )
    const menu = [
      this.state.contextItem.locked
        ? {
          label: 'Unlock Account',
          icon: 'pi pi-unlock',
          command: this.props.unlock
        }
        : {
          label: 'Lock Account',
          icon: 'pi pi-lock',
          command: this.props.lock
        }
    ]

    return (
      <div>
        <ConfirmMessage
          show={this.state.showDialog}
          toggle={this.toggleDialog}
          saveAction={() => this.props.updateEmployees(this.state.tempHolder)}
        />
        <TableWrapper
          dt={el => (this.dt = el)}
          contextSelectedItem={this.state.contextItem}
          contextSelectedItemChange={e =>
            this.setState({ contextItem: e.value })
          }
          checkSelectionChange={e => this.setState({ checkboxItems: e.value })}
          checkSelectionState={this.state.checkboxItems}
          list={Object.keys(this.props.employees).map(
            key => this.props.employees[key]
          )}
          menu={menu}
          addNew={e => console.log(e)}
          expandedTemplate={e => (
            <UserExpandedTemplate save={this.notSaved} selectedUser={e} />
          )}
        >
          <Column selectionMode='multiple' style={{ width: '2em' }} />
          <Column
            field='locked'
            body={props => {
              console.log(props.locked, props._)

              return (
                <Button
                  onClick={() => {
                    props.locked
                      ? this.props.updateAccounts({
                        _a: props._a,
                        update: { locked: false },
                        _: props._
                      })
                      : this.props.updateAccounts({
                        _a: props._a,
                        update: { locked: true },
                        _: props._
                      })
                  }}
                  tooltip={!props.locked ? 'Unlock Account' : 'Lock Account'}
                  tooltipOptions={{ position: 'top' }}
                  icon={`pi ${props.locked ? 'pi-lock-open' : 'pi-lock'}`}
                  className={props.locked && 'p-button-danger'}
                  style={{ marginRight: '.25em' }}
                />
              )
            }}
          />

          <Column field='empfull_name' header='Name' sortable filter />
          <Column field='email' header='Email' sortable filter />
          <Column
            field='deptName'
            header='Department'
            sortable
            filter
            filterElement={departmentDropDown}
          />
          <Column field='manfull_name' header='Manager' sortable filter />
          <Column
            field='level_name'
            header='Access Group'
            sortable
            filter
            filterElement={accessGroupDropDown}
          />
        </TableWrapper>
      </div>
    )
  }
}
