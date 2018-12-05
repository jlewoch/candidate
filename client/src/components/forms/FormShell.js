import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'

export default class FormShell extends Component {
  state = { visible: false }

  render () {
    const { cancel, item, title } = this.props
    return (
      <div>
        <Dialog
          header={item ? `Edit ${title}` : `New ${title}`}
          visible={this.state.visible}
          width='300px'
          closable={false}
          modal
          onHide={e => this.setState({ visible: false })}
        >
          <div>
            <div className='form-center'>{this.props.children}</div>

            <div className='form-footer'>
              <div className='form-controls'>
                <Button onClick={this.props.submit} label='Save' />
              </div>
              <div className='form-controls'>
                <Button
                  label='Cancel'
                  onClick={() => {
                    cancel()
                    this.setState({ visible: false })
                  }}
                  className='p-button-danger'
                />
              </div>
            </div>
          </div>
        </Dialog>
        <Button
          label={item ? `Edit` : `Add`}
          icon={`pi ${item ? 'pi-pencil' : 'pi-plus'}`}
          iconPos='right'
          onClick={e => this.setState({ visible: true })}
        />
      </div>
    )
  }
}
