import React, { Component } from 'react';

import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { images, query } = this.props;
    if (query.length === 0) {
      return null;
    }

    return (
      <ul className={css.galleryList}>
        {images &&
          images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
