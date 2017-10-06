import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../constants/styles';

const Container = styled.div`
  position: fixed;
  padding: 1em;
  width: 200px;
  margin-top: 60px;
  height: 50%;
  background-color: ${COLORS.BLUE.CORNFLOWER_BLUE};
`;

const Tag = styled.div`
  padding: .5em 1em;
  color: ${COLORS.WHITE.WHITE};
  cursor: pointer;
  
  &:hover {
    color: ${COLORS.BLUE.LINK_WATER};
  }
`;

class Sidebar extends Component {
  static propTypes = {
    tags: PropTypes.array,
    loading: PropTypes.bool,
  };

  render() {
    const { tags } = this.props;
    return (
      <Container>{tags.map((tag, index) => <Tag key={index}>{`# ${tag.name}`}</Tag>)}</Container>
    );
  }
}

export default Sidebar;
