import React from 'react';
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

const CoachSection = () => {
  return (
    <section className="coach-section">
      <div className="coach-container">
        {/* Top Split Section */}
        <div className="coach-top-split">
          {/* Left: Teaching Image */}
          <div className="coach-img-left">
            <img src="/coach_teaching.png" alt="Coach teaching student" className="img-fluid" />
            <div className="img-overlay-box">
              <div className="logo-small">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM72 41L61 51.5L68 76H56L50 63L44 76H32L39 51.5L28 41H42.5L50 18L57.5 41H72Z" fill="#8cc63f"/>
                </svg>
                <div className="logo-text-small">
                  <span>PUMPA</span>
                  <span className="sub">SQUASH ACADEMY</span>
                </div>
              </div>
              <div className="overlay-text">
                WHERE EVERY<br/>
                <span className="highlight-green">SQUASH JOURNEY</span><br/>
                BEGINS
              </div>
            </div>
          </div>

          {/* Right: Coach Details & Stats */}
          <div className="coach-right-container">
            <div className="coach-details-right">
            <div className="section-subtitle">
              <span className="line"></span>
              MEET YOUR COACH
              <span className="line"></span>
            </div>
            
            <h2 className="coach-title">
              PUSHPA DEVI<br/>
              <span className="highlight-green">PARAMASEWA</span>
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
              <div className="quote-signature">Pushpa Devi</div>
            </div>

            {/* Coach Portrait Overlay */}
            <div className="coach-portrait-container">
              <div className="bg-shape"></div>
              <img src="/coach_portrait.png" alt="Coach Pushpa" className="coach-portrait" />
            </div>
          </div>
          
          {/* Stats Strip under top section (Right side only) */}
          <div className="coach-stats-strip">
            <div className="strip-item">
              <Trophy size={32} className="strip-icon" />
              <div className="strip-text">
                <span className="strip-value">20+</span>
                <span className="strip-label">YEARS OF<br/>EXPERIENCE</span>
              </div>
            </div>
            <div className="strip-item">
              <Globe size={32} className="strip-icon" />
              <div className="strip-text">
                <span className="strip-value">68</span>
                <span className="strip-label">HIGHEST WORLD<br/>RANKING</span>
              </div>
            </div>
            <div className="strip-item">
              <Users size={32} className="strip-icon" />
              <div className="strip-text">
                <span className="strip-value">500+</span>
                <span className="strip-label">PLAYERS<br/>DEVELOPED</span>
              </div>
            </div>
            <div className="strip-item">
              <Medal size={32} className="strip-icon" />
              <div className="strip-text">
                <span className="strip-value">2</span>
                <span className="strip-label">NATIONAL<br/>AWARDS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Bottom Split Section */}
        <div className="coach-bottom-split">
          {/* Left: Achievements & Highlights */}
          <div className="achievements-card">
            <div className="card-subtitle">
              <span className="line"></span>
              ACHIEVEMENTS & HIGHLIGHTS
              <span className="line"></span>
            </div>
            <div className="achievements-grid">
              <div className="achieve-item">
                <div className="achieve-icon-circle"><Award size={24} /></div>
                <span>Represented Malaysia<br/>in International<br/>Tournaments</span>
              </div>
              <div className="achieve-item">
                <div className="achieve-icon-circle"><Globe size={24} /></div>
                <span>Former World<br/>No. 68</span>
              </div>
              <div className="achieve-item">
                <div className="achieve-icon-circle"><CheckCircle2 size={24} /></div>
                <span>WSF Level 3<br/>Certified Coach</span>
              </div>
              <div className="achieve-item">
                <div className="achieve-icon-circle"><Users size={24} /></div>
                <span>Coached National &<br/>International<br/>Players</span>
              </div>
              <div className="achieve-item">
                <div className="achieve-icon-circle"><Medal size={24} /></div>
                <span>Award-Winning<br/>Coach & Educator</span>
              </div>
            </div>
          </div>

          {/* Right: Gallery Grid */}
          <div className="gallery-grid">
            <img src="/gallery_img.png" alt="Gallery 1" />
            <img src="/gallery_img.png" alt="Gallery 2" />
            <img src="/gallery_img.png" alt="Gallery 3" />
            <img src="/gallery_img.png" alt="Gallery 4" />
          </div>
        </div>

        {/* Footer Banner */}
        <div className="coach-footer-banner">
          <div className="banner-left">
            <Star className="banner-star" size={32} />
            <div className="banner-text">
              Passionate. Experienced. Dedicated to <span className="highlight-green">Your Success.</span>
            </div>
          </div>
          <button className="banner-btn">
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
