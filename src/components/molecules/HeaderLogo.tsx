import React from 'react';

interface HeaderLogoProps {
  src: string;
  alt: string;
  href: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ src, alt, href }) => {
  return (
    <a href={href} className="header-logo">
      <img src={src} alt={alt} />
    </a>
  );
};

export default HeaderLogo;
