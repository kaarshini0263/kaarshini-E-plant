import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";
import "./Footer.css"; // Create this CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Sections */}
        <div className="footer-sections">
          {/* About Section */}
          <div className="footer-section">
            <h3 style={{color:'black'}}>🌱 Green Heaven</h3>
            <p style={{color:'black'}}>
              Your one-stop shop for all things green. We provide quality plants,
              gardening tools, and expert advice to help your garden thrive.
            </p>
            <div className="social-icons">
              <FiInstagram />
              <FiFacebook/>
              <FiMail/>
              <FiTwitter/>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 style={{color:'black'}}>Quick Links</h3>
            <ol style={{listStyleType:"none"}}>
              <li><Link to="/"style={{textDecoration:'none',color:'black'}}>Home</Link></li>
              <li><Link to="/about"style={{textDecoration:'none',color:'black'}}>About Us</Link></li>
              <li><Link to="/contact"style={{textDecoration:'none',color:'black'}}>Contact</Link></li>
            </ol>
          </div>

         

          {/* Contact Info */}
          <div className="footer-section">
            <h3 style={{color:'black'}}>Contact Us</h3>
            <ol style={{listStyleType:"none"}}>
              <li style={{color:'black'}}>123 Garden Street, Plantville</li>
              <li style={{color:'black'}}>hello@greenheaven.com</li>
              <li style={{color:'black'}}>(123) 456-7890</li><br></br>
              <li style={{color:'black'}}>Mon-Fri: 9am-5pm</li>
            </ol>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p style={{color:'black'}}>&copy; {new Date().getFullYear()} Green Heaven. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/shipping">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;