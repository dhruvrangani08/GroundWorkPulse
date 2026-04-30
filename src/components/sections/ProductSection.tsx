import React from 'react';
import { toHTML } from '@portabletext/to-html';
import type { TypedObject } from '@portabletext/types';

interface ProductSectionProps {
  title: string | TypedObject | TypedObject[];
  eyebrowText?: string;
  subtitle?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  eyebrowText,
  subtitle
}) => {
  return (
    <section className="section" id="product" style={{background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)'}}>
      <div className="section-inner">
        <div className="section-head center">
          <div className="eyebrow bare">{eyebrowText || 'The product'}</div>
          <h2 className="section-h2">
            <span dangerouslySetInnerHTML={{  
              __html: typeof title === 'string' ? title : toHTML(title),  
            }} />
          </h2>
          {subtitle && (
            <p className="section-lede" style={{maxWidth: '600px', margin: '0 auto'}}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="benchmark" style={{maxWidth: '1040px', margin: '0 auto'}}>
          <div className="benchmark-chrome">
            <div className="benchmark-chrome-left">
              <span className="benchmark-dot"></span>
              <span className="benchmark-chrome-label">app.groundworkpulse.com / dashboard</span>
            </div>
            <span className="benchmark-pill">Strong</span>
          </div>

          <div className="benchmark-hero">
            <div className="benchmark-overall">
              <div className="benchmark-overall-label">Overall score · Pulse 2 · Jul 2026</div>
              <div className="benchmark-overall-desc">Composite score across all six conditions of team performance, on a 100-point scale.</div>
              <div className="benchmark-meta">
                <div className="benchmark-meta-item">
                  <div className="benchmark-meta-label">Responses</div>
                  <div className="benchmark-meta-val"><span className="count" data-target="47">0</span></div>
                </div>
                <div className="benchmark-meta-item">
                  <div className="benchmark-meta-label">Completion</div>
                  <div className="benchmark-meta-val">92%</div>
                </div>
              </div>
            </div>
            <div className="benchmark-score-box">
              <div className="benchmark-score-box-label">Score</div>
              <div className="benchmark-score-box-num"><span className="count" data-target="78">0</span></div>
              <div className="benchmark-score-box-denom">of 100</div>
            </div>
          </div>

          <div className="benchmark-grid-wrap">
            <div className="benchmark-grid-head">
              <span className="benchmark-grid-title">Six conditions</span>
              <span className="benchmark-grid-sub">Lowest is flagged as focus</span>
            </div>

            <div className="benchmark-grid">
              <div className="bm-cond">
                <div className="bm-cond-label">Condition</div>
                <div className="bm-cond-name">Psychological Safety</div>
                <div className="bm-cond-row">
                  <span className="bm-cond-score"><span className="count" data-target="84">0</span></span>
                  <span className="bm-cond-status">Strong</span>
                </div>
              </div>
              <div className="bm-cond focus">
                <span className="bm-cond-focus-tag">Focus area</span>
                <div className="bm-cond-label">Condition</div>
                <div className="bm-cond-name">Fairness &amp; Recognition</div>
                <div className="bm-cond-row">
                  <span className="bm-cond-score"><span className="count" data-target="62">0</span></span>
                  <span className="bm-cond-status">Lowest</span>
                </div>
              </div>
              <div className="bm-cond">
                <div className="bm-cond-label">Condition</div>
                <div className="bm-cond-name">Workload &amp; Resources</div>
                <div className="bm-cond-row">
                  <span className="bm-cond-score"><span className="count" data-target="71">0</span></span>
                  <span className="bm-cond-status">Unstable</span>
                </div>
              </div>
              <div className="bm-cond">
                <div className="bm-cond-label">Condition</div>
                <div className="bm-cond-name">Belonging &amp; Meaning</div>
                <div className="bm-cond-row">
                  <span className="bm-cond-score"><span className="count" data-target="81">0</span></span>
                  <span className="bm-cond-status">Strong</span>
                </div>
              </div>
              <div className="bm-cond">
                <div className="bm-cond-label">Condition</div>
                <div className="bm-cond-name">Role Clarity &amp; Agency</div>
                <div className="bm-cond-row">
                  <span className="bm-cond-score"><span className="count" data-target="79">0</span></span>
                  <span className="bm-cond-status">Strong</span>
                </div>
              </div>
              <div className="bm-cond">
                <div className="bm-cond-label">Condition</div>
                <div className="bm-cond-name">Manager Relationship</div>
                <div className="bm-cond-row">
                  <span className="bm-cond-score"><span className="count" data-target="82">0</span></span>
                  <span className="bm-cond-status">Strong</span>
                </div>
              </div>
            </div>
          </div>

          <div className="benchmark-compare">
            <div className="benchmark-compare-head">
              <span className="benchmark-compare-title">Cycle over cycle · Baseline &rarr; Pulse 2</span>
              <span className="benchmark-compare-arrow">Î</span>
            </div>
            <div className="bm-row bm-row-head">
              <span>Condition</span>
              <span className="bm-prev">Previous</span>
              <span className="bm-curr">Current</span>
              <span className="bm-delta">Î</span>
            </div>
            <div className="bm-row">
              <span className="bm-label">Overall</span>
              <span className="bm-prev">65</span>
              <span className="bm-curr">78</span>
              <span className="bm-delta">+13</span>
            </div>
            <div className="bm-row">
              <span className="bm-label">Fairness &amp; Recognition</span>
              <span className="bm-prev">48</span>
              <span className="bm-curr">62</span>
              <span className="bm-delta">+14</span>
            </div>
            <div className="bm-row">
              <span className="bm-label">Workload &amp; Resources</span>
              <span className="bm-prev">59</span>
              <span className="bm-curr">71</span>
              <span className="bm-delta">+12</span>
            </div>
            <div className="bm-row">
              <span className="bm-label">Role Clarity &amp; Agency</span>
              <span className="bm-prev">72</span>
              <span className="bm-curr">79</span>
              <span className="bm-delta">+7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
