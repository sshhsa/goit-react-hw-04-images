import React from 'react';

import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

function ImageGallery({ images, query }) {
  if (query.length === 0) {
    return null;
  }

  return (
    <ul className={css.galleryList}>
      {images &&
        images.map(image => <ImageGalleryItem key={image.id} image={image} />)}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
