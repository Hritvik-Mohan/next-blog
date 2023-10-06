"use client";
import { useData } from "@/context/AuthContext";
import { get } from "@/utils/api";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Category() {
  const params = useParams();
  const { tagId } = params;
  console.log(tagId);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/tags/getAllTags")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
    console.log(category)
    // Filter blogs based on the user ID when userData is available
    if (category.length > 0) {
      const filteredBlogs = blogs.filter((blog) => blog.user === userData._id);
    }
  }, []);



  return (
    <div>
      <div className="heading-tag">{tagId}</div>
    </div>
  );
}
