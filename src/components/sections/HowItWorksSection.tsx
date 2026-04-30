import React from 'react';
import { toHTML } from '@portabletext/to-html';
import type { TypedObject } from '@portabletext/types';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  title: string | TypedObject | TypedObject[];
  eyebrowText?: string; // Dynamic eyebrow text
  subtitle?: string | TrustedHTML; // Array of blocks for rich text, rendered as HTML
  steps: Step[];
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  title,
  eyebrowText,
  subtitle,
  steps
}) => {
  return (
    <section className="section" id="how">
      <div className="section-inner">
        <div className="section-head center">
          <div className="eyebrow bare" style={{ justifyContent: 'center' }}>
            {eyebrowText || 'How it works'}
          </div>
          <h2 className="section-h2">
            <span dangerouslySetInnerHTML={{  __html: typeof title === 'string' ? title : toHTML(title), }} />
          </h2>
          {subtitle && (
            <p
              className="section-lede"
              style={{ maxWidth: '600px', margin: '24px auto 0', textAlign: 'center' }}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
        </div>

        <div className="steps reveal-stagger">
          {steps.map((step: Step, index: number) => (
            <div key={index} className="step">
              <div className="step-n">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
