import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Home';
import { Provider } from 'react-redux';
import configureStore from '../../../state/configureStore';

Enzyme.configure({ adapter: new Adapter() });

describe('(Component) Home', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const props = {};
      const wrapper = shallow(
        <Provider store={configureStore()}>
          <Home {...props} />
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
