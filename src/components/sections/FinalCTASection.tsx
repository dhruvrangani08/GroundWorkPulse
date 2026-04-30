import React from 'react';

interface FinalCTASectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  footerText?: string;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  eyebrow = 'Measure what matters',
  title = 'Measurement is<br><em>the foundation.</em>',
  subtitle = 'Without it, you are guessing about the thing that matters most.',
  ctaText = 'Get in touch â',
  ctaLink = '/book.html',
  footerText = 'We respond within one business day',
}) => {
  return (
    <>
      {/* ========== FINAL CTA ========== */}
      <section className="final-cta" id="contact">
        <div className="final-cta-inner">
          <div 
            className="eyebrow on-dark bare" 
            style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '24px' }}
          >
            {eyebrow}
          </div>
          <h2 
            className="final-cta-h"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="final-cta-sub">{subtitle}</p>
          <div className="final-cta-actions">
            <a href={ctaLink} className="btn btn-accent">
              {ctaText}
            </a>
          </div>
          <div style={{ 
            marginTop: '32px', 
            fontFamily: "'JetBrains Mono', monospace", 
            fontSize: '11px', 
            letterSpacing: '0.12em', 
            textTransform: 'uppercase', 
            color: 'rgba(245,243,238,0.35)' 
          }}>
            {footerText}
          </div>
        </div>
      </section>
    </>
  );
};
