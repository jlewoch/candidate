import React from 'react'
import PropTypes from 'prop-types'
import PostingsCard from './PostingsCard'

const SidePanel = ({ job_postings, clickHandler, selected }) => {
  return (
    <div className='postings-left'>
      {job_postings.map(posting => {
        return (
          <PostingsCard
            key={posting._}
            {...posting}
            selected={selected}
            clickHandler={clickHandler}
          />
        )
      })}
    </div>
  )
}

SidePanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  job_postings: PropTypes.array.isRequired
}

export default SidePanel
