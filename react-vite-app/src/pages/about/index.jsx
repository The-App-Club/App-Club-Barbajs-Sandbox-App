import {css} from '@emotion/css';
import {Link} from 'react-router-dom';
import {Layout} from '../../layouts/default';

import photo1 from '../../assets/woman-dressed-in-white-leans-against-a-wall.jpg';

const AboutPage = () => {
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
            <h2>AboutPage</h2>
            <Link to={'/'}>home</Link>
          </div>
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 1rem;
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

export {AboutPage};
