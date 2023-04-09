import axios from 'axios';

const loadData = async (searchRes: string) => {
  const response = await axios.get('https://kitsu.io/api/edge/anime', {
    params: {
      'page[limit]': 10,
      'page[offset]': 0,
      'filter[text]': searchRes || undefined,
    },
  });

  return response.data.data.length ? response.data.data : false;
};

export default loadData;
