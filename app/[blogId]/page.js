"use client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import blog from "../data/data.json";
import { get } from "@/utils/api";
import { AuthContextData } from "@/context/AuthContext";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const params = useParams();
  const { blogId } = params;

  useEffect(() => {
    get("blogs/")
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
      });
  }, []);

  const post = blogs.find((item) => item._id == blogId);

  if (!post) return <p>Blog post not found</p>;

  return (
    <div className="blog-post">
      <div className="blog-img">
        <img src="https://picsum.photos/700/300" />
      </div>
      <h2 className="blog-post-heading">{post.title}</h2>
      <p>{post.username}</p>
      <p>{post.description}</p>
      {/* <p>Date: {post.date}</p> */}
      {/* <p>Tags: {post.tags.join(", ")}</p> */}
    </div>
  );
};

export default BlogPost;
