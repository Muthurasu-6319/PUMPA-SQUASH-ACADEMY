import React, { useState } from 'react';
import { 
  Trophy, 
  Globe, 
  UserCheck, 
  Users, 
  Heart, 
  TrendingUp,
  Calendar,
  PlayCircle,
  Menu,
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import CoachSection from './CoachSection';
import ProgramsSection from './ProgramsSection';
import WhyChooseSection from './WhyChooseSection';
import TestimonialsSection from './TestimonialsSection';
import ExperienceSection from './ExperienceSection';
import Footer from './Footer';

import SEO from './components/SEO';

const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";

function HomePage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Pumpa Squash Academy | Top Squash Coaching in Selangor & KL" 
        description="Join Pumpa Squash Academy in Selangor & Kuala Lumpur, Malaysia. We offer world-class squash coaching for juniors, adults, and competitive players." 
        keywords="Squash Academy Selangor, Squash Coaching Kuala Lumpur, Learn Squash Malaysia, Pumpa Squash Academy, Junior Squash Training KL, Adult Squash Lessons Selangor, Squash court Malaysia" 
      />
      <div className="hero-section">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Pumpa Squash Academy Logo" className="logo-img" />
            <div className="logo-text">
              PUMPA
              <span className="logo-subtext">SQUASH ACADEMY</span>
            </div>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li className="active">HOME</li>
            <li onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>ABOUT US</li>
            <li onClick={() => navigate('/programs')} style={{ cursor: 'pointer' }}>PROGRAMS</li>
            <li onClick={() => navigate('/gallery')} style={{ cursor: 'pointer' }}>GALLERY</li>
            <li onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>CONTACT US</li>
            <li className="mobile-only-btn">
              <button className="btn-primary" onClick={() => navigate('/booking')} style={{ width: '100%', justifyContent: 'center' }}>
                <Calendar size={18} />
                BOOK A FREE TRIAL
              </button>
            </li>
          </ul>

          <button className="nav-btn" onClick={() => navigate('/booking')}>
            <Calendar size={18} />
            BOOK A FREE TRIAL
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={28} />
          </button>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            WHERE FUTURE <br />
            <span className="highlight">CHAMPIONS</span> <br />
            BEGIN
          </h1>
          
          <p className="hero-description">
            Develop Skills. Build Character. Achieve Greatness.<br/>
            Professional squash coaching for juniors and adults.<br/>
            Led by former Malaysian national player, former World No. 68, and WSF Level 3 Certified Coach Pushppa Devi, helping players build confidence, skills, and a lifelong love for squash.
          </p>

          <div className="coach-info">
            <div className="coach-name">Led by Coach Pushppa Devi</div>
            <div className="coach-credentials">
              Former Malaysian National Player,<br/>
              Former World No. 68 & WSF Level 3 Certified Coach
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/booking')}>
              <Calendar size={18} />
              BOOK A FREE TRIAL
            </button>
            <button className="btn-secondary" onClick={() => navigate('/programs')}>
              <PlayCircle size={18} />
              VIEW PROGRAMS
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar-container">
          <div className="stats-bar">
            <div className="stat-item">
              <Users className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">300+</span>
                <span className="stat-label">PLAYERS COACHED</span>
              </div>
            </div>
            
            <div className="stat-item">
              <Trophy className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">20+ YEARS</span>
                <span className="stat-label">COACHING EXPERIENCE</span>
              </div>
            </div>
            
            <div className="stat-item">
              <Globe className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">FORMER</span>
                <span className="stat-label">MALAYSIAN WORLD NO. 68</span>
              </div>
            </div>
            
            <div className="stat-item">
              <UserCheck className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">WSF LEVEL 3</span>
                <span className="stat-label">COACH</span>
              </div>
            </div>
            
            <div className="stat-item">
              <Award className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">AWARD-WINNING</span>
                <span className="stat-label">ACADEMY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoachSection />
      <ProgramsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}

export default HomePage;
