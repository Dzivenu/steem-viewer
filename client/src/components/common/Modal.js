import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from './Portal';
import { COLORS } from '../../constants/styles';

const ModalContainer = styled.div`
  position: fixed; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
  overflow-y: scroll;
`;

const ModalContent = styled.div`
  position: relative;
  top: 0;
  height: auto;
  background-color: ${COLORS.WHITE.WHITE};
  border: 1px solid ${COLORS.WHITE.WHITE_SMOKE};
  border-radius: .5em;
  box-shadow: 6px 9px 42px 0px rgba(0,0,0,0.37);
  margin: 2em auto; 
  width: 800px;
`;

class Modal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
  };

  render() {
    const { hideModal } = this.props;
    return (
      <Portal>
        <ModalContainer onClick={hideModal}>
          <ModalContent>
            {this.props.children}
          </ModalContent>
        </ModalContainer>
      </Portal>
    );
  }
}

export default Modal;
