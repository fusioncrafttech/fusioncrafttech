import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/FCT Logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="logo-icon"><img src={logo} alt="FusionCraft Tech" /></span>
              FusionCraftTech
            </h3>
            <p className="footer-description">
              Transforming ideas into digital reality. Your trusted partner for innovative solutions.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>Web/App Development</li>
              <li>SaaS Development</li>
              <li>UI Design</li>
              <li>Video Editing</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>Email: fusioncrafttech@gmail.com</li>
              <li>Phone: +91 9080326730</li>
              <li>Phone: +91 9360121830</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FusionCraftTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

