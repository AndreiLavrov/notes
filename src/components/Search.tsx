import React, { ChangeEvent } from 'react';
import { FormControl, TextField } from '@mui/material';

import { useAppDispatch } from 'src/hooks/redux';
import { notesSlice } from 'src/store/reducers/NotesSlice';

const Search = () => {
  const dispatch = useAppDispatch();
  const { setSearchValue } = notesSlice.actions;

  // could add boundary in future;
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <FormControl>
      <TextField
        id="outlined-basic"
        size="small"
        label="Search"
        variant="outlined"
        autoFocus
        onChange={onChangeSearch}
      />
    </FormControl>
  );
};

export default Search;
