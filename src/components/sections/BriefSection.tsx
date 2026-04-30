import React from 'react';
import { toHTML } from '@portabletext/to-html';
import type { TypedObject } from '@portabletext/types';

interface BriefBlock {
  label: string;
  quote: string | TypedObject | TypedObject[];
}

interface BriefSectionProps {
  title: string | TypedObject | TypedObject[];
  eyebrowText?: string;
  description?: string | TypedObject | TypedObject[];
  additionalText?: string;
  disclaimer?: string;
  documentTitle?: string;
  documentSubtitle?: string;
  briefBlocks?: BriefBlock[];
  stampText?: string;
}

export const BriefSection: React.FC<BriefSectionProps> = ({
  title,
  eyebrowText,
  description,
  additionalText,
  disclaimer,
  documentTitle = 'Organizational Insight Brief',
  documentSubtitle = 'Sample · Confidential',
  briefBlocks = [
    {
      label: 'What is really going on',
      quote: 'You don\'t have a collaboration problem. You have a <strong>scoreboard problem.</strong> Your team is being asked to collaborate, but the system they are measured against still rewards individual wins. In a high-pressure environment, protective behavior is not resistance. It is a rational response to the design.'
    },
    {
      label: 'Perception vs. reality',
      quote: 'Leadership believes the team is aligned and motivated. What the data shows is a Fairness &amp; Recognition score of 38, the lowest of the six conditions, and open text that consistently describes effort going unacknowledged.'
    },
    {
      label: 'Where to start',
      quote: '<strong>Fairness &amp; Recognition is your starting point.</strong> Not because it is easiest to fix, but because it is the most predictive leading indicator of voluntary turnover in your environment.'
    }
  ],
  stampText = 'Sample\nexcerpt'
}) => {
  const renderHTML = (content: string | TypedObject | TypedObject[]) => {
    if (typeof content === 'string') {
      return content;
    }
    return toHTML(content);
  };
  const renderContent = (content: string | TypedObject | TypedObject[]): { html: string; isBlock: boolean } => {
    if (typeof content === 'string') {
      return { html: content, isBlock: false };
    }
    const blocks = Array.isArray(content) ? content : [content];
    return { html: toHTML(blocks), isBlock: true };
  };
  return (
    <section className="section brief-section">
      <div className="section-inner">
        <div className="brief-layout">
          <div>
            <div className="eyebrow">{eyebrowText || 'The Organizational Insight Brief'}</div>
            <h2 className="section-h2" style={{ marginBottom: '28px' }}>
              <span dangerouslySetInnerHTML={{
                __html: typeof title === 'string' ? title : toHTML(title),
              }} />
            </h2>

            {description && (() => {
              const { html, isBlock } = renderContent(description);
              return isBlock ? (
                <div
                  className="section-lede"
                  style={{ marginBottom: '20px' }}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ) : (
                <p
                  className="section-lede"
                  style={{ marginBottom: '20px' }}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            })()}

            {additionalText && (
              <p className="section-lede" style={{ marginBottom: '20px' }} dangerouslySetInnerHTML={{
                __html: renderHTML(additionalText),
              }} />
            )}

            {disclaimer && (
              <p style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: 'italic',
                fontSize: '14px',
                color: 'var(--graphite-2)',
                lineHeight: '1.5'
              }} dangerouslySetInnerHTML={{
                __html: renderHTML(disclaimer),
              }} />
            )}
          </div>

          <div className="brief-doc">
            <div className="brief-doc-header">
              <div className="brief-doc-title">{documentTitle}</div>
              <div className="brief-doc-confidential">{documentSubtitle}</div>
            </div>
            <div className="brief-doc-body">
              {briefBlocks.map((block, index) => {
                const { html, isBlock } = renderContent(block.quote);
                return (
                  <div key={index} className="brief-block">
                    <div className="brief-label">{block.label}</div>
                    {isBlock ? (
                      <div className="brief-quote" dangerouslySetInnerHTML={{ __html: html }} />
                    ) : (
                      <p className="brief-quote" dangerouslySetInnerHTML={{ __html: html }} />
                    )}
                  </div>
                );
              })}
              <div className="brief-stamp">{stampText}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
