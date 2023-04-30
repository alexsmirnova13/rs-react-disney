import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectSearchStr, setSearchStr } from '../redux/searchStrSlice';
const StyledSearchBar = styled.form`
  width: 100%;
  input {
    display: block;
    width: 300px;
    font-size: 13px;
    padding: 6px 0 4px 10px;
    border: 1px solid #cecece;
    background: #f6f6f6;
    margin: 20px auto 30px auto;
  }
  input:focus {
    box-shadow: 0 0 5px;
    outline: none;
  }
`;
interface ISearchEnterProps {
  onParentEnter: () => void;
}
const SearchPanel = ({ onParentEnter }: ISearchEnterProps) => {
  const searchRef = useRef('');
  const inputValue = useAppSelector(selectSearchStr);
  const dispatch = useAppDispatch();
  useEffect(() => {
    searchRef.current = inputValue;
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchStr(e.target.value));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onParentEnter();
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
