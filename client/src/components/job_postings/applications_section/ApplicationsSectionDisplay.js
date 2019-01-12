import React from 'react'
import { MultiSelect } from 'primereact/multiselect'
import Header from './Header'
import ApplicationsList from './applications_list/ApplicationsList'
const ApplicationsSectionDisplay = ({
  filterValues,
  selectedPosting,
  selectApp,
  changeFilter,
  steps,
  applications
}) => {
  return (
    <div className='postings-body-left'>
      <Header {...selectedPosting} />

      <div className='postings-body-left-top'>
        <MultiSelect
          optionLabel='name'
          multiple
          dataKey='level'
          value={filterValues}
          options={steps}
          onChange={e => changeFilter(e.value)}
          defaultLabel='Filter by Stage'
        />
      </div>
      <ApplicationsList clickHandler={selectApp} applications={applications} />
    </div>
  )
}

export default ApplicationsSectionDisplay
