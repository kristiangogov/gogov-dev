import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import darkThemeReducer from '../features/darkThemeSlice';
import contentfulReducer from '../features/contentfulSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    darkTheme: darkThemeReducer,
    contentful: contentfulReducer,
  },
});
