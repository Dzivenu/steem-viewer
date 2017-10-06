import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticlePreview from '../ArticlePreview';

Enzyme.configure({ adapter: new Adapter() });

describe('(Component) ArticlePreview', () => {
  describe('with default prop values', () => {
    it('renders and matches snapshot', () => {
      const props = {
        author: 'test',
        tags: [],
        images: [],
        category: 'test category',
        title: 'test title',
        body: 'test body',
        likes: 0,
        payout: '0',
        comments: 0,
        permlink: 'test',
        id: 0,
      };
      const wrapper = shallow(<ArticlePreview {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
