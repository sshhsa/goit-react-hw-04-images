import React, { useState, useEffect } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/Gallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/MessageEmpty';
import ButtonLoadMore from 'components/Button/Button';
import { fetchImagesService } from './services/services';
import css from './components/Styles.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  async function fetchImages(query, page = 1) {
    try {
      setIsLoading(true);
      const fetchedImages = await fetchImagesService(query, page);

      if (page === 1) {
        setImages(fetchedImages);
      } else {
        setImages(prevState => [...prevState, ...fetchedImages]);
      }
    } finally {
      setIsLoading(false);
      setIsFirstRender(false);
    }
  }

  useEffect(() => {
    if (query.trim() !== '') {
      fetchImages(query);
    }
  }, [query]);

  const onSubmit = query => {
    if (query.trim() === '') {
      setImages([]);
      setPage(1);
    } else {
      setQuery(query);
    }
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;

    fetchImages(query, nextPage);
    setPage(nextPage);
  };

  const hasMoreImages = images.length > 0 && images.length % 12 === 0;

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      <Searchbar onSubmit={onSubmit} />

      {!isFirstRender && images.length === 0 && (
        <Message message="Backend is empty by this request" />
      )}
      {images && <ImageGallery images={images} query={query} />}
      {hasMoreImages && <ButtonLoadMore onClick={loadMoreImages} />}
    </div>
  );
};

export default App;
