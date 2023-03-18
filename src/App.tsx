import React from 'react';
import { Container } from '@mui/material';

import ActiveNote from 'src/components/activeNote/ActiveNote';
import NotesList from 'src/components/notesList/NotesList';
import Tools from 'src/components/tools/Tools';
import './App.scss';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.app}>
      <Tools />
      <Container maxWidth="xl">
        <div className={styles.notesWrapper}>
          <NotesList />
          <ActiveNote />
        </div>
      </Container>
    </div>
  );
}

export default App;
