import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from '../common/Link';
import EN from '../../constants/translations/en';
import Modal from '../common/Modal';
import ReactHtmlParser from 'react-html-parser';
import showdown from 'showdown';
import { fetchArticle } from '../../state/actions/articleActions';
import CloseIcon from './CloseIcon';
import Tags from './Tags';

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  max-width: 100%;
  overflow: hidden;
  padding: 1em;
  
  img {
    display: block;
    max-width: 500px;
    height: auto;
    margin: .5em 0;
  }
`;

const Footer = styled.div`
  padding: 1em 0;
`;

const Title = styled.div`
  font-size: 1.5em;
  padding: 1em;
`;

const Author = styled.div`
  padding: 1em;
`;

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  fetchArticle: (author, permlink) => dispatch(fetchArticle(author, permlink)),
});

class Article extends Component {
  componentDidMount() {
    const { author, permlink, id, articles } = this.props;

    if (!articles[id]) {
      this.props.fetchArticle(author, permlink);
    }
  }

  render() {
    const { author, title, category, hideArticle, body, tags } = this.props;
    const converter = new showdown.Converter();

    return (
      <Modal hideModal={hideArticle}>
        <Header>
          <CloseIcon className={'fa fa-times'} onClick={hideArticle} />
          <Title>{title}</Title>
          <Author>
            <Link>{author}</Link>
            {` ${EN.in} `}
            <Link>{`#${category}`}</Link>
          </Author>
        </Header>
        <Body>
          {ReactHtmlParser(converter.makeHtml(body))}
        </Body>
        <Footer>
          <Tags tags={tags} />
        </Footer>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
