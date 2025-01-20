import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlogCard = ({ postData }) => {
  const slug = postData.fields.slug;

  return (
    <Wrapper>
    <Link to={`${slug}`}>
      <div className="post" key={postData.sys.id}>
        <h4>{postData.fields.title}</h4>
        <img src={postData.fields.featuredImage} />
        {postData.fields.description}
      </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .post {
    border: 3px dashed var(--accent-color);
    padding: 1rem;
    border-radius: 15px;
    width: 350px;
    height: 350px;
  }
  .post:hover {
    background-color: var(--accent-color);
  }
  .post img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export default BlogCard;
