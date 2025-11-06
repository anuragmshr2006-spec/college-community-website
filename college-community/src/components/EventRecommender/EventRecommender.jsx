import React, { useState } from "react";
import "./EventRecommender.css";

const EventRecommender = () => {
  const [interest, setInterest] = useState("");
  const [events, setEvents] = useState([]);

  const handleRecommend = (e) => {
    e.preventDefault();
    if (interest === "sports") setEvents(["Football Tournament", "Cricket Match"]);
    else if (interest === "tech") setEvents(["Hackathon", "AI Workshop"]);
    else setEvents(["Cultural Fest", "Photography Contest"]);
  };

  return (
    <div className="event-container">
      <h2>Event Recommender</h2>
      <form onSubmit={handleRecommend}>
        <select onChange={(e) => setInterest(e.target.value)}>
          <option value="">Select your interest</option>
          <option value="sports">Sports</option>
          <option value="tech">Technology</option>
          <option value="arts">Arts</option>
        </select>
        <button type="submit">Recommend</button>
      </form>
      <div className="event-list">
        {events.map((ev, i) => (
          <p key={i} className="event-item">{ev}</p>
        ))}
      </div>
    </div>
  );
};

export default EventRecommender;
