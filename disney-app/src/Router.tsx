import { Routes, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
