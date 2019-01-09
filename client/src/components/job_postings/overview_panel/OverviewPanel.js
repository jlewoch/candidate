import React from 'react'
import { SubMenu } from './sub_menu'

const OverviewPanel = ({ name, phone, email }) => {
  return (
    <div className='overview-card'>
      <div className='overview-card-top'>
        <div className='overview-card-top-left'>
          <img
            src={require('./1.jpg')}
            alt=''
            className='overview-card-photo'
          />
        </div>
        <div className='overview-card-top-right'>
          <h3 className='title'>{`${name}`}</h3>
          <p className='title'>{`Phone: ${phone}`}</p>
          <p className='title'>{`Email: ${email}`}</p>
          <p className='title'>{`LinkedIn: ${email}`}</p>
          <p className='title'>{`Github: ${email}`}</p>
        </div>
      </div>
      <SubMenu />
    </div>
  )
}

export default OverviewPanel
