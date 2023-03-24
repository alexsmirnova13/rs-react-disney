import React, { Component } from 'react';
import styled from '@emotion/styled';
import { INewHero } from 'data/HPResponse.models';
import OneNewCard from 'components/oneNewCard';
// import { IOneNewItem } from 'data/response.models';

const StyledCards = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 30px;
  margin-bottom: 30px;
`;
interface IAllNewCardsProps {
  newCards: INewHero[];
}
class AllNewCards extends Component<IAllNewCardsProps> {
  render() {
    const cards = this.props.newCards;
    return (
      <StyledCards>
        {cards.map((item) => (
          <OneNewCard card={item} key={item.id} />
        ))}
      </StyledCards>
    );
  }
}

export default AllNewCards;
