import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="College Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
