import React from 'react';
import { 
  Trophy, 
  Globe, 
  UserCheck, 
  Users, 
  Heart, 
  TrendingUp,
  Calendar,
  PlayCircle,
  ChevronDown,
  Menu,
  Award
} from 'lucide-react';
import './index.css';
import CoachSection from './CoachSection';

const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";
import ProgramsSection from './ProgramsSection';
import WhyChooseSection from './WhyChooseSection';
import TestimonialsSection from './TestimonialsSection';
import ExperienceSection from './ExperienceSection';
import Footer from './Footer';

function App() {
  return (
    <>
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

          <ul className="nav-links">
            <li className="active">HOME</li>
            <li>ABOUT US</li>
            <li>PROGRAMS <ChevronDown size={16} /></li>
            <li>GALLERY</li>
            <li>CONTACT US</li>
          </ul>

          <button className="nav-btn">
            <Calendar size={18} />
            BOOK A FREE TRIAL
          </button>

          <button className="mobile-menu-btn">
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
            <button className="btn-primary">
              <Calendar size={18} />
              BOOK A FREE TRIAL
            </button>
            <button className="btn-secondary">
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

export default App;
