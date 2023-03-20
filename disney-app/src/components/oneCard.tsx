import React, { Component } from 'react';
import styled from '@emotion/styled';
import { IOneItem } from 'data/response.models';

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
class OneCard extends Component<IOneItem> {
  constructor(props: IOneItem) {
    super(props);
  }
  render() {
    return (
      <StyledCard data-testid="card">
        <img src={this.props.snippet.thumbnails.default.url} />
        <h3>
          <b>{this.props.snippet.title}</b>
        </h3>
        <p>Channel name: {this.props.snippet.channelTitle}</p>
        <p>Viewed: {this.props.statistics.viewCount}</p>
        <p>Likes: {this.props.statistics.likeCount}</p>
        <p>Dislikes: {this.props.statistics.dislikeCount}</p>
      </StyledCard>
    );
  }
}

export default OneCard;
