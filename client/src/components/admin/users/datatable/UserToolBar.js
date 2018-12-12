import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from 'primereact/toolbar'
import { Button } from 'primereact/button'

const UserToolBar = ({ locked = true, _a }, update) => {
  return (
    <div className='toolbar'>
      <Button
        onClick={() =>
          locked
            ? update({ id: _a, update: { locked: false } })
            : update({ id: _a, update: { locked: true } })
        }
        tooltip={locked ? 'Unlock Account' : 'Lock Account'}
        tooltipOptions={{ position: 'top' }}
        icon={`pi ${locked ? 'pi-unlock' : 'pi-lock'}`}
        className={locked && 'p-button-danger'}
        style={{ marginRight: '.25em' }}
      />
      <Button icon='pi pi-pencil' />
    </div>
  )
}

UserToolBar.propTypes = {
  locked: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired,
  unlock: PropTypes.func.isRequired,
  lock: PropTypes.func.isRequired
}

export default UserToolBar
