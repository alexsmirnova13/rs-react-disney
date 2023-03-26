import AllCards from 'containers/AllCards';
import response from 'data/HPResponse';
import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div data-testid="home-page">
        <AllCards cards={response} />;
      </div>
    );
  }
}

export default HomePage;
