import React from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
const TaskCard = () => {
  return (
    <div className='p-grid p-align-center p-justify-between card'>
      <div className='p-col-8'>
        <p style={{ overflow: 'hidden' }}>
          this is a very long task and is not really needed
        </p>
      </div>
      <div className='p-col-3'>
        <p>{new Date().toLocaleString('en-us')}</p>
      </div>
    </div>
  )
}

export default TaskCard
