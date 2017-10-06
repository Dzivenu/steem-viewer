import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from '../Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('(Component) Modal', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const props = {};
      const wrapper = shallow(<Modal {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
