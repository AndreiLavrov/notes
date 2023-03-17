import React from 'react';

import { useAppDispatch } from 'src/hooks/redux';
import { notesSlice } from 'src/store/reducers/NotesSlice';

function Tools() {
  const dispatch = useAppDispatch();
  const { deleteActiveNoteFromList, setInitialNoteAsActive } = notesSlice.actions;

  const createNewNoteListener = () => {
    dispatch(setInitialNoteAsActive());
  };

  const deleteNoteListener = () => {
    dispatch(deleteActiveNoteFromList());
  };

  return (
    <div className="tools">
      <button onClick={createNewNoteListener}>create new note</button>
      <button onClick={deleteNoteListener}>deleteNoteListener</button>
    </div>
  );
}

export default Tools;
