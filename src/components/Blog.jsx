import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { BlogEntry } from "./";
import styled from "styled-components";

const Links = () => {
    const { data, loading, error } = useSelector((state) => state.contentful);
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.items) return <p>No data available.</p>;
  return (
    <Wrapper>
      <article className="blog-card">
        {data.items.map((postData, index) => {
          return (
            <BlogEntry
              postData={postData}
              key={postData.sys.id}
            />
          );
        })}
      </article>
      <Link to="/" className='home'>⬅ Return to Homepage</Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  .home {
    margin-top: 5rem;
  }
  h1 {
    font-weight: 900;
    letter-spacing: -2px;
  }
  a {
    color: var(--accent-color);
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
