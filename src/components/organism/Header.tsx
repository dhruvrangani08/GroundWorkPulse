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
          padding: '32px 24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-110%)',
          opacity: isMenuOpen ? 1 : 0,
          clipPath: isMenuOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
          pointerEvents: isMenuOpen ? 'all' : 'none',
          transition: 'clip-path 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 auto',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
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
          <li>
            <a
              href={ctaHref}
              className="nav-cta"
              onClick={closeMenu}
              style={{ fontSize: '16px', textDecoration: 'none' }}
            >
              {ctaLabel}
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav className="nav">
        {/* FIX 2: Added position: relative + zIndex: 10001 to the nav-container so
            the hamburger button sits in a stacking context ABOVE the portal elements
            (backdrop z-9998, menu z-9999). Without position:relative the z-index on
            the button itself has no effect and the portal layers win. */}
        <div
          className="nav-container"
          style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 10001 }}
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

      <style>{`
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 20px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .hamburger-menu {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          /* FIX 3: Removed position:relative + z-index from the button itself.
             z-index only works on positioned elements within the same stacking context.
             The real fix is on the parent nav-container (see FIX 2 above). */
        }

        .hamburger-line {
          display: block;
          width: 25px;
          height: 2px;
          background: var(--graphite, #333);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .hamburger-line.open:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger-line.open:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        @media (max-width: 1024px) {
          .desktop-nav    { display: none; }
          .hamburger-menu { display: flex; }
        }

        @media (min-width: 1025px) {
          .hamburger-menu { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;