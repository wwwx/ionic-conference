import Axios from 'axios';

export const fetcher = (url: string) => {
  return Axios.get(url);
};
