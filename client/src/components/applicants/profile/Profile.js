import React from 'react'
import { Button } from 'primereact/button'
import { resolve } from 'url'
const Profile = ({ name, image, social, contact }) => {
  return (
    <div>
      <div className='profile-top'>
        <img
          src={require('./1.jpg')}
          alt='Profile Picture'
          style={{ borderRadius: '50%', height: '200px' }}
        />
        <h1 className=' title'>Jake Lewochko</h1>
        <p className='p-card-subtitle '>when . applied from</p>
        <div className=''>Rank</div>
      </div>
      <div className='p-grid p-fluid'>
        <div className='p-col-12 p-md-6'>
          <div className='p-grid p-fluid p-justify-center'>
            <div className='p-col-12 p-lg-2 section-item'>
              <h5 className='title'>Github</h5>
            </div>
            <div className='p-col-12 p-lg-2 p-md-3 section-item'>
              <h5 className='title'>Linkedin</h5>
            </div>
            <div className='p-col-12 p-lg-2 p-md-3 section-item'>
              <h5 className='title'>Portfolio</h5>
            </div>
            <div className='p-col-12 p-lg-2 p-md-3 section-item'>
              <h5 className='title'>Resume</h5>
            </div>
          </div>
          <div className='p-grid p-fluid '>
            <div className='p-col-12 p-fluid p-grid  p-justify-center '>
              <h5 className='title p-col-12 p-md-6'>Name</h5>
              <p className='title'>Jake Lewochmd</p>
            </div>
            <div className='p-col-12 p-fluid p-grid  p-justify-center'>
              <h5 className='title p-col-12 p-md-6'>Name</h5>
              <p className='title'>Jake Lewochko</p>
            </div>
            <div className='p-col-12 p-fluid p-grid  p-justify-center'>
              <h5 className='title p-col-12 p-md-6'>Email</h5>
              <p className='title'>Jake Lewochko</p>
            </div>
            <div className='p-col-12 p-fluid p-grid  p-justify-center'>
              <h5 className='title p-col-12 p-md-6'>Phone</h5>
              <p className='title'>Jake Lewochko</p>
            </div>
            <div className='p-col-12 p-fluid p-grid  p-justify-center'>
              <h5 className='title p-col-12 p-md-6'>Open Applications</h5>
              <p className='title'>Jake Lewochko</p>
            </div>
          </div>
          <div>applicationdetails</div>
        </div>
        <div className='profile-middle-right' />
      </div>
      <div className='profile-controls'>
        <div className='section-item'>applicationStatus</div>
        <Button className='section-item' label='change stat' />
      </div>
      <div className='profile-controls'>
        <div className='section-item'>assigned to</div>
        <Button className='section-item' label='action BTN' />
      </div>
      <div className='profile-controls'>
        <Button
          className='section-item'
          label='Send an Email'
          icon=' pi pi-fw pi-envelope'
        />
        <Button
          className='section-item'
          label='Schedule an Event'
          icon='pi pi-fw pi-calendar'
        />
      </div>
    </div>
  )
}

export default Profile
