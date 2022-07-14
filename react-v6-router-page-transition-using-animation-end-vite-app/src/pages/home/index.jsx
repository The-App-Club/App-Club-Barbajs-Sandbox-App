import {css} from '@emotion/css';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className={css`
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgb(255, 242, 218);
        background: linear-gradient(
          248deg,
          rgba(255, 242, 218, 1) 0%,
          rgba(127, 198, 235, 1) 100%
        );
      `}
    >
      <h2>HomePage</h2>
      <Link to={'/about'}>about</Link>
    </div>
  );
};

export {HomePage};
