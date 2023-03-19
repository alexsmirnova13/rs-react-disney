import React, { Component } from 'react';
import styled from '@emotion/styled';
import { IResponse } from 'data/response.models';
import OneCard from 'components/oneCard';
const StyledCards = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.25rem;
`;
class AllCards extends Component<IResponse> {
  constructor(props: IResponse) {
    super(props);
  }
  render() {
    const cards = this.props.items;
    return (
      <StyledCards>
        {cards.map((item) => (
          <OneCard {...item} key={item.id} />
        ))}
      </StyledCards>
    );
  }
}

export default AllCards;
