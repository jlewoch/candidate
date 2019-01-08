import React from 'react'

const SubMenuSelector = ({ options, clickHandler, selectedSub }) => {
  return options.map((option, index) => {
    return (
      <div
        className={`submenu-selector ${selectedSub === option && 'selected'}`}
        key={index}
        onClick={() => clickHandler(option)}
      >
        <h6>{option}</h6>
      </div>
    )
  })
}

export default SubMenuSelector
