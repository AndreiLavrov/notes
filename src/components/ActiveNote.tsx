import React, { useEffect, useState, ChangeEvent } from 'react';

import { INote } from 'src/models/INote';
import { notesSlice } from 'src/store/reducers/NotesSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';

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
  }, [activeNote])

  const onSaveListener = () => {
    dispatch(saveActiveNoteToList(state));
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setState({...state, title: e.target.value})
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState({...state, description: e.target.value})
  };

  return (
    <div className="activeNote">
      <div>{state.id}</div>
      <div>{state.date}</div>
      <div>
        <input value={state.title} onChange={onChangeTitle} />
      </div>
      <div>
        <textarea value={state.description} onChange={onChangeDescription} />
      </div>
      <div>{activeNote.author}</div>

      <button onClick={onSaveListener}>Save</button>
    </div>
  );
}

export default ActiveNote;
