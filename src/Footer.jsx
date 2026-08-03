import React from 'react';
import { 
  MapPin, 
  Mail, 
  Globe, 
  MessageCircle 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Left: Logo & Tagline */}
        <div className="footer-left">
          <div className="footer-logo">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM72 41L61 51.5L68 76H56L50 63L44 76H32L39 51.5L28 41H42.5L50 18L57.5 41H72Z" fill="#8cc63f"/>
            </svg>
            <div className="footer-logo-text">
              <span>PUMPA</span>
              <span className="sub">SQUASH ACADEMY</span>
            </div>
          </div>
          <p className="footer-tagline">Start Here... Shine Everywhere</p>
        </div>

        {/* Middle 1: Locations */}
        <div className="footer-locations">
          <h4 className="footer-title">OUR LOCATIONS</h4>
          <ul className="location-list">
            <li>
              <MapPin className="footer-icon" size={20} />
              <div className="loc-text">
                <strong>Subang Jaya (Main) Branch</strong><br/>
                Subang Lake View Club (SLVC)<br/>
                Jalan SS 12/1, 47500 Subang Jaya,<br/>
                Selangor, Malaysia
              </div>
            </li>
            <li>
              <MapPin className="footer-icon" size={20} />
              <div className="loc-text">
                <strong>Cyberjaya Branch</strong><br/>
                Pumpa Squash Academy (Cyberjaya Branch)<br/>
                Jalan Kelab, 63000 Cyberjaya,<br/>
                Selangor, Malaysia
              </div>
            </li>
            <li>
              <MapPin className="footer-icon" size={20} />
              <div className="loc-text">
                <strong>Putrajaya Branch</strong><br/>
                Precinct 11, Sports Complex,
              </div>
            </li>
          </ul>
        </div>

        {/* Middle 2: Contact Us */}
        <div className="footer-contact">
          <h4 className="footer-title">CONTACT US</h4>
          <ul className="contact-list">
            <li>
              <Mail className="footer-icon" size={20} />
              <span>info@pumpasquashacademy.com</span>
            </li>
            <li>
              <Globe className="footer-icon" size={20} />
              <span>www.pumpasquashacademy.com</span>
            </li>
          </ul>
        </div>

        {/* Right: Follow Us */}
        <div className="footer-social">
          <h4 className="footer-title">FOLLOW US</h4>
          <div className="social-icons">
            <a href="#" className="social-icon fb">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="white"/></svg>
            </a>
            <a href="#" className="social-icon ig">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" color="white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-icon yt">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="social-icon wa"><MessageCircle size={20} color="white" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
