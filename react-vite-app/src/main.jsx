import {createRoot} from 'react-dom/client';
import '@fontsource/inter';
import './styles/index.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {useEffect} from 'react';
import barba from '@barba/core';
import gsap from 'gsap';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
