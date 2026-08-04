import React from 'react';
import { 
  Play, 
  Trophy, 
  Users, 
  Medal, 
  Globe,
  Smile,
  Activity,
  Target,
  Heart,
  Calendar,
  ChevronRight,
  Award
} from 'lucide-react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const cards = [
    { title: "YOUNG BEGINNERS (4-7)", desc: "Building a strong foundation through play and fun.", icon: <Smile size={20} />, img: "/prog_mini.png" },
    { title: "FOOTWORK & MOVEMENT", desc: "Developing speed, agility and proper movement patterns.", icon: <Activity size={20} />, img: "/prog_junior.png" },
    { title: "SKILLS DEVELOPMENT", desc: "Technique correction and personalised coaching for every player.", icon: <Target size={20} />, img: "/why_2.png" },
    { title: "FUN LEARNING ENVIRONMENT", desc: "We make learning engaging, enjoyable and memorable.", icon: <Heart size={20} />, img: "/why_3.png" },
    { title: "MATCH PLAY & GAME IQ", desc: "Improving tactical thinking and match performance.", icon: <Trophy size={20} />, img: "/why_5.png" },
    { title: "TOURNAMENT COACHING", desc: "Preparing players for tournaments with focus and confidence.", icon: <Medal size={20} />, img: "/prog_performance.png" },
    { title: "ADULT COACHING", desc: "Programs for all levels - from beginners to advanced players.", icon: <Users size={20} />, img: "/prog_adult.png" },
    { title: "PUMPA COMMUNITY", desc: "A supportive community that grows together.", icon: <Users size={20} />, img: "/why_6.png" },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        
        {/* Header */}
        <div className="exp-header">
          <div className="exp-subtitle">
            <span className="line"></span>
            COACHING IN ACTION
            <span className="line"></span>
          </div>
          <h2 className="exp-title">EXPERIENCE THE PUMPA DIFFERENCE</h2>
          <p className="exp-desc">
            Every training session is designed to inspire confidence, develop skills,<br/>
            and create a lifelong love for squash in a <span className="highlight-green">fun, safe</span> and <span className="highlight-green">supportive</span> environment.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="exp-grid">
          {cards.map((card, idx) => (
            <div className="exp-card" key={idx}>
              <div className="exp-card-img">
                <img src={card.img} alt={card.title} />
              </div>
              <div className="exp-card-content">
                <div className="exp-card-icon">
                  {card.icon}
                </div>
                <div className="exp-card-text-wrapper">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Story Strip */}
        <div className="video-story-strip">
          <div className="video-strip-left">
            <div className="clapper-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/><path d="M2 7h20"/><path d="M6 3v4"/><path d="M10 3v4"/><path d="M14 3v4"/><path d="M18 3v4"/><path d="M15 14l-5-3v6z"/></svg>
            </div>
            <div className="video-text">
              <h4>WATCH OUR STORY</h4>
              <p>See how we coach, inspire and bring out the best in every player.</p>
            </div>
          </div>
          <div className="video-strip-right">
            <div className="video-thumbnails">
              <img src="/why_2.png" alt="Thumb 1" />
              <img src="/why_3.png" alt="Thumb 2" />
              <img src="/why_6.png" alt="Thumb 3" />
              <img src="/prog_mini.png" alt="Thumb 4" />
            </div>
            <div className="play-button-overlay">
              <div className="play-circle">
                <Play fill="white" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="exp-stats-strip">
          <div className="exp-stat-item">
            <Users size={40} className="exp-stat-icon" />
            <div className="exp-stat-text">
              <span className="val">300+</span>
              <span className="lab">PLAYERS<br/>COACHED</span>
            </div>
          </div>
          <div className="exp-stat-item">
            <Trophy size={40} className="exp-stat-icon" />
            <div className="exp-stat-text">
              <span className="val">20+</span>
              <span className="lab">YEARS<br/>EXPERIENCE</span>
            </div>
          </div>
          <div className="exp-stat-item">
            <Globe size={40} className="exp-stat-icon" />
            <div className="exp-stat-text">
              <span className="val">68</span>
              <span className="lab">FORMER WORLD<br/>RANKING</span>
            </div>
          </div>
          <div className="exp-stat-item">
            <Medal size={40} className="exp-stat-icon" />
            <div className="exp-stat-text">
              <span className="val">LEVEL 3</span>
              <span className="lab">WSF CERTIFIED<br/>COACH</span>
            </div>
          </div>
          <div className="exp-stat-item">
            <Award size={40} className="exp-stat-icon" />
            <div className="exp-stat-text">
              <span className="val">AWARD</span>
              <span className="lab">WINNING<br/>ACADEMY</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner (From the second image, matches layout well) */}
        <div className="exp-cta-banner">
          <div className="cta-left">
            <div className="cta-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8cc63f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                <circle cx="12" cy="5" r="2"/><path d="M12 7l-2 5 2 4 4-2"/><path d="M10 12l-4 3"/><path d="M21 21l-3-4"/><path d="M3 21l3-4"/>
              </svg>
            </div>
            <div className="cta-text-wrapper">
              <h3>READY TO START YOUR SQUASH JOURNEY?</h3>
              <p className="cursive">We're here to help you every step of the way!</p>
            </div>
          </div>
          <div className="cta-right">
            <button className="btn-primary-large">
              <div className="btn-l">
                <Calendar size={24} />
              </div>
              <div className="btn-m">
                <strong>BOOK A FREE TRIAL TODAY!</strong>
                <span>Limited slots available. Let's begin your journey together!</span>
              </div>
              <div className="btn-r">
                <ChevronRight size={24} />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
