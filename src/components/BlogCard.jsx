import React from "react";

const BlogCard = ({blogData}) => {
    console.log(blogData)
    if (blogData === null ) {
        return <div>loading</div>
    }
  return (
    <div>
      {blogData.items.map((post, index) => {
        return (
          <div key={post.sys.id}>
            {post.fields.title}
            <img src={post.fields.featuredImage} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
