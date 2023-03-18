import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { serveDate } from 'src/services/serveDate';
import { serveLocalStorage } from 'src/services/serveLocalStorage';

import { INote } from 'src/models/INote';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

interface NotesState {
  notes: INote[];
  activeNote: INote;
  searchValue: string,
  isLoading: boolean;
  error: string;
}

const options: DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}
const { getDate, getDateNow } = serveDate();

const initialNoteData: INote = {
  id: getDateNow(),
  title: 'default title',
  description: 'default description',
  date: getDate(options),
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
        id: getDateNow(),
        date: getDate(options),
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
        id: getDateNow(),
        date: getDate(options),
      };

      setToLocStorage(updatedNotes);
    },
    setInitialNoteAsActive(state) {
      state.activeNote = {
        ...initialNoteData,
        id: getDateNow(),
        date: getDate(options),
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
