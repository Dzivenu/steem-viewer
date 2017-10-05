import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../constants/styles';

const Container = styled.div`
  display: flex;
`;

const Tag = styled.div`
  padding: 1em;
  border: 1px solid ${COLORS.WHITE.WHITE_SMOKE};
  border-radius: 1.5em;
  margin: 0 .5em;
`;

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array,
  };

  static defaultProps = {
    tags: [],
  };

  render() {
    const { tags } = this.props;
    return (
      <Container>
        {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </Container>
    );
  }
}

export default Tags;
