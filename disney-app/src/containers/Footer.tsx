import React from 'react';
import styled from '@emotion/styled';
const StyledFooter = styled.div`
  background-color: teal;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  img {
    height: 60px;
  }
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: 15px;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
  p {
    padding-rigth: 20px;
  }
`;
class Footer extends React.Component {
  render() {
    return (
      <StyledFooter data-testid="footer">
        <a href="https://rs.school/angular/" target="_blank" rel="noreferrer">
          <img src="https://rs.school/images/rs_school_js.svg" alt="rs-school logo" />
        </a>
        <a href="https://github.com/alexsmirnova13" target="_blank" rel="noreferrer">
          Aleksandra Smirnova
        </a>
        <p>2022</p>
      </StyledFooter>
    );
  }
}

export default Footer;
