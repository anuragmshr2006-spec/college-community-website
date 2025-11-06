import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    department: "Computer Science",
    year: "3rd",
    interests: "AI, Web Development"
  });

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Department:</strong> {profile.department}</p>
        <p><strong>Year:</strong> {profile.year}</p>
        <p><strong>Interests:</strong> {profile.interests}</p>
      </div>
    </div>
  );
};

export default Profile;
