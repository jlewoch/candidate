import React from 'react'
import PropTypes from 'prop-types'

const TabSelector = ({ list, selected, clickHandler }) => {
  return (
    <div className='submenu-selector'>
      {list.map((option, index) => {
        return (
          <div
            key={index}
            onClick={() => clickHandler(option)}
            className={`submenu-selector-option ${selected === option &&
              'selected'}`}
          >
            <h6 className='submenu-selector-option-title'>{option}</h6>
          </div>
        )
      })}
    </div>
  )
}

TabSelector.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  selected: PropTypes.any.isRequired
}

export default TabSelector
