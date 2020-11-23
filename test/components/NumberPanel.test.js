import { shallow } from 'enzyme';
import NumberPanel from '../../src/components/NumberPanel'

describe('NumberPanel', () => {
  let ComponentWrapper

  beforeEach(() => {
    ComponentWrapper = shallow(<NumberPanel />)
  })

  it('renders value correctly', () => {

  });

  it('highlights when value is a multiple of the selectedValue', () => {

  });

  it('highlights correctly when value of the NumberPanel is equal to the selectedValue', () => {

  });

  it('doesn\'t highlight panel if the selectedValue set but is neither equal to or a multiple of the NumberPanel\'s value', () => {

  });

  it('never highlights panel if the selectedValue is not set', () => {

  });
});
