import React from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
const ConfirmMessage = ({ show, toggle, saveAction }) => {
  const footer = (
    <div>
      <Button
        label='Yes'
        className='p-button-raised p-button-success'
        onClick={() => {
          saveAction(true)
          toggle()
        }}
      />
      <Button
        label='No'
        className='p-button-danger'
        onClick={() => {
          saveAction(false)
          toggle()
        }}
      />
    </div>
  )
  return (
    <Dialog
      header='Please Confirm'
      footer={footer}
      visible={show}
      width='350px'
      modal
      onHide={toggle}
    >
      <p>{`Would you like to save your changes?`}</p>
    </Dialog>
  )
}

export default ConfirmMessage
