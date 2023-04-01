import React from 'react';
import styled from '@emotion/styled';
import OneCard from 'components/oneCard';
import { IHero } from 'data/HPResponse.models';
import SearchPanel from 'components/searchPanel';

const StyledCards = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 30px;
  margin-bottom: 30px;
`;
interface IAllCardsProps {
  cards: IHero[];
}

const AllCards = (props: IAllCardsProps) => {
  const cards = props.cards;
  return (
    <div>
      <SearchPanel />
      <StyledCards>
        {cards.map((item) => (
          <OneCard card={item} key={item.id} />
        ))}
      </StyledCards>
    </div>
  );
};
export default AllCards;
