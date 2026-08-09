import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar, Menu, CheckCircle2, Target, Eye, Heart,
  Star, Award, Users, Trophy, Globe, UserCheck, User
} from 'lucide-react';
import Footer from './Footer';
import './AboutPage.css';

import img1 from './assets/Gallery/DSC_0049.JPG';
import img2 from './assets/Gallery/DSC_0051.JPG';
import img3 from './assets/Gallery/DSC_0054.JPG';
import img4 from './assets/Gallery/DSC_0070.JPG';
import img5 from './assets/Gallery/DSC_0107.JPG';
import yogeswaranImg from './assets/Gallery/yogeswaran.jpeg';

const pushppaImg = "/pushppa-picture.png";
const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";

// Intersection Observer Hook
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// Animated counter
function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const pillars = [
  { icon: <Trophy size={28} />, title: 'DEVELOPING TALENT', desc: 'Structured programs designed to bring out the best in every player.' },
  { icon: <Heart size={28} />, title: 'BUILDING CHARACTER', desc: 'We instill discipline, respect, resilience and sportsmanship.' },
  { icon: <Users size={28} />, title: 'SUPPORTIVE ENVIRONMENT', desc: 'A fun, safe and positive space where every player feels valued.' },
  { icon: <Star size={28} />, title: 'PROVEN RESULTS', desc: 'From beginners to champions, we are with you every step of the way.' },
];

const pushppaCredentials = [
  'Former Malaysian National Player',
  'World No. 68',
  'WSF Level 3 Certified Coach',
  'Malaysia Influential Educator Award 2023',
  'Top 50 Malaysia Influential Educators 2024',
];

const yogesCredentials = [
  'Head Coach & Co-Founder (22+ Years Coaching Experience)',
  'Former High-Level Competitor in Malaysia Games (SUKMA)',
  'WSF Certified Coach & Grassroots Development Specialist',
  'Appointed Selangor State Coach for Junior High Performance (2013)',
  'Mentored & Developed Numerous Junior Top 8 Ranked Players',
];

const values = ['Passion', 'Respect', 'Integrity', 'Teamwork', 'Discipline', 'Excellence', 'Fun'];

import SEO from './components/SEO';

export default function AboutPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [heroRef, heroIn] = useInView();
  const [pillarsRef, pillarsIn] = useInView();
  const [pushppaRef, pushppaIn] = useInView();
  const [yogesRef, yogesIn] = useInView();
  const [missionRef, missionIn] = useInView();
  const [ctaRef, ctaIn] = useInView();

  return (
    <>
      <SEO
        title="About Us | Pumpa Squash Academy Malaysia"
        description="Learn about Pumpa Squash Academy, lead by former World No. 68 Pushppa Devi & Coach Yogeswaran. Developing champions in Selangor and Kuala Lumpur."
        keywords="About Pumpa Squash Academy, Squash Coaches Malaysia, Pushppa Devi Squash, Yogeswaran Squash Coach, Squash Academy Selangor, Squash Academy KL"
      />
      {/* ── HERO – matches HomePage style ── */}
      <div className="about-hero-section">
        {/* Navbar inside hero-section like HomePage */}
        <nav className="about-navbar">
          <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Pumpa Squash Academy Logo" className="logo-img" />
            <div className="logo-text">
              PUMPA
              <span className="logo-subtext">SQUASH ACADEMY</span>
            </div>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li onClick={() => navigate('/')}>HOME</li>
            <li className="active">ABOUT US</li>
            <li onClick={() => navigate('/programs')} style={{ cursor: 'pointer' }}>PROGRAMS</li>
            <li onClick={() => navigate('/gallery')} style={{ cursor: 'pointer' }}>GALLERY</li>
            <li onClick={() => navigate('/contact')}>CONTACT US</li>
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

        {/* Ambient Glow Lights */}
        <div className="hero-glow-orb-1"></div>
        <div className="hero-glow-orb-2"></div>

        {/* Hero Content Grid */}
        <div className={`about-hero-grid ${heroIn ? 'animate-in' : ''}`} ref={heroRef}>
          {/* Left Column */}
          <div className="about-hero-left">
            <div className="about-hero-badge">
              <span className="badge-live-pulse"></span>
              <Award size={16} /> ABOUT PUMPA SQUASH ACADEMY
            </div>

            <h1 className="about-hero-title-new">
              WHERE <span className="about-highlight">PASSION</span> MEETS <br />
              <span className="about-highlight">EXCELLENCE</span> ON COURT
            </h1>

            <p className="about-hero-cursive">Start Here... Shine Everywhere</p>

            <p className="about-hero-desc-new">
              Founded by former Malaysian National Player & World No. 68 Pushppa Devi,<br />
              Pumpa Squash Academy empowers players of all ages through structured training,<br />
              world-class mentorship, and a supportive squash community.
            </p>

            <div className="about-hero-highlights">
              <div className="hl-item"><Award size={16} className="hl-icon" /> WSF Level 3 Certified</div>
              <div className="hl-item"><Trophy size={16} className="hl-icon" /> 20+ Years Excellence</div>
              <div className="hl-item"><Globe size={16} className="hl-icon" /> State &amp; National Mentorship</div>
            </div>

            <div className="about-coach-info">
              <div className="about-coach-name">Lead by Coach Pushppa Devi Paramasewa &amp; Yogeswaran Paramasewa</div>
              <div className="about-coach-credentials">
                Former World No. 68 • WSF Certified Level 3 • SUKMA State Coach
              </div>
            </div>

            <div className="about-hero-actions">
              <button className="btn-primary" onClick={() => navigate('/booking')}>
                <Calendar size={18} /> BOOK A FREE TRIAL
              </button>
              <button className="btn-secondary" onClick={() => {
                const el = document.querySelector('.coaches-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Users size={18} /> MEET OUR TEAM
              </button>
            </div>
          </div>

          {/* Right Column Multi-card Showcase */}
          <div className="about-hero-right">
            <div className="about-hero-card-stack">
              <div className="about-hero-main-card">
                <img src={img1} alt="Pumpa Squash Academy Training" className="about-hero-img" />
                <div className="about-hero-card-badge">
                  <span className="badge-dot"></span> WSF Level 3 Certified Academy
                </div>
              </div>

              <div className="about-hero-floating-card top-right">
                <img src={yogeswaranImg} alt="Coach Yogeswaran" className="mini-coach-thumb" />
                <div>
                  <strong>Coach Yogeswaran</strong>
                  <span>Head Coach &amp; Co-Founder</span>
                </div>
              </div>

              <div className="about-hero-floating-card bottom-left">
                <Trophy size={26} className="floating-icon" />
                <div>
                  <strong>300+ Athletes</strong>
                  <span>Coached &amp; Mentored</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="about-stats-bar-container">
          <div className="about-stats-bar">
            <div className="about-stat-item">
              <Users className="about-stat-icon" size={32} strokeWidth={1.5} />
              <div className="about-stat-text">
                <span className="about-stat-value">300+</span>
                <span className="about-stat-label">PLAYERS COACHED</span>
              </div>
            </div>
            <div className="about-stat-item">
              <Trophy className="about-stat-icon" size={32} strokeWidth={1.5} />
              <div className="about-stat-text">
                <span className="about-stat-value">20+ YEARS</span>
                <span className="about-stat-label">COACHING EXPERIENCE</span>
              </div>
            </div>
            <div className="about-stat-item">
              <Globe className="about-stat-icon" size={32} strokeWidth={1.5} />
              <div className="about-stat-text">
                <span className="about-stat-value">FORMER</span>
                <span className="about-stat-label">MALAYSIAN WORLD NO. 68</span>
              </div>
            </div>
            <div className="about-stat-item">
              <UserCheck className="about-stat-icon" size={32} strokeWidth={1.5} />
              <div className="about-stat-text">
                <span className="about-stat-value">WSF LEVEL 3</span>
                <span className="about-stat-label">CERTIFIED COACH</span>
              </div>
            </div>
            <div className="about-stat-item">
              <Award className="about-stat-icon" size={32} strokeWidth={1.5} />
              <div className="about-stat-text">
                <span className="about-stat-value">AWARD-WINNING</span>
                <span className="about-stat-label">ACADEMY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PILLARS ── */}
      <section className="pillars-section" ref={pillarsRef}>
        <div className="section-label">WHY PUMPA?</div>
        <h2 className="section-title">Our <span className="green">Core Pillars</span></h2>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} className={`pillar-card ${pillarsIn ? 'animate-in' : ''}`} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="gallery-strip">
        <div className="gs-track">
          {[img2, img3, img4, img5, img1, img2].map((src, i) => (
            <div key={i} className="gs-item">
              <img src={src} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER & CO-FOUNDER ── */}
      <section className="coaches-section" ref={pushppaRef}>
        <div className="section-label">MEET THE TEAM</div>
        <h2 className="section-title">The <span className="green">People Behind Pumpa</span></h2>

        {/* Founder - Pushppa Devi */}
        <div className={`coach-card-row ${pushppaIn ? 'animate-in' : ''}`}>
          <div className="coach-photo-wrap left">
            <div className="coach-photo-ring">
              <img
                src={pushppaImg}
                alt="Pushppa Devi Paramasewa"
                className="coach-photo"
              />
            </div>
            <div className="pumpa-badge-overlay">
              <img src={logo} alt="Pumpa" style={{ height: 28 }} />
            </div>
          </div>
          <div className="coach-info-block">
            <span className="coach-role-tag">FOUNDER</span>
            <h3 className="coach-name-big">PUSHPPA DEVI</h3>
            <ul className="coach-creds-list">
              {pushppaCredentials.map((c, i) => (
                <li key={i}><CheckCircle2 size={18} className="cred-icon" />{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Co-Founder - Yogeswaran Paramasewa */}
        <div className={`coach-card-row reverse ${yogesIn ? 'animate-in' : ''}`} ref={yogesRef}>
          <div className="coach-photo-wrap right">
            <div className="coach-photo-ring">
              <img
                src={yogeswaranImg}
                alt="Yogeswaran Paramasewa"
                className="coach-photo"
              />
            </div>
            <div className="pumpa-badge-overlay">
              <img src={logo} alt="Pumpa" style={{ height: 28 }} />
            </div>
          </div>
          <div className="coach-info-block">
            <span className="coach-role-tag">CO-FOUNDER &amp; HEAD COACH</span>
            <h3 className="coach-name-big">YOGESWARAN PARAMASEWA</h3>
            <ul className="coach-creds-list">
              {yogesCredentials.map((c, i) => (
                <li key={i}><CheckCircle2 size={18} className="cred-icon" />{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="mvv-section" ref={missionRef}>
        <div className="mvv-grid">
          <div className={`mvv-card ${missionIn ? 'animate-in' : ''}`} style={{ animationDelay: '0s' }}>
            <div className="mvv-icon"><Target size={32} /></div>
            <h3 className="mvv-title">OUR MISSION</h3>
            <p className="mvv-text">
              To empower players of all ages and levels through quality coaching, structured programs and a supportive community.
            </p>
          </div>
          <div className={`mvv-card featured ${missionIn ? 'animate-in' : ''}`} style={{ animationDelay: '0.12s' }}>
            <div className="mvv-icon"><Eye size={32} /></div>
            <h3 className="mvv-title">OUR VISION</h3>
            <p className="mvv-text">
              To be a leading squash academy recognized for developing champions who excel on and off the court.
            </p>
          </div>
          <div className={`mvv-card ${missionIn ? 'animate-in' : ''}`} style={{ animationDelay: '0.24s' }}>
            <div className="mvv-icon"><Heart size={32} /></div>
            <h3 className="mvv-title">OUR VALUES</h3>
            <div className="values-pills">
              {values.map(v => <span key={v} className="value-pill">{v}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS BAR ── */}
      <div className="locations-bar">
        <div className="loc-bar-item"><span className="loc-bar-icon">📍</span><div><strong>OUR TRAINING LOCATIONS</strong></div></div>
        <div className="loc-bar-item"><div><strong>SUBANG JAYA</strong><br /><span>Subang Lake View Club (SLVC)</span></div></div>
        <div className="loc-bar-item"><div><strong>CYBERJAYA</strong><br /><span>Taman Tasik Cyberjaya</span></div></div>
        <div className="loc-bar-item"><div><strong>PUTRAJAYA</strong><br /><span>Precinct 11, Sports Complex</span></div></div>
      </div>

      {/* ── CTA ── */}
      <section className="about-cta" ref={ctaRef}>
        <div className={`about-cta-inner ${ctaIn ? 'animate-in' : ''}`}>
          <h2 className="cta-title">READY TO START YOUR <span className="green">SQUASH JOURNEY?</span></h2>
          <p className="cta-sub">Book your free trial today and experience the Pumpa difference!</p>
          <button className="btn-primary cta-btn" onClick={() => navigate('/booking')}>
            <Calendar size={20} /> BOOK A FREE TRIAL
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
