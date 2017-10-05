import React, { Component } from 'react';
import { fetchTrending } from '../../state/actions/homeActions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ArticlePreview from '../common/ArticlePreview';
import Header from '../common/Header';

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.i`
  font-size: 4em;
  margin-top: 1em;
`;

const mapStateToProps = state => ({
  articles: state.home.articles,
  loading: state.home.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending()),
});

const formatPayoutValue = payoutValue => {
  const payoutSplit = payoutValue.split('SBD');
  return parseFloat(payoutSplit[0], 1).toFixed(2);
};

class Home extends Component {
  componentDidMount() {
    this.props.fetchTrending();
  }

  renderArticles() {
    const { articles } = this.props;

    return articles.map((article, index) => {
      let {
        author,
        json_metadata,
        category,
        title,
        body,
        net_votes,
        pending_payout_value,
        children,
        permlink,
        id,
      } = article;
      let parsedJsonMetadata = JSON.parse(json_metadata);
      let { tags, image } = parsedJsonMetadata;
      let formattedPayout = formatPayoutValue(pending_payout_value);

      return (
        <ArticlePreview
          key={index}
          author={author}
          tags={tags}
          images={image}
          category={category}
          title={title}
          body={body}
          likes={net_votes}
          payout={formattedPayout}
          comments={children}
          permlink={permlink}
          id={id}
        />
      );
    });
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <Header />
        <ArticleContainer>
          {loading
            ? <Loading className={'fa fa-spinner fa-pulse fa-3x fa-fw'} />
            : this.renderArticles()}
        </ArticleContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
