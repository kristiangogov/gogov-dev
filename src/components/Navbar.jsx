import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
        <Link to="/links" className="menu-button">LINKS</Link>
        <Link to="/blog" className="menu-button">BLOG</Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    max-width: 650px;
  .menu-button {
    border-radius: 10px;
    padding: 5px 15px;
  }
  .menu-button:hover {
    background-color: var(--mediumColor);
    text-decoration: none;
  }
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
