import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalWindow = document.querySelector('#modal_window');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={css.modalContent}>{this.props.children}</div>
      </div>,
      modalWindow
    );
  }
}

export default Modal;
