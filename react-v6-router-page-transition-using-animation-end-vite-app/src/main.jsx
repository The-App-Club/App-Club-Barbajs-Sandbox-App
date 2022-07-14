import {createRoot} from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom';
import {useEffect, useMemo, useState} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import '@fontsource/inter';
import './styles/index.scss';
import {cx, css} from '@emotion/css';

const presetTypeName = `roomToBottom`;
// const presetTypeName = `fade`;

const App = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState(`${presetTypeName}In`);

  useEffect(() => {
    // console.log(location, displayLocation)
    if (location !== displayLocation) {
      setTransitionStage(`${presetTypeName}Out`);
    }
  }, [location]);

  console.log(transitionStage);

  return (
    <div
      className={css`
        position: relative;
      `}
    >
      <div
        className={cx(
          `${transitionStage}`,
          css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            transform: translate3d(0, 0, 0);
            will-change: transform;
          `
        )}
        onAnimationStart={(e) => {
          // console.log(`onAnimationStart`);
          const html = document.documentElement;
          const body = html.querySelector('body');
          html.classList.add('is-loading');
          body.classList.add('is-loading');
        }}
        onAnimationEnd={(e) => {
          // console.log(`onAnimationEnd`);
          const html = document.documentElement;
          const body = html.querySelector('body');
          html.classList.remove('is-loading');
          body.classList.remove('is-loading');
          if (transitionStage === `${presetTypeName}Out`) {
            setTransitionStage(`${presetTypeName}In`);
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
