import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  width: 200px;
  padding-right: 30px;
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

const Navbar = () => {
  return (
    <StyledNav data-testid="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
export default Navbar;
