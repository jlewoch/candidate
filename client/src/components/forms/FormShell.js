import React from 'react'
import { Button } from 'primereact/button'
const FormShell = ({ cancel, item, submit, children, title }) => {
  return (
    <form onSubmit={submit}>
      <div>
        <h4>{item ? { title } : `Create a New ${title}`}</h4>
      </div>
      <div className='form-center'>{children}</div>

      <div className='form-footer'>
        <div className='form-controls'>
          <Button
            label='Save'
            type='submit'
            icon='pi pi-check'
            iconPos='right'
          />
        </div>
        <div className='form-controls'>
          <Button
            label='Cancel'
            onClick={cancel}
            className='p-button-warning'
          />
        </div>
      </div>
    </form>
  )
}

export default FormShell
