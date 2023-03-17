import React, { ChangeEvent } from 'react';

import { notesSlice } from 'src/store/reducers/NotesSlice';
import { useAppDispatch } from 'src/hooks/redux';

const Search = () => {
  const dispatch = useAppDispatch();
  const { setSearchValue } = notesSlice.actions;

  // could add boundary in future;
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value))
  };

  return (
    <div className="searchWrapper">
      <input type="text" onChange={onChangeSearch} />
    </div>
  );
}

export default Search;
