import React from 'react'

const SideOption = ({
  closing_date,
  _,
  postingTitle,
  totalApps,
  clickHandler
}) => {
  return (
    <div className='side-card' onClick={() => clickHandler(_)}>
      <div className='side-card-top'>
        <h2>{postingTitle}</h2>
        <div className='total-cir'>{totalApps}</div>
      </div>
      <p className='subtitle'>Closing {closing_date}</p>
    </div>
  )
}

export default SideOption
