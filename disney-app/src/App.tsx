import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './containers/Footer';
import Header from './containers/Header';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default App;
