import React from 'react'
import PropTypes from 'prop-types'

const ApplicationCard = ({
  _,
  updated_at,
  date_submitted,
  statusTitle,
  clickHandler
}) => {
  return (
    <div className='jobcard' onClick={clickHandler}>
      <div className='jobcard-left'>
        <img src={require('./1.jpg')} alt='' className='jobcard-image ' />
        <div>
          <h4 className='title'>{`App#${_}`}</h4>
          <p className='subtitle'>{'Submitted ' + date_submitted}</p>
        </div>
      </div>
      <div className='jobcard-center'>
        <p className='subtitle'>{'Updated By Jake Lewochko'}</p>
        <p className='subtitle'>{updated_at}</p>
      </div>
      <p className='jobcard-right'>{statusTitle}</p>
    </div>
  )
}
ApplicationCard.propTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default ApplicationCard
