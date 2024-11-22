import React from 'react';
import { FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Import relevant icons
import './footer.css'; // Import the CSS file for styling
import fotiaLogo from '../assets/FOTIA-LOGOO.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
   <div className='footer-head'>
   <img  className='fotia-logo-img-footer' src={fotiaLogo}/>  
        <h4>Fotia</h4>
        
   </div>
      <p>  Fotia is your gateway to effortless & wise investments. Join a community of like-minded individuals and unlock innovative tools for your investment & trading journey.
        </p>
        
        <div className="footer-links">
          <a href="/AboutUs" className="footer-link">About Us</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/Policy" className="footer-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="/service" className="footer-link">Terms of Service</a>
        </div>

        <div className="social-media">
          <a href="https://twitter.com/fotia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://facebook.com/fotia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            {/* <FaWhatsapp size={20} /> */}
          </a>
        </div>
      </div>
      <p className="footer-credits">© 2024 FOTIA. All rights reserved.</p>
    </footer>
  );
};

export default Footer;