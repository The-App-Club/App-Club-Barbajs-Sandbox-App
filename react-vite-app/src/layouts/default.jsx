import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {motion} from 'framer-motion';

const StyledLayout = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const animation = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 60,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  leave: {
    opacity: 0,
    x: 0,
    y: 60,
  },
};

const Layout = ({children}) => {
  return (
    <StyledLayout
      variants={animation}
      initial={'hidden'}
      animate={'enter'}
      exit={'leave'}
      onAnimationStart={() => {
        const html = document.documentElement;
        const body = html.querySelector('body');
        html.classList.add('is-loading');
        body.classList.add('is-loading');
      }}
      onAnimationComplete={() => {
        const html = document.documentElement;
        const body = html.querySelector('body');
        html.classList.remove('is-loading');
        body.classList.remove('is-loading');
      }}
      className={css`
        position: relative;
        z-index: 1;
      `}
    >
      {children}
    </StyledLayout>
  );
};

export {Layout};
