import styled from '@emotion/styled';
import Navbar from 'components/navbar';
import React from 'react';

const StyledHeader = styled.div`
  background-color: teal;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    height: 150px;
  }
`;

const Header = () => {
  return (
    <StyledHeader data-testid="header">
      <img
        src="https://image.spreadshirtmedia.net/image-server/v1/designs/184158337,width=178,height=178.png"
        alt="anime-logo"
      />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
