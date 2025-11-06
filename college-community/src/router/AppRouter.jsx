import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Chatbot from "../components/Chatbot/Chatbot";
import ForumList from "../components/Forum/ForumList";
import ForumPost from "../components/Forum/ForumPost";
import Predictor from "../components/PerformancePredictor/Predictor";
import NotesSummarizer from "../components/NotesSummarizer/NotesSummarizer";
import EventRecommender from "../components/EventRecommender/EventRecommender";
import Profile from "../components/Profile/Profile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/forum" element={<ForumList />} />
      <Route path="/forum/:id" element={<ForumPost />} />
      <Route path="/predictor" element={<Predictor />} />
      <Route path="/summarizer" element={<NotesSummarizer />} />
      <Route path="/events" element={<EventRecommender />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRouter;
