import React from 'react'

const JobApplicationCard = ({
  applicantFull,
  title,
  upFull,
  updated_at,
  select,
  statusTitle
}) => {
  console.log(updated_at)

  const timeSpan = () => {
    const date = Date.now()
    const timelaps = date - Date.parse(updated_at)
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
    <div className='jobcard' onClick={() => select()}>
      <div className='jobcard-left'>
        <img src={require('./1.jpg')} alt='' className='jobcard-image ' />
        <div>
          <h4 className='title'>{applicantFull}</h4>
          <p className='p-card-subtitle'>{title}</p>
        </div>
      </div>
      <div className='jobcard-center'>
        <p className='p-card-subtitle'>{upFull}</p>
        <p className='p-card-subtitle'>{timeSpan()}</p>
      </div>
      <div className='jobcard-right'>{statusTitle}</div>
    </div>
  )
}

export default JobApplicationCard
