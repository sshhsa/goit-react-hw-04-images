import React from 'react';

import PropTypes from 'prop-types';
import css from './Button.module.css';

function ButtonLoadMore({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={css.buttonLoadMore}>
      Load More
    </button>
  );
}

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
