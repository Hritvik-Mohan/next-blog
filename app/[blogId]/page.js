"use client";
import React from "react";
import { useParams } from "next/navigation";
import blog from "../data/data.json";

const BlogPost = () => {
  const params = useParams();
  const { blogId } = params;
  const post = blog.find((item) => item.id == blogId);

  if (!post) return <p>Blog post not found</p>;

  return (
    <div className="blog-post">
      <h2 className="blog-post-heading">{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <p>Tags: {post.tags.join(", ")}</p>
    </div>
  );
};

export default BlogPost;
