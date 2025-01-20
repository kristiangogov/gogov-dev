import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
        <Link to="/links">LINKS</Link>
        <Link to="/blog">BLOG</Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    max-width: 650px;
  a {
    color: var(--textColor);
    font-weight: 900;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: var(--accent-color)
  }
  h5 {
    margin-top: 3rem;
  }
`;

export default Navbar;
