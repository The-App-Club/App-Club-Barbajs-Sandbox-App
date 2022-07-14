import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {useEffect, useMemo, useState} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {Main} from './components/Main';
import '@fontsource/inter';
import './styles/index.scss';

const routes = [
  {
    path: '/',
    name: 'home',
    transitionType: 'next',
  },
  {
    path: '/about',
    name: 'about',
    transitionType: 'prev',
  },
];

const App = () => {
  const location = useLocation();

  const transitionType = useMemo(() => {
    return routes.find((route) => {
      return route.path === location.pathname;
    }).transitionType;
  }, [location]);

  return (
    <div>
      <TransitionGroup component={Main}>
        <CSSTransition
          key={location.pathname}
          classNames={transitionType}
          timeout={700}
          unmountOnExit
          onEntering={(e) => {
            const html = document.documentElement;
            const body = html.querySelector('body');
            html.classList.add('is-loading');
            body.classList.add('is-loading');
            console.log('onEntering');
          }}
          onExited={(e) => {
            const html = document.documentElement;
            const body = html.querySelector('body');
            html.classList.remove('is-loading');
            body.classList.remove('is-loading');
            console.log('onExited');
          }}
        >
          <Routes location={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
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
