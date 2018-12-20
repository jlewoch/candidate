import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from 'primereact/toolbar'
import { Button } from 'primereact/button'

const UserToolBar = ({ locked = true, _a, _ }, update) => {
  return (
    <div className='toolbar'>
      <Button
        onClick={() =>
          locked
            ? update({ _a, update: { locked: false }, _ })
            : update({ _a, update: { locked: true }, _ })
        }
        tooltip={!locked ? 'Unlock Account' : 'Lock Account'}
        tooltipOptions={{ position: 'top' }}
        icon={`pi ${locked ? 'pi-lock-open' : 'pi-lock'}`}
        className={locked && 'p-button-danger'}
        style={{ marginRight: '.25em' }}
      />
    </div>
  )
}

UserToolBar.propTypes = {
  locked: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired
}

export default UserToolBar
