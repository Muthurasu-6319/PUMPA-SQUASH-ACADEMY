import React from 'react';
import { 
  MapPin, 
  Mail, 
  Globe, 
  MessageCircle 
} from 'lucide-react';
import './Footer.css';
import logo from './assets/pumpa-logo.png';
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Left: Logo & Tagline */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Pumpa Squash Academy Logo" className="logo-img" />
          </div>
          <p className="footer-tagline">Start Here... Shine Everywhere</p>
          <div className="accreditation-logos" style={{display: 'flex', gap: '10px', marginTop: '1rem'}}>
            <span style={{fontSize: '0.8rem', padding: '5px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px'}}>WSF Level 3</span>
            <span style={{fontSize: '0.8rem', padding: '5px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px'}}>Award Winning</span>
          </div>
        </div>

        {/* Middle 1: Locations */}
        <div className="footer-locations">
          <h4 className="footer-title">OUR LOCATIONS</h4>
          <ul className="location-list">
            <li>
              <MapPin className="footer-icon" size={20} />
              <div className="loc-text">
                <strong>Pumpa Squash Academy (Subang Branch)</strong><br/>
                Jalan SS 12/1, Ss 12,<br/>
                47500 Subang Jaya, Selangor, Malaysia
              </div>
            </li>
            <li>
              <MapPin className="footer-icon" size={20} />
              <div className="loc-text">
                <strong>Pumpa Squash Academy (Cyberjaya Branch)</strong><br/>
                Jalan Kelab, Cyberjaya,<br/>
                63000 Cyberjaya, Selangor, Malaysia
              </div>
            </li>
          </ul>
          <div className="footer-map" style={{marginTop: '1.5rem'}}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.570956557577!2d101.5919!3d3.0768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDQnMzYuNSJOIDEwMcKwMzUnMzAuOCJF!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy" 
              width="100%" 
              height="150" 
              style={{border: 0, borderRadius: '8px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
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
          <button className="btn-primary" style={{marginTop: '1.5rem'}}>
            BOOK A FREE TRIAL
          </button>
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
      
      <div className="footer-copyright" style={{textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem'}}>
        &copy; {new Date().getFullYear()} Pumpa Squash Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
