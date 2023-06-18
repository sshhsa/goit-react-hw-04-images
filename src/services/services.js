import axios from 'axios';

const API_KEY = '35838965-00a6ae99c457ac18fcac9dde6';

export const fetchImagesService = async (query, page = 1) => {
  try {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;
    const response = await axios.get(url);

    if (response.data.hits.length === 0) {
      throw new Error('Backend is empty by this request');
    }

    return response.data.hits;
  } catch (error) {
    console.log(error);
    return [];
  }
};
