import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateUtils";

const BlogCard = ({ postData }) => {
  const slug = postData.fields.slug;

  return (
    <Wrapper key={postData.sys.id}>
      <Link to={`${slug}`}>
        <article className="post">
          <h4>{postData.fields.title}</h4>
          <p className="date">{formatDate(postData.sys.updatedAt)}
          </p>
        </article>
      <div className="line"></div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  .line {
    width: 97%;
    margin: 0 auto;
    height: 1px;
    background-color: var(--mediumColor)
  }
  .post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 650px;
    height: 50px;
    border-radius: 15px;
    padding: 35px 15px;
  }
  .post:hover + .line {
    display:none;
  }
  .post:hover {
    background-color: var(--mediumColor);
    text-decoration: none;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .description {
    margin: 0.25rem 0 2rem 0;
  }
  h4 {
    margin: 0;
  }
  a, a:hover {
    text-decoration: none;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -1px;
  }
`;

export default BlogCard;
