import React from "react";
const today = new Date();
const currentYear = today.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
};

export default Footer;
