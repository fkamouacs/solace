import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './slices/titleSlice'; // Import your reducer

export const store = configureStore({
  reducer: {
    title: titleReducer, // Add reducers here
  },
});

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
