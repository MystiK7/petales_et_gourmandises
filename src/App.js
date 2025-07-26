import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; // Le fichier CSS global

export default function PetalesGourmandises() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="gradient-bg" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header className="header header-glass">
        <div className="header-content">
          <div className="logo">
            <img src="/logo_PG.jpg" alt="Logo Pétales & Gourmandises" className="logo-img" />
            <h1 className="logo-text">Pétales & Gourmandises</h1>
          </div>


          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <button onClick={() => scrollToSection('accueil')} className="nav-link">Accueil</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Nos Créations</button>
            <button onClick={() => scrollToSection('apropos')} className="nav-link">À Propos</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary">Contact</button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('accueil')} className="mobile-nav-item">Accueil</button>
            <button onClick={() => scrollToSection('services')} className="mobile-nav-item">Nos Créations</button>
            <button onClick={() => scrollToSection('apropos')} className="mobile-nav-item">À Propos</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-item">Contact</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="hero gradient-bg">
        <div className="container">
          <div className="badge">
            <span style={{ fontSize: '1.25rem' }}>⭐</span>
            <span>Créations artisanales uniques</span>
          </div>
          <h2 className="hero-title">Pétales & Gourmandises</h2>
          <p className="hero-subtitle">
            Chaque plateau est une création unique mêlant fleurs comestibles et gourmandises artisanales
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('services')} className="btn-primary">
              Découvrir nos créations
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              Nous contacter
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="floating-element float-1"></div>
        <div className="floating-element float-2"></div>
        <div className="floating-element float-3"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
        <div className="container">
          <h3 className="section-title">Nos Créations</h3>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Des compositions uniques mêlant fleurs comestibles et gourmandises salées et sucrées
          </p>

          <div className="services-grid">
            {[
              {
                title: "Apéros Romantiques",
                description: "Des plateaux délicats pour des moments intimes, avec des fleurs comestibles et des mets raffinés",
                color: "linear-gradient(135deg, #f472b6 0%, #fb7185 100%)",
                icon: "💕"
              },
              {
                title: "Brunch Cocooning",
                description: "Des créations douces et réconfortantes pour vos matinées détente entre amis ou en famille",
                color: "linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)",
                icon: "🥐"
              },
              {
                title: "Balades Gourmandes",
                description: "Des plateaux pratiques et savoureux pour vos escapades en bateau ou pique-niques",
                color: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                icon: "🚤"
              },
              {
                title: "Événements Spéciaux",
                description: "Créations sur mesure pour vos moments uniques : anniversaires, célébrations, réunions",
                color: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
                icon: "🎉"
              },
              {
                title: "100% Personnalisable",
                description: "Selon vos goûts, vos envies et vos événements, chaque plateau est unique",
                color: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                icon: "🎨"
              },
              {
                title: "Fait Maison",
                description: "Tout est préparé avec passion et savoir-faire, des ingrédients sélectionnés aux finitions",
                color: "linear-gradient(135deg, #f87171 0%, #ef4444 100%)",
                icon: "👩‍🍳"
              }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ background: service.color }}>
                  {service.icon}
                </div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
                  {service.title}
                </h4>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="section gradient-bg">
        <div className="container">
          <div className="about-grid">
            <div>
              <h3 className="section-title" style={{ textAlign: 'left' }}>Notre Philosophie</h3>
              <div className="about-content">
                <p>
                  Chez <strong>Pétales & Gourmandises</strong>, chaque plateau est une création. On y mêle fleurs comestibles, en-cas gourmands faits avec beaucoup de soin et de cœur, des moments uniques à partager.
                </p>
                <p>
                  Parce qu'ici on ne se contente pas d'empiler des tranches de charcuterie sur une planche, on crée une expérience.
                </p>
                <p>
                  Pour des apéros romantiques, des brunchs cocooning, une balade en bateau, ou tout autre moment de vie, Pétales & Gourmandises c'est <strong>la surprise qui marque</strong>.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="about-image">
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <span style={{ fontSize: '6rem', display: 'block', marginBottom: '1rem', opacity: 0.9 }}>💝</span>
                  <p style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Fait avec passion</p>
                  <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>100% artisanal</p>
                </div>
              </div>
              <div style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                width: '6rem',
                height: '6rem',
                background: '#fde047',
                borderRadius: '50%',
                opacity: 0.7,
                animation: 'float 3s ease-in-out infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-1rem',
                left: '-1rem',
                width: '4rem',
                height: '4rem',
                background: '#f472b6',
                borderRadius: '50%',
                opacity: 0.7,
                animation: 'float 4s ease-in-out infinite reverse'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'white' }}>
        <div className="container">
          <h3 className="section-title">Contactez-nous</h3>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem' }}>
            Prêt à créer votre expérience gourmande unique ?
          </p>

          <div className="contact-banner">
            <h4 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>
              Informations de Contact
            </h4>
            <div className="contact-grid">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Téléphone</div>
                <div style={{ opacity: 0.9 }}>06.88.27.53.70 </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Email</div>
                <div style={{ opacity: 0.9 }}>petalesetgourmandises@outlook.fr</div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Zone de service</div>
                <div style={{ opacity: 0.9 }}>Bassin d'Arcachon</div>
              </div>
            </div>
          </div>

          <div style={{
            background: '#f9fafb',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
              Réseaux Sociaux
            </h4>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              Suivez-nous pour découvrir nos dernières créations !
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
              {/* Instagram */}
              <div style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                padding: '0.75rem',
                borderRadius: '50%',
                fontSize: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}>
                <i className="fa fa-instagram" style={{ fontSize: '2rem', color: '#fff' }}></i>
              </div>
              <span style={{ color: '#374151', fontWeight: '500' }}>Instagram</span>

              {/* Facebook */}
              <div style={{
                background: 'linear-gradient(135deg, #1877f2 0%, #3b5998 100%)',
                padding: '0.75rem',
                borderRadius: '50%',
                fontSize: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}>
                <i className="fa fa-facebook" style={{ fontSize: '2rem', color: '#fff' }}></i>
              </div>
              <span style={{ color: '#374151', fontWeight: '500' }}>Facebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div className="logo-icon" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>🌸</div>
            <h5 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Pétales & Gourmandises</h5>
          </div>
          <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
            Des créations artisanales uniques pour vos moments précieux
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            © 2025 Pétales & Gourmandises. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
