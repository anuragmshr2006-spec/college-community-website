import React, { useState } from "react";
import "./NotesSummarizer.css";

const NotesSummarizer = () => {
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    if (notes.trim().length === 0) return;
    setSummary("This is a brief summary of your notes (dummy output).");
  };

  return (
    <div className="notes-container">
      <h2>Smart Notes Summariser</h2>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Paste your notes here..."
      ></textarea>
      <button onClick={handleSummarize}>Summarize</button>
      {summary && <div className="summary-box">{summary}</div>}
    </div>
  );
};

export default NotesSummarizer;
