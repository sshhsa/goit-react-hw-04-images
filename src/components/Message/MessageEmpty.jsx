import PropTypes from 'prop-types';
import css from './Message.module.css';

function Message({ message }) {
  return (
    <div className={css.messageContainer}>
      <h2 className={css.message}>{message}</h2>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
