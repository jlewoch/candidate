import React from 'react'
import PropTypes from 'prop-types'
import ApplicationCard from './ApplicationCard'

const ApplicationsList = ({ applications, clickHandler }) => {
  return (
    <div className='postings-body-left-bottom'>
      {applications.map(info => {
        return (
          <ApplicationCard
            {...info}
            key={info._}
            clickHandler={() =>
              clickHandler({ applicant: info.applicant, _: info._ })
            }
          />
        )
      })}
    </div>
  )
}

ApplicationsList.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  applications: PropTypes.array.isRequired
}

export default ApplicationsList
