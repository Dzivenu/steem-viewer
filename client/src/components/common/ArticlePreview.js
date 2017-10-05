import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import EN from '../../constants/translations/en';
import Link from './Link';
import { COLORS } from '../../constants/styles';
import Article from '../article/Article';

const Container = styled.div`
  border: 1px solid ${COLORS.WHITE.WHITE_SMOKE};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  margin: 1em;
  width: 600px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const PreviewImage = styled.img`
  width: auto;
  max-height: 475px;
  max-width: 100%;
`;

const Header = styled.div`
  border-bottom: 1px solid ${COLORS.WHITE.WHITE_SMOKE};
  padding: 1em;
`;

const Content = styled.div`
`;

const Title = styled.a`
  cursor: pointer;
  display: block;
  color: ${COLORS.BLUE.EAST_BAY};
  font-weight: 400;
  font-size: 1.5em;
  padding: 1em .5em;
`;

const Footer = styled.div`
  border-top: 1px solid ${COLORS.WHITE.WHITE_SMOKE};
  display: flex;
`;

const FooterContent = styled.div`
  padding: 1em;
  border-right: 1px solid ${COLORS.WHITE.WHITE_SMOKE};
  
  &:last-of-type {
    border-right: 0;
  }
`;

const Icon = styled.i`
  color: ${COLORS.BLUE.LINK_WATER};
  margin-right: .25em;
`;

class ArticlePreview extends Component {
  static propTypes = {
    author: PropTypes.string,
    tags: PropTypes.array,
    images: PropTypes.array,
    category: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    payout: PropTypes.string,
    comments: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    permlink: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  constructor(props) {
    super(props);

    this.state = {
      displayArticle: false,
    };

    this.showArticle = this.showArticle.bind(this);
    this.hideArticle = this.hideArticle.bind(this);
  }

  showArticle() {
    this.setState({ displayArticle: true });
    document.body.style = 'overflow:hidden;';
  }

  hideArticle() {
    this.setState({ displayArticle: false });
    document.body.style = 'overflow:initial;';
  }

  render() {
    const {
      images,
      author,
      category,
      title,
      likes,
      payout,
      comments,
      permlink,
      body,
      tags,
      id,
    } = this.props;
    const { displayArticle } = this.state;
    const firstImage = _.head(images);

    return (
      <Container>
        <Header>
          <Link>{author}</Link>
          {` ${EN.in} `}
          <Link>{`#${category}`}</Link>
        </Header>
        <Content>
          <Title onClick={this.showArticle}>{title}</Title>
        </Content>
        <ImageContainer>
          <Link onClick={this.showArticle}>
            <PreviewImage src={firstImage} />
          </Link>
        </ImageContainer>
        <Footer>
          <FooterContent>
            <Icon className={'fa fa-thumbs-up'} />{`${likes} ${EN.likes}`}
          </FooterContent>
          <FooterContent><Icon className={'fa fa-usd'} />{payout}</FooterContent>
          <FooterContent><Icon className={'fa fa-comments'} />{comments}</FooterContent>
        </Footer>
        {displayArticle &&
          <Article
            hideArticle={this.hideArticle}
            author={author}
            category={category}
            permlink={permlink}
            title={title}
            body={body}
            tags={tags}
            id={id}
          />}
      </Container>
    );
  }
}

export default ArticlePreview;
