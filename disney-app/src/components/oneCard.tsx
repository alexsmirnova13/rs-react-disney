import React, { Component } from 'react';
import styled from '@emotion/styled';
import { IOneItem } from 'data/response.models';

const StyledCard = styled.div`
  border: 1px solid black;
  width: 200px;
`;
class OneCard extends Component<IOneItem> {
  constructor(props: IOneItem) {
    super(props);
  }
  render() {
    return (
      <StyledCard>
        <img src={this.props.snippet.thumbnails.default.url} />
        <p>{this.props.snippet.title}</p>
        <p>Название канала: {this.props.snippet.channelTitle}</p>
        <p>Количество просмотров: {this.props.statistics.viewCount}</p>
        <p>Количество лайков: {this.props.statistics.likeCount}</p>
        <p>Количество дизлайков: {this.props.statistics.dislikeCount}</p>
      </StyledCard>
    );
  }
}

export default OneCard;
