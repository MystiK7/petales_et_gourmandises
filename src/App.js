import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; // Le fichier CSS global
import logo from './assets/logo2_PG.jpg'; // Chemin relatif depuis le fichier .js
import plateauImage from './assets/pictures/plateau1.jpeg';
import wrapsImage from './assets/pictures/wraps1.jpeg';
import bagelsImage from './assets/pictures/bagel1.jpeg';
import verrinesImage from './assets/pictures/creation6.jpeg';


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
            <img src={logo} alt="Logo Pétales & Gourmandises" className="logo-img" />
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
          <h2 className="hero-title">Pétales & Gourmandises</h2>
          <p className="hero-subtitle">
            🌸 Des fleurs et des saveurs pour toutes les humeurs 🌸
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
            Des compositions uniques mêlant fleurs comestibles et gourmandises, salées ou sucrées !
          </p>

          <div className="services-grid">
            {[
              {
                title: "Apéros Romantiques",
                description: "Des plateaux délicats pour des moments intimes, avec des fleurs comestibles et des mets raffinés !",
                color: "linear-gradient(135deg, #f472b6 0%, #fb7185 100%)",
                icon: "💕"
              },
              {
                title: "Brunch Cocooning",
                description: "Des créations douces et réconfortantes pour vos matinées détentes entre amis ou en famille !",
                color: "linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)",
                icon: "🥐"
              },
              {
                title: "Balades Gourmandes",
                description: "Des plateaux pratiques et savoureux pour vos escapades en bateau ou pique-niques !",
                color: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                icon: "🚤"
              },
              {
                title: "Événements Spéciaux",
                description: "Créations sur mesure pour vos moments uniques : anniversaires, célébrations ou réunions !",
                color: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
                icon: "🎉"
              },
              {
                title: "100% Personnalisable",
                description: "Selon vos goûts, vos envies et vos événements : chaque plateau est unique !",
                color: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                icon: "🎨"
              },
              {
                title: "Fait Maison",
                description: "Tout est préparé avec passion et savoir-faire, des ingrédients sélectionnés aux finitions !",
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

{/* Offres Section */}
      <section id="creations" className="section creations-section">
        <div className="container">
          <h3 className="section-title">Nos Offres</h3>
          <p className="creations-intro">
            Des compositions uniques mêlant fleurs comestibles et gourmandises, salées ou sucrées !
          </p>

          <div className="creations-grid">
            {/* Plateaux */}
            <div className="creation-category plateaux">
              <div className="creation-image-container">
                <img src={plateauImage} alt="Plateaux charcuterie fromage" className="creation-image" />
              </div>
              <div className="creation-content">
                <h4 className="creation-category-title">
                  Plateaux Charcuterie & Fromage
                </h4>
                <p className="creation-category-subtitle">
                  Plateaux fleuris avec charcuterie artisanale et fromages sélectionnés
                </p>
                <ul className="creation-items-list">
                  <li className="creation-item">
                    <span className="creation-item-description">Plateau charcuterie/fromage fleuri pour 2 personnes</span>
                    <span className="creation-item-price">25€</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Plateau charcuterie/fromage fleuri pour 4 personnes</span>
                    <span className="creation-item-price">45€</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Plateau charcuterie/fromage fleuri pour 6 personnes</span>
                    <span className="creation-item-price">65€</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Plateau charcuterie/fromage fleuri pour 8 personnes</span>
                    <span className="creation-item-price">80€</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Wraps */}
            <div className="creation-category wraps">
              <div className="creation-image-container">
                {/* Remplacez par <img src="chemin/vers/photo-wraps.jpg" alt="Wraps variés" className="creation-image" /> */}
                <img src={wrapsImage} alt="Wraps" className="creation-image" />
              </div>
              <div className="creation-content">
                <h4 className="creation-category-title">
                  Wraps Gourmands
                </h4>
                <p className="creation-category-subtitle">
                  Wraps frais et savoureux, garnis d'ingrédients de qualité
                </p>
                <ul className="creation-items-list">
                  <li className="creation-item">
                    <span className="creation-item-description">Wraps saumon/crudités sauce citronnée</span>
                    <span className="creation-item-price">3,50€ / wrap</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Wraps thon/mayonnaise/crudités</span>
                    <span className="creation-item-price">3€ / wrap</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Wraps houmous/feta/crudités</span>
                    <span className="creation-item-price">2,50€ / wrap</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Wraps poulet/pesto/mozzarella</span>
                    <span className="creation-item-price">3€ / wrap</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bagels */}
            <div className="creation-category bagels">
              <div className="creation-image-container">
                <img src={bagelsImage} alt="Bagels variés" className="creation-image" />
              </div>
              <div className="creation-content">
                <h4 className="creation-category-title">
                  Bagels Artisanaux
                </h4>
                <p className="creation-category-subtitle">
                  Bagels moelleux garnis avec soin et créativité
                </p>
                <ul className="creation-items-list">
                  <li className="creation-item">
                    <span className="creation-item-description">Bagels poulet rôti/crudités/sauce fromage blanc-curry</span>
                    <span className="creation-item-price">3€ / bagel</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Bagels jambon de Bayonne/tomme de brebis/confiture de cerises</span>
                    <span className="creation-item-price">3,50€ / bagel</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Bagels chèvre/miel/crudités</span>
                    <span className="creation-item-price">2,50€ / bagel</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Bagels saumon/avocat</span>
                    <span className="creation-item-price">3,50€ / bagel</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Bagels poulet/pesto/mozzarella</span>
                    <span className="creation-item-price">3€ / bagel</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Verrines */}
            <div className="creation-category verrines">
              <div className="creation-image-container">
                <img src={verrinesImage} alt="Verrines gourmandes" className="creation-image" />
              </div>
              <div className="creation-content">
                <h4 className="creation-category-title">
                  Verrines Délicates
                </h4>
                <p className="creation-category-subtitle">
                  Petites bouchées raffinées présentées en verrines élégantes
                </p>
                <ul className="creation-items-list">
                  <li className="creation-item">
                    <span className="creation-item-description">Verrines crevettes/mangue/coriandre</span>
                    <span className="creation-item-price">1,20€ / verrine</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Verrines jambon/concombre/fromage blanc/menthe</span>
                    <span className="creation-item-price">1€ / verrine</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Verrines saumon/avocat</span>
                    <span className="creation-item-price">1,20€ / verrine</span>
                  </li>
                  <li className="creation-item">
                    <span className="creation-item-description">Verrines tomates cerises/mozzarella/basilic</span>
                    <span className="creation-item-price">1€ / verrine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commande Section */}
      <section id="commande" className="section gradient-bg">
        <div className="container">
          <div className="commande-grid">
            <h3 className="section-title">Envie de commander ?</h3>
            <div className="commande-content">
              <p>Commandez dès maintenant vos plateaux, wraps ou verrines pour vos événements ou instants gourmands !</p>
              <p>Remplissez le formulaire en ligne ci-dessous pour personnaliser votre commande et choisir vos options préférées.</p>
            </div>
            <a href="https://tally.so/r/mVO17E" target="_blank" rel="noopener noreferrer" className="order-button">
              Accéder au formulaire de commande
            </a>
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
                  Parce qu'ici, on ne se contente pas d'empiler des tranches de charcuterie sur une planche : on crée une expérience.
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
            {/* Téléphone */}
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Téléphone</div>
              <a href="tel:0688275370" style={{ opacity: 0.9, textDecoration: 'none', color: 'inherit' }}>
                06.88.27.53.70
              </a>
            </div>
            {/* Email */}
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Email</div>
              <a href="mailto:petalesetgourmandises@outlook.fr" style={{ opacity: 0.9, textDecoration: 'none', color: 'inherit' }}>
                petalesetgourmandises@outlook.fr
              </a>
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
              <a
                href="https://www.instagram.com/petales_et_gourmandises33"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  fontSize: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                <i className="fa fa-instagram" style={{ fontSize: '2rem', color: '#fff' }}></i>
              </a>
              <span style={{ color: '#374151', fontWeight: '500' }}>@petales_et_gourmandises33</span>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61577928215330"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #1877f2 0%, #3b5998 100%)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  fontSize: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                <i className="fa fa-facebook" style={{ fontSize: '2rem', color: '#fff' }}></i>
              </a>
              <span style={{ color: '#374151', fontWeight: '500' }}>« Pétales & Gourmandises »</span>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Avis défilants */}
      <section className="section gradient-bg">
        <div className="container">
          <div className="about-grid">
            <div>
              <h3 className="section-title" style={{ textAlign: 'left' }}>Votre avis nous intéresse !</h3>
              {/* Google Avis */}
              <div className="google-reviews-section">
                <div className="review-marquee">
                  <div className="review-card">
                    <div className="review-rating">⭐ 5</div>
                    Merci pour ces magnifiques plateaux. Nous nous sommes régalés. C’était la première fois pour nous mais ce ne sera pas la dernière ! À bientôt
                    <div className="review-author">— Sandie M.</div>
                  </div>
                  <div className="review-card">
                    <div className="review-rating">⭐ 5</div>
                    Je cuisine beaucoup. Et ma plus grande frustration etant saisonnière est de ne pas pouvoir régaler ma famille et mes amis par manque de temps. Je suis ravie de pouvoir compter sur Anne dont les préparations sont aussi goûteuses que belles ! Rapport qualité prix au top en plus! Merci
                    <div className="review-author">— Didier et Orphise</div>
                  </div>
                  <div className="review-card">
                    <div className="review-rating">⭐ 5</div>
                    Très jolis et bons plateaux qui ont fait sensation auprès de mes invitées ☺️
                    Produits de qualité, Anne a su être à l’écoute de mes envies, et très disponible !!!
                    Merci encore, je suis ravie 🌺
                    <div className="review-author">— Lisa</div>
                  </div>
                </div>
              </div>
              {/* Lien vers Google */}
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <a
                  href="https://g.page/r/CQ3722uZ1sRPEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#8b5cf6',
                    fontWeight: '600',
                    textDecoration: 'underline',
                  }}
                >
                  Voir tous les avis sur Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <img src={logo} alt="Logo Pétales & Gourmandises" className="logo-img" />
            <h5 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Pétales & Gourmandises</h5>
          </div>
          <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
            Des créations artisanales uniques pour vos moments précieux ❤️
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            © 2025 Pétales & Gourmandises. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
