import React from 'react';

import { useAppSelector } from 'src/hooks/redux';
import NoteItem from 'src/components/NoteItem';

function NotesList() {
  const { notes, isLoading, error } = useAppSelector(state => state.notesReducer);

  return (
    <div className="notesList">
      {notes.map(item => <NoteItem key={item.id} item={item} /> )}

      {notes.length === 0 && !isLoading && !error &&(
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
