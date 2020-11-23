import React, { useState } from 'react'
import NumberPanel from '../NumberPanel'

export default ({ panelsCount = 0 }) => {
  const [selectedNumber, setSelectedNumber] = useState(null)

  const renderNumberPanels = () => {
    const numberValuesArray = [...Array(panelsCount + 1).keys()].slice(1)
    return numberValuesArray.map((value, index) =>
      <NumberPanel
        key={`${index}-${value}`}
        value={value}
        selectedNumber={selectedNumber}
        selectSelf={() => setSelectedNumber(value)} />)
  }

  return (
    <div className='multiplication-helper'>
      {renderNumberPanels()}
    </div>
  )
}