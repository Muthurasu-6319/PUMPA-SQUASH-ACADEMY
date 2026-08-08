import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import './Footer.css';

const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={logo} alt="Pumpa Squash Academy Logo" className="footer-logo-img" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
            <span className="footer-logo-text">PUMPA<br /><span className="footer-logo-sub">SQUASH ACADEMY</span></span>
          </Link>
          <p className="footer-tagline">
            Developing champions on and off the court. Professional squash coaching for all ages and skill levels.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/pumpasquashacademy" target="_blank" rel="noopener noreferrer" className="footer-social-btn facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/pumpasquashacademy?igsh=MWE2cXMxdXJ6NjR3Yg==" target="_blank" rel="noopener noreferrer" className="footer-social-btn instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://wa.me/601111989375" target="_blank" rel="noopener noreferrer" className="footer-social-btn whatsapp" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/booking">Book Free Trial</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Programs</h4>
          <ul className="footer-links">
            <li><Link to="/programs">Junior Development</Link></li>
            <li><Link to="/programs">Advanced Training</Link></li>
            <li><Link to="/programs">Adult Coaching</Link></li>
            <li><Link to="/programs">Competitive Prep</Link></li>
            <li><Link to="/programs">Holiday Camps</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={15} className="footer-contact-icon" />
              <span>Selangor &amp; Kuala Lumpur, Malaysia</span>
            </li>
            <li>
              <Phone size={15} className="footer-contact-icon" />
              <a href="https://wa.me/601111989375" target="_blank" rel="noopener noreferrer">+60 11-1198 9375</a>
            </li>
            <li>
              <Mail size={15} className="footer-contact-icon" />
              <a href="mailto:info@pumpasquashacademy.com">info@pumpasquashacademy.com</a>
            </li>
            <li>
              <Globe size={15} className="footer-contact-icon" />
              <a href="https://www.pumpasquashacademy.com" target="_blank" rel="noopener noreferrer">www.pumpasquashacademy.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Pumpa Squash Academy. All rights reserved.</p>
        <p className="footer-credit">Empowering champions through world-class squash coaching.</p>
      </div>
    </footer>
  );
};

export default Footer;
