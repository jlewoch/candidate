import React from 'react'
import { timeSpan } from '../../../shared_components/misc_functions'

const JobApplicationCard = ({
  _,
  updated_at,
  date_submitted,
  jobTitle,
  statusTitle,
  applicant,
  select
}) => {
  return (
    <div className='jobcard' onClick={() => select({ applicant, _ })}>
      <div className='jobcard-left'>
        <img src={require('./1.jpg')} alt='' className='jobcard-image ' />
        <div>
          <h4 className='title'>{`${jobTitle} App#${_}`}</h4>
          <p className='subtitle'>{'Submitted ' + date_submitted}</p>
        </div>
      </div>
      <div className='jobcard-center'>
        <p className='subtitle'>{'Updated By Jake Lewochko'}</p>
        <p className='subtitle'>{timeSpan(updated_at)}</p>
      </div>
      <p className='jobcard-right'>{statusTitle}</p>
    </div>
  )
}

export default JobApplicationCard
