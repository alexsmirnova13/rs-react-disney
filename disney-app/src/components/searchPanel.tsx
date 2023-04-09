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
    // border-radius: 8px;
    margin: 20px auto 30px auto;
  }
  input:focus {
    box-shadow: 0 0 5px;
    outline: none;
  }
`;
interface ISearchEnterProps {
  onParentEnter: (res: string) => void;
}
const SearchPanel = ({ onParentEnter }: ISearchEnterProps) => {
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      localStorage.setItem('value', searchRef.current);
      onParentEnter(target.value);
    }
  };
  return (
    <StyledSearchBar data-testid="search">
      <input
        data-testid="input"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </StyledSearchBar>
  );
};
export default SearchPanel;
