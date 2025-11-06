import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} College Community | Team 4 BRL</p>
    </footer>
  );
};

export default Footer;
