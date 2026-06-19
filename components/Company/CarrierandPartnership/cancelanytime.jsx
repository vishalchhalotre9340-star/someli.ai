import React from 'react';
import styles from './cancelanytime.module.css';

export default function CancelAnytime() {
  const baseItems = [
    "SECURE & COMPLIANT",
    "CANCEL ANYTIME",
    "SECURE & COMPLIANT",
    "USED BY 1000+ TEAMS"
  ];
  
  // Repeating the array to ensure the marquee fills even ultra-wide screens seamlessly
  const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

  return (
    <section className={styles.banner}>
      {/* Subtle sweeping background lines */}
      <svg className={styles.backgroundGraphic} viewBox="0 0 1000 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="swooshGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f2725c" stopOpacity="0" />
            <stop offset="50%" stopColor="#f2725c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f2725c" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Curving lines to mimic the background effect in the image */}
        <path d="M 100 80 Q 500 50, 800 10 T 1000 -10" stroke="url(#swooshGrad)" strokeWidth="1.5" fill="none" filter="url(#glow)" />
        <path d="M 300 80 Q 700 70, 900 20 T 1000 10" stroke="url(#swooshGrad)" strokeWidth="0.8" fill="none" opacity="0.6" />
        <path d="M 500 90 Q 800 80, 1000 30" stroke="url(#swooshGrad)" strokeWidth="2" fill="none" filter="url(#glow)" opacity="0.5" />
      </svg>

      {/* Marquee Ticker */}
      <div className={styles.marqueeContainer}>
        {/* Track 1 */}
        <div className={styles.marqueeTrack}>
          {items.map((item, idx) => (
            <div key={`track1-${idx}`} className={styles.item}>
              <span className={styles.dot}></span>
              {item}
            </div>
          ))}
        </div>
        
        {/* Track 2 (Duplicate for seamless loop) */}
        <div className={styles.marqueeTrack}>
          {items.map((item, idx) => (
            <div key={`track2-${idx}`} className={styles.item}>
              <span className={styles.dot}></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
