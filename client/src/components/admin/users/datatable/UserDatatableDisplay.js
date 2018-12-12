import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Column } from 'primereact/column'
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import UserExpandedTemplate from './UserExpandedTemplate'
import TableWrapper from '../../../../shared_components/datatable_wrapper/TableWrapper'
import UserToolBar from './UserToolBar'
const locked = [
  { label: 'Locked', value: 'Locked' },
  { label: 'Clear', value: '' }
]
export default class UserDatatableDisaply extends Component {
  static propTypes = {
    employees: PropTypes.array.isRequired,
    addNew: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      checkboxItems: [],
      contextItem: {}
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
      <MultiSelect
        optionLabel='name'
        dataKey='name'
        value={this.state.departments}
        options={this.props.departments}
        onChange={this.departmentFilter}
        style={{ maxWidth: '250px' }}
      />
    )
    const accessGroupDropDown = (
      <MultiSelect
        optionLabel='name'
        dataKey='id'
        value={this.state.accessGroups}
        options={this.props.account_levels}
        onChange={this.accessGroupFilter}
        style={{ maxWidth: '250px' }}
      />
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
      <TableWrapper
        dt={el => (this.dt = el)}
        contextSelectedItem={this.state.contextItem}
        contextSelectedItemChange={e => this.setState({ contextItem: e.value })}
        checkSelectionChange={e => this.setState({ checkboxItems: e.value })}
        checkSelectionState={this.state.checkboxItems}
        list={this.props.employees}
        menu={menu}
        addNew={e => console.log(e)}
        expandedTemplate={UserExpandedTemplate}
      >
        <Column selectionMode='multiple' style={{ width: '2em' }} />
        <Column
          field='locked'
          body={props => UserToolBar(props, this.props.updateAccounts)}
        />
        <Column
          field='lockedLabel'
          header='Locked Status'
          sortable
          filter
          filterElement={lockedDropDown}
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
    )
  }
}
