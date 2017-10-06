import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

Enzyme.configure({adapter: new Adapter()});

describe('(Component) Header', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const props = {};
      const wrapper = shallow(<Header {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
