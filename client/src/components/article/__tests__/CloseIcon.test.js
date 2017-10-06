import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CloseIcon from '../CloseIcon';

Enzyme.configure({ adapter: new Adapter() });

describe('(Component) CloseIcon', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const props = {};
      const wrapper = shallow(<CloseIcon {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
