import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import characterApiSlice from '../features/characters/charactersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    characterApi: characterApiSlice,
  },
});
