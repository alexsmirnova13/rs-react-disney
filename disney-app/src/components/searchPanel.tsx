import React from 'react';
import styled from '@emotion/styled';
const StyledSearchBar = styled.form``;
class SearchPanel extends React.Component {
  state = {
    inputValue: '',
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { inputValue } = this.state;
    const key = new Date().toISOString();
    localStorage.setItem(key, inputValue);
  };
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <StyledSearchBar data-testid="search" onSubmit={this.handleSubmit}>
        <input data-testid="input" value={inputValue} onChange={this.handleInputChange} />
        <button data-testid="button" type="submit">
          Search
        </button>
      </StyledSearchBar>
    );
  }
}

export default SearchPanel;
