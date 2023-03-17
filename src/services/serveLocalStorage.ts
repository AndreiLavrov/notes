import { INote } from 'src/models/INote';

interface IServeLocStorageResults {
  setToLocStorage: (arr: INote[]) => void;
  getFromLocStorage: () => INote[];
}

export const serveLocalStorage = (): IServeLocStorageResults => {
  const setToLocStorage = (arr: INote[]) => localStorage.setItem('notes', JSON.stringify(arr));
  const getFromLocStorage = () => JSON.parse(localStorage.getItem('notes') || '[]');

  return {
    setToLocStorage,
    getFromLocStorage,
  }
};
