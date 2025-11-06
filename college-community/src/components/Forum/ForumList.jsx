import React from "react";
import { Link } from "react-router-dom";
import "./ForumList.css";

const ForumList = () => {
  const posts = [
    { id: 1, title: "How to prepare for semester exams?" },
    { id: 2, title: "Best laptop for CS students?" },
  ];

  return (
    <div className="forum-list">
      <h2>Anonymous Discussion Forum</h2>
      <Link to="/forum/new" className="new-post-btn">+ New Post</Link>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link to={`/forum/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumList;
