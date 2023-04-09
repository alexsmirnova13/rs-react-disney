import React from 'react';
import styled from '@emotion/styled';
import { IAnime } from 'data/HPResponse.models';

const StyledCard = styled.div`
  width: 260px;
  padding: 10px;
  background-color: #c0d5d55c;
  padding-bottom: 20px;
  border: 1px solid grey;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 20px;
    width: 80%;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 5px;
    border-color: #c0d5d55c;
  }
`;

interface ICardProps {
  card: IAnime;
  onClick: () => void;
}
const OneCard = (props: ICardProps) => {
  const isoDateString = props.card.attributes.createdAt;
  const date = new Date(Date.parse(isoDateString));
  return (
    <StyledCard data-testid="card" onClick={props.onClick}>
      <img
        src={
          props.card.attributes.posterImage?.large ||
          'https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png?20161129022009'
        }
      />
      <h3>
        <b>{props.card.attributes.canonicalTitle}</b>
      </h3>
      <p>createdAt: {date.toLocaleString()}</p>
      <p>popularityRank: {props.card.attributes.popularityRank}</p>
      <p>episodeLength: {props.card.attributes.episodeLength}</p>
      {/* <p>{props.card.attributes.canonicalTitle}</p> */}
    </StyledCard>
  );
};
export default OneCard;
