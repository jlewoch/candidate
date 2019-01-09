import React from 'react'

const SubMenuSelector = ({ options, clickHandler, selectedSub }) => {
  return (
    <div className='submenu-selector'>
      {options.map((option, index) => {
        return (
          <div
            key={index}
            onClick={() => clickHandler(option)}
            className={`submenu-selector-option ${selectedSub === option &&
              'selected'}`}
          >
            <h6 className='submenu-selector-option-title'>{option}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default SubMenuSelector
