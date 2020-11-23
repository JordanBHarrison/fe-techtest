import React from 'react'
import './number-panel.css'

export default ({ value, selectedNumber, selectSelf }) => {
  return (
    <div className='number-panel'>
      <span>{value}</span>
    </div>
  )
}