import React from 'react'

const ApplicantsExpanded = data => {
  return (
    <div className='applicant-card-details'>
      <div className='applicants-section'>
        <div className='action'>
          <p className='action-title'>View Documents</p>
        </div>
        <div className='action'>
          <p className='action-title'>Send Message</p>
        </div>
        <div className='action'>
          <p className='action-title'>Send Email</p>
        </div>
        <div className='action'>
          <p className='action-title'>Linked In</p>
        </div>
        <div className='action'>
          <p className='action-title'>View Profile</p>
        </div>
      </div>
      <div className='applicants-section applicant-progress'>
        <p className='progress-step'>Assesment</p>
        <p className='progress-step'>Phone Interview</p>
        <p className='progress-step'>Analysys</p>
        <p className='progress-step'>Interview #1</p>
        <p className='progress-step'>Interview #2</p>
      </div>
      <div className='applicants-section applicant-grade'>
        <p className='grade'>87%</p>
        <p className='grade'>87%</p>
        <p className='grade'>87%</p>
        <p className='grade'>87%</p>
        <p className='grade'>87%</p>
      </div>
      <div className='applicant-notes'>
        <div className='applicant-notes-section'>
          <label htmlFor='notes'>Notes</label>
          <textarea name='notes' id='notes' cols='30' rows='10' />
        </div>
        <div className='applicant-notes-section'>
          <label htmlFor='action'>Action</label>
          <textarea name='action' id='action' cols='30' rows='10' />
        </div>
      </div>
    </div>
  )
}

export default ApplicantsExpanded
