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
  Menu
} from 'lucide-react';
import './index.css';
import CoachSection from './CoachSection';
import ProgramsSection from './ProgramsSection';
import WhyChooseSection from './WhyChooseSection';
import ExperienceSection from './ExperienceSection';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="hero-section">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo-container">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM72 41L61 51.5L68 76H56L50 63L44 76H32L39 51.5L28 41H42.5L50 18L57.5 41H72Z" fill="#8cc63f"/>
            </svg>
            <div className="logo-text">
              <span>PUMPA</span>
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
            WHERE EVERY <br />
            <span className="highlight">SQUASH JOURNEY</span> <br />
            BEGINS
          </h1>
          
          <p className="hero-description">
            Professional squash coaching for all ages and abilities.<br/>
            From your child's first swing to elite performance,<br/>
            we're here to inspire, develop and empower.
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
              WATCH VIDEO
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar-container">
          <div className="stats-bar">
            <div className="stat-item">
              <Trophy className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">20+ YEARS</span>
                <span className="stat-label">OF EXPERIENCE</span>
              </div>
            </div>
            
            <div className="stat-item">
              <Globe className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">FORMER</span>
                <span className="stat-label">WORLD NO. 68</span>
              </div>
            </div>
            
            <div className="stat-item">
              <UserCheck className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">WSF LEVEL 3</span>
                <span className="stat-label">CERTIFIED COACH</span>
              </div>
            </div>
            
            <div className="stat-item">
              <Users className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">COACHING</span>
                <span className="stat-label">ALL AGES & ABILITIES</span>
              </div>
            </div>
            
            <div className="stat-item">
              <Heart className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">PASSIONATE</span>
                <span className="stat-label">ABOUT DEVELOPMENT</span>
              </div>
            </div>
            
            <div className="stat-item">
              <TrendingUp className="stat-icon" size={32} strokeWidth={1.5} />
              <div className="stat-text">
                <span className="stat-value">PROVEN PATHWAY</span>
                <span className="stat-label">FROM BEGINNER TO ELITE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoachSection />
      <ProgramsSection />
      <WhyChooseSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}

export default App;
