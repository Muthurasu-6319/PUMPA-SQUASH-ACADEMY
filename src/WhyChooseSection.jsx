import React from 'react';
import { 
  Trophy, 
  Users, 
  Heart, 
  TrendingUp,
  Star,
  Calendar
} from 'lucide-react';
import './WhyChooseSection.css';

const WhyChooseSection = () => {
  const features = [
    {
      title: "PROVEN EXPERIENCE",
      desc: "Led by former Malaysian National Player, Former World No. 68 with 20+ years of playing and coaching experience.",
      img: "/why_1.png",
      icon: <Trophy size={28} />
    },
    {
      title: "EXPERT COACHING",
      desc: "WSF Level 3 Certified Coach with international exposure and a passion for player development at every level.",
      img: "/why_2.png",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon" width="28" height="28"><path d="M5 11l7-7 7 7"/><path d="M12 4v16"/><circle cx="12" cy="4" r="2"/></svg>
    },
    {
      title: "PERSONALISED ATTENTION",
      desc: "Small group coaching ensures every player receives the attention they need to improve and grow.",
      img: "/why_3.png",
      icon: <Users size={28} />
    },
    {
      title: "FUN & POSITIVE ENVIRONMENT",
      desc: "We create a safe, supportive and enjoyable space where players build confidence, friendships and a lifelong love for squash.",
      img: "/why_4.png",
      icon: <Heart size={28} />
    },
    {
      title: "DEVELOPMENT PATHWAY",
      desc: "Structured programs for every age and ability - from beginners to elite players with clear progression and goals.",
      img: "/why_5.png",
      icon: <TrendingUp size={28} />
    },
    {
      title: "TRUSTED BY FAMILIES",
      desc: "Strong relationships, proven results and hundreds of happy families who trust Pumpa with their squash journey.",
      img: "/why_6.png",
      icon: <Star size={28} />
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="why-container">
        
        {/* Header */}
        <div className="why-header">
          <div className="why-subtitle">
            <span className="line"></span>
            WHY CHOOSE US
            <span className="line"></span>
          </div>
          <h2 className="why-title">
            WHY CHOOSE <span className="highlight-green">PUMPA?</span>
          </h2>
          <p className="why-desc">
            We are more than just a squash academy.<br/>
            We build confidence, character and champions for life.
          </p>
        </div>

        {/* Grid */}
        <div className="why-grid">
          {features.map((item, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-card-content">
                <div className="why-icon-circle">
                  {item.icon}
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-text">{item.desc}</p>
              </div>
              <div className="why-card-img-wrapper">
                <img src={item.img} alt={item.title} />
                <div className="img-fade-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="why-footer-banner">
          <div className="footer-left-content">
            <div className="footer-icons">
              <Star className="banner-icon-star" size={24} />
              <Star className="banner-icon-star" size={24} />
              <Star className="banner-icon-star" size={24} />
              <Users className="banner-icon-users" size={32} />
            </div>
            <div className="footer-text-main">
              At Pumpa, we don't just teach squash.<br/>
              <span className="highlight-green">We shape futures.</span>
            </div>
          </div>
          
          <div className="footer-middle-content">
            Join the Pumpa family today and<br/>
            be part of a community that<br/>
            inspires, develops and empowers.
          </div>

          <div className="footer-right-content">
            <button className="btn-primary-green">
              <Calendar size={18} />
              BOOK A FREE TRIAL
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
