import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Tags from '../Tags';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('(Component) Tags', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const props = {};
      const wrapper = shallow(<Tags {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
