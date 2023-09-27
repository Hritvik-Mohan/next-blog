import React from "react";
import data from "../data/data.json";
import Blog from "../components/Blog";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="blogs-container">
      {data.map((blog) => (
        <div key={blog.id} className="blog-container-individual">
          <Blog
            id={blog.id}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            date={blog.date}
            tags={blog.tags}
          />
          <Link href={`/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
