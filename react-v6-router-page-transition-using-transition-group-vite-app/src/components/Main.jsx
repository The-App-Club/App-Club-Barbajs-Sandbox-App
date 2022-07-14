import {keyframes} from '@emotion/css';
import styled from '@emotion/styled';

const leaveToLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const enterFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const leaveToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const enterFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const curve = () => {
  return `cubic-bezier(0.165, 0.84, 0.44, 1)`;
};

const StyledMain = styled.main`
  position: relative;

  > .next {
    &-exit-active {
      animation: ${leaveToLeft} 500ms both ${curve()};
      z-index: -1 !important;
    }
    &-enter-active {
      animation: ${enterFromRight} 600ms both ${curve()};
    }
  }

  > .prev {
    &-exit-active {
      animation: ${leaveToRight} 500ms both ${curve()};
      z-index: -1 !important;
    }
    &-enter-active {
      animation: ${enterFromLeft} 600ms both ${curve()};
    }
  }
`;

const Main = ({children}) => {
  return <StyledMain>{children}</StyledMain>;
};

export {Main};
