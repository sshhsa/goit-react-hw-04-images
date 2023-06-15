import { createPortal } from 'react-dom';
import { Puff } from 'react-loader-spinner';
import css from './Loader.module.css';

const loader = document.querySelector('#loader');

function Loader() {
  return createPortal(
    <div className={css.loaderPuff}>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="var(--accent-clr-1)"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>,
    loader
  );
}

export default Loader;
