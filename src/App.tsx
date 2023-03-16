import React from 'react';

import { INote } from './models/INote';
import { notesSlice } from './store/reducers/NotesSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import './App.css';

const initialNoteData: INote = {
  id: 1,
  title: 'test',
  description: 'test',
  date: `${Date.now()}`,
  author: 'admin',
};

function App() {
  const { notes, isLoading, error } = useAppSelector(state => state.notesReducer);
  const dispatch = useAppDispatch();
  const { addNote, deleteNote, updateNote } = notesSlice.actions;

  const addNoteListener = () => {
    dispatch(addNote(initialNoteData));
  }

  const deleteNoteListener = () => {
    dispatch(deleteNote(1));
  }

  const updateNoteListener = () => {
    dispatch(updateNote(initialNoteData));
  }

  return (
    <div className="App">
      <>
        {notes.map(item => (
        <div>
          {item.title}
        </div>
        ))}
        <button onClick={addNoteListener}>ADD</button>
        <button onClick={deleteNoteListener}>deleteNoteListener</button>
        <button onClick={updateNoteListener}>updateNoteListener</button>
      </>

      {/*
       // for future support of requests
       <>{isLoading && <h1>Идет загрузка...</h1>}</>
       <>{error && <h1>{error}</h1>}</>
       */}
    </div>
  );
}

export default App;
