import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';

import css from './ImageGallery.module.css';

function ImageGalleryItem({ image }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.user}
          className={css.imageItem}
          onClick={toggleModal}
        />
      </li>
      {showModal && (
        <Modal
          onCloseModal={toggleModal}
          modalContent={
            <img
              src={image.largeImageURL}
              alt={image.user}
              className={css.imageModal}
            />
          }
        ></Modal>
      )}
    </>
  );
}

export default ImageGalleryItem;
