import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/darkThemeSlice";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
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
      <div onClick={handleToggle}>
        {isDarkMode ? <BsSunFill className="toggle-icon" /> : <BsMoonFill className="toggle-icon" />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  user-select: none;
  .toggle-icon {
    font-size: 1.5rem;
  }
`;

export default DarkTheme;
