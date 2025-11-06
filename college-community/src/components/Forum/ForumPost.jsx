import React from "react";
import "./ForumPost.css";

const ForumPost = () => {
  const comments = [
    "I suggest making short notes.",
    "Try previous year papers!",
  ];

  return (
    <div className="forum-post">
      <h2>Discussion Thread</h2>
      <div className="post-body">
        <p>This is a sample post content...</p>
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((c, i) => (
          <p key={i} className="comment">{c}</p>
        ))}
        <textarea placeholder="Add a comment..."></textarea>
        <button>Add Comment</button>
      </div>
    </div>
  );
};

export default ForumPost;
