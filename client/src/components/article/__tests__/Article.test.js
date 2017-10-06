import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Article from '../Article';
import { Provider } from 'react-redux';
import configureStore from '../../../state/configureStore';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('(Component) Article', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const wrapper = shallow(
        <Provider store={configureStore()}>
          <Article />
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
