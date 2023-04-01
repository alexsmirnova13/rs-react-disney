import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
const StyledSearchBar = styled.form`
  input {
    width: 300px;
    font-size: 13px;
    padding: 6px 0 4px 10px;
    border: 1px solid #cecece;
    background: #f6f6f6;
    border-radius: 8px;
  }
  button {
    width: 70px;
    padding: 6px 0 4px 6px;
    border: 1px solid #cecece;
    background: #f6f6f6;
    border-radius: 8px;
    margin-left: 5px;
  }
  button:hover {
    cursor: pointer;
  }
`;

const SearchPanel = () => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('value') || '');
  useEffect(() => {
    return () => {
      localStorage.setItem('value', inputValue);
    };
  }, [inputValue]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <StyledSearchBar data-testid="search">
      <input
        data-testid="input"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </StyledSearchBar>
  );
};
export default SearchPanel;
