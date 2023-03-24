import AllCards from 'containers/AllCards';
import response from 'data/HPResponse';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return <AllCards cards={response} />;
  }
}

export default HomePage;
