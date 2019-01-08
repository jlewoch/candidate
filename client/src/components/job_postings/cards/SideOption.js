import React from 'react'

const SideOption = ({ posting, postingTitle, applications, clickHandler }) => {
  return (
    <div
      className='side-card'
      onClick={() => clickHandler({ ...posting, postingTitle })}
    >
      <div className='side-card-top'>
        <h2>{postingTitle}</h2>
        <div className='total-cir'>{applications}</div>
      </div>
      <p className='subtitle'>Closing {posting.closing_date}</p>
    </div>
  )
}

export default SideOption
