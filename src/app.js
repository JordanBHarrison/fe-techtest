import React from 'react'
import { render } from 'react-dom'
import MultiplicationHelper from './components/MultiplicationHelper'

// source goes here
export default () => {
  const panelsCount = 144

  render(<MultiplicationHelper panelsCount={panelsCount} />, document.querySelector('#root'))
}
