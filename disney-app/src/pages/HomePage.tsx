import AllCards from 'containers/AllCards';
import response from 'data/HPResponse';
import React from 'react';

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <AllCards cards={response} />;
    </div>
  );
};
export default HomePage;
