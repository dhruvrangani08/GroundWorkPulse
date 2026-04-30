import React from 'react';
import { toHTML } from '@portabletext/to-html';
import type { TypedObject } from '@portabletext/types';

interface HeroSectionProps {
  titleLines?: Array<{
    text: string | TypedObject[];
  }>;
  italicLastWord?: boolean;
  subtitle?: string | TypedObject[];
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  shelfItems?: Array<{
    value: string | TypedObject[];
    label: string | TypedObject[];
  }>;
  dashboard?: {
    overallScore: {
      score: number;
      responses: number;
      completion: number;
      quarter: string;
      completedDate: string;
    };
    conditions: Array<{
      name: string;
      score: number;
      badge: string;
      isFocus: boolean;
    }>;
    quarterOverQuarter: Array<{
      label: string;
      previous: number;
      current: number;
    }>;
  };
  className?: string;
}

export default function HeroSection({
  titleLines,
  italicLastWord,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  shelfItems,
  dashboard,
  className = ''
}: HeroSectionProps) {
  const processContent = (content: string | TypedObject[] | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    // Extract text content from portable text
    return toHTML(content).replace(/<[^>]*>/g, '').trim();
  };

  return (
    <>
      <section className={`hero ${className}`}>
        <div className="hero-ambient"></div>

        <div className="hero-left">
          <h1 className="hero-h1">
            {titleLines?.map((line, index) => {
              const isLastLine = index === titleLines.length - 1;
              const text = processContent(line.text);

              if (isLastLine && italicLastWord) {
                const words = text.trim().split(' ');
                const lastWord = words[words.length - 1];
                const otherWords = words.slice(0, -1);

                return (
                  <React.Fragment key={index}>
                    {otherWords.map((word, wordIndex) => (
                      <span key={wordIndex} className="word">{word} </span>
                    ))}
                    <em>{lastWord}</em>
                  </React.Fragment>
                );
              }

              return (
                <span key={index} className="word" dangerouslySetInnerHTML={{ __html: text }} />
              );
            }).map((element, index, array) => (
              <React.Fragment key={index}>
                {element}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          {subtitle && (
            <p
              className="hero-sub"
              dangerouslySetInnerHTML={{
                __html: typeof subtitle === 'string' ? subtitle : toHTML(subtitle)
              }}
            />
          )}

          {(ctaPrimary?.label || ctaSecondary?.label) && (
            <div className="hero-actions">
              {ctaPrimary?.label && ctaPrimary?.href && (
                <a href={ctaPrimary.href} className="btn btn-primary">
                  {ctaPrimary.label}
                  <span className="arrow">→</span>
                </a>
              )}
              {ctaSecondary?.label && ctaSecondary?.href && (
                <a href={ctaSecondary.href} className="btn btn-ghost">
                  <span className="btn-ghost-line">{ctaSecondary.label}</span>
                </a>
              )}
            </div>
          )}

          {shelfItems && shelfItems.length > 0 && (
            <div className="hero-shelf">
              {shelfItems.map((item: { value: string | TypedObject[]; label: string | TypedObject[] }, index: number) => (
                <div key={index} className="shelf-item">
                  <span
                    className="shelf-num"
                    dangerouslySetInnerHTML={{
                      __html: typeof item.value === 'string' ? item.value : toHTML(item.value)
                    }}
                  />
                  <span
                    className="shelf-label"
                    dangerouslySetInnerHTML={{
                      __html: typeof item.label === 'string' ? item.label : toHTML(item.label)
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hero-right">
          <div className="dash-stack">

            <div className="dash-anno">
              Live result
            </div>

            <div className="dash">
              <div className="dash-chrome">
                <div className="dash-dots"><span></span><span></span><span></span></div>
                <div className="dash-url">groundwork<span className="dot">.</span>app / dashboard</div>
                <div className="dash-chrome-right"></div>
              </div>
              <div className="dash-body">

                <div className="dash-score">
                  <div className="dash-score-left">
                    <div className="dash-score-label">Overall score</div>
                    <div className="dash-score-sub">Q2 2026 Pulse · completed Apr 18</div>
                    <div className="dash-score-meta">
                      <div className="dash-score-meta-item">
                        <span className="dash-score-meta-num"><span className="count" data-target="47">0</span></span>
                        <span className="dash-score-meta-lbl">Responses</span>
                      </div>
                      <div className="dash-score-meta-item">
                        <span className="dash-score-meta-num">92%</span>
                        <span className="dash-score-meta-lbl">Completion</span>
                      </div>
                    </div>
                  </div>
                  <div className="dash-score-badge">
                    <span className="dash-score-num"><span className="count" data-target="72">0</span></span>
                    <span className="dash-score-denom">of 100</span>
                  </div>
                </div>

                <div className="dash-tiles">
                  <div className="tile">
                    <div className="tile-name">Psychological Safety</div>
                    <span className="tile-score"><span className="count" data-target="81">0</span></span>
                    <span className="tile-badge b-strong">Strong</span>
                  </div>
                  <div className="tile focus">
                    <div className="tile-name">Fairness &amp; Recognition</div>
                    <span className="tile-score"><span className="count" data-target="54">0</span></span>
                    <span className="tile-badge b-focus">Focus area</span>
                  </div>
                  <div className="tile">
                    <div className="tile-name">Workload &amp; Resources</div>
                    <span className="tile-score"><span className="count" data-target="68">0</span></span>
                    <span className="tile-badge b-unstable">Unstable</span>
                  </div>
                  <div className="tile">
                    <div className="tile-name">Belonging &amp; Meaning</div>
                    <span className="tile-score"><span className="count" data-target="77">0</span></span>
                    <span className="tile-badge b-strong">Strong</span>
                  </div>
                  <div className="tile">
                    <div className="tile-name">Role Clarity &amp; Agency</div>
                    <span className="tile-score"><span className="count" data-target="73">0</span></span>
                    <span className="tile-badge b-strong">Strong</span>
                  </div>
                  <div className="tile">
                    <div className="tile-name">Manager Relationship</div>
                    <span className="tile-score"><span className="count" data-target="79">0</span></span>
                    <span className="tile-badge b-strong">Strong</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dash-delta">
              <div className="dash-delta-title">
                <span>Quarter over quarter</span>
                <span className="mono">Δ</span>
              </div>
              <div className="delta-row">
                <span className="delta-label">Overall</span>
                <span className="delta-prev">58</span>
                <span className="delta-curr">72</span>
                <span className="delta-change">+14</span>
              </div>
              <div className="delta-row">
                <span className="delta-label">Fairness &amp; Recognition</span>
                <span className="delta-prev">41</span>
                <span className="delta-curr">54</span>
                <span className="delta-change">+13</span>
              </div>
              <div className="delta-row">
                <span className="delta-label">Workload &amp; Resources</span>
                <span className="delta-prev">48</span>
                <span className="delta-curr">63</span>
                <span className="delta-change">+15</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
