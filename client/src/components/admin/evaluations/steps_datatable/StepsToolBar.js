import React from 'react'
import PropTypes from 'prop-types'
import { InputSwitch } from 'primereact/inputswitch'
import { Button } from 'primereact/button'

const StepsToolBar = ({ enabled = true, _a, _ }, update) => {
  return (
    <div className='toolbar'>
      <InputSwitch
        onChange={() =>
          enabled
            ? update({ _a, update: { enabled: false, enabledLabel: '' }, _ })
            : update({
              _a,
              update: { enabled: true, enabledLabel: 'Locked' },
              _
            })
        }
        checked={enabled}
        tooltip={!enabled ? 'Enable Step' : 'Disable Step'}
        tooltipOptions={{ position: 'top' }}
        style={{ marginRight: '.25em' }}
      />
    </div>
  )
}

StepsToolBar.propTypes = {
  enabled: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired
}

export default StepsToolBar
