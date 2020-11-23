import React from 'react'
import { shallow } from 'enzyme';
import MultiplicationHelper from '../../src/components/MultiplicationHelper'
import NumberPanel from '../../src/components/NumberPanel'

describe('MultiplicationHelper', () => {
  let ComponentWrapper
  const testProps = {
    panelsCount: 144,
  }

  beforeEach(() => {
    ComponentWrapper = shallow(<MultiplicationHelper panelsCount={testProps.panelsCount} />)
  })

  it('renders correctly', () => {
    expect(ComponentWrapper.find('.multiplication-helper').length).toEqual(1)
  });

  it('renders correct number of NumberPanels', () => {
    const numberPanelsRendered = ComponentWrapper.find(NumberPanel).length
    expect(numberPanelsRendered).toEqual(testProps.panelsCount)
  });

  it('renders no NumberPanels if panelCount is not set', () => {
    ComponentWrapper = shallow(<MultiplicationHelper panelsCount={undefined} />)
    const numberPanelsRendered = ComponentWrapper.find(NumberPanel).length
    expect(numberPanelsRendered).toEqual(0)
  });

  it('renders no NumberPanels if panelCount set to 0', () => {
    ComponentWrapper = shallow(<MultiplicationHelper panelsCount={0} />)
    const numberPanelsRendered = ComponentWrapper.find(NumberPanel).length
    expect(numberPanelsRendered).toEqual(0)
  });
});
