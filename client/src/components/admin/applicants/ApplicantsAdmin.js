import React, { Component } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import EmployeeExpanded from './EmployeeExpanded'

export default class Applicants extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expandedRow: []
    }
  }

  expand = e => {
    let row = this.state.expandedRow[0] === e.data ? [] : [e.data]
    this.setState({ expandedRow: row })
  }

  render () {
    const { employees, selectedEmployee, addNew, selectionChange } = this.props
    let header = <div className='p-clearfix' style={{ lineHeight: '1.87em' }} />

    let footer = (
      <div className='p-clearfix' style={{ width: '100%' }}>
        <Button
          style={{ float: 'left' }}
          label='Add'
          icon='pi pi-plus'
          onClick={addNew}
        />
      </div>
    )
    return (
      <DataTable
        value={employees}
        expandedRows={this.state.expandedRow}
        rowExpansionTemplate={EmployeeExpanded}
        paginator
        onRowClick={this.expand}
        rows={15}
        header={header}
        footer={footer}
        onRowSelect={this.onSelect}
        autoLayout
      >
        <Column field='lockedLabel' header='Locked Status' sortable />
        <Column field='empfull_name' header='Name' sortable />
        <Column field='email' header='Email' sortable />
        <Column field='deptName' header='Department' sortable />
        <Column field='manfull_name' header='Manager' sortable />
        <Column field='level_name' header='Access Group' sortable />
      </DataTable>
    )
  }
}
