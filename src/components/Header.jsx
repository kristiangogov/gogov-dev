import React from "react";
import styled from "styled-components";
import { DarkTheme } from "./";
import { useSelector } from "react-redux";

const Header = () => {
  const isDarkMode = useSelector((state) => state.darkTheme.isDarkMode);
  return (
    <Wrapper>
      {isDarkMode ? (
        <img className="logo" src="/litelogo.svg" />
      ) : (
        <img className="logo" src="/darklogo.svg" />
      )}
      <DarkTheme />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  .logo {
    width: 30px;
  }
`;
export default Header;
