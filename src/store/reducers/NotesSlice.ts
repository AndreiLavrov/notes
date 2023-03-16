import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INote } from '../../models/INote';

interface NotesState {
  notes: INote[];
  isLoading: boolean;
  error: string;
}

const initialState: NotesState = {
  notes: [],
  isLoading: false,
  error: '',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      state.notes.push(action.payload);
    },
    deleteNote(state, action: PayloadAction<number>) {
      state.notes = state.notes.filter(({ id }) => id !== action.payload);
    },
    updateNote(state, action: PayloadAction<INote>) {
      state.notes = state.notes.map((item) => (item.id === action.payload.id) ? action.payload : item);
    },
  },
  extraReducers: {},
});

export default notesSlice.reducer;
