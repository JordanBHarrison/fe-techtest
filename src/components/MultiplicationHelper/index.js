import React, { useState } from 'react'
import NumberPanel from '../NumberPanel'

export default ({ panelsCount }) => {
  const [selectedValue, setSelectedValue] = useState(null)

  const renderNumberPanels = () => {
    const numberValuesArray = [...Array(panelsCount + 1).keys()].slice(1)
    return numberValuesArray.map(value =>
      <NumberPanel value={value} selectedValue={selectedValue} selectSelf={() => setSelectedValue(value)} />
    )
  }

  return (
    <div className='multiplication-helper'>
      {renderNumberPanels()}
    </div>
  )
}