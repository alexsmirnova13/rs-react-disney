import styled from '@emotion/styled';
import FormComponent from 'components/formComponent';
import Message from 'components/notification';
import AllNewCards from 'containers/AllNewCards';
import { INewHero } from 'data/HPResponse.models';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectNewItems, setNewItems } from 'redux/newItemsSlice';

const StyledFormPage = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  .form {
    margin-left: auto;
    margin-right: auto;
    width: 450px;
  }
  h1 {
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;

const FormPage = () => {
  const [messageSuccess, setMessageSuccess] = useState('');
  const dispatch = useAppDispatch();
  const newCards = useAppSelector(selectNewItems);
  const handleSubmit = (res: INewHero) => {
    dispatch(setNewItems(res));
    setMessageSuccess('Success');
    setTimeout(() => {
      setMessageSuccess('');
    }, 1000);
  };
  return (
    <StyledFormPage>
      <h1>Make a new anime</h1>
      <div className="form">
        <FormComponent data-testid="submit-form" onParentSubmit={handleSubmit} />
        {messageSuccess && <Message message={messageSuccess} />}
      </div>
      <AllNewCards newCards={newCards} />
    </StyledFormPage>
  );
};

export default FormPage;
