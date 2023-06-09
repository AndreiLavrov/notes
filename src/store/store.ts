import { combineReducers, configureStore } from '@reduxjs/toolkit';

import notesReducer from 'src/store/reducers/NotesSlice';

const rootReducer = combineReducers({
  notesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
