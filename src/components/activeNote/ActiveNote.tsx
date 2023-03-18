import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { INote } from 'src/models/INote';
import { notesSlice } from 'src/store/reducers/NotesSlice';
import styles from './ActiveNote.module.scss';

const initialState: INote = {
  id: 1,
  title: 'test',
  description: 'test',
  date: `${Date.now()}`,
  author: 'admin',
};

function ActiveNote() {
  const { activeNote } = useAppSelector(state => state.notesReducer);
  const dispatch = useAppDispatch();
  const { saveActiveNoteToList } = notesSlice.actions;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(activeNote);
  }, [activeNote]);

  const onSaveListener = () => {
    dispatch(saveActiveNoteToList(state));
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, title: e.target.value });
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, description: e.target.value });
  };

  return (
    <div className={styles.activeNote}>
      <div className={styles.date}>{state.date}</div>

      <TextField
        id="standard-helperText"
        label="Title"
        value={state.title}
        helperText="You can change the title here"
        variant="standard"
        className={styles.title}
        onChange={onChangeTitle}
      />

      <TextField
        id="standard-multiline-static"
        label="Description"
        multiline
        rows={4}
        variant="standard"
        value={state.description}
        className={styles.description}
        onChange={onChangeDescription}
      />

      <Stack direction="row" spacing={2} >
        <Button variant="contained" color="success" onClick={onSaveListener}>Save</Button>
      </Stack>
    </div>
  );
}

export default ActiveNote;
