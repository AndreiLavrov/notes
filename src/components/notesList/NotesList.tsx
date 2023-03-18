import React, { useEffect, useState } from 'react';
import NoteItem from 'src/components/noteItem/NoteItem';

import { useAppSelector } from 'src/hooks/redux';
import { INote } from 'src/models/INote';
import styles from './NotesList.module.scss';

function NotesList() {
  const { notes, isLoading, error, searchValue } = useAppSelector(state => state.notesReducer);
  const [state, setState] = useState<INote[]>([]);

  useEffect(() => {
    let filteredNotes = notes;
    if (searchValue !== '') {
      filteredNotes = notes.filter((item) => item.title.includes(searchValue) || item.description.includes(searchValue));
    }
    setState(filteredNotes);
  }, [notes, searchValue]);

  return (
    <section className={styles.notesList}>
      {state.map(item => <NoteItem key={item.id} item={item}/>)}

      {state.length === 0 && !isLoading && !error && (
        <h4 className={styles.emptyListTitle}>List is empty...</h4>
      )}

      {/*
       // for future support of requests
       <>{isLoading && <h1>Идет загрузка...</h1>}</>
       <>{error && <h1>{error}</h1>}</>
       */}
    </section>
  );
}

export default NotesList;
