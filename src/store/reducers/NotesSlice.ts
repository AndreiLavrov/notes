import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { serveLocalStorage } from 'src/services/serveLocalStorage';

import { INote } from 'src/models/INote';

interface NotesState {
  notes: INote[];
  activeNote: INote;
  searchValue: string,
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

// use LS for supporting keeping of data for user(during we don't have BE)
const {
  setToLocStorage,
  getFromLocStorage,
} = serveLocalStorage();

const initialState: NotesState = {
  notes: getFromLocStorage(),
  activeNote: initialNoteData,
  searchValue: '',
  isLoading: false,
  error: '',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    deleteActiveNoteFromList(state) {
      const updatedNotes = state.notes.filter(({ id }) => id !== state.activeNote.id);
      state.notes = updatedNotes;
      state.activeNote = {
        ...initialNoteData,
        id: Date.now(),
        date: String(Date.now()),
      };

      setToLocStorage(updatedNotes);
    },
    saveActiveNoteToList(state, action: PayloadAction<INote>) {
      let updatedNotes = [];
      if (state.notes.some((item) => item.id === action.payload.id)) {
        updatedNotes = state.notes.map((item) => item.id === action.payload.id ? action.payload : item);
        state.notes = updatedNotes;
      } else {
        updatedNotes = [...state.notes, action.payload];
        state.notes = updatedNotes;
      }
      state.activeNote = {
        ...initialNoteData,
        id: Date.now(),
        date: String(Date.now()),
      };

      setToLocStorage(updatedNotes);
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
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {},
});

export default notesSlice.reducer;
