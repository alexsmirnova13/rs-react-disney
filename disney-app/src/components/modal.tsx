import styled from '@emotion/styled';
import { IAnime } from 'data/HPResponse.models';
import React from 'react';

interface IModalProps {
  onClose: () => void;
  card: IAnime;
}

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: #293829b8;
  position: fixed;
  top: 0;
  left: 0;
  .window {
    position: absolute;
    top: 20%;
    left: 150px;
    width: 750px;
    height: 400px;
    background-color: #f3f3f3;
  }
  button {
    position: absolute;
    left: 750px;
    top: -24px;
    border-radius: 50%;
    padding: 5px 9px;
    border: 1px solid;
    cursor: pointer;
  }
  button:hover {
    background-color: grey;
    border-color: grey;
  }
  .modal-content {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  img {
    height: 100%;
  }
  .description {
    max-height: 200px;
    overflow: auto;
    background-color: white;
  }
  .content-text {
    padding: 30px 7px 20px 20px;
  }
  :hover {
    cursor: pointer;
  }
  .window:hover {
    cursor: default;
  }
`;
const Modal = (props: IModalProps) => {
  const handleWindowClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };
  const isoDateString = props.card.attributes.createdAt;
  const date = new Date(Date.parse(isoDateString));
  return (
    <StyledModal data-testid="modal" onClick={props.onClose}>
      <div className="window" onClick={handleWindowClick}>
        <button onClick={props.onClose}>x</button>
        <div className="modal-content">
          <img src={props.card.attributes.posterImage.large} />
          <div className="content-text">
            <h3>
              <b>{props.card.attributes.canonicalTitle}</b>
            </h3>
            <p>
              <u>createdAt:</u> {date.toLocaleString()}
            </p>
            <p>
              <u>description:</u>
            </p>
            <p className="description"> {props.card.attributes.description}</p>
            <p>
              <u>popularityRank:</u> {props.card.attributes.popularityRank}
            </p>
            <p>
              <u>episodeLength:</u> {props.card.attributes.episodeLength}
            </p>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
