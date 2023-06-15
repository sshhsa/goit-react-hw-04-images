import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';

import css from './ImageGallery.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <li className={css.imageGalleryItem}>
          <img
            src={image.webformatURL}
            alt={image.user}
            className={css.imageItem}
            onClick={this.toggleModal}
          />
        </li>
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            {image.largeImageURL ? (
              <img
                src={image.largeImageURL}
                alt={image.user}
                className={css.imageModal}
              />
            ) : (
              <Loader />
            )}
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
