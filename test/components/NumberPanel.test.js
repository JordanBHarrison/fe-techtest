import React from 'react'
import { shallow } from 'enzyme';
import NumberPanel from '../../src/components/NumberPanel'

describe('NumberPanel', () => {
  let ComponentWrapper
  let selectSelfMock = jest.fn()

  const testProps = {
    value: 5,
    selectedNumber: 12,
    selectSelf: selectSelfMock,
  }

  beforeEach(() => {
    const { value, selectedNumber, selectSelf } = testProps
    ComponentWrapper = shallow(<NumberPanel
      value={value}
      selectedNumber={selectedNumber}
      selectSelf={selectSelf}
    />)
  })

  it('renders value label correctly', () => {
    const expectedLabelText = testProps.value.toString()
    const numberPanelLabelText = ComponentWrapper.find('.number-panel__label').text()
    expect(numberPanelLabelText).toEqual(expectedLabelText)
    expect(selectSelfMock).not.toHaveBeenCalled()
  });

  it('highlights when value is a multiple of the selectedValue', () => {
    const { selectSelf } = testProps
    ComponentWrapper = shallow(<NumberPanel
      value={24}
      selectedNumber={12}
      selectSelf={selectSelf}
    />)
    const numberPanelElement = ComponentWrapper.find('.number-panel')


    expect(numberPanelElement.hasClass('number-panel--is-multiple')).toEqual(true)
    expect(numberPanelElement.hasClass('number-panel--is-selected')).toEqual(false)

  });

  it('highlights correctly when value of the NumberPanel is equal to the selectedValue', () => {
    const { selectSelf } = testProps
    ComponentWrapper = shallow(<NumberPanel
      value={10}
      selectedNumber={10}
      selectSelf={selectSelf}
    />)

    const numberPanelElement = ComponentWrapper.find('.number-panel')

    expect(numberPanelElement.hasClass('number-panel--is-selected')).toEqual(true)
    expect(numberPanelElement.hasClass('number-panel--is-multiple')).toEqual(false)
  });

  it('doesn\'t highlight panel if the selectedValue set but is neither equal to or a multiple of the NumberPanel\'s value', () => {
    const { selectSelf } = testProps
    ComponentWrapper = shallow(<NumberPanel
      value={9}
      selectedNumber={4}
      selectSelf={selectSelf}
    />)

    const numberPanelElement = ComponentWrapper.find('.number-panel')

    expect(numberPanelElement.hasClass('number-panel--is-selected')).toEqual(false)
    expect(numberPanelElement.hasClass('number-panel--is-multiple')).toEqual(false)
  });

  it('never highlights panel if the selectedValue is not set', () => {
    const { selectSelf } = testProps
    ComponentWrapper = shallow(<NumberPanel
      value={1}
      selectedNumber={undefined}
      selectSelf={selectSelf}
    />)

    const numberPanelElement = ComponentWrapper.find('.number-panel')

    expect(numberPanelElement.hasClass('number-panel--is-selected')).toEqual(false)
    expect(numberPanelElement.hasClass('number-panel--is-multiple')).toEqual(false)
  });


  it('calls selectSelf onClick', () => {
    const numberPanelElement = ComponentWrapper.find('.number-panel')

    numberPanelElement.simulate('click')

    expect(selectSelfMock).toHaveBeenCalled()
  });
});
