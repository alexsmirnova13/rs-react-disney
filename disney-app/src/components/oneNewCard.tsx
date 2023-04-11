import React from 'react';
import styled from '@emotion/styled';
import { INewHero } from 'data/HPResponse.models';

const StyledCard = styled.div`
  box-shadow: 0 0 5px;
  width: 230px;
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
  }
`;
interface IOneNewCardProps {
  card: INewHero;
}

const OneNewCard = (props: IOneNewCardProps) => {
  const image = props.card.image;
  const imageUrl = URL.createObjectURL(image as File);
  return (
    <StyledCard data-testid="new-card">
      <h3>
        <b>{props.card.name}</b>
      </h3>
      <p>Date of creation: {props.card.dateOfBirth}</p>
      <p>Language: {props.card.house}</p>
      <p>Status: {props.card.gender}</p>
      <img src={imageUrl} alt="newHero" />
    </StyledCard>
  );
};

export default OneNewCard;
