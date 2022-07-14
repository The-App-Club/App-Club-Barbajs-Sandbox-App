import {css} from '@emotion/css';
import {Link} from 'react-router-dom';
import {Layout} from '../../layouts/default';

import photo1 from '../../assets/person-walks-down-a-narrow-covered-alleyway.jpg';

const HomePage = () => {
  return (
    <Layout>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        `}
      >
        <main
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            @media (max-width: 768px) {
              flex-direction: column;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              gap: 1rem;
              width: 50%;
              @media (max-width: 768px) {
                min-height: 50vh;
                order: 2;
              }
            `}
          >
            <h2>HomePage</h2>
            <Link to={'/about'}>about</Link>
          </div>
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50%;
            `}
          >
            <img
              src={photo1}
              className={css`
                display: block;
                height: 100vh;
                @media (max-width: 768px) {
                  height: 50vh;
                  order: 1;
                }
              `}
            />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export {HomePage};
