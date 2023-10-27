import React from 'react';

import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Powered by daia-code</p>
        <div className="social-links">
          <a href="https://www.instagram.com/daia.code/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://github.com/daia-code" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="footer-year">
        <p>&copy; 2023</p>
      </div>
    </footer>
  );
}
