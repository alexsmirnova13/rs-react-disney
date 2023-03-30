import styled from '@emotion/styled';
import Navbar from 'components/navbar';
import SearchPanel from 'components/searchPanel';
import React from 'react';

const StyledHeader = styled.div`
  background-color: teal;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    height: 75px;
  }
`;

const Header = () => {
  return (
    <StyledHeader data-testid="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/700px-Disney_wordmark.svg.png?20171113041617"
        alt="disney-logo"
      />
      <SearchPanel />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
