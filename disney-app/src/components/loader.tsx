import styled from '@emotion/styled';
import React from 'react';

const StyledLoader = styled.div`
  position: relative;
  vertical-align: middle;
  margin: auto;
  width: 225px;
  height: 16px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    top: 0;
    font-size: 16px;
    color: #000;
    font-weight: normal;
    font-family: 'Lexend Deca';
  }
  span:nth-of-type(1) {
    left: 0;
    animation: wave 0.4s ease-in-out infinite alternate 0.05s;
  }
  span:nth-of-type(2) {
    left: 25px;
    animation: wave 0.4s ease-in-out infinite alternate 0.1s;
  }
  span:nth-of-type(3) {
    left: 50px;
    animation: wave 0.4s ease-in-out infinite alternate 0.15s;
  }
  span:nth-of-type(4) {
    left: 75px;
    animation: wave 0.4s ease-in-out infinite alternate 0.2s;
  }
  span:nth-of-type(5) {
    left: 100px;
    animation: wave 0.4s ease-in-out infinite alternate 0.25s;
  }
  span:nth-of-type(6) {
    left: 125px;
    animation: wave 0.4s ease-in-out infinite alternate 0.3s;
  }
  span:nth-of-type(7) {
    left: 150px;
    animation: wave 0.4s ease-in-out infinite alternate 0.35s;
  }
  span:nth-of-type(8) {
    left: 175px;
    animation: wave 0.4s ease-in-out infinite alternate 0.4s;
  }
  span:nth-of-type(9) {
    left: 200px;
    animation: wave 0.4s ease-in-out infinite alternate 0.45s;
  }
  span:nth-of-type(10) {
    left: 225px;
    animation: wave 0.4s ease-in-out infinite alternate 0.5s;
  }
  @keyframes wave {
    0% {
      top: 0%;
    }
    100% {
      top: 100%;
    }
  }
`;
const Loader = () => {
  return (
    <StyledLoader data-testid="loader">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </StyledLoader>
  );
};

export default Loader;
