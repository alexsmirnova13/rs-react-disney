import SearchPanel from 'components/searchPanel';
import AllCards from 'containers/AllCards';
import { IAnime } from 'data/HPResponse.models';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'components/modal';
import { Global, css } from '@emotion/react';
import Loader from 'components/loader';
import styled from '@emotion/styled';

const StyledLoading = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`;
const HomePage = () => {
  const [cards, setCards] = useState<IAnime[]>();
  const [searchRes, setSearchRes] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<IAnime | undefined>(undefined);
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('https://kitsu.io/api/edge/anime', {
        params: {
          'page[limit]': 10,
          'page[offset]': 0,
          'filter[text]': searchRes || undefined,
        },
      });
      setCards(response.data.data);
      console.log(response.data.data);
    };
    loadData();
  }, [searchRes]);
  if (!cards) {
    return (
      <StyledLoading>
        <Loader />;
      </StyledLoading>
    );
  }
  const handleSubmit = (res: string) => {
    const result = res.replace(/ /g, '%20');
    setSearchRes(result);
  };
  const handleParentClick = (id: string) => {
    const card = cards.filter((item) => item.id === id);
    setShowModal(true);
    setCurrentCard(card[0]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentCard(undefined);
  };

  return (
    <div data-testid="home-page">
      <Global
        styles={css`
          body {
            overflow: ${showModal ? 'hidden' : 'auto'};
          }
        `}
      />
      <SearchPanel onParentEnter={handleSubmit} />
      <AllCards cards={cards} handleParentClick={handleParentClick} />;
      {showModal && currentCard && <Modal onClose={handleCloseModal} card={currentCard} />}
    </div>
  );
};
export default HomePage;
