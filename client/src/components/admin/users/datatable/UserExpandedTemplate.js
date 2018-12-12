import React from 'react'
import PropTypes from 'prop-types'

const UserExpandedTemplate = props => {
  return (
    <div className='p-grid p-fluid' style={{ padding: '1em' }}>
      <div className='p-col-12 p-md-3' style={{ textAlign: 'center' }}>
        hi
      </div>
      <div className='p-col-12 p-md-9'>
        <div className='p-grid'>
          <div className='p-md-2'>Vin: </div>
          <div className='p-md-10' style={{ fontWeight: 'bold' }}>
            hello
          </div>

          <div className='p-md-2'>Year: </div>
          <div className='p-md-10' style={{ fontWeight: 'bold' }}>
            5454
          </div>

          <div className='p-md-2'>Brand: </div>
          <div className='p-md-10' style={{ fontWeight: 'bold' }}>
            4 4
          </div>

          <div className='p-md-2'>Color: </div>
          <div className='p-md-10' style={{ fontWeight: 'bold' }}>
            44
          </div>
        </div>
      </div>
    </div>
  )
}

UserExpandedTemplate.propTypes = {}
export default UserExpandedTemplate
