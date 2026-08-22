import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './StorySection.css';

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-container">
        
        <div className="story-content">
          <div className="story-subtitle">
            <span className="line"></span>
            OUR JOURNEY
          </div>
          <h2 className="story-title">
            WATCH OUR <span className="highlight-green">STORY</span>
          </h2>
          <p className="story-desc">
            Discover the passion and dedication behind Pumpa Squash Academy. From our humble beginnings to becoming a premier squash academy, our journey is fueled by a commitment to excellence and a love for the game.
          </p>
          <ul className="story-highlights">
            <li><CheckCircle2 className="check-icon" size={20} /> Building champions since day one</li>
            <li><CheckCircle2 className="check-icon" size={20} /> Expert coaching for all levels</li>
            <li><CheckCircle2 className="check-icon" size={20} /> A community that feels like family</li>
          </ul>
        </div>

        <div className="story-video-container">
          <div className="story-video-wrapper">
            <video 
              src="https://ik.imagekit.io/muthurasu/pumpa4.mp4" 
              title="Pumpa Squash Academy Story"
              controls
              autoPlay
              muted
              loop
              className="story-iframe"
              style={{ objectFit: 'cover' }}
            ></video>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StorySection;
