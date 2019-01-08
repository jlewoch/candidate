import React from 'react'

const JobApplicationCard = ({
  application,
  select,
  job_posting,
  positions
}) => {
  const timeSpan = () => {
    const date = Date.now()
    const timelaps = date - Date.parse(application.updated_at)
    const years = Math.floor(timelaps / 31556952000)
    const months = Math.floor(timelaps / 2629746000)
    const days = Math.floor(timelaps / 86400000)
    const hours = Math.floor(timelaps / 3600000)
    const minutes = Math.floor(timelaps / 60000)
    const seconds = Math.floor(timelaps / 1000)
    const arr = [years, months, days, hours, minutes, seconds]
    let intervalname = ['year', 'month', 'day', 'hour', 'minute', 'second']
    let value = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 1) {
        value = arr[i]
        if (value > 1) {
          intervalname = intervalname[i] + 's'
        } else {
          intervalname = intervalname[i]
        }
        break
      }
    }
    if (value === 0) {
      return 'Just Now'
    } else {
      return value + ' ' + intervalname + ' ago'
    }
  }
  return (
    <div className='jobcard' onClick={select}>
      <div className='jobcard-left'>
        <img src={require('./1.jpg')} alt='' className='jobcard-image ' />
        <div>
          <h4 className='title'>
            {`${positions[job_posting.position].title} App#${application._}`}
          </h4>
          <p className='subtitle'>
            {'Submitted ' + application.date_submitted}
          </p>
        </div>
      </div>
      <div className='jobcard-center'>
        <p className='subtitle'>{'Updated By Jake Lewochko'}</p>
        <p className='subtitle'>{timeSpan()}</p>
      </div>
      <p className='jobcard-right'>{application.statusTitle}</p>
    </div>
  )
}

export default JobApplicationCard
