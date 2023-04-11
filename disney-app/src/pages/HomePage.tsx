import SearchPanel from 'components/searchPanel';
import AllCards from 'containers/AllCards';
import { IAnime } from 'data/HPResponse.models';
import React, { useEffect, useState } from 'react';
import Modal from 'components/modal';
import { Global, css } from '@emotion/react';
import Loader from 'components/loader';
import loadData from 'utils/api';

const HomePage = () => {
  const [cards, setCards] = useState<IAnime[]>();
  const [searchRes, setSearchRes] = useState<string>(localStorage.getItem('value') || '');
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<IAnime | undefined>(undefined);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const getData = async (searchStr: string) => {
    setIsLoad(true);
    const result = await loadData(searchStr);
    result ? setCards(result) : setIsError(true);
    setIsLoad(false);
  };

  useEffect(() => {
    getData(searchRes);
  }, [searchRes]);

  const handleSubmit = (res: string) => {
    const result = res.replace(/ /g, '%20');
    setSearchRes(result);
  };
  const handleParentClick = (id: string) => {
    const card = cards?.filter((item) => item.id === id);
    setShowModal(true);
    if (card) {
      setCurrentCard(card[0]);
    }
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
      {isLoad ? (
        <Loader />
      ) : isError ? (
        <p data-testid="error">alo</p>
      ) : (
        cards && <AllCards cards={cards} handleParentClick={handleParentClick} />
      )}
      {showModal && currentCard && <Modal onClose={handleCloseModal} card={currentCard} />}
    </div>
  );
};
export default HomePage;
