import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  width: 200px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    list-style-type: none;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-size: 20px;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <StyledNav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </StyledNav>
    );
  }
}

export default Navbar;
