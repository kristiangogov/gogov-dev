import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import darkThemeReducer from '../features/darkThemeSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    darkTheme: darkThemeReducer,
  },
});
