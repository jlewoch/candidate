import React from 'react'

const ApplicationsSubMenu = ({ applications }) => {
  return (
    <div>
      {applications.map(application => {
        return (
          <div>
            <h3>{application._}</h3>
            <p>date Submitted</p>
            <p>status</p>
          </div>
        )
      })}
    </div>
  )
}

export default ApplicationsSubMenu
