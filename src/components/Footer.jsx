import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Company Info */}
        <div className="footer-section">
          <h3>MIDO Engineering</h3>
          <p>&copy; {new Date().getFullYear()} MIDO Engineering. All Rights Reserved.</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Contact & Social Media */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: donjoutd@gmail.com</p>
          <p>Phone: +251-911-873268</p>
          <p>Phone: +251-911-548693</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
