import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from '../Link';

Enzyme.configure({ adapter: new Adapter() });

describe('(Component) Link', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const props = {};
      const wrapper = shallow(<Link {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
