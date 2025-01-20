import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPost = () => {
  const { slug } = useParams();
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    callContentful();
  }, []);
  console.log(postData)
  const callContentful = async () => {
    try {
      const res = await axios.get("/.netlify/functions/getSingleBlogPost");
      setPostData(res.data.message);
    } catch (error) {
      console.error("Error calling Netlify function:", error);
      setPostData("Error fetching data");
    }
  };

  return <div>
    
  </div>;
};

export default BlogPost;
