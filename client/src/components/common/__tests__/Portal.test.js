import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Portal from '../Portal';

Enzyme.configure({ adapter: new Adapter() });

describe('(Component) Portal', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const props = {};
      const wrapper = shallow(<Portal {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
