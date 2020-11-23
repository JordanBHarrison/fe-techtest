import React from 'react'

export default ({ value, selectedNumber, selectSelf }) => {
  return (
    <div className='number-panel'>
      <div className='number-panel__label'>{value}</div>
    </div>
  )
}