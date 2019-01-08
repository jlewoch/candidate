import React from 'react'

const PostingHeading = ({ selectedJob }) => {
  if (selectedJob) {
    return (
      <div className='posting-header'>
        <h1>{selectedJob.postingTitle}</h1>
        <div className='posting-heading-bottom'>
          <p className='subtitle'>Date Posted {selectedJob.open_date}</p>
          <p className='subtitle'>Closing Date{selectedJob.closing_date}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='posting-header'>
      <h1>All Job Postings</h1>
    </div>
  )
}

export default PostingHeading
