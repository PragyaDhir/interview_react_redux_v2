import { configureStore } from '@reduxjs/toolkit';
import reducers from './combine';

export const store = configureStore({
  reducer: reducers,
});
