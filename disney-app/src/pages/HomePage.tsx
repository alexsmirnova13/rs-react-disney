import SearchPanel from 'components/searchPanel';
import AllCards from 'containers/AllCards';
import response from 'data/HPResponse';
import React from 'react';

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <SearchPanel />
      <AllCards cards={response} />;
    </div>
  );
};
export default HomePage;
