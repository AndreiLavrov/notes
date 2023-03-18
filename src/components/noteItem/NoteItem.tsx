import React, { FC } from 'react';

import { INote } from 'src/models/INote';
import { notesSlice } from 'src/store/reducers/NotesSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import styles from './NoteItem.module.scss';

interface INoteItemProps {
  item: INote;
}
const NoteItem: FC<INoteItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { setChosenNoteAsActive } = notesSlice.actions;
  const { activeNote } = useAppSelector(state => state.notesReducer);

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
    <div className={activeNote.id === item.id ? styles.noteItemActive : styles.noteItem} onClick={setActiveNoteListener}>
      <h3>{item.title}</h3>
      <div className={styles.descWrapper}>
        <span>{item.date}</span>
        <span className={styles.description}>{item.description}</span>
      </div>
    </div>
  );
}

export default NoteItem;
