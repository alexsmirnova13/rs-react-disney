import SearchPanel from 'components/searchPanel';
import AllCards from 'containers/AllCards';
import { IAnime } from 'data/HPResponse.models';
import React, { useState } from 'react';
import Modal from 'components/modal';
import { Global, css } from '@emotion/react';
import Loader from 'components/loader';
import { selectSearchStr } from 'redux/searchStrSlice';
import { useAppSelector } from 'redux/hooks';
import { useGetAnimeQuery } from 'utils/animeApi';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<IAnime | undefined>(undefined);
  const searchStr = useAppSelector(selectSearchStr);
  const [currentSearchStr, setCurrentSearchStr] = useState(searchStr);
  const { data, error, isFetching } = useGetAnimeQuery(currentSearchStr);

  const handleSubmit = () => {
    const result = searchStr.replace(/ /g, '%20');
    setCurrentSearchStr(result);
  };
  const handleParentClick = (id: string) => {
    const card = data?.filter((item) => item.id === id);
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
      {isFetching ? (
        <Loader data-testid="loader" />
      ) : error || data?.length === 0 ? (
        <p data-testid="error">Поиск ничего не нашёл</p>
      ) : (
        data && <AllCards cards={data} handleParentClick={handleParentClick} />
      )}
      {showModal && currentCard && <Modal onClose={handleCloseModal} card={currentCard} />}
    </div>
  );
};
export default HomePage;
