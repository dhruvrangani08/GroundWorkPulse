import React from 'react';

interface PlanFeature {
  text: string;
}

interface Plan {
  planType: string;
  planName: string;
  planTag: string;
  priceNumber: string;
  pricePer: string;
  isMostPopular: boolean;
  planFlag?: string;
  includedText: string;
  features: PlanFeature[];
  commitmentText: string;
  ctaText: string;
  ctaLink: string;
  ctaStyle: 'solid' | 'outline';
}

interface PricingSectionProps {
  eyebrow?: string;
  title?: string;
  pricingFlag?: string;
  plans?: Plan[];
}

const defaultPlans: Plan[] = [
  {
    planType: 'Continuous measurement',
    planName: 'Groundwork<br><em>Pulse</em>',
    planTag: 'Run your own measurement program quarterly. Full platform, all six conditions, your team\'s actual words.',
    priceNumber: '$7,500',
    pricePer: 'per year',
    isMostPopular: false,
    includedText: 'What is included',
    features: [
      { text: 'Scores across all six conditions' },
      { text: 'Your team\'s actual words, anonymously' },
      { text: 'Quarter-over-quarter comparison included' },
      { text: 'No login required. Works on any phone.' },
    ],
    commitmentText: 'For operators who want to run their own measurement program and drive the interpretation themselves.',
    ctaText: 'Get started',
    ctaLink: '/book.html',
    ctaStyle: 'outline',
  },
  {
    planType: 'Expert-led annual program',
    planName: 'Groundwork<br><em>Annual</em>',
    planTag: 'Full measurement plus expert analysis, leader interviews, and an Organizational Insight Brief every quarter.',
    priceNumber: '$19,500',
    pricePer: 'per year',
    isMostPopular: true,
    planFlag: 'Most popular',
    includedText: 'What is included',
    features: [
      { text: 'Everything in Pulse' },
      { text: 'Baseline interviews with 2-3 leaders to ground the year' },
      { text: 'Four Organizational Insight Briefs / year' },
      { text: 'Expert synthesis &amp; interpretation' },
      { text: 'Priority support &amp; direct access' },
    ],
    commitmentText: 'For organizations that want an expert in the room with them, synthesizing and interpreting the data every quarter.',
    ctaText: 'Get started',
    ctaLink: '/book.html',
    ctaStyle: 'solid',
  },
  {
    planType: 'Single engagement',
    planName: 'Groundwork<br><em>Diagnostic</em>',
    planTag: 'One expert-led cycle. Get a clear picture of what is shaping your team right now.',
    priceNumber: '$9,500',
    pricePer: 'one time',
    isMostPopular: false,
    includedText: 'What is included',
    features: [
      { text: 'Scores across all six conditions' },
      { text: 'Your team\'s actual words, anonymously' },
      { text: 'Leader interviews with 2-3 people' },
      { text: 'One Organizational Insight Brief' },
    ],
    commitmentText: 'For organizations that want a diagnostic pulse on the conditions shaping their team.',
    ctaText: 'Get started',
    ctaLink: '/book.html',
    ctaStyle: 'outline',
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({
  eyebrow = 'Plans & pricing',
  title = 'Simple <em>pricing.</em>',
  pricingFlag = 'No per-seat pricing. Ever.',
  plans = defaultPlans,
}) => {
  return (
    <>
      {/* ========== PRICING ========== */}
      <section className="section" id="pricing">
        <div className="section-inner">
          <div className="pricing-header">
            <div>
              <div className="eyebrow">{eyebrow}</div>
              <h2 
                className="section-h2" 
                style={{ marginTop: '18px' }}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="pricing-flag">{pricingFlag}</div>
          </div>

          <div className="plans">
            {plans.map((plan, index) => (
              <div key={index} className={`plan ${plan.isMostPopular ? 'featured' : ''}`}>
                {plan.planFlag && (
                  <div className="plan-flag">{plan.planFlag}</div>
                )}
                <div className="plan-head">
                  <div className="plan-type">{plan.planType}</div>
                  <h3 
                    className="plan-name"
                    dangerouslySetInnerHTML={{ __html: plan.planName }}
                  />
                  <p className="plan-tag">{plan.planTag}</p>
                </div>
                <div className="plan-price">
                  <span className="price-num">{plan.priceNumber}</span>
                  <span className="price-per">{plan.pricePer}</span>
                </div>
                <div className="plan-body">
                  <div className="plan-inc">{plan.includedText}</div>
                  <ul className="plan-feats">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="feat-check">✓</span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <div className="plan-commit">{plan.commitmentText}</div>
                  <a href={plan.ctaLink} className={`plan-cta ${plan.ctaStyle}`}>
                    {plan.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
