import React, { FC } from 'react';

import { INote } from 'src/models/INote';
import { notesSlice } from 'src/store/reducers/NotesSlice';
import { useAppDispatch } from 'src/hooks/redux';

interface INoteItemProps {
  item: INote;
}

const NoteItem: FC<INoteItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { setChosenNoteAsActive } = notesSlice.actions;

  const setActiveNoteListener = () => {
    dispatch(setChosenNoteAsActive({
      id: item.id,
      title: item.title,
      description: item.description,
      date: item.date,
      author: item.author,
    }));
  };

  return (
    <div className="noteItem" onClick={setActiveNoteListener}>
      <div>{item.id}</div>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.date}</div>
      <div>{item.author}</div>
    </div>
  );
}

export default NoteItem;
