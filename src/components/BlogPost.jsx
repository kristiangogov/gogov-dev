import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
import { formatDate } from "../utils/dateUtils";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
const BlogPost = () => {
  const { data, loading, error } = useSelector((state) => state.contentful);
  const [singlePost, setSinglePost] = useState(null);
  const [postId, setPostId] = useState(null);
  const { slug } = useParams();
  console.log(`this is the slug: ${slug}`);
  console.log(singlePost);
  const getPost = async () => {
    try {
      const response = await axios.get(
        "/.netlify/functions/getSingleBlogPost",
        {
          params: { postId },
        }
      );
      setSinglePost(response.data.message);
    } catch (error) {
      console.error("Error fetching single post:", error.message);
    }
  };

  useEffect(() => {
    if (data && data.items && slug) {
      // Find the post matching the slug
      const post = data.items.find((item) => item.fields.slug === slug);
      if (post) {
        setPostId(post.sys.id); // Set the postId
      }
    }
  }, [data, slug]);
  useEffect(() => {
    if (postId) {
      getPost();
    }
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.items || data.items.length === 0)
    return <p>No data available.</p>;

  return (
    <Wrapper>
      {singlePost ? (
        <div>
          <h2>{singlePost.fields.title}</h2>
          <p className="date">
            Last Update: {formatDate(singlePost.sys.updatedAt)}
          </p>
          <p className="desc">{singlePost.fields.description}</p>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            className="markdown-content markdown-body"
          >
            {singlePost.fields.body}
          </ReactMarkdown>
        </div>
      ) : (
        <p>Loading single post...</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 650px;
  .markdown-content > * {
    all: revert;
  }

  .markdown-body pre {
    background-color: #1e1e1e;
    color: #dcdcdc;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    border: 1px solid #333333;
  }

  .markdown-body code {
    background-color: #333333;
    color: #dcdcdc;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: "Courier New", Courier, monospace;
  }

  .markdown-body pre code {
    background: none;
    color: inherit;
    display: block;
    padding: 0;
  }

  h2 {
    margin: 0;
  }
  .desc {
    margin-bottom: 1rem;
  }
  .date {
    color: var(--mediumColor);
  }
  img {
    width: 200px;
  }
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

export default BlogPost;
