import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/darkThemeSlice";
import styled from "styled-components";

const DarkTheme = () => {
  const isDarkMode = useSelector((state) => state.darkTheme.isDarkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <Wrapper>
      <h1 onClick={handleToggle}>
        {isDarkMode ? "🌞" : "🌚"}
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  user-select:none;
  margin-bottom: 1rem;
`;

export default DarkTheme;
