import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BlogEntry } from "./";
import styled from "styled-components";

const Links = () => {
  const { data, loading, error } = useSelector((state) => state.contentful);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.items) return <p>No data available.</p>;
  return (
    <Wrapper>
      <article className="blog-card">
      <h1>Blog</h1>
      <p>Here you can find all the 198 articles I wrote.</p>
      <div className="blog-line"></div>
        {data.items.map((postData, index) => {
          return <BlogEntry postData={postData} key={postData.sys.id} />;
        })}
      </article>
      <Link to="/" className="home">
        ⬅ Return to Homepage
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  .blog-line {
    width: 97%;
    margin: 3rem auto;
    height: 1px;
    background-color: var(--accent-color)
  }
  .home {
    margin-top: 5rem;
  }
  h1 {
    font-weight: 900;
    letter-spacing: -2px;
    text-align: center;
  }
  p{
    text-align:center;
  }
  .home {
    color: var(--accent-color);
    font-weight: 900;
  }
  .home:hover {
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
