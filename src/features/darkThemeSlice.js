import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: localStorage.getItem("isDarkMode") 
    ? localStorage.getItem("isDarkMode") === "true"
    : window.matchMedia("(prefers-color-scheme: dark)").matches,
};

const darkThemeSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", state.isDarkMode);
    },
  },
});

export const { toggleTheme } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
