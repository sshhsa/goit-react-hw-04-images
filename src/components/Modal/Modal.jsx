import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalWindow = document.querySelector('#modal_window');

function Modal({ onCloseModal, modalContent }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  }

  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }

  return createPortal(
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modalContent}>{modalContent}</div>
    </div>,
    modalWindow
  );
}

export default Modal;
