import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar, Menu, CheckCircle2, Trophy,
  Clock, Users, Target, Star, Award, UserCheck, Globe,
  ChevronRight, Plus, Minus, MapPin, MessageCircle, Mail
} from 'lucide-react';
import Footer from './Footer';
import './ProgramsPage.css';

/* ── Assets ── */
import img1 from './assets/Gallery/DSC_0049.JPG';
import img2 from './assets/Gallery/DSC_0051.JPG';
import img3 from './assets/Gallery/DSC_0054.JPG';
import img4 from './assets/Gallery/DSC_0070.JPG';
import img5 from './assets/Gallery/DSC_0107.JPG';
import img6 from './assets/Gallery/DSC_0145.JPG';
import img7 from './assets/Gallery/DSC_0150.JPG';
import img8 from './assets/Gallery/DSC_0241.JPG';
import img9 from './assets/Gallery/DSC_0443.JPG';
import img10 from './assets/Gallery/DSC_0548.JPG';
import pushppaImg from './assets/Pushppa picture.png';

const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";

/* ── Intersection Observer Hook ── */
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ── Data ── */
const PROGRAMS = [
  {
    id: 'mini',
    tab: 'Mini Champions',
    title: 'MINI CHAMPIONS',
    subtitle: 'Junior Squash Coaching',
    age: '4 – 7 Years',
    level: 'Beginner',
    duration: '60 Minutes',
    classSize: 'Max 8 per class',
    img: img1,
    accentColor: '#f59e0b',
    icon: <Users size={22} />,
    desc: 'Perfect for children beginning their squash journey. A fun and engaging introduction to squash that builds coordination, movement, confidence and a lifelong love for the game.',
    bullets: ['Movement skills', 'Balance & coordination', 'Hand-eye coordination', 'Fun games', 'Confidence & listening skills'],
    goal: 'Create a lifelong love for squash.',
  },
  {
    id: 'junior',
    tab: 'Junior Development',
    title: 'JUNIOR DEVELOPMENT',
    subtitle: 'Junior Squash Coaching',
    age: '8 – 12 Years',
    level: 'Beginner – Intermediate',
    duration: '75 – 90 Minutes',
    classSize: 'Max 10 per class',
    img: img2,
    accentColor: '#3b82f6',
    icon: <Target size={22} />,
    desc: 'Build strong foundations and develop good habits. Develop strong technical skills, game understanding and athletic ability in a supportive and motivating environment.',
    bullets: ['Technique', 'Footwork', 'Match play', 'Tactical awareness', 'Physical literacy', 'Sportsmanship'],
    goal: 'Prepare players for competitive play.',
  },
  {
    id: 'performance',
    tab: 'Performance Pathway',
    title: 'PERFORMANCE PATHWAY',
    subtitle: 'Competitive Squash Training',
    age: '12+ Years',
    level: 'Intermediate – Advanced',
    duration: '90 – 120 Minutes',
    classSize: 'Max 6 per group',
    img: img3,
    accentColor: '#8cc63f',
    icon: <Trophy size={22} />,
    desc: 'For players competing in tournaments and leagues. Advanced training for tournament players and aspiring athletes aiming for higher levels of performance.',
    bullets: ['Advanced technique', 'Strategy & tactics', 'Match analysis', 'Mental preparation', 'Tournament coaching', 'Strength & conditioning'],
    goal: 'Compete and excel at state & national level.',
  },
  {
    id: 'adult',
    tab: 'Adult Coaching',
    title: 'ADULT COACHING',
    subtitle: 'Adult Squash Coaching – All Levels',
    age: 'Adults (16+)',
    level: 'All Levels',
    duration: '60 – 90 Minutes',
    classSize: 'Max 8 per class',
    img: img4,
    accentColor: '#a855f7',
    icon: <UserCheck size={22} />,
    desc: 'Suitable for beginners through to advanced players. Programs for all levels — from beginners looking to get fit to advanced players wanting to improve and compete.',
    bullets: ['Beginner', 'Intermediate', 'Advanced', 'Fitness', 'Technique', 'Match play', 'Personal goals'],
    goal: 'Enjoy the game and improve at your own pace.',
  },
  {
    id: 'private',
    tab: 'Private Coaching',
    title: 'PRIVATE COACHING',
    subtitle: 'One-on-One Personalised Training',
    age: 'Juniors & Adults',
    level: 'All Levels',
    duration: '45 / 60 Minutes',
    classSize: '1-on-1 personalised',
    img: img5,
    accentColor: '#f97316',
    icon: <Star size={22} />,
    desc: 'One-on-one personalised coaching to accelerate your improvement. Coaching tailored to your individual goals, needs and pace for faster improvement.',
    bullets: ['Technical development', 'Match improvement', 'Tournament preparation', 'Confidence & mindset', 'Flexible scheduling'],
    goal: 'Accelerate your game with personalised attention.',
  },
  {
    id: 'holiday',
    tab: 'Holiday Camps',
    title: 'HOLIDAY CAMPS',
    subtitle: 'School Holiday Programs',
    age: 'All Ages',
    level: 'All Levels',
    duration: 'Half / Full Day',
    classSize: 'Groups of 8–12',
    img: img6,
    accentColor: '#ec4899',
    icon: <Calendar size={22} />,
    desc: 'Fun, active and engaging camps for all levels. School holiday squash camps combining skill-building, games, activities and making new friends.',
    bullets: ['Skill development', 'Fun games & challenges', 'Fitness & coordination', 'Team activities', 'Make new friends'],
    goal: 'Have fun while developing squash skills.',
  },
];

const PATHWAY_STEPS = [
  { icon: <Users size={28} />, label: 'MINI CHAMPIONS', age: '4 – 7 YEARS' },
  { icon: <Target size={28} />, label: 'JUNIOR DEVELOPMENT', age: '8 – 12 YEARS' },
  { icon: <Trophy size={28} />, label: 'PERFORMANCE PATHWAY', age: '12+ YEARS' },
  { icon: <Award size={28} />, label: 'ELITE PERFORMANCE', age: 'COMPETITIVE LEVEL' },
];

const WHY_PUMPA = [
  { icon: <Globe size={32} />, label: 'Former Malaysian National Player' },
  { icon: <Award size={32} />, label: 'Former World No. 68' },
  { icon: <UserCheck size={32} />, label: 'WSF Level 3 Certified Coach' },
  { icon: <Clock size={32} />, label: '22+ Years Combined Coaching Experience' },
  { icon: <Target size={32} />, label: 'Structured Development Pathway' },
  { icon: <Star size={32} />, label: 'Positive Learning Environment' },
];

const FAQS = [
  { q: 'How old should my child be to start squash?', a: 'We welcome children from age 4 in our Mini Champions program. There is no age too early — squash builds great motor skills and coordination for kids.' },
  { q: 'Do I need my own racket?', a: 'No. We provide rackets for beginners. Once you decide to continue, we can recommend the right racket for your age and level.' },
  { q: 'Can beginners join the programs?', a: 'Absolutely! All our programs have beginner-friendly options. Our coaches are trained to coach players from their very first step on court.' },
  { q: 'Can adults start from scratch?', a: 'Yes! Our Adult Coaching program is designed for all levels. Many of our adult members started with zero experience and now enjoy regular matches.' },
  { q: 'What should my child wear and bring?', a: 'Sports attire, non-marking court shoes, a water bottle, and a towel. We\'ll provide the racket until they\'re ready to get their own.' },
  { q: 'How do I book a free trial?', a: 'Simply click "Book A Free Trial" on any page and fill in the form. Our team will get in touch within 24 hours to confirm your session.' },
  { q: 'How often are the sessions?', a: 'Most programs run 2–3 times per week. Private sessions can be scheduled at your convenience based on coach availability.' },
];

export default function ProgramsPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('mini');
  const [openFaq, setOpenFaq] = useState(null);

  const active = PROGRAMS.find(p => p.id === activeTab);

  const [heroRef, heroIn] = useInView();
  const [pillarsRef, pillarsIn] = useInView();
  const [pathwayRef, pathwayIn] = useInView();
  const [gridRef, gridIn] = useInView();
  const [whyRef, whyIn] = useInView();
  const [faqRef, faqIn] = useInView();
  const [ctaRef, ctaIn] = useInView();

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="pp-navbar">
        <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Pumpa Squash Academy Logo" className="logo-img" />
          <div className="logo-text">
            PUMPA
            <span className="logo-subtext">SQUASH ACADEMY</span>
          </div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li onClick={() => navigate('/')}>HOME</li>
          <li onClick={() => navigate('/about')}>ABOUT US</li>
          <li className="active">PROGRAMS</li>
          <li onClick={() => navigate('/gallery')} style={{ cursor: 'pointer' }}>GALLERY</li>
          <li onClick={() => navigate('/contact')}>CONTACT US</li>
          <li className="mobile-only-btn">
            <button className="btn-primary" onClick={() => navigate('/booking')} style={{ width: '100%', justifyContent: 'center' }}>
              <Calendar size={18} /> BOOK A FREE TRIAL
            </button>
          </li>
        </ul>
        <button className="nav-btn" onClick={() => navigate('/booking')}>
          <Calendar size={18} /> BOOK A FREE TRIAL
        </button>
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="pp-hero" ref={heroRef}>
        <div className={`pp-hero-left ${heroIn ? 'animate-in' : ''}`}>
          <div className="pp-hero-badge">OUR PROGRAMS</div>
          <h1 className="pp-hero-title">
            OUR <span className="pp-green">PROGRAMS</span>
          </h1>
          <p className="pp-hero-cursive">Find the Perfect Program for Your Squash Journey</p>
          <p className="pp-hero-desc">
            Whether you're taking your first swing or preparing for competition, Pumpa Squash Academy offers professional coaching programs designed for every age and ability.
          </p>

          {/* Credentials strip */}
          <div className="pp-credentials">
            <div className="pp-cred-item">
              <Globe size={18} className="pp-cred-icon" />
              <span>Former Malaysian National Player</span>
            </div>
            <div className="pp-cred-item">
              <Award size={18} className="pp-cred-icon" />
              <span>Former World No. 68</span>
            </div>
            <div className="pp-cred-item">
              <UserCheck size={18} className="pp-cred-icon" />
              <span>WSF Level 3 Certified Coach</span>
            </div>
          </div>

          <button className="btn-primary pp-hero-btn" onClick={() => navigate('/booking')}>
            <Calendar size={18} /> BOOK A FREE TRIAL
          </button>
        </div>

        {/* Hero photo collage */}
        <div className={`pp-hero-right ${heroIn ? 'animate-in-right' : ''}`}>
          <div className="pp-hero-collage">
            <div className="collage-main">
              <img src={img1} alt="Coaching at Pumpa Squash Academy" />
            </div>
            <div className="collage-side">
              <img src={img8} alt="Group training session" />
              <img src={img3} alt="Junior players training" />
              <img src={img9} alt="Performance training" />
            </div>
          </div>
        </div>

        {/* Hero pillars strip */}
        <div className="pp-hero-pillars" ref={pillarsRef}>
          {[
            { icon: <Trophy size={24} />, title: 'STRUCTURED LEARNING', desc: 'Progressive coaching tailored to every stage of development.' },
            { icon: <UserCheck size={24} />, title: 'QUALIFIED COACHES', desc: 'Learn from experienced, internationally certified coaches.' },
            { icon: <Star size={24} />, title: 'FUN & SUPPORTIVE', desc: 'Build confidence while enjoying the game in a positive environment.' },
            { icon: <Target size={24} />, title: 'PLAYER DEVELOPMENT', desc: 'Develop skills, mindset and character both on and off the court.' },
          ].map((p, i) => (
            <div key={i} className={`pp-pillar ${pillarsIn ? 'animate-in' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="pp-pillar-icon">{p.icon}</div>
              <div>
                <div className="pp-pillar-title">{p.title}</div>
                <div className="pp-pillar-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COACHING PATHWAY ── */}
      <section className="pp-pathway" ref={pathwayRef}>
        <div className={`pp-pathway-label ${pathwayIn ? 'animate-in' : ''}`}>OUR COACHING PATHWAY</div>
        <div className="pp-pathway-steps">
          {PATHWAY_STEPS.map((step, i) => (
            <React.Fragment key={i}>
              <div className={`pp-pathway-step ${pathwayIn ? 'animate-in' : ''}`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="pp-pathway-icon">{step.icon}</div>
                <div className="pp-pathway-label-text">{step.label}</div>
                <div className="pp-pathway-age">{step.age}</div>
              </div>
              {i < PATHWAY_STEPS.length - 1 && (
                <ChevronRight size={28} className={`pp-pathway-arrow ${pathwayIn ? 'animate-in' : ''}`} style={{ animationDelay: `${i * 0.12 + 0.06}s` }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ── TAB NAVIGATOR + DETAIL PANEL ── */}
      <section className="pp-tabbed">
        <div className="pp-section-label">OUR PROGRAMS</div>
        <h2 className="pp-section-title">
          Junior &amp; Adult Squash Coaching <span className="pp-green">Programs</span>
        </h2>

        {/* Tabs */}
        <div className="pp-tabs" role="tablist">
          {PROGRAMS.map(p => (
            <button
              key={p.id}
              role="tab"
              aria-selected={activeTab === p.id}
              className={`pp-tab ${activeTab === p.id ? 'active' : ''}`}
              style={activeTab === p.id ? { borderColor: p.accentColor, color: p.accentColor } : {}}
              onClick={() => setActiveTab(p.id)}
            >
              <span className="pp-tab-icon" style={activeTab === p.id ? { background: p.accentColor + '22', color: p.accentColor } : {}}>{p.icon}</span>
              {p.tab}
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        {active && (
          <div className="pp-detail-panel" key={active.id} style={{ borderTopColor: active.accentColor }}>
            <div className="pp-detail-img-wrap">
              <img src={active.img} alt={active.title} className="pp-detail-img" />
              <div className="pp-detail-badge" style={{ background: active.accentColor }}>
                {active.icon} {active.age}
              </div>
            </div>

            <div className="pp-detail-info">
              <div className="pp-detail-tag" style={{ color: active.accentColor, borderColor: active.accentColor + '44', background: active.accentColor + '11' }}>
                {active.subtitle}
              </div>
              <h3 className="pp-detail-title">{active.title}</h3>
              <p className="pp-detail-desc">{active.desc}</p>

              {/* Meta row */}
              <div className="pp-detail-meta">
                <div className="pp-meta-item"><Clock size={16} /><span><strong>Duration:</strong> {active.duration}</span></div>
                <div className="pp-meta-item"><Users size={16} /><span><strong>Class Size:</strong> {active.classSize}</span></div>
                <div className="pp-meta-item"><Star size={16} /><span><strong>Level:</strong> {active.level}</span></div>
                <div className="pp-meta-item"><Target size={16} /><span><strong>Ages:</strong> {active.age}</span></div>
              </div>

              {/* Bullets */}
              <ul className="pp-detail-bullets">
                {active.bullets.map((b, i) => (
                  <li key={i}><CheckCircle2 size={16} style={{ color: active.accentColor }} />{b}</li>
                ))}
              </ul>

              {/* Goal */}
              <div className="pp-detail-goal" style={{ borderColor: active.accentColor, background: active.accentColor + '11' }}>
                <strong style={{ color: active.accentColor }}>GOAL:</strong> {active.goal}
              </div>

              {/* CTA */}
              <div className="pp-detail-ctas">
                <button className="btn-primary pp-enroll-btn" style={{ background: active.accentColor, borderColor: active.accentColor }} onClick={() => navigate('/booking')}>
                  <Calendar size={18} /> BOOK A TRIAL
                </button>
                <button className="pp-learn-btn" onClick={() => navigate('/contact')}>
                  LEARN MORE <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── ALL PROGRAMS GRID ── */}
      <section className="pp-grid-section" ref={gridRef}>
        <div className="pp-section-label">ALL PROGRAMS</div>
        <h2 className="pp-section-title">
          OUR <span className="pp-green">PROGRAMS</span>
        </h2>

        <div className="pp-programs-grid">
          {PROGRAMS.map((prog, i) => (
            <div
              key={prog.id}
              className={`pp-grid-card ${gridIn ? 'animate-in' : ''}`}
              style={{ animationDelay: `${i * 0.08}s`, '--accent': prog.accentColor }}
              onClick={() => { setActiveTab(prog.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="pp-card-img-wrap">
                <img src={prog.img} alt={prog.title} />
                <div className="pp-card-overlay" />
                <div className="pp-card-age-badge" style={{ background: prog.accentColor }}>
                  {prog.age}
                </div>
                <div className="pp-card-icon-circle" style={{ background: prog.accentColor }}>
                  {prog.icon}
                </div>
              </div>
              <div className="pp-card-body" style={{ borderTopColor: prog.accentColor }}>
                <h3 className="pp-card-title">{prog.title}</h3>
                <span className="pp-card-level" style={{ color: prog.accentColor }}>{prog.level}</span>
                <ul className="pp-card-bullets">
                  {prog.bullets.slice(0, 4).map((b, j) => (
                    <li key={j}><CheckCircle2 size={14} style={{ color: prog.accentColor }} />{b}</li>
                  ))}
                </ul>
                <div className="pp-card-meta">
                  <span><Clock size={13} /> {prog.duration}</span>
                  <span><Users size={13} /> {prog.classSize}</span>
                </div>
                <button
                  className="pp-card-cta"
                  style={{ background: prog.accentColor }}
                  onClick={e => { e.stopPropagation(); navigate('/booking'); }}
                >
                  <Calendar size={14} /> BOOK A TRIAL
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE PUMPA ── */}
      <section className="pp-why" ref={whyRef}>
        <div className="pp-why-inner">
          <div className="pp-why-left">
            <div className="pp-section-label" style={{ textAlign: 'left' }}>TRUST SIGNALS</div>
            <h2 className="pp-why-title">WHY CHOOSE <span className="pp-green">PUMPA?</span></h2>
            <div className="pp-why-grid">
              {WHY_PUMPA.map((item, i) => (
                <div key={i} className={`pp-why-card ${whyIn ? 'animate-in' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="pp-why-icon">{item.icon}</div>
                  <div className="pp-why-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pp-why-right">
            <img src={pushppaImg} alt="Coach Pushppa Devi – Former Malaysian National Player, World No. 68, WSF Level 3 Certified Coach" className="pp-coach-img" />
            <div className="pp-coach-info-card">
              <div className="pp-coach-name">Pushppa Devi Paramasewa</div>
              <div className="pp-coach-creds">
                <div><CheckCircle2 size={14} className="pp-cc-icon" /> Former Malaysian National Player</div>
                <div><CheckCircle2 size={14} className="pp-cc-icon" /> Former World No. 68</div>
                <div><CheckCircle2 size={14} className="pp-cc-icon" /> WSF Level 3 Certified Coach</div>
                <div><CheckCircle2 size={14} className="pp-cc-icon" /> Malaysia Influential Educator Award 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pp-faq" ref={faqRef}>
        <div className={`pp-faq-inner ${faqIn ? 'animate-in' : ''}`}>
          <div className="pp-section-label">GOT QUESTIONS?</div>
          <h2 className="pp-section-title">FREQUENTLY ASKED <span className="pp-green">QUESTIONS</span></h2>
          <div className="pp-faq-grid">
            {FAQS.map((faq, i) => (
              <div key={i} className={`pp-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="pp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  {openFaq === i ? <Minus size={18} className="pp-faq-icon" /> : <Plus size={18} className="pp-faq-icon" />}
                </button>
                {openFaq === i && <div className="pp-faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="pp-cta" ref={ctaRef}>
        <div className="pp-cta-player-img">
          <img src={img10} alt="Junior squash player in action" />
        </div>
        <div className={`pp-cta-content ${ctaIn ? 'animate-in' : ''}`}>
          <h2 className="pp-cta-title">
            READY TO START YOUR <span className="pp-green">SQUASH JOURNEY?</span>
          </h2>
          <p className="pp-cta-cursive">Book Your Free Trial Today!</p>
          <p className="pp-cta-sub">Come and experience the Pumpa difference.</p>
          <div className="pp-cta-btns">
            <button className="btn-primary pp-cta-btn" onClick={() => navigate('/booking')}>
              <Calendar size={18} /> BOOK A FREE TRIAL
            </button>
            <button className="pp-contact-btn" onClick={() => navigate('/contact')}>
              <Mail size={18} /> CONTACT US
            </button>
          </div>
        </div>
        <div className="pp-cta-logo-block">
          <img src={logo} alt="Pumpa Squash Academy" style={{ height: 48 }} />
          <p className="pp-cta-tagline">Start Here... Shine Everywhere</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
