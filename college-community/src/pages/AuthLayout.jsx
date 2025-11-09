
import React from 'react';
import { Link } from 'react-router-dom';


const AuthLayout = ({ form, isLogin }) => {
  
  const overlayContent = isLogin ? {
    title: "Hello, Peer!",
    subtitle: "Enter your details and start your journey with the College Community.",
    buttonText: "Sign Up",
    linkTo: "/signup"
  } : {
    title: "Welcome Back!",
    subtitle: "To keep connected, please log in with your personal info.",
    buttonText: "Sign In",
    linkTo: "/login"
  };


  const authClass = isLogin ? 'login-active' : 'signup-active';

  return (
    <div className="auth-wrapper">
      <div className={`auth-container ${authClass}`}>
        
        <div className="form-panel">
          {form}
        </div>

       
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel">
              <h1>{overlayContent.title}</h1>
              <p>{overlayContent.subtitle}</p>
              <Link to={overlayContent.linkTo} className="btn btn-ghost transition-300">
                {overlayContent.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;