import React from 'react'
import ApplicationCard from '../../applications_section/applications_list/ApplicationCard'

const ApplicationsSubMenu = ({ applications, applicant, clickHandler }) => {
  return (
    <div style={{ padding: '.5em', overflowY: 'auto' }}>
      {applicant.applications.map(application => {
        return (
          <ApplicationCard
            key={application._}
            {...applications[application]}
            applicant={applicant}
            clickHandler={clickHandler}
          />
        )
      })}
    </div>
  )
}

export default ApplicationsSubMenu
