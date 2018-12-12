import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserFormDialog extends Component {
  static propTypes = {
    selectedEmployee: PropTypes.object.isRequired
  }

  render () {
    let dialogFooter = (
      <div className='ui-dialog-buttonpane p-clearfix'>
        <Button
          className='p-button-danger'
          label={adding ? 'Cancel' : 'Delete'}
          icon={!adding && 'pi pi-times'}
          onClick={adding ? this.delete : this.cancel}
        />
        <Button
          label={adding ? 'Add' : 'Save'}
          icon={!adding ? 'pi pi-check' : 'pi pi-plus'}
          iconPos='right'
          onClick={adding ? this.add : this.save}
        />
      </div>
    )
    return (
      <Dialog
        minWidth={400}
        visible={displayDialog}
        header='Employee Details'
        modal
        footer={dialogFooter}
        onHide={() => this.setState({ displayDialog: false })}
      >
        {selectedEmployee && (
          <div style={{ width: '100%' }} className='p-grid p-fluid'>
            <div className='p-col-9' style={{ padding: '.75em' }}>
              <ToggleButton
                id='locked'
                onLabel='Locked'
                offLabel='Unlocked'
                onIcon='pi pi-lock'
                tooltip={
                  selectedEmployee.locked
                    ? 'Click to unlock account'
                    : 'Click to lock account'
                }
                tooltipOptions={{ position: 'bottom' }}
                offIcon='pi pi-unlock'
                checked={selectedEmployee.locked}
                onChange={e => this.update(e)}
              />
            </div>

            <div className='p-col-9' style={{ padding: '.75em' }}>
              <span className='p-float-label'>
                <InputText
                  placeholder='First Name'
                  required
                  value={selectedEmployee.firstName}
                  onChange={e =>
                    this.setState({
                      selectedEmployee: {
                        ...selectedEmployee,
                        firstName: e.value
                      }
                    })
                  }
                />
                <label htmlFor='in'>First Name</label>
              </span>
            </div>

            <div className='p-col-9' style={{ padding: '.75em' }}>
              <span className='p-float-label'>
                <InputText
                  placeholder='Last Name'
                  required
                  value={selectedEmployee.lastName}
                  onChange={e =>
                    this.setState({
                      selectedEmployee: {
                        ...selectedEmployee,
                        lastName: e.value
                      }
                    })
                  }
                />
                <label htmlFor='in'>Last Name</label>
              </span>
            </div>

            <div className='p-col-9' style={{ padding: '.75em' }}>
              <span className='p-float-label'>
                <InputText
                  placeholder='Email'
                  required
                  value={selectedEmployee.email}
                  onChange={e =>
                    this.setState({
                      selectedEmployee: {
                        ...selectedEmployee,
                        email: e.value
                      }
                    })
                  }
                />
                <label htmlFor='in'>Email</label>
              </span>
            </div>

            <div className='p-col-9' style={{ padding: '.75em' }}>
              <span className='p-float-label'>
                <InputMask
                  id='phone'
                  required
                  mask='(999) 999-9999'
                  value={selectedEmployee.phone}
                  onChange={e =>
                    this.setState({
                      selectedEmployee: {
                        ...selectedEmployee,
                        phone: e.value
                      }
                    })
                  }
                  autoClear={false}
                />
                <label htmlFor='phone'>Phone Number</label>
              </span>
            </div>

            <div className='p-col-9' style={{ padding: '.75em' }}>
              <span className='p-float-label'>
                <AutoComplete
                  field='name'
                  required
                  dropdown
                  value={selectedEmployee.deptName}
                  onChange={e =>
                    this.setState({
                      selectedEmployee: {
                        ...selectedEmployee,
                        deptName: e.value
                      }
                    })
                  }
                  suggestions={this.state.deptSuggestions}
                  completeMethod={this.suggestions}
                />
                <label htmlFor='in'>Department</label>
              </span>
            </div>

            <div className='p-col-9' style={{ padding: '.75em' }}>
              <Dropdown
                required
                optionLabel='name'
                dataKey='level'
                value={selectedEmployee.level}
                options={account_levels}
                onChange={e =>
                  this.setState({
                    selectedEmployee: {
                      ...selectedEmployee,
                      level: e.value
                    }
                  })
                }
                placeholder='Select Access Level'
                style={{ width: '100%' }}
              />
            </div>
          </div>
        )}
      </Dialog>
    )
  }
}

export default UserFormDialog
