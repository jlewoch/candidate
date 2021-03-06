import React from 'react'

const Header = ({ title, open_date, closing_date }) => {
  return (
    <div className='posting-header'>
      <h1>{title}</h1>
      <div className='posting-heading-bottom'>
        <p className='subtitle'>Date Posted {open_date}</p>
        <p className='subtitle'>Closing Date{closing_date}</p>
      </div>
    </div>
  )
}

export default Header
