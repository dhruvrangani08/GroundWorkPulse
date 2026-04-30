import React from 'react';

interface HeroSectionProps {
  title: string[];
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
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  shelfItems,
  dashboard
}) => {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title?.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
          )}
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {ctaPrimary && (
              <a 
                href={ctaPrimary.href}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {ctaPrimary.label}
              </a>
            )}
            {ctaSecondary && (
              <a 
                href={ctaSecondary.href}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {ctaSecondary.label}
              </a>
            )}
          </div>
          
          {/* Shelf Items */}
          {shelfItems && shelfItems.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {shelfItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{item.number}</div>
                  <div className="text-sm opacity-75">{item.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {/* Dashboard */}
          {dashboard && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{dashboard.overallScore.score}</div>
                  <div className="text-sm opacity-75">Overall Score</div>
                  <div className="text-xs opacity-50 mt-1">{dashboard.overallScore.quarter}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{dashboard.overallScore.responses}</div>
                  <div className="text-sm opacity-75">Responses</div>
                  <div className="text-xs opacity-50 mt-1">{dashboard.overallScore.completion}% completion</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{dashboard.overallScore.completedDate}</div>
                  <div className="text-sm opacity-75">Completed Date</div>
                </div>
              </div>
              
              {dashboard.conditions && dashboard.conditions.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Conditions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dashboard.conditions.map((condition, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-lg border ${
                          condition.isFocus 
                            ? 'bg-yellow-500/20 border-yellow-400' 
                            : 'bg-white/10 border-white/20'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{condition.name}</span>
                          <span className="text-lg font-bold">{condition.score}</span>
                        </div>
                        <div className="text-xs opacity-75 mt-1">{condition.badge}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
