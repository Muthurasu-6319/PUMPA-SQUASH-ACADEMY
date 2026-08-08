import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2, MapPin, MessageCircle, Trophy,
  Award, Globe, Users, Calendar, ArrowRight, Star, Quote
} from 'lucide-react';
import './AboutPage.css';

const pushppaPhoto = "/pushppa-picture.png";
const yogeswaranPhoto = "/yogeswaran_portrait.png";

/* ── Intersection Observer hook ── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Animated counter ── */
function useCounter(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const StatBox = ({ value, suffix = '', label, start }) => {
  const n = useCounter(value, 1600, start);
  return (
    <div className="ab-stat-box">
      <span className="ab-stat-num">{n}{suffix}</span>
      <span className="ab-stat-lbl">{label}</span>
    </div>
  );
};

const AboutPage = () => {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useReveal(0.05);
  const [statsRef, statsVisible] = useReveal(0.2);
  const [quoteRef, quoteVisible] = useReveal(0.2);
  const [pushppaRef, pushppaVisible] = useReveal(0.12);
  const [yogRef, yogVisible] = useReveal(0.12);
  const [mvvRef, mvvVisible] = useReveal(0.12);

  return (
    <div className="about-page">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="ab-hero" ref={heroRef}>
        {/* Animated background dots */}
        <div className="ab-bg-dots">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="ab-dot" style={{ '--i': i }} />
          ))}
        </div>

        <div className={`ab-hero-inner ${heroVisible ? 'ab-show' : ''}`}>
          <div className="ab-eyebrow">
            <span className="ab-line" />
            WHO WE ARE
            <span className="ab-line" />
          </div>
          <h1 className="ab-hero-title">
            About <span className="ab-green">Pumpa</span>
          </h1>
          <p className="ab-hero-sub">"Start Here... Shine Everywhere"</p>
          <p className="ab-hero-desc">
            Pumpa Squash Academy is a premier squash academy dedicated to developing
            players of all ages and levels. We believe in nurturing talent, building
            confidence, and shaping strong character through the game of squash.
          </p>
          <div className="ab-hero-btns">
            <button className="ab-btn-solid" onClick={() => navigate('/booking')}>
              <Calendar size={17} /> Book Free Trial
            </button>
            <button className="ab-btn-outline" onClick={() => navigate('/programs')}>
              Our Programs <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Diagonal green accent */}
        <div className="ab-hero-accent" />
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <div className="ab-stats-row" ref={statsRef}>
        <StatBox value={300} suffix="+" label="Players Coached"        start={statsVisible} />
        <div className="ab-stats-div" />
        <StatBox value={22}  suffix="+"  label="Years Experience"      start={statsVisible} />
        <div className="ab-stats-div" />
        <StatBox value={68}  suffix=""   label="Former World Rank"     start={statsVisible} />
        <div className="ab-stats-div" />
        <StatBox value={50}  suffix="+"  label="Junior Players Developed" start={statsVisible} />
      </div>

      {/* ═══════════ MISSION QUOTE CARD ═══════════ */}
      <section className="ab-mission-section" ref={quoteRef}>
        <div className={`ab-mission-card ${quoteVisible ? 'ab-show' : ''}`}>
          <div className="ab-mission-quote-icon"><Quote size={48} /></div>
          <p className="ab-mission-text">
            To help children and adults enjoy squash, build confidence, and develop
            a lifelong love for sport.
          </p>
          <div className="ab-mission-footer">
            <div className="ab-mission-line" />
            <span className="ab-mission-label">OUR MISSION</span>
            <div className="ab-mission-line" />
          </div>
        </div>
      </section>

      {/* ═══════════ COACH: PUSHPPA DEVI ═══════════ */}
      <section className="ab-coach-section" ref={pushppaRef}>
        <div className={`ab-coach-row ${pushppaVisible ? 'ab-show' : ''}`}>
          {/* Left: text */}
          <div className="ab-coach-content">
            <span className="ab-coach-eyebrow"><Star size={13} /> FOUNDER</span>
            <h2 className="ab-coach-name">
              Coach <span className="ab-green">Pushppa Devi</span>
            </h2>
            <div className="ab-coach-underline" />
            <p className="ab-coach-bio">
              Former Malaysian professional squash player, former World Top 68, and a WSF Level 3 Certified Coach.
            </p>
            <p className="ab-coach-bio">
              With over two decades in squash, Coach Pushppa has dedicated her journey to developing not only better players, but stronger and more confident individuals.
            </p>
            <p className="ab-coach-bio">
              Her coaching philosophy focuses on discipline, resilience, mental strength, and creating a positive environment where every player can grow at their own pace.
            </p>

            <div className="ab-credentials">
              {[
                { icon: Globe,        text: 'Former Malaysian National Player' },
                { icon: Trophy,       text: 'Former World No. 68' },
                { icon: CheckCircle2, text: 'WSF Level 3 Certified Coach' },
                { icon: Award,        text: 'Malaysian Influential Educator Award 2023' },
                { icon: Star,         text: 'Top 50 Malaysian Influential Educators 2024' },
              ].map((c, i) => (
                <div className="ab-cred-chip" key={i} style={{ '--d': `${i * 80}ms` }}>
                  <c.icon size={15} />
                  <span>{c.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="ab-coach-quote">
              "I believe every player has potential. My mission is to create an inspiring environment where athletes of all ages can grow in confidence."
              <cite>— Pushppa Devi</cite>
            </blockquote>
          </div>

          {/* Right: photo */}
          <div className="ab-coach-photo-wrap">
            <div className="ab-photo-ring ab-ring-1" />
            <div className="ab-photo-ring ab-ring-2" />
            <div className="ab-photo-halo" />
            <img src={pushppaPhoto} alt="Pushppa Devi" className="ab-coach-photo" />
            <div className="ab-photo-badge">FOUNDER</div>
          </div>
        </div>
      </section>

      {/* ═══════════ COACH: YOGESWARAN ═══════════ */}
      <section className="ab-coach-section ab-coach-alt" ref={yogRef}>
        <div className={`ab-coach-row ab-coach-row-reverse ${yogVisible ? 'ab-show' : ''}`}>
          {/* Left: photo */}
          <div className="ab-coach-photo-wrap">
            <div className="ab-photo-ring ab-ring-1" />
            <div className="ab-photo-ring ab-ring-2" />
            <div className="ab-photo-halo" />
            <img src={yogeswaranPhoto} alt="Yogeswaran" className="ab-coach-photo" />
            <div className="ab-photo-badge">HEAD COACH</div>
          </div>

          {/* Right: text */}
          <div className="ab-coach-content">
            <span className="ab-coach-eyebrow"><Star size={13} /> CO-FOUNDER & HEAD COACH</span>
            <h2 className="ab-coach-name">
              Coach <span className="ab-green">Yogeswaran</span>
            </h2>
            <div className="ab-coach-underline" />
            <p className="ab-coach-bio">
              Co-Founder and Head Coach of Pumpa Squash Academy with over 22 years of coaching experience in squash.
            </p>
            <p className="ab-coach-bio">
              As a former high-level player who competed in Malaysia Games (SUKMA), he brings valuable competitive experience and knowledge to his coaching journey.
            </p>
            <p className="ab-coach-bio">
              He specialises in grassroots development programs and has developed numerous junior top 8 ranked players as well as social and recreational players.
            </p>

            <div className="ab-credentials">
              {[
                { icon: Trophy,       text: '22+ Years of Professional Coaching Experience' },
                { icon: Globe,        text: 'Former High-Level Player — Malaysia Games (SUKMA)' },
                { icon: CheckCircle2, text: 'WSF Certified Coach — Grassroots Development Specialist' },
                { icon: Users,        text: 'Developed Numerous Junior Top 8 Ranked Players' },
                { icon: Award,        text: 'State Coach for Junior High Performance, Selangor (2013)' },
              ].map((c, i) => (
                <div className="ab-cred-chip" key={i} style={{ '--d': `${i * 80}ms` }}>
                  <c.icon size={15} />
                  <span>{c.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="ab-coach-quote">
              "Coaching is more than technique — it is about shaping character, building resilience, and creating champions who shine both on and off the court."
              <cite>— Yogeswaran</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION / VISION / VALUES ═══════════ */}
      <section className="ab-mvv-section" ref={mvvRef}>
        <div className="ab-section-label">
          <span className="ab-lbl-line" />OUR FOUNDATION<span className="ab-lbl-line" />
        </div>
        <div className={`ab-mvv-grid ${mvvVisible ? 'ab-show' : ''}`}>
          {[
            {
              emoji: '🎯',
              label: 'OUR MISSION',
              color: '#8cc63f',
              text: 'To empower players of all ages and levels through quality coaching, structured programs and a supportive community.',
            },
            {
              emoji: '👁️',
              label: 'OUR VISION',
              color: '#3b9eff',
              text: 'To be a leading squash academy recognized for developing champions who excel on and off the court.',
            },
            {
              emoji: '💚',
              label: 'OUR VALUES',
              color: '#e05c8a',
              chips: ['Passion', 'Respect', 'Integrity', 'Teamwork', 'Discipline', 'Excellence', 'Fun'],
            },
          ].map((item, i) => (
            <div className="ab-mvv-card" key={i} style={{ '--c': item.color, '--d': `${i * 120}ms` }}>
              <div className="ab-mvv-emoji">{item.emoji}</div>
              <h3 className="ab-mvv-label">{item.label}</h3>
              {item.text && <p className="ab-mvv-text">{item.text}</p>}
              {item.chips && (
                <div className="ab-mvv-chips">
                  {item.chips.map(v => <span key={v} className="ab-chip">{v}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ LOCATIONS BANNER ═══════════ */}
      <div className="about-footer-banner">
        <div className="banner-loc-group">
          <MapPin size={22} className="highlight-green" />
          <span className="loc-label">OUR TRAINING LOCATIONS</span>
        </div>
        <div className="banner-loc-item">
          <strong>SUBANG JAYA</strong>
          <span>Subang Lake View Club (SLVC)</span>
        </div>
        <div className="banner-loc-item">
          <strong>CYBERJAYA</strong>
          <span>Taman Tasik Cyberjaya</span>
        </div>
        <div className="banner-social-item">
          <span className="social-label">FOLLOW US</span>
          <div className="social-icons-group">
            <a href="#" className="soc-circle fb">
              <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="soc-circle ig">
              <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg>
            </a>
            <a href="#" className="soc-circle wa">
              <MessageCircle size={14} color="white" />
            </a>
          </div>
        </div>
        <div className="banner-tagline-cursive">Start Here... Shine Everywhere</div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
