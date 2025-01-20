import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlogCard } from "./";

const Links = () => {
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    callContentful();
  }, []);
  // console.log(blogData);
  const callContentful = async () => {
    try {
      const res = await axios.get("/.netlify/functions/getAllBlogPosts");
      setBlogData(res.data.message);
    } catch (error) {
      console.error("Error calling Netlify function:", error);
      setBlogData("Error fetching data");
    }
  };
  return (
    <Wrapper>
      <BlogCard blogData={blogData} />
      <h1>This section will contain my blog, but clearly still doesn't 🙈</h1>
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
