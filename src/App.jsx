import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/Gallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/MessageEmpty';
import ButtonLoadMore from 'components/Button/Button';
import { fetchImages } from './services/services';
import css from './components/Styles.module.css';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    isLoading: false,
    isFirstRender: true,
    page: 1,
    query: '',
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async (query, page = 1) => {
    try {
      this.setState({ isLoading: true });
      const images = await fetchImages(query, page);

      if (page === 1) {
        this.setState({ images });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      }
    } finally {
      this.setState({ isLoading: false, isFirstRender: false });
    }
  };

  onSubmit = query => {
    if (query.trim() === '') {
      this.setState({
        images: [],
        page: 1,
      });
    } else {
      this.setState({ query });
      this.fetchImages(query);
    }
  };

  loadMoreImages = () => {
    const { query, page } = this.state;
    const nextPage = page + 1;

    this.fetchImages(query, nextPage);
    this.setState({ page: nextPage });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { isLoading, isFirstRender, images } = this.state;
    const hasMoreImages = images.length > 0 && images.length % 12 === 0;

    return (
      <div className={css.container}>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />

        {!isFirstRender && images.length === 0 && (
          <Message message="Backend is empty by this request" />
        )}
        {images && <ImageGallery images={images} query={this.state.query} />}
        {hasMoreImages && <ButtonLoadMore onClick={this.loadMoreImages} />}
      </div>
    );
  }
}

export default App;
