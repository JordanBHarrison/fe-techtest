import React from 'react'
import classNames from 'classnames'

export default ({ value, selectedNumber, selectSelf }) => {

  const isSelected = selectedNumber === value
  const isMultiple = value % selectedNumber === 0
  const numberPanelClass = classNames('number-panel', {
    'number-panel--is-selected': isSelected,
    'number-panel--is-multiple': isMultiple && !isSelected,
  })
  return (
    <button alt={`select ${value}`} className={numberPanelClass} onClick={selectSelf}>
      <div className='number-panel__label'>{value}</div>
    </button>
  )
}