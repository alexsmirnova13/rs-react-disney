import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-shadow: 0 0 5px;
  border-radius: 20px;
  padding: 10px;
  background-color: #c0d5d55c;
  .button {
    width: 70px;
    padding: 6px 0 4px 6px;
    border: 1px solid #cecece;
    background: #f6f6f6;
    border-radius: 8px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .img-pick {
    display: block;
    width: 70px;
    padding: 6px 0 4px 6px;
    border: 1px solid #cecece;
    background: yellow;
    border-radius: 8px;
    margin-top: 20px;
  }
  .input-text {
    width: 250px;
    font-size: 13px;
    padding: 6px 0 4px 10px;
    border: 1px solid #cecece;
    background: #f6f6f6;
    border-radius: 8px;
  }
  .input-select {
    font-size: 13px;
    padding: 6px 0 4px 10px;
    border: 1px solid #cecece;
    background: #f6f6f6;
    border-radius: 8px;
  }
  button:hover {
    cursor: pointer;
  }
  .label {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  input:hover {
    cursor: pointer;
  }
  input {
    margin-left: 10px;
  }
  select {
    margin-left: 10px;
  }
  label {
    margin-left: 10px;
  }
  .error {
    font-size: 12px;
    color: red;
  }
`;
