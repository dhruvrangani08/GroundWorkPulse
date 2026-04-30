import React from 'react';

interface TableRow {
  feature: string;
  competitorValue: string;
  competitorHasCheck: boolean;
  groundworkValue: string;
  groundworkHasCheck: boolean;
}

interface VSTableSectionProps {
  title?: string;
  eyebrow?: string;
  competitorHeader?: string;
  groundworkHeader?: string;
  tableRows?: TableRow[];
}

const defaultTableRows: TableRow[] = [
  {
    feature: 'Works for frontline staff',
    competitorValue: 'Requires login or app',
    competitorHasCheck: false,
    groundworkValue: 'Any phone, no login',
    groundworkHasCheck: true,
  },
  {
    feature: 'What it measures',
    competitorValue: 'Sentiment & feelings',
    competitorHasCheck: false,
    groundworkValue: 'Six conditions that predict performance',
    groundworkHasCheck: true,
  },
  {
    feature: 'Pricing model',
    competitorValue: 'Per employee, per year',
    competitorHasCheck: false,
    groundworkValue: 'Flat fee per organization',
    groundworkHasCheck: true,
  },
  {
    feature: 'Implementation fees',
    competitorValue: '$1,000 â $10,000+',
    competitorHasCheck: false,
    groundworkValue: '$0',
    groundworkHasCheck: true,
  },
  {
    feature: 'Measurement cadence',
    competitorValue: 'Annual survey',
    competitorHasCheck: false,
    groundworkValue: 'Quarterly pulse',
    groundworkHasCheck: true,
  },
  {
    feature: 'Tells you where to focus',
    competitorValue: 'Rarely',
    competitorHasCheck: false,
    groundworkValue: 'Lowest condition, auto-flagged',
    groundworkHasCheck: true,
  },
  {
    feature: 'Expert interpretation',
    competitorValue: '$10Kâ$50K add-on',
    competitorHasCheck: false,
    groundworkValue: 'Included in Annual',
    groundworkHasCheck: true,
  },
  {
    feature: 'First insight in',
    competitorValue: '6 to 12 weeks',
    competitorHasCheck: false,
    groundworkValue: '5 to 7 days, share to brief',
    groundworkHasCheck: true,
  },
];

export const VSTableSection: React.FC<VSTableSectionProps> = ({
  title = 'Where Groundwork<br><em>stacks up.</em>',
  eyebrow = 'The comparison',
  competitorHeader = 'Most engagement tools',
  groundworkHeader = 'Groundwork',
  tableRows = defaultTableRows,
}) => {
  return (
    <>
      {/* ========== VS TABLE ========== */}
      <section className="section dark">
        <div className="section-inner">
          <div className="section-head center">
            <div className="eyebrow bare">{eyebrow}</div>
            <h2
              className="section-h2"
              style={{ color: 'var(--paper)' }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          <div className="vs-table">
            <div className="vs-row header">
              <div className="vs-cell"></div>
              <div className="vs-cell competitor">{competitorHeader}</div>
              <div className="vs-cell groundwork">{groundworkHeader}</div>
            </div>
            {tableRows.map((row, index) => (
              <div key={index} className="vs-row">
                <div className="vs-cell feat">{row.feature}</div>
                <div className="vs-cell competitor">
                  {row.competitorHasCheck && (
                    <span className="vs-x">✗</span>
                  )}{' '}
                  {row.competitorValue}
                </div>
                <div className="vs-cell groundwork">
                  {row.groundworkHasCheck && (
                    <span className="vs-check">✓</span>
                  )}{' '}
                  {row.groundworkValue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
