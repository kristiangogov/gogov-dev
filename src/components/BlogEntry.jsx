import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateUtils";

const BlogCard = ({ postData }) => {
  const slug = postData.fields.slug;

  return (
    <Wrapper key={postData.sys.id}>
      <article className="post" >
        <Link to={`${slug}`}>
          <h4>{postData.fields.title}</h4>
        </Link>
        <p className="date">
          Last Update: {formatDate(postData.sys.updatedAt)}
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .date {
    color: var(--mediumColor);
  }
  .description {
    margin: 0.25rem 0 2rem 0;
  }
  h4 {
    margin: 0;
  }
  a {
    color: var(--accent-color);
    font-weight: 900;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
`;

export default BlogCard;
