import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface HeaderProps {
  logoHref?: string;
  logoText?: string;
  tagline?: string;
  navItems?: Array<{ label: string; href: string; dropdown?: Array<{ label: string; href: string }> }>;
  ctaLabel?: string;
  ctaHref?: string;
  currentPath?: string;
}

const Header: React.FC<HeaderProps> = ({
  logoHref = '/',
  logoText = 'Groundwork',
  tagline = 'Team Conditions. Clearly Measured.',
  navItems = [],
  ctaLabel = 'Get in touch',
  ctaHref = '/book.html',
  currentPath,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const mobileMenu = (
    <>
      {/* Backdrop */}
      <div
        onClick={closeMenu}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 9998,
          opacity: isMenuOpen ? 1 : 0,
          top: '86px',
          pointerEvents: isMenuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Menu panel */}
      <div
        style={{
          position: 'fixed',
          top: '68px',
          left: 0,
          width: '100%',
          background: '#fff',
          zIndex: 9999,
          padding: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          clipPath: isMenuOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
          pointerEvents: isMenuOpen ? 'all' : 'none',
          transition: 'clip-path 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <ul style={{
          listStyle: 'none',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '0 20px',
        }}>
          {navItems?.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={currentPath === item.href ? 'nav-active' : ''}
                onClick={closeMenu}
                style={{
                  fontSize: '16px',
                  color: 'var(--graphite, #333)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <a
            href={ctaHref}
            className="nav-cta !text-center"
            onClick={closeMenu}
            style={{ fontSize: '16px', textDecoration: 'none' }}
          >
            {ctaLabel}
          </a>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav className="nav">
        <div
          className="nav-container"
          style={{margin: '0 auto', position: 'relative', zIndex: 10001 }}
        >
          <a href={logoHref} className="nav-logo">
            <span className="nav-mark">{logoText}<em>.</em></span>
            <span className="nav-tag">{tagline}</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            {navItems?.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={currentPath === item.href ? 'nav-active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={ctaHref} className="nav-cta">{ctaLabel}</a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Header;