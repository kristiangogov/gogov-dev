import React from "react";
import styled from "styled-components";
import { DarkTheme, Navbar } from "./";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const isDarkMode = useSelector((state) => state.darkTheme.isDarkMode);
  return (
    <Wrapper>
      {isDarkMode ? (
        <Link to="/">
          <img className="logo" src="/litelogo.svg" />
        </Link>
      ) : (
        <Link to="/">
          <img className="logo" src="/darklogo.svg" />
        </Link>
      )}
      <Navbar />
      <DarkTheme />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 650px;
  margin: 1rem auto;
  .logo {
    width: 30px;
  }
  @media screen and (max-width: 700px) {
    margin: 1rem;
  }
`;
export default Header;
