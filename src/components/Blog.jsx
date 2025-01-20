import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlogCard } from "./";

const Links = () => {
    const { data, loading, error } = useSelector((state) => state.contentful);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.items) return <p>No data available.</p>;
  return (
    <Wrapper>
      <article className="blog-card">
        {data.items.map((postData, index) => {
          return (
            <BlogCard
              postData={postData}
              key={postData.sys.id}
            />
          );
        })}
      </article>
      <Link to="/">⬅ Return to Homepage</Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .blog-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

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
