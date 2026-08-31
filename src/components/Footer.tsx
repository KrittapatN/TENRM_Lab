import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>TENRM Lab</h3>
          <p>Tropical Ecology and Natural Resource Management Laboratory</p>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} TENRM Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
