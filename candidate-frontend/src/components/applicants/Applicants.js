import React from 'react'
import ApplicantCard from './applicant_card/ApplicantCard'
const Applicants = ({ applicants }) => {
  return (
    <div className='applicants'>
      <div className='applicants-top'>
        <h4 className='section-heading'>My Applicants</h4>
        <p>Updated 1 minute ago</p>
      </div>
      <div className='applicants-middle'>
        <div className='search'>
          <input type='text' className='input-style' />
        </div>
        <div className='filters'>
          <label htmlFor='typeFilter'>Show</label>
          <select name='typeFilter' id='typeFilter'>
            <option value='top3'>Top 3</option>
          </select>
          <label htmlFor='positionFilter'>candidates for</label>
          <select name='positionFilter' id='positionFilter'>
            <option value='UX Design'>UX Design</option>
          </select>
        </div>
      </div>
      <div className='applicants-bottom'>
        <div className='list-headers'>
          <p className='applicants-section'>Name\ID</p>
          <p className='applicants-section'>Position</p>
          <p className='applicants-section'>Rank</p>
          <p className='applicants-section'>Status</p>
          <p className='applicants-section'>Action Required</p>
        </div>
        <div className='applicants-list'>
          {Object.values(applicants).map(applicant => {
            return (
              <ApplicantCard
                name={applicant.name}
                position={applicant.position}
                rank={applicant.rank}
                status={applicant.status}
                actionRequired={applicant.actionRequired}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Applicants
