import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = () => {
  return (
    <Wrapper>
      <h1>This section will contain links, but clearly still doesn't 🙈</h1>
      <Link to="/">⬅ Return to Homepage</Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 650px;
  h1 {
    font-weight: 900;
    letter-spacing: -2px;
  }
  a {
    color: #ffc83d;
    font-weight: 900;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
  h5 {
    margin-top: 3rem;
  }
  @media screen and (max-width: 700px) {
    max-width: 350px;
    margin: 1rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export default Links;
