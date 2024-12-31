import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
};

const darkThemeSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
