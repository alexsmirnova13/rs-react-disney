// import styled from '@emotion/styled';
import FormComponent from 'components/formComponent';
import AllNewCards from 'containers/AllNewCards';
import { INewHero } from 'data/HPResponse.models';
import React, { Component } from 'react';

class FormPage extends Component {
  state = {
    newCards: [] as INewHero[],
  };
  handleSubmit = (res: INewHero) => {
    this.setState({ newCards: this.state.newCards.concat(res) });
  };
  render() {
    return (
      <div>
        <h1>Заполните форму нового героя</h1>
        <FormComponent onSubmit={this.handleSubmit} />
        <AllNewCards newCards={this.state.newCards} />
      </div>
    );
  }
}

export default FormPage;
