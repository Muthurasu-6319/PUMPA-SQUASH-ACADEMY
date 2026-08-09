import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar, Menu, X, ChevronLeft, ChevronRight,
  ZoomIn, Image as ImageIcon, Trophy, Users, Star, Sparkles
} from 'lucide-react';
import Footer from './Footer';
import './GalleryPage.css';

const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";
import SEO from './components/SEO';

// Dynamically load all 31 images from assets/Gallery
const imageModules = import.meta.glob('./assets/Gallery/*.{jpg,JPG,png,PNG}', { eager: true });
const galleryImagesList = Object.entries(imageModules).map(([path, mod], index) => {
  const fileName = path.split('/').pop();
  let category = 'Training';
  let title = `Gallery Moment ${index + 1}`;

  if (index % 4 === 0) {
    category = 'Tournaments';
    title = `Tournament Action #${index + 1}`;
  } else if (index % 4 === 1) {
    category = 'Junior Champions';
    title = `Junior Champions #${index + 1}`;
  } else if (index % 4 === 2) {
    category = 'Coaching';
    title = `Coaching Session #${index + 1}`;
  } else {
    category = 'Academy Life';
    title = `Academy Life #${index + 1}`;
  }

  if (index === 29) {
    category = 'Coaching';
    title = 'Adult Coaching #30';
  }

  return {
    id: index + 1,
    src: mod.default || mod,
    title,
    category,
    fileName
  };
});

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function GalleryPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const [heroRef, heroIn] = useInView();
  const [gridRef, gridIn] = useInView();

  const categories = ['All', 'Coaching', 'Junior Champions', 'Tournaments', 'Academy Life'];

  const filteredImages = selectedFilter === 'All'
    ? galleryImagesList
    : galleryImagesList.filter(img => img.category === selectedFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  return (
    <>
      <SEO
        title="Gallery | Pumpa Squash Academy Malaysia"
        description="View our squash academy in action! See our facilities, students, and coaches across Selangor and Kuala Lumpur."
        keywords="Pumpa Squash Academy Gallery, Squash Coaching Photos, Squash Academy Facilities Malaysia, Squash KL Images, Selangor Squash Photos"
      />
      {/* ── NAVBAR ── */}
      <nav className="gallery-navbar">
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
          <li onClick={() => navigate('/programs')}>PROGRAMS</li>
          <li className="active">GALLERY</li>
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

      {/* ── HERO BANNER ── */}
      <section className="gallery-hero" ref={heroRef}>
        <div className={`gallery-hero-content ${heroIn ? 'animate-in' : ''}`}>
          <div className="gallery-hero-badge">
            PHOTO GALLERY
          </div>
          <h1 className="gallery-hero-title">
            MOMENTS OF <span className="green">GLORY</span>,<br />
            GRIT &amp; <span className="green">GREATNESS</span>
          </h1>
          <p className="gallery-hero-desc">
            Explore the vibrant life at Pumpa Squash Academy — from intense coaching sessions and grassroots development to podium victories and lifelong friendships.
          </p>

          <div className="gallery-stats-row">
            <div className="g-stat-item">
              <ImageIcon className="g-stat-icon" size={22} />
              <div>
                <span className="g-stat-val">30+</span>
                <span className="g-stat-lbl">High-Res Photos</span>
              </div>
            </div>
            <div className="g-stat-item">
              <Trophy className="g-stat-icon" size={22} />
              <div>
                <span className="g-stat-val">20+</span>
                <span className="g-stat-lbl">Years Legacy</span>
              </div>
            </div>
            <div className="g-stat-item">
              <Users className="g-stat-icon" size={22} />
              <div>
                <span className="g-stat-val">300+</span>
                <span className="g-stat-lbl">Athletes Trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER & GALLERY GRID ── */}
      <section className="gallery-main" ref={gridRef}>
        <div className="gallery-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
              <span className="filter-count">
                {cat === 'All' ? galleryImagesList.length : galleryImagesList.filter(img => img.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className={`gallery-card ${gridIn ? 'animate-in' : ''}`}
              style={{ animationDelay: `${(index % 12) * 0.05}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-card-overlay">
                  <span className="category-tag">{img.category}</span>
                  <div className="zoom-icon-wrapper">
                    <ZoomIn size={24} />
                  </div>
                  <h4 className="gallery-card-title">{img.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <X size={28} />
            </button>

            <button className="lightbox-nav prev" onClick={prevImage} aria-label="Previous image">
              <ChevronLeft size={36} />
            </button>

            <div className="lightbox-content">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <div className="caption-category">{filteredImages[lightboxIndex].category}</div>
                <h3 className="caption-title">{filteredImages[lightboxIndex].title}</h3>
                <span className="caption-counter">{lightboxIndex + 1} of {filteredImages.length}</span>
              </div>
            </div>

            <button className="lightbox-nav next" onClick={nextImage} aria-label="Next image">
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="gallery-cta">
        <div className="gallery-cta-inner">
          <h2 className="cta-title">WANT TO BE PART OF OUR <span className="green">NEXT MOMENT?</span></h2>
          <p className="cta-sub">Join Malaysia's leading squash academy today and start your champion journey!</p>
          <button className="btn-primary cta-btn" onClick={() => navigate('/booking')}>
            <Calendar size={20} /> BOOK A FREE TRIAL
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
