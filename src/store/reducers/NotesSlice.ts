import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INote } from 'src/models/INote';

interface NotesState {
  notes: INote[];
  activeNote: INote;
  isLoading: boolean;
  error: string;
}

const initialNoteData: INote = {
  id: Date.now(),
  title: 'default title',
  description: 'default description',
  date: `${Date.now()}`,
  author: 'admin',
};

const initialState: NotesState = {
  notes: [],
  activeNote: initialNoteData,
  isLoading: false,
  error: '',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    deleteActiveNoteFromList(state) {
      state.notes = state.notes.filter(({ id }) => id !== state.activeNote.id);
      state.activeNote = {
        ...initialNoteData,
        id: Date.now(),
        date: String(Date.now()),
      };
    },
    saveActiveNoteToList(state, action: PayloadAction<INote>) {
      if (state.notes.some((item) => item.id === action.payload.id)) {
        state.notes = state.notes.map((item) => item.id === action.payload.id ? action.payload : item);
      } else {
        state.notes.push(action.payload);
      }
      state.activeNote = {
        ...initialNoteData,
        id: Date.now(),
        date: String(Date.now()),
      };
    },
    setInitialNoteAsActive(state) {
      state.activeNote = {
        ...initialNoteData,
        id: Date.now(),
        date: String(Date.now()),
      };
    },
    setChosenNoteAsActive(state, action: PayloadAction<INote>) {
      state.activeNote = action.payload;
    },
  },
  extraReducers: {},
});

export default notesSlice.reducer;
