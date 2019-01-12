import React from 'react'

const PostingsCard = ({
  closing_date,
  _,
  title,
  totalApps,
  clickHandler,
  selected
}) => {
  return (
    <div
      className={`side-card ${selected === _ && 'selected'}`}
      onClick={() => clickHandler(_)}
    >
      <div className='side-card-top'>
        <h2>{title}</h2>
        <div className='total-cir'>{totalApps}</div>
      </div>
      <p className='subtitle'>Closing {closing_date}</p>
    </div>
  )
}

export default PostingsCard
