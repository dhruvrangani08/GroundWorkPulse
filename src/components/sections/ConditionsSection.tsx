import React from 'react';
import { toHTML } from '@portabletext/to-html';
import type { TypedObject } from '@portabletext/types';

interface Condition {
  number: string;
  pillar: string;
  name: string;
  question: string;
  when: string;
}

interface Pillar {
  name: string;
  label: string;
}

interface ConditionsSectionProps {
  title: string | TypedObject | TypedObject[];
  eyebrowText?: string;
  subtitle?: string;
  pillars?: Pillar[];
  conditions?: Condition[];
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({
  title,
  eyebrowText,
  subtitle,
  pillars = [
    { name: 'Safety', label: 'Pillar 01' },
    { name: 'Understanding', label: 'Pillar 02' },
    { name: 'Connection', label: 'Pillar 03' }
  ],
  conditions = [
    {
      number: '01',
      pillar: 'Pillar 01 · Safety',
      name: 'Psychological Safety',
      question: 'Can people speak up, flag problems, and make mistakes without fear?',
      when: 'Ideas flow freely, problems surface early, and your best thinkers contribute fully.'
    },
    {
      number: '02',
      pillar: 'Pillar 01 · Safety',
      name: 'Workload & Resources',
      question: 'Do people have the time, tools, and staffing to do their work well?',
      when: 'People bring their full energy to work instead of managing their depletion.'
    },
    {
      number: '03',
      pillar: 'Pillar 01 · Safety',
      name: 'Fairness & Recognition',
      question: 'Do people experience fair decisions, fair opportunities, and recognition that feels genuine?',
      when: 'People stay longer, perform at a higher level, and bring discretionary effort.'
    },
    {
      number: '04',
      pillar: 'Pillar 02 · Understanding',
      name: 'Role Clarity & Agency',
      question: 'Do people know what success looks like and have meaningful control over how they work?',
      when: 'People focus on the right things and see how their work actually matters.'
    },
    {
      number: '05',
      pillar: 'Pillar 03 · Connection',
      name: 'Belonging & Meaning',
      question: 'Do people feel they genuinely belong and that their absence would actually be felt?',
      when: 'People show up fully instead of just showing up.'
    },
    {
      number: '06',
      pillar: 'Pillar 03 · Connection',
      name: 'Manager Relationship Quality',
      question: 'Does the direct manager genuinely support their people, or only manage their output?',
      when: 'Everything else on this list gets easier.'
    }
  ]
}) => {
  return (
    <section className="section" id="conditions">
      <div className="section-inner">
        <div className="section-head center">
          <div className="eyebrow bare" style={{justifyContent: 'center'}}>
            {eyebrowText || 'What we measure'}
          </div>
          <h2 className="section-h2">
            <span dangerouslySetInnerHTML={{  
              __html: typeof title === 'string' ? title : toHTML(title),  
            }} />
          </h2>
          {subtitle && (
            <p className="section-lede" style={{maxWidth: '720px', margin: '28px auto 0', textAlign: 'center'}}>
              {subtitle}
            </p>
          )}
          <div className="hpos-lede">
            {pillars.map((pillar, index) => (
              <span key={index} className="hpos-pill">
                <em>{pillar.label}</em>{pillar.name}
              </span>
            ))}
          </div>
        </div>

        <div className="conditions-grid">
          {conditions.map((condition, index) => (
            <div key={index} className="condition">
              <div className="condition-num">{condition.number}</div>
              <div className="condition-body">
                <div className="condition-pillar">{condition.pillar}</div>
                <div className="condition-name">{condition.name}</div>
                <div className="condition-q">{condition.question}</div>
                <div className="condition-when">{condition.when}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
