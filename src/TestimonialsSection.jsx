import React, { useRef } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Happy Parent",
      source: "Facebook Review",
      text: "Pumpa Squash Academy has been amazing for my kids. The coaches are professional and make the sessions fun and engaging!",
      rating: 5
    },
    {
      name: "Squash Enthusiast",
      source: "Facebook Review",
      text: "Great facility and excellent coaching from Pushppa Devi. Highly recommend for players of all levels.",
      rating: 5
    },
    {
      name: "Junior Champion",
      source: "Facebook Review",
      text: "The performance pathway really helped me prepare for my tournaments. Thank you Pumpa!",
      rating: 5
    },
    {
      name: "Proud Mother",
      source: "Facebook Review",
      text: "Coach Pushppa's dedication is unmatched. My son's confidence on the court has grown tremendously since joining the academy.",
      rating: 5
    },
    {
      name: "Aspiring Pro",
      source: "Facebook Review",
      text: "Best squash academy in Malaysia! The environment is so positive and the training programs are top-notch.",
      rating: 5
    }
  ];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      // Scroll by approximately the width of one visible area
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="testimonials-section">
      <div className="test-container">
        <div className="test-header">
          <div className="test-subtitle">
            <span className="line"></span>
            WHAT THEY SAY
            <span className="line"></span>
          </div>
          <h2 className="test-title">
            HEAR FROM OUR <span className="highlight-green">COMMUNITY</span>
          </h2>
          <p className="test-desc">
            We are proud to have helped hundreds of players achieve their goals and fall in love with squash.
          </p>
        </div>

        <div className="slider-wrapper">
          <button className="slider-btn prev" onClick={() => scroll('left')}>
            <ChevronLeft size={24} />
          </button>

          <div className="slider-container" ref={sliderRef}>
            {reviews.map((review, idx) => (
              <div className="slide-item" key={idx}>
                <div className="test-card">
                  <div className="test-card-header">
                    <div className="test-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="test-info">
                      <h4 className="test-name">{review.name}</h4>
                      <span className="test-source">
                        <MessageCircle size={14} className="fb-icon" /> {review.source}
                      </span>
                    </div>
                  </div>
                  <div className="test-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#eab308" color="#eab308" />
                    ))}
                  </div>
                  <p className="test-text">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={() => scroll('right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
