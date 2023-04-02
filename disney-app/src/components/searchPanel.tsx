import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
const StyledSearchBar = styled.form`
  width: 100%;
  input {
    display: block;
    width: 300px;
    font-size: 13px;
    padding: 6px 0 4px 10px;
    border: 1px solid #cecece;
    background: #f6f6f6;
    border-radius: 8px;
    margin: 20px auto 30px auto;
  }
`;

const SearchPanel = () => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('value') || '');
  const searchRef = useRef('');

  useEffect(() => {
    searchRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('value', searchRef.current);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
