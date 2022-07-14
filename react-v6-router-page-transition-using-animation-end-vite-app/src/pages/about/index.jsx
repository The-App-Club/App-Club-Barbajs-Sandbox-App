import {css} from '@emotion/css';
import {Link} from 'react-router-dom';

const AboutPage = () => {
  return (
    <div
      className={css`
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgb(255, 218, 254);
        background: linear-gradient(
          248deg,
          rgba(255, 218, 254, 1) 0%,
          rgba(127, 198, 235, 1) 100%
        );
      `}
    >
      <h2>AboutPage</h2>
      <Link to={'/'}>home</Link>
    </div>
  );
};

export {AboutPage};
