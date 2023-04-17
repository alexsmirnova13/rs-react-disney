import Footer from 'containers/Footer';
import Header from 'containers/Header';
import ErrorPage from 'pages/ErrorPage';
import AboutPage from 'pages/AboutPage';
import React from 'react';
import './App.css';
import HomePage from 'pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import FormPage from 'pages/FormPage';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </Wrapper>
    );
  }
}

export default App;
