import React from 'react';
import { Button, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import Search from 'src/components/Search';
import { useAppDispatch } from 'src/hooks/redux';
import { notesSlice } from 'src/store/reducers/NotesSlice';
import styles from './Tools.module.scss';

function Tools() {
  const dispatch = useAppDispatch();
  const { deleteActiveNoteFromList, setInitialNoteAsActive } = notesSlice.actions;

  const createNewNoteListener = () => {
    dispatch(setInitialNoteAsActive());
  };

  const deleteNoteListener = () => {
    const shouldDelete = window.confirm('Are you sure? Once deleted, this note will be lost.')
    console.log('shouldDelete', shouldDelete);
    if (!shouldDelete) return;
    dispatch(deleteActiveNoteFromList());
  };

  return (
    <section className={styles.toolsWrapper}>
      <Container maxWidth="xl">
        <div className={styles.tools}>
          <Stack direction="row" spacing={2} justifyContent="space-between" width="100%">
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={deleteNoteListener}>
                Delete
              </Button>
              <Button variant="outlined" startIcon={<AddIcon/>} onClick={createNewNoteListener}>
                New
              </Button>
            </Stack>
            <Search/>
          </Stack>
        </div>
      </Container>
    </section>
  );
}

export default Tools;
