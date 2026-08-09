import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Trophy,
  Globe,
  Users,
  Award,
  Star,
  Quote,
  Medal,
  Calendar,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import './CoachSection.css';
import student1 from './assets/student1.png';
import student2 from './assets/student2.png';
import student3 from './assets/student3.png';
import student4 from './assets/student4.png';
import student5 from './assets/student5.png';
import student6 from './assets/student6.png';

import yogeswaranImg from './assets/Gallery/yogeswaran.jpeg';

const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";

const CoachSection = () => {
  const navigate = useNavigate();
  return (
    <section className="coach-section">
      <div className="coach-container">
        {/* Top Split Section */}
        <div className="coach-top-split">
          {/* Left: Teaching Image */}
          <div className="coach-img-left">
            <img src="/pushppa-picture.png" alt="Coach Pushppa" className="img-fluid" />
            <div className="img-overlay-box">
              <div className="logo-small">
                <img src={logo} alt="Pumpa Squash Academy Logo" className="logo-img" style={{ height: '24px' }} />
                <div className="logo-text-small">
                  PUMPA
                  <span className="sub">SQUASH ACADEMY</span>
                </div>
              </div>
              <div className="overlay-text">
                WHERE EVERY<br />
                <span className="highlight-green">SQUASH JOURNEY</span><br />
                BEGINS
              </div>
            </div>
          </div>

          {/* Right: Coach Details & Stats */}
          <div className="coach-right-container">
            <div className="coach-details-right">
              <div className="coach-text-content" style={{ width: '100%' }}>
                <div className="section-subtitle">
                  <span className="line"></span>
                  MEET YOUR COACH
                  <span className="line"></span>
                </div>

                <h2 className="coach-title">
                  PUSHPPA DEVI
                </h2>

                <ul className="coach-bullets">
                  <li><Award className="bullet-icon" size={18} /> Former Malaysian National Player</li>
                  <li><Globe className="bullet-icon" size={18} /> Former World No. 68</li>
                  <li><CheckCircle2 className="bullet-icon" size={18} /> WSF Level 3 Certified Coach</li>
                  <li><Star className="bullet-icon" size={18} /> Malaysia Influential Educator Award 2023</li>
                  <li><Star className="bullet-icon" size={18} /> Top 50 Malaysia Influential Educators 2024</li>
                </ul>

                <div className="quote-box">
                  <Quote className="quote-icon start" size={24} />
                  <p>
                    I believe every player has potential. My mission is to create a positive and inspiring environment where athletes of all ages can grow in confidence, develop strong foundations and achieve their personal best—on and off the court.
                  </p>
                  <Quote className="quote-icon end" size={24} />
                  <div className="quote-signature">Pushppa Devi</div>
                </div>
              </div>
            </div>

            {/* Stats Strip under top section (Right side only) */}
            <div className="coach-stats-strip">
              <div className="strip-item">
                <Users size={32} className="strip-icon" />
                <div className="strip-text">
                  <span className="strip-value">300+</span>
                  <span className="strip-label">PLAYERS<br />COACHED</span>
                </div>
              </div>
              <div className="strip-item">
                <Trophy size={32} className="strip-icon" />
                <div className="strip-text">
                  <span className="strip-value">20+</span>
                  <span className="strip-label">YEARS<br />EXPERIENCE</span>
                </div>
              </div>
              <div className="strip-item">
                <Globe size={32} className="strip-icon" />
                <div className="strip-text">
                  <span className="strip-value">68</span>
                  <span className="strip-label">FORMER WORLD<br />RANKING</span>
                </div>
              </div>
              <div className="strip-item">
                <Award size={32} className="strip-icon" />
                <div className="strip-text">
                  <span className="strip-value">AWARD</span>
                  <span className="strip-label">WINNING<br />ACADEMY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Founder / Yogeswaran Section */}
        <div className="coach-top-split" style={{ flexDirection: 'row-reverse', marginTop: '2rem' }}>
          <div className="coach-img-left">
            <img src={yogeswaranImg} alt="Coach Yogeswaran" className="img-fluid" />
            <div className="img-overlay-box">
              <div className="logo-small">
                <img src={logo} alt="Pumpa Squash Academy Logo" className="logo-img" style={{ height: '24px' }} />
                <div className="logo-text-small">
                  PUMPA
                  <span className="sub">SQUASH ACADEMY</span>
                </div>
              </div>
              <div className="overlay-text">
                DEVELOPING<br />
                <span className="highlight-green">CHAMPIONS</span><br />
                FOR TOMORROW
              </div>
            </div>
          </div>

          <div className="coach-right-container">
            <div className="coach-details-right">
              <div className="coach-text-content" style={{ width: '100%' }}>
                <div className="section-subtitle">
                  <span className="line"></span>
                  MEET YOUR COACH
                  <span className="line"></span>
                </div>

                <h2 className="coach-title" style={{ fontSize: '2.5rem' }}>
                  YOGESWARAN PARAMASEWA
                </h2>

                <ul className="coach-bullets">
                  <li><Award className="bullet-icon" size={18} /> Head Coach & Co-Founder (22+ Years Coaching Experience)</li>
                  <li><Globe className="bullet-icon" size={18} /> Former High-Level Competitor in Malaysia Games (SUKMA)</li>
                  <li><CheckCircle2 className="bullet-icon" size={18} /> WSF Certified Coach & Grassroots Development Specialist</li>
                  <li><Star className="bullet-icon" size={18} /> Appointed Selangor State Coach for Junior High Performance (2013)</li>
                  <li><Star className="bullet-icon" size={18} /> Mentored & Developed Numerous Junior Top 8 Ranked Players</li>
                </ul>

                <div className="quote-box">
                  <Quote className="quote-icon start" size={24} />
                  <p>
                    Squash is more than just a game; it's a character builder. I am passionate about guiding players to discover their strength and overcome challenges, ensuring they succeed both inside the court and in life.
                  </p>
                  <Quote className="quote-icon end" size={24} />
                  <div className="quote-signature">Yogeswaran Paramasewa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Highlights (Full Width) */}
        <div className="achievements-card full-width">
          <div className="card-subtitle">
            <span className="line"></span>
            ACHIEVEMENTS & HIGHLIGHTS
            <span className="line"></span>
          </div>
          <div className="achievements-grid">
            <div className="achieve-item">
              <div className="achieve-icon-circle"><Award size={24} /></div>
              <span>Represented Malaysia<br />in International<br />Tournaments</span>
            </div>
            <div className="achieve-item">
              <div className="achieve-icon-circle"><Globe size={24} /></div>
              <span>Former World<br />No. 68</span>
            </div>
            <div className="achieve-item">
              <div className="achieve-icon-circle"><CheckCircle2 size={24} /></div>
              <span>WSF Level 3<br />Certified Coach</span>
            </div>
            <div className="achieve-item">
              <div className="achieve-icon-circle"><Users size={24} /></div>
              <span>Coached National &<br />International<br />Players</span>
            </div>
            <div className="achieve-item">
              <div className="achieve-icon-circle"><Medal size={24} /></div>
              <span>Award-Winning<br />Coach & Educator</span>
            </div>
          </div>
        </div>

        {/* Students Gallery */}
        <div className="students-gallery">
          <img src={student1} alt="Student 1" />
          <img src={student2} alt="Student 2" />
          <img src={student3} alt="Student 3" />
          <img src={student4} alt="Student 4" />
          <img src={student5} alt="Student 5" />
          <img src={student6} alt="Student 6" />
        </div>

        {/* Footer Banner */}
        <div className="coach-footer-banner">
          <div className="banner-left">
            <Star className="banner-star" size={32} />
            <div className="banner-text">
              Passionate. Experienced. Dedicated to <span className="highlight-green">Your Success.</span>
            </div>
          </div>
          <button className="banner-btn" onClick={() => navigate('/booking')}>
            <div className="btn-text">
              <strong>BOOK A FREE TRIAL TODAY!</strong>
              <span>Take the first step in your squash journey with Pumpa.</span>
            </div>
            <div className="btn-icon">
              <Calendar size={24} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoachSection;
