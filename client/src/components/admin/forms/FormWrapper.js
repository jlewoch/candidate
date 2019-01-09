import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'

export default class FormWrapper extends Component {
  state = { visible: false }
  submit = e => {
    e.preventDefault()

    if (this.props.canSubmit()) {
      this.props.submit()
      this.setState({ visible: false })
    }
  }

  render () {

    return (
      <div>
        <Dialog
          header={`New ${this.props.title}`}
          visible={this.state.visible}
          closable={false}
          modal
          onHide={e => this.setState({ visible: false })}
        >
          <form onSubmit={this.submit} className='form'>
            {this.props.children}
            <div>
              <div className='form-bottom'>
                <div className='form-control'>
                  <Button
                    label='Cancel'
                    onClick={() => this.setState({ visible: false })}
                    className='p-button-danger'
                  />
                </div>
                <div className='form-control'>
                  <Button type='submit' label='Submit' />
                </div>
              </div>
            </div>
          </form>
        </Dialog>
        <Button
          label='Add'
          icon='pi pi-plus'
          iconPos='right'
          onClick={e => this.setState({ visible: true })}
        />
      </div>
    )
  }
}
