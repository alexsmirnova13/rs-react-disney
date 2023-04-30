import React, { useState } from 'react';
import { Global, css } from '@emotion/react';

import SearchPanel from '../components/SearchPanel';
import AllCards from '../containers/AllCards';
import { type IAnime } from '../data/HPResponse.models';
import Modal from '../components/Modal';
import Loader from '../components/Loader';
import { selectSearchStr } from '../redux/searchStrSlice';
import { useAppSelector } from '../redux/hooks';
import { useGetAnimeQuery } from '../utils/animeApi';

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<IAnime | undefined>(undefined);
  const searchStr = useAppSelector(selectSearchStr);
  const [currentSearchStr, setCurrentSearchStr] = useState(searchStr);
  const { data, error, isFetching } = useGetAnimeQuery(currentSearchStr);

  const handleSubmit = (): void => {
    const result = searchStr.replace(/ /g, '%20');
    setCurrentSearchStr(result);
  };
  const handleParentClick = (id: string): void => {
    const card = data?.filter((item) => item.id === id);
    setShowModal(true);
    if (card != null) {
      setCurrentCard(card[0]);
    }
  };

  const handleCloseModal = (): void => {
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

      {isFetching ? (
        <Loader data-testid="loader" />
      ) : error != null || data?.length === 0 ? (
        <p data-testid="error">Поиск ничего не нашёл</p>
      ) : (
        data != null && <AllCards cards={data} handleParentClick={handleParentClick} />
      )}
      {showModal && currentCard != null && <Modal onClose={handleCloseModal} card={currentCard} />}
    </div>
  );
};
export default HomePage;
