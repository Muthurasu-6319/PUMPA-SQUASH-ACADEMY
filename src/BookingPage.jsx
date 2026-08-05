import React from 'react';
import { 
  Calendar, Users, Target, Smile, TrendingUp, 
  CheckCircle, ArrowRight, MapPin, Gift, Phone, Mail, User, Clock, MessageSquare
} from 'lucide-react';
import './BookingPage.css';

const BookingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    let message = `*New Free Trial Booking Request*\n\n`;
    message += `*Parent/Guardian Name:* ${data.parentName}\n`;
    message += `*Child's Name:* ${data.childName}\n`;
    message += `*Age:* ${data.age}\n`;
    message += `*Contact Number:* ${data.contact}\n`;
    message += `*Email:* ${data.email}\n`;
    message += `*Preferred Program:* ${data.program}\n`;
    message += `*Preferred Date:* ${data.date}\n`;
    message += `*Preferred Time:* ${data.time}\n`;
    if (data.message) {
      message += `*Additional Message:* ${data.message}\n`;
    }

    const whatsappUrl = `https://wa.me/8124996319?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="booking-page">
      {/* Header Banner */}
      <div className="booking-header">
        <div className="booking-header-content">
          <div className="step-badge">
            <Calendar size={18} /> TAKE THE FIRST STEP
          </div>
          <h1 className="booking-title">BOOK A FREE TRIAL</h1>
          <h2 className="booking-subtitle">Discover the Pumpa Difference!</h2>
          <p className="booking-desc">
            Experience our coaching, meet your coach,<br/>
            and find the perfect program for you or your child.
          </p>
        </div>
        <div className="free-trial-badge">
          <Gift size={32} />
          <div className="badge-title">FREE TRIAL</div>
          <div className="badge-text">No obligation.<br/>Just come<br/>and enjoy!</div>
        </div>
      </div>

      <div className="booking-main">
        {/* Left Column: Info & Features */}
        <div className="booking-info">
          
          <div className="features-row">
            <div className="feature-item">
              <div className="feature-icon"><Users size={24} /></div>
              <h4>EXPERIENCE</h4>
              <p>World-class coaching</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Target size={24} /></div>
              <h4>PERSONALIZED</h4>
              <p>Guidance for your goals</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Smile size={24} /></div>
              <h4>FUN & SUPPORTIVE</h4>
              <p>Environment to learn and grow</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><TrendingUp size={24} /></div>
              <h4>BUILD CONFIDENCE</h4>
              <p>On and off the court</p>
            </div>
          </div>

          <div className="how-it-works-box">
            <div className="section-divider">
              <span className="line"></span>
              HOW IT WORKS
              <span className="line"></span>
            </div>
            <div className="steps-row">
              <div className="step-col">
                <div className="step-icon-wrapper">
                  <Calendar size={24} />
                  <span className="step-num">1</span>
                </div>
                <h5>CHOOSE A TIME</h5>
                <p>Pick a convenient date and time.</p>
              </div>
              <div className="step-col">
                <div className="step-icon-wrapper">
                  <User size={24} />
                  <span className="step-num">2</span>
                </div>
                <h5>ATTEND YOUR FREE TRIAL</h5>
                <p>Experience our training and meet the coach.</p>
              </div>
              <div className="step-col">
                <div className="step-icon-wrapper">
                  <Smile size={24} />
                  <span className="step-num">3</span>
                </div>
                <h5>ENJOY & LEARN</h5>
                <p>Have fun, learn new skills and get personalized feedback.</p>
              </div>
              <div className="step-col">
                <div className="step-icon-wrapper">
                  <StarIcon />
                  <span className="step-num">4</span>
                </div>
                <h5>CONTINUE YOUR JOURNEY</h5>
                <p>Choose the program that's right for you.</p>
              </div>
            </div>
          </div>

          <div className="programs-quote-row">
            <div className="programs-box">
              <div className="section-divider left">
                <span className="line"></span>
                PROGRAMS FOR ALL AGES & LEVELS
                <span className="line"></span>
              </div>
              <div className="prog-icons-row">
                <div className="prog-icon">
                  <Users size={28} />
                  <span>KIDS<br/>4 - 7 YEARS</span>
                </div>
                <div className="prog-icon">
                  <User size={28} />
                  <span>JUNIORS<br/>8 - 17 YEARS</span>
                </div>
                <div className="prog-icon">
                  <TrophyIcon />
                  <span>COMPETITIVE<br/>PLAYERS</span>
                </div>
                <div className="prog-icon">
                  <Users size={28} />
                  <span>ADULTS<br/>ALL LEVELS</span>
                </div>
              </div>
            </div>

            <div className="quote-box">
              <p className="quote-text">
                "The best way to see the difference is to experience it yourself!"
              </p>
              <div className="quote-author">
                <h4>Pushppa Devi</h4>
                <p>WSF Level 3 Certified Coach<br/>Former World No. 68<br/>Former Malaysian National Player</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="booking-form-container">
          <h2 className="form-title">BOOK YOUR <span className="highlight-green">FREE TRIAL</span> TODAY!</h2>
          <p className="form-subtitle">Spots are <span className="highlight-green">limited</span>. Reserve yours now!</p>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <User className="input-icon" size={18} />
                <input type="text" name="parentName" placeholder="Parent / Guardian Name" required />
              </div>
              <div className="input-group">
                <Smile className="input-icon" size={18} />
                <input type="text" name="childName" placeholder="Child's Name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <Calendar className="input-icon" size={18} />
                <input type="number" name="age" placeholder="Age" required />
              </div>
              <div className="input-group">
                <Phone className="input-icon" size={18} />
                <input type="tel" name="contact" placeholder="Contact Number" required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group full-width">
                <Mail className="input-icon" size={18} />
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="input-group full-width">
                <Target className="input-icon" size={18} />
                <select name="program" required defaultValue="">
                  <option value="" disabled>Preferred Program</option>
                  <option value="Kids (4-7 years)">Kids (4 - 7 Years)</option>
                  <option value="Juniors (8-17 years)">Juniors (8 - 17 Years)</option>
                  <option value="Competitive">Competitive Players</option>
                  <option value="Adults">Adults (All Levels)</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <Calendar className="input-icon" size={18} />
                <input type="date" name="date" required />
              </div>
              <div className="input-group">
                <Clock className="input-icon" size={18} />
                <select name="time" required defaultValue="">
                  <option value="" disabled>Preferred Time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group full-width align-top">
                <MessageSquare className="input-icon" size={18} style={{marginTop: '12px'}} />
                <textarea name="message" placeholder="Additional Message (Optional)" rows="3"></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              <Calendar size={20} /> BOOK MY FREE TRIAL
            </button>

            <div className="form-footer">
              <CheckCircle size={16} className="highlight-green" />
              <span>Safe, Professional & Welcoming Environment</span>
            </div>
            <p className="form-footer-italic">We can't wait to meet you! <Smile size={16} /></p>
          </form>
        </div>
      </div>

      {/* Footer / Locations */}
      <div className="booking-locations">
        <div className="location-item">
          <div className="loc-title-row">
            <MapPin size={24} className="highlight-green" />
            <div>
              <span className="loc-subtitle">OUR TRAINING LOCATIONS</span>
              <h3 className="loc-title">SUBANG JAYA</h3>
            </div>
          </div>
          <p className="loc-desc">Subang Lake View Club (SLVC)<br/>Jalan SS 13/3, 47500 Subang Jaya,<br/>Selangor, Malaysia</p>
        </div>

        <div className="location-item">
          <div className="loc-title-row">
            <MapPin size={24} className="highlight-green" />
            <div>
              <h3 className="loc-title">CYBERJAYA</h3>
              <span className="loc-subtitle">TAMAN TASIK CYBERJAYA</span>
            </div>
          </div>
          <p className="loc-desc">Cyberjaya Sports Complex<br/>Persiaran Tasik, Taman Tasik Cyberjaya,<br/>63000 Cyberjaya, Selangor, Malaysia</p>
        </div>

        <div className="location-item highlight-box">
          <Calendar size={32} className="highlight-green" />
          <div>
            <h4 className="highlight-green">LIMITED SLOTS AVAILABLE!</h4>
            <p>Book your free trial today and<br/>start your squash journey with Pumpa.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

// SVG Icons specifically needed to match design if not available in lucide
const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);
const TrophyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
);

export default BookingPage;
