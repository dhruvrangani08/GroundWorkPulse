import React from 'react';

interface HeroSectionProps {
  title: string[];
  italicLastWord?: boolean;
  subtitle?: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  shelfItems?: Array<{
    number: string;
    label: string;
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
  title,
  italicLastWord,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  shelfItems,
  dashboard,
  className = ''
}: HeroSectionProps) {
  return (
    <>
      <section className={`hero ${className}`}>
      <div className="hero-ambient"></div>

      <div className="hero-left">
        <h1 className="hero-h1">
          {title.map((line: string, index: number) => {
            // Check if this is the last line and should italicize last word
            const isLastLine = index === title.length - 1;
            const words = line.trim().split(' ');
            
            if (isLastLine && italicLastWord && words.length > 0) {
              // Render last word as em (italic)
              const lastWord = words[words.length - 1];
              const otherWords = words.slice(0, -1);
              
              return (
                <span key={index}>
                  {otherWords.length > 0 && otherWords.map((word, wordIndex) => (
                    <span key={wordIndex} className="word">{word} </span>
                  ))}
                  <em className="word">{lastWord}</em>
                </span>
              );
            } else {
              // Regular line rendering
              return <span key={index} className="word">{line}</span>;
            }
          })}
        </h1>

        {subtitle && (
          <p 
            className="hero-sub" 
            dangerouslySetInnerHTML={{ __html: subtitle }}
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
            {shelfItems.map((item: any, index: number) => (
              <div key={index} className="shelf-item">
                <span className="shelf-num">{item.number}</span>
                <span className="shelf-label">{item.label}</span>
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
              <span className="mono">Delta;</span>
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
