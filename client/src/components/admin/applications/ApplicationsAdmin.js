import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'

const Employees = ({
  employees,
  selectedEmployee,
  addNew,
  selectionChange
}) => {
  let header = (
    <div className='p-clearfix' style={{ lineHeight: '1.87em' }}>
      Applications
    </div>
  )

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
      paginator
      rows={15}
      header={header}
      footer={footer}
      selectionMode='single'
      selection={selectedEmployee}
      onSelectionChange={e => selectionChange(e)}
      onRowSelect={'this.onSelect'}
      autoLayout
    >
      <Column field='lockedLabel' header='Applicant' sortable />
      <Column field='empfull_name' header='Job Posting' sortable />
      <Column field='manfull_name' header='Status' sortable />
      <Column field='email' header='Date Submitted' sortable />
      <Column field='deptName' header='Last Updated' sortable />
      <Column field='level_name' header='Updated By' sortable />
    </DataTable>
  )
}

export default Employees
