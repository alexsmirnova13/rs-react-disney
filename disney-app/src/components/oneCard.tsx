import React from 'react';
import styled from '@emotion/styled';
import { IHero } from 'data/HPResponse.models';

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

interface ICardProps {
  card: IHero;
}
const OneCard = (props: ICardProps) => {
  return (
    <StyledCard data-testid="card">
      <img src={props.card.image} />
      <h3>
        <b>{props.card.name}</b>
      </h3>
      <p>House: {props.card.house}</p>
      <p>Eye color: {props.card.eyeColour}</p>
      <p>Date Of Birth: {props.card.dateOfBirth}</p>
      <p>Patronus: {props.card.patronus}</p>
    </StyledCard>
  );
};
export default OneCard;
