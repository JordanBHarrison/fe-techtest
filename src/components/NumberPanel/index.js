import React from 'react'

export default ({ value, selectedNumber, selectSelf }) => {
  return (
    <button className='number-panel'>
      <div className='number-panel__label'>{value}</div>
    </button>
  )
}