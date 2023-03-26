import styled from '@emotion/styled';
import FormComponent from 'components/formComponent';
import Message from 'components/notification';
import AllNewCards from 'containers/AllNewCards';
import { INewHero } from 'data/HPResponse.models';
import React, { Component } from 'react';

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
class FormPage extends Component {
  state = {
    newCards: [] as INewHero[],
    messageSuccsess: null,
  };
  handleSubmit = (res: INewHero) => {
    this.setState({ newCards: this.state.newCards.concat(res), messageSuccsess: 'Успешно' });
    setTimeout(() => {
      this.setState({ messageSuccsess: null });
    }, 1000);
  };
  render() {
    return (
      <StyledFormPage>
        <h1>Заполните форму нового героя</h1>
        <div className="form">
          <FormComponent onSubmit={this.handleSubmit} />
        </div>
        {this.state.messageSuccsess && <Message message={this.state.messageSuccsess} />}
        <AllNewCards newCards={this.state.newCards} />
      </StyledFormPage>
    );
  }
}

export default FormPage;
