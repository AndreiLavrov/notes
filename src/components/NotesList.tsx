import React, { useEffect, useState } from 'react';
import NoteItem from 'src/components/NoteItem';

import { useAppSelector } from 'src/hooks/redux';
import { INote } from 'src/models/INote';

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
    <div className="notesList">
      {state.map(item => <NoteItem key={item.id} item={item}/>)}

      {state.length === 0 && !isLoading && !error && (
        <h3>List is empty</h3>
      )}

      {/*
       // for future support of requests
       <>{isLoading && <h1>Идет загрузка...</h1>}</>
       <>{error && <h1>{error}</h1>}</>
       */}
    </div>
  );
}

export default NotesList;
