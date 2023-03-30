import React, { useState } from 'react';
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
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const key = new Date().toISOString();
    localStorage.setItem(key, inputValue);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputPanelValue = event.target.value;
    setInputValue(inputPanelValue);
  };

  return (
    <StyledSearchBar data-testid="search" onSubmit={handleSubmit}>
      <input data-testid="input" value={inputValue} onChange={handleInputChange} />
      <button data-testid="button" type="submit">
        Search
      </button>
    </StyledSearchBar>
  );
};
export default SearchPanel;
