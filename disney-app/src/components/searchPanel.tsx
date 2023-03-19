import React from 'react';
import styled from '@emotion/styled';
const StyledSearchBar = styled.div``;
class SearchPanel extends React.Component {
  render() {
    return (
      <StyledSearchBar data-testid="search">
        <input data-testid="input" />
        <button data-testid="button">Search</button>
      </StyledSearchBar>
    );
  }
}

export default SearchPanel;
