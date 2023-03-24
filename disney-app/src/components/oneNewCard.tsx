import React, { Component } from 'react';
import styled from '@emotion/styled';
import { INewHero } from 'data/HPResponse.models';

const StyledCard = styled.div`
  box-shadow: 0 0 5px;
  width: 230px;
  border-radius: 20px;
  padding: 10px;
  background-color: #c0d5d55c;
  padding-bottom: 20px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 20px;
    width: 160px;
    border-radius: 20px;
  }
`;
interface IOneNewCardProps {
  card: INewHero;
  key: string;
}
class OneNewCard extends Component<IOneNewCardProps> {
  render() {
    const image = this.props.card.image;
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      return (
        <StyledCard data-testid="card">
          <h3>
            <b>{this.props.card.name}</b>
          </h3>
          <p>dateOfBirth: {this.props.card.dateOfBirth}</p>
          <p>wizard: {this.props.card.wizard}</p>
          <p>house: {this.props.card.house}</p>
          <p>gender: {this.props.card.gender}</p>
          <img src={imageUrl} alt="newHero" />
        </StyledCard>
      );
    }
  }
}

export default OneNewCard;
