interface FooterProps {
  logoText?: string;
  logoTagline?: string;
  columns?: Array<{
    heading: string;
    links: Array<{ label: string; href: string; isEmail?: boolean }>;
  }>;
  copyright?: string;
  bottomTagline?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoText = 'Groundwork',
  logoTagline = 'Team Conditions. Clearly Measured.',
  columns = [],
  copyright = '© 2026 Groundwork. All rights reserved.',
  bottomTagline = 'Flat fee. No per-seat pricing. Ever.',
}) => {
  const resolveHref = (href: string, isEmail?: boolean) =>
    isEmail ? `mailto:${href}` : href;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="nav-mark">{logoText}<em>.</em></div>
          <div className="footer-tag">{logoTagline}</div>
        </div>
        {(columns ?? []).map((col, i) => (
          <div className="footer-col" key={i}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links?.map((link, j) => (
                <li key={j}>
                  <a href={resolveHref(link.href, link.isEmail)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>{copyright}</span>
        <span>{bottomTagline}</span>
      </div>
    </footer>
  );
};

export default Footer;