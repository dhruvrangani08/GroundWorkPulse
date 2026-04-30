import React from 'react';

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
  return (
    <nav className="nav">
      <a href={logoHref} className="nav-logo">
        <span className="nav-mark">{logoText}<em>.</em></span>
        <span className="nav-tag">{tagline}</span>
      </a>
      <ul className="nav-links">
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
          <a href={ctaHref} className="nav-cta">
            {ctaLabel}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
