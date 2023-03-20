import AllCards from 'containers/AllCards';
import response from 'data/data';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return <AllCards {...response} />;
  }
}

export default HomePage;
