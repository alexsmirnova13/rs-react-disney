import Footer from 'containers/Footer';
import Header from 'containers/Header';
import ErrorPage from 'pages/ErrorPage';
import AboutPage from 'pages/AboutPage';
import React from 'react';
import './App.css';
import HomePage from 'pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
