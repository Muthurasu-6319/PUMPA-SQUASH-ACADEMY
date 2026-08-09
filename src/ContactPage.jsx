import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar, Menu, MapPin, Mail, Globe,
  MessageCircle, Clock, Send, Phone, CheckCircle2
} from 'lucide-react';
import Footer from './Footer';
import './ContactPage.css';

import imgHero from './assets/Gallery/DSC_0145.JPG';
import imgCta from './assets/Gallery/DSC_0548.JPG';

const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";
import SEO from './components/SEO';

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.12, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const locations = [
  {
    name: 'SUBANG JAYA (MAIN BRANCH)',
    address: ['Subang Lake View Club (SLVC)', 'Jalan SS 13/4,', '47500 Subang Jaya,', 'Selangor, Malaysia'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.5775!3d3.0867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c4c89f3f1c5%3A0x0!2sSLVC!5e0!3m2!1sen!2smy!4v1700000000',
  },
  {
    name: 'CYBERJAYA BRANCH',
    address: ['Pumpa Squash Academy (Cyberjaya Branch)', 'Jalan Kelab,', '63000 Cyberjaya,', 'Selangor, Malaysia'],
    mapUrl: '',
  },
  {
    name: 'PUTRAJAYA BRANCH',
    address: ['Precinct 11, Sports Complex,', '62000 Putrajaya,', 'Malaysia'],
    mapUrl: '',
  },
];

const subjects = ['General Enquiry', 'Book a Trial', 'Program Information', 'Coaching Partnership', 'Other'];

export default function ContactPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [heroRef, heroIn] = useInView();
  const [formRef, formIn] = useInView();
  const [locsRef, locsIn] = useInView();
  const [infoRef, infoIn] = useInView();
  const [ctaRef, ctaIn] = useInView();
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    let messageText = `*New Contact Enquiry - Pumpa Squash Academy*\n\n`;
    messageText += `*Full Name:* ${form.name}\n`;
    messageText += `*Email:* ${form.email}\n`;
    if (form.phone) messageText += `*Phone:* ${form.phone}\n`;
    messageText += `*Subject:* ${form.subject}\n`;
    messageText += `*Message:* ${form.message}\n`;

    const whatsappUrl = `https://wa.me/601111989375?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact Us | Pumpa Squash Academy Selangor & KL"
        description="Get in touch with Pumpa Squash Academy. Call us, WhatsApp us, or drop an email to start your squash journey in Malaysia today."
        keywords="Contact Pumpa Squash Academy, Squash Coaching Selangor Contact, Squash Academy KL Phone, Learn Squash Malaysia Contact"
      />
      {/* ── NAVBAR ── */}
      <nav className="contact-navbar">
        <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Pumpa Squash Academy Logo" className="logo-img" />
          <div className="logo-text">
            PUMPA
            <span className="logo-subtext">SQUASH ACADEMY</span>
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li onClick={() => navigate('/')}>HOME</li>
          <li onClick={() => navigate('/about')}>ABOUT US</li>
          <li onClick={() => navigate('/programs')} style={{ cursor: 'pointer' }}>PROGRAMS</li>
          <li onClick={() => navigate('/gallery')} style={{ cursor: 'pointer' }}>GALLERY</li>
          <li className="active">CONTACT US</li>
          <li className="mobile-only-btn">
            <button className="btn-primary" onClick={() => navigate('/booking')} style={{ width: '100%', justifyContent: 'center' }}>
              <Calendar size={18} /> BOOK A FREE TRIAL
            </button>
          </li>
        </ul>

        <button className="nav-btn" onClick={() => navigate('/booking')}>
          <Calendar size={18} /> BOOK A FREE TRIAL
        </button>
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* ── HERO BANNER ── */}
      <section className="contact-hero" ref={heroRef}>
        <div className={`contact-hero-left ${heroIn ? 'animate-in' : ''}`}>
          <div className="contact-hero-label">CONTACT US</div>
          <h1 className="contact-hero-title">
            CONTACT <span className="ch-green">US</span>
          </h1>
          <p className="contact-hero-cursive">We're Here to Help!</p>
          <p className="contact-hero-desc">
            Have a question or ready to get started?<br />
            We'd love to hear from you.<br />
            Reach out to us today!
          </p>
          <button className="btn-primary contact-hero-btn" onClick={() => navigate('/booking')}>
            <Calendar size={18} /> BOOK A FREE TRIAL
          </button>
        </div>
        <div className={`contact-hero-right ${heroIn ? 'animate-in-right' : ''}`}>
          <img
            src={imgHero}
            alt="Coach and student at Pumpa Squash Academy"
            className="contact-hero-img"
          />
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="contact-main">

        {/* ── MESSAGE FORM ── */}
        <div className={`contact-form-card ${formIn ? 'animate-in' : ''}`} ref={formRef}>
          <div className="form-card-header">
            <Mail size={24} className="form-header-icon" />
            <div>
              <h2 className="form-title">SEND US A MESSAGE</h2>
              <p className="form-subtitle">Fill in the form below and we'll get back to you as soon as possible.</p>
            </div>
          </div>

          {submitted ? (
            <div className="success-state">
              <CheckCircle2 size={56} className="success-icon" />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+60 12 345 6789" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" placeholder="Tell us how we can help you..." rows={5} value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-primary send-btn" disabled={loading}>
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  <><Send size={18} /> SEND MESSAGE</>
                )}
              </button>
            </form>
          )}
        </div>

        {/* ── LOCATIONS ── */}
        <div className={`locations-card ${locsIn ? 'animate-in' : ''}`} ref={locsRef}>
          <div className="locs-header">
            <MapPin size={24} className="locs-icon" />
            <h2 className="locs-title">OUR TRAINING LOCATIONS</h2>
          </div>

          <div className="location-list-items">
            {locations.map((loc, i) => (
              <div key={i} className="location-item" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="loc-dot"><MapPin size={16} /></div>
                <div className="loc-content">
                  <h4 className="loc-name">{loc.name}</h4>
                  {loc.address.map((line, j) => <p key={j} className="loc-addr">{line}</p>)}
                </div>
              </div>
            ))}
          </div>

          <div className="hours-block">
            <div className="hours-header">
              <Clock size={22} className="hours-icon" />
              <h3 className="hours-title">OPERATING HOURS</h3>
            </div>
            <div className="hours-rows">
              <div className="hours-row">
                <span className="hours-day">Monday – Friday</span>
                <span className="hours-time">2:00 PM – 10:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Saturday – Sunday</span>
                <span className="hours-time">8:00 AM – 6:00 PM</span>
              </div>
              <div className="hours-note">(Public Holidays by Appointment)</div>
            </div>
          </div>

          {/* Map */}
          <div className="map-embed">
            <h3 className="map-title"><MapPin size={18} /> FIND US</h3>
            <iframe
              title="Pumpa Squash Academy Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63749.94226!2d101.5919!3d3.0768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c4c89f3f1c5%3A0x0!2sSubang%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1700000000000"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ── */}
      <section className={`quick-contact-strip ${infoIn ? 'animate-in' : ''}`} ref={infoRef}>
        <a href="https://wa.me/601111989375" target="_blank" rel="noopener noreferrer" className="qc-item" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="qc-icon wa"><MessageCircle size={26} /></div>
          <div>
            <h4 className="qc-title">WHATSAPP US</h4>
            <p className="qc-desc">+60 11-1198 9375 (Click to chat)</p>
          </div>
        </a>
        <div className="qc-divider" />
        <a href="mailto:info@pumpasquashacademy.com" className="qc-item" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="qc-icon mail"><Mail size={26} /></div>
          <div>
            <h4 className="qc-title">EMAIL US</h4>
            <p className="qc-desc">info@pumpasquashacademy.com (Click to email)</p>
          </div>
        </a>
        <div className="qc-divider" />
        <a href="https://pumpa-squash-academy.vercel.app" target="_blank" rel="noopener noreferrer" className="qc-item" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="qc-icon web"><Globe size={26} /></div>
          <div>
            <h4 className="qc-title">VISIT OUR WEBSITE</h4>
            <p className="qc-desc">www.pumpasquashacademy.com (Click to visit)</p>
          </div>
        </a>
        <div className="qc-divider" />
        <div className="qc-item">
          <h4 className="qc-title" style={{ marginBottom: '0.8rem' }}>FOLLOW US</h4>
          <div className="social-icons-row">
            <a href="https://www.facebook.com/pumpasquashacademy" target="_blank" rel="noopener noreferrer" className="social-icon fb" aria-label="Facebook">
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="https://www.instagram.com/pumpasquashacademy?igsh=MWE2cXMxdXJ6NjR3Yg==" target="_blank" rel="noopener noreferrer" className="social-icon ig" aria-label="Instagram">
              <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://wa.me/601111989375" target="_blank" rel="noopener noreferrer" className="social-icon wa" aria-label="WhatsApp">
              <MessageCircle size={18} color="white" />
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="contact-cta" ref={ctaRef}>
        <div className={`contact-cta-inner ${ctaIn ? 'animate-in' : ''}`}>
          <div className="cta-left-img">
            <img
              src={imgCta}
              alt="Squash action"
              className="cta-action-img"
            />
          </div>
          <div className="cta-content">
            <h2 className="contact-cta-title">
              READY TO START YOUR <span className="ch-green">SQUASH JOURNEY?</span>
            </h2>
            <p className="contact-cta-sub">Book your free trial today and experience the Pumpa difference!</p>
            <button className="btn-primary cta-btn" onClick={() => navigate('/booking')}>
              <Calendar size={20} /> BOOK A FREE TRIAL
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
