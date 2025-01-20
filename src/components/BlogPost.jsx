import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";

const BlogPost = () => {
  const { data, loading, error } = useSelector((state) => state.contentful);
  const [singlePost, setSinglePost] = useState(null);
  const [postId, setPostId] = useState(null);
  const { slug } = useParams();
  console.log(`this is the slug: ${slug}`)
  console.log(singlePost)
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
      const post = data.items.find(item => item.fields.slug === slug);
      if (post) {
        setPostId(post.sys.id);  // Set the postId
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
  if (!data || !data.items || data.items.length === 0) return <p>No data available.</p>;

  return (
    <div>
      {singlePost ? (
        <div>
        <h1>{singlePost.fields.title}</h1> 
        <img src={singlePost.fields.featuredImage} />
        </div>
      ) : (
        <p>Loading single post...</p>
      )}
    </div>
  );
};

export default BlogPost;
