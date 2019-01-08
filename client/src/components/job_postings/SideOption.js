import React from 'react'

const SideOption = ({ posting, positions, applications, onClick }) => {
  console.log()
  if (!positions[posting.position]) {
    return <div className='p-datatable-loading-icon' />
  }
  return (
    <div className='side-card' onClick={() => onClick(posting)}>
      <h2>{positions[posting.position].title}</h2>
      <div className='total-cir'>{applications}</div>
    </div>
  )
}

export default SideOption
