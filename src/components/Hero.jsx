import React, { useState, useEffect } from 'react';
import heroImg from '../assets/bedroom.jpg';

import './HeroStyles.css';

const images = [
  heroImg,
  "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767631297/WhatsApp_Image_2025-10-06_at_14.53.44_ec6a6b55_lxibnj.jpg",
  "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767631311/WhatsApp_Image_2025-10-06_at_14.53.45_c9f3e355_n67ozr.jpg",
  "https://res.cloudinary.com/dybqmcgdz/image/upload/f_auto,q_auto/v1767631331/WhatsApp_Image_2025-10-06_at_14.53.50_7a1ef10e_ianph4.jpg"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      {/* Background slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-container">

        {/* MAIN TITLE */}
        <h1 className="hero-title">
          <span className="hero-title-line">Warm, Comfortable &</span>
          <span className="hero-title-line">Centrally Located Stay</span>
          <span className="hero-title-line">in Coimbatore</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          A private, peaceful homestay suitable for families, couples, and business
          travelers.
        </p>

        {/* SEO paragraph */}
        <p className="hero-seo-text">
          <strong>VPM Homestay</strong> is a trusted <strong>homestay in Coimbatore</strong>,
          located in <strong>Peelamedu</strong> near PSG Tech, PSG Hospital, Airport
          and Railway Station. Ideal for guests looking for a clean, peaceful and
          budget-friendly stay in Coimbatore.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#availability" className="btn hero-btn-primary animate-pulse btn-shimmer">
            Check Availability
          </a>
          <a href="#gallery" className="hero-btn-secondary">
            View Gallery
          </a>
        </div>
      </div>



      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" onClick={() => {
        const nextSection = document.getElementById('about') || document.querySelector('section:nth-of-type(2)');
        if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
      }}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section >
  );
};

export default Hero;
