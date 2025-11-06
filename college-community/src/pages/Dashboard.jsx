import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Quick access to all modules:</p>
      <div className="dashboard-links">
        <Link to="/chatbot">Lost & Found Chatbot</Link>
        <Link to="/forum">Anonymous Forum</Link>
        <Link to="/predictor">Performance Predictor</Link>
        <Link to="/summarizer">Smart Notes Summariser</Link>
        <Link to="/events">Event Recommender</Link>
        <Link to="/profile">My Profile</Link>
      </div>
    </div>
  );
};

export default Dashboard;
