import styled from '@emotion/styled';
import FormComponent from 'components/formComponent1';
import Message from 'components/notification';
import AllNewCards from 'containers/AllNewCards';
import { INewHero } from 'data/HPResponse.models';
import React, { useState } from 'react';

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
  const [newCards, setNewCards] = useState<INewHero[]>([]);
  const [messageSuccess, setMessageSuccess] = useState('');
  const handleSubmit = (res: INewHero) => {
    setNewCards([...newCards, res]);
    setMessageSuccess('Success');
    setTimeout(() => {
      setMessageSuccess('');
    }, 1000);
  };
  return (
    <StyledFormPage>
      <h1>Make a new HP hero</h1>
      <div className="form">
        <FormComponent onSubmit={handleSubmit} />
        {messageSuccess && <Message message={messageSuccess} />}
      </div>
      <AllNewCards newCards={newCards} />
    </StyledFormPage>
  );
};

export default FormPage;
