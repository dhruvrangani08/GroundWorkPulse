import React from 'react';

interface ResearchLink {
  text: string;
  href: string;
}

interface CredibilityLineSectionProps {
  text: string;
  researchLink?: ResearchLink;
}

export const CredibilityLineSection: React.FC<CredibilityLineSectionProps> = ({
  text,
  researchLink
}) => {
  return (
    <section className="logobar">
      <div className="logobar-inner max-w-4xl mx-auto text-center" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(20px, 2.2vw, 28px)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            color: 'var(--ink)',
            lineHeight: 1.4,
            fontVariationSettings: "'SOFT' 100, 'WONK' 0, 'opsz' 144",
            maxWidth: '760px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          {text}
        </div>
        {researchLink && (
          <div style={{ marginTop: '18px' }}>
            <a
              href={researchLink.href}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-deep)',
                textDecoration: 'none',
                fontWeight: 600,
                borderBottom: '1px solid var(--accent-deep)',
                paddingBottom: '2px'
              }}
            >
              {researchLink.text} &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
