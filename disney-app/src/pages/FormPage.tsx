// import styled from '@emotion/styled';
import FormComponent from 'components/formComponent';
import Message from 'components/notification';
import AllNewCards from 'containers/AllNewCards';
import { INewHero } from 'data/HPResponse.models';
import React, { Component } from 'react';

class FormPage extends Component {
  state = {
    newCards: [] as INewHero[],
    messageSuccsess: null,
  };
  handleSubmit = (res: INewHero) => {
    console.log(this.state.newCards[0]?.image);
    this.setState({ newCards: this.state.newCards.concat(res), messageSuccsess: 'Успешно' });
    setTimeout(() => {
      this.setState({ messageSuccsess: null });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>Заполните форму нового героя</h1>
        <FormComponent onSubmit={this.handleSubmit} />
        {this.state.messageSuccsess && <Message message={this.state.messageSuccsess} />}
        <AllNewCards newCards={this.state.newCards} />
      </div>
    );
  }
}

export default FormPage;
