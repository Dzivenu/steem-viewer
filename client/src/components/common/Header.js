import React, { Component } from 'react';
import styled from 'styled-components';
import EN from '../../constants/translations/en';
import { COLORS } from '../../constants/styles';

const Container = styled.header`
  background-color: ${COLORS.BLUE.CORNFLOWER_BLUE};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  color: ${COLORS.WHITE.WHITE};
  margin-bottom: 1em;
  padding: 1em;
  position: fixed;
  width: 100%;
`;

class Header extends Component {
  render() {
    return <Container>{EN.title}</Container>;
  }
}

export default Header;
