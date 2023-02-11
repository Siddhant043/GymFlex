import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/slice/homeSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
