"use client"
import Link from "next/link";
import { useState } from "react";

export default function Login () {
    const [blog, setBlog] = useState({});

    return (
        <div className="add-blog">
            <label>Title</label>
            <input type="text"></input>
            <textarea></textarea>
            <label>Tags</label>
            <input></input>
            <input type="submit" className="submit" />
        </div>
    )
}