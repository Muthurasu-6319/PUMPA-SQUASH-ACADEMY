import React from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import './ProgramsSection.css';

const ProgramsSection = () => {
  const programs = [
    {
      title: "MINI CHAMPIONS",
      ageGroup: "AGES 4 - 7",
      desc: "A fun and engaging introduction to squash that builds coordination, movement, confidence and a lifelong love for the game.",
      bullets: ["Fun & Age-Appropriate Training", "Movement & Coordination", "Confidence & Social Skills"],
      color: "#eab308", // Yellow
      img: "/prog_mini.png",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
          <circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="15" cy="7" r="4"/><path d="M12 21v-2a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v2"/>
        </svg>
      )
    },
    {
      title: "JUNIOR DEVELOPMENT",
      ageGroup: "AGES 8 - 12",
      desc: "Develop strong technical skills, game understanding and athletic ability in a supportive and motivating environment.",
      bullets: ["Technical Skills", "Tactics & Match Play", "Fitness & Agility"],
      color: "#3b82f6", // Blue
      img: "/prog_junior.png",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      )
    },
    {
      title: "PERFORMANCE PATHWAY",
      ageGroup: "COMPETITIVE PLAYERS",
      desc: "Advanced training for tournament players and aspiring athletes aiming for higher levels of performance.",
      bullets: ["High Performance Training", "Match Strategy & Analysis", "Tournament Preparation"],
      color: "#22c55e", // Green
      img: "/prog_performance.png",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
        </svg>
      )
    },
    {
      title: "ADULT COACHING",
      ageGroup: "ADULTS",
      desc: "Programs for all levels - from beginners looking to get fit to advanced players wanting to improve and compete.",
      bullets: ["Beginner to Advanced", "Fitness & Skills Development", "Social & Competitive Play"],
      color: "#a855f7", // Purple
      img: "/prog_adult.png",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "PRIVATE COACHING",
      ageGroup: "ALL AGES",
      desc: "One-to-one coaching tailored to your individual goals, needs and pace for faster improvement.",
      bullets: ["Personalised Training", "Focused Attention", "Flexible Scheduling"],
      color: "#f97316", // Orange
      img: "/prog_private.png",
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M12 11l3 3-3 3-3-3 3-3z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="programs-section">
      <div className="programs-container">
        
        {/* Header */}
        <div className="programs-header">
          <div className="programs-subtitle">
            <span className="line"></span>
            OUR PROGRAMS
            <span className="line"></span>
          </div>
          <h2 className="programs-title">
            PROGRAMS FOR EVERY STAGE<br/>
            <span className="cursive-text">of Your Squash Journey</span>
          </h2>
          <p className="programs-desc">
            From young beginners to competitive players and adults,<br/>
            we have the right program to help you grow, improve and enjoy the game for life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="programs-grid">
          {programs.map((prog, idx) => (
            <div className="program-card" key={idx} style={{ borderTopColor: prog.color }}>
              <div className="card-img-wrapper">
                <img src={prog.img} alt={prog.title} />
                <div className="card-icon" style={{ backgroundColor: prog.color === '#22c55e' ? prog.color : '#8cc63f' }}>
                  {prog.iconSvg}
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{prog.title}</h3>
                <span className="card-badge" style={{ backgroundColor: prog.color }}>
                  {prog.ageGroup}
                </span>
                <p className="card-text">{prog.desc}</p>
                <ul className="card-bullets">
                  {prog.bullets.map((bullet, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} color="#8cc63f" className="check-icon" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="programs-footer-banner">
          <div className="footer-left">
            <div className="racket-icon">
              {/* Simple racket SVG */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8cc63f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="6" />
                <path d="M12.24 12.24L20 20" />
                <path d="M4 4l8 8M4 12l8-8M2 8h12M8 2v12" strokeWidth="1" strokeOpacity="0.5"/>
              </svg>
            </div>
            <div className="footer-text-group">
              <span className="footer-small-text">NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?</span>
              <span className="footer-highlight">WE'RE HERE TO HELP!</span>
            </div>
          </div>
          
          <div className="footer-middle">
            Contact us today for a free consultation<br/>
            and let us guide you to the perfect<br/>
            program.
          </div>

          <div className="footer-right">
            <button className="btn-primary">
              <Calendar size={18} />
              BOOK A FREE TRIAL
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
