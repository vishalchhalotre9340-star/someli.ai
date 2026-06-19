import React from 'react';
import styles from './hero.module.css';

export default function PricingHero() {
  const marqueeItems = [
    "SECURE & COMPLIANT",
    "CANCEL ANYTIME",
    "SECURE & COMPLIANT",
    "USED BY 1000+ TEAMS"
  ];

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.mainSection}>
        {/* Grid Background */}
        <div className={styles.gridBackground}></div>

        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.badge}>PRICING</span>
            <h1 className={styles.title}>
              Simple Pricing.<br />Serious Growth.
            </h1>
            <p className={styles.subtitle}>
              No hidden fees. No long-term lock-ins. Just the tools, strategy, and support your business needs to grow on social media — from day one.
            </p>
          </div>
          
          <div className={styles.illustration}>
            {/* SVG Illustration mimicking the design */}
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Upward Arrows (faint outlines) */}
              <path d="M40 80 L180 20 L300 20 L270 5 M300 20 L270 35" stroke="#e5e7eb" strokeWidth="2" fill="none" />
              <path d="M20 130 L150 80 L280 80 L250 65 M280 80 L250 95" stroke="#e5e7eb" strokeWidth="2" fill="none" />
              <path d="M10 180 L130 140 L250 140 L220 125 M250 140 L220 155" stroke="#e5e7eb" strokeWidth="2" fill="none" />
              
              {/* Left Bar Chart */}
              <rect x="20" y="100" width="8" height="20" stroke="#e5e7eb" strokeWidth="2" fill="none" />
              <rect x="35" y="85" width="8" height="35" stroke="#e5e7eb" strokeWidth="2" fill="none" />
              <rect x="50" y="60" width="8" height="60" stroke="#e5e7eb" strokeWidth="2" fill="none" />

              {/* Staircase Steps (thin orange lines) */}
              <path d="M30 250 L100 250 L100 210 L180 210 L180 170 L260 170 L260 130 L340 130" stroke="#fca5a5" strokeWidth="1.5" fill="none" />
              
              {/* Vertical droplines for steps */}
              <line x1="30" y1="250" x2="30" y2="290" stroke="#fca5a5" strokeWidth="1.5" />
              <line x1="100" y1="250" x2="100" y2="290" stroke="#fca5a5" strokeWidth="1.5" />
              <line x1="180" y1="210" x2="180" y2="290" stroke="#fca5a5" strokeWidth="1.5" />
              <line x1="260" y1="170" x2="260" y2="290" stroke="#fca5a5" strokeWidth="1.5" />
              <line x1="340" y1="130" x2="340" y2="290" stroke="#fca5a5" strokeWidth="1.5" />

              {/* Step Numbers */}
              <text x="65" y="280" fontFamily="sans-serif" fontSize="40" fontWeight="600" fill="#fca5a5" textAnchor="middle">1</text>
              <text x="140" y="280" fontFamily="sans-serif" fontSize="40" fontWeight="600" fill="#ea4335" textAnchor="middle">2</text>
              <text x="220" y="280" fontFamily="sans-serif" fontSize="40" fontWeight="600" fill="#dc2626" textAnchor="middle">3</text>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Black Marquee Banner */}
      <div className={styles.marqueeBanner}>
        <div className={styles.marqueeContent}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className={styles.marqueeItem}>
              <span className={styles.dot}></span> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
