import React from 'react';
import styles from './ourstory.module.css';

export default function OurStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.badge}>Our Story</span>
          <h1 className={styles.heading}>
            Built in the MENA region.<br />
            For the world
          </h1>
          <p className={styles.description}>
            Someli was founded with a simple belief: when you empower your people to share, 
            everyone wins. We built the leading employee advocacy platform to help 
            organizations unlock the full potential of their greatest asset, their people
          </p>
        </div>
        
        <div className={styles.rightContent}>
          {/* Inline SVG Graphic mimicking the graph in the screenshot */}
          <svg className={styles.chartSvg} viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* Top faint line */}
            <path d="M 50 250 L 120 200 L 190 230 L 260 120 L 330 180 L 450 60" stroke="#d3d3d3" strokeWidth="1" />
            <circle cx="450" cy="60" r="4" fill="#ffffff" stroke="#f2725c" strokeWidth="1.5" />
            
            {/* Bottom faint line */}
            <path d="M 80 340 L 180 260 L 240 310 L 320 230 L 380 290 L 460 220" stroke="#d3d3d3" strokeWidth="1" />
            <circle cx="460" cy="220" r="2.5" fill="#f2725c" />
            
            {/* Main thick trend line */}
            <path d="M 70 320 L 200 210 L 260 250 L 420 110" stroke="url(#lineGradient)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Glowing red dot at the peak */}
            <defs>
              <linearGradient id="lineGradient" x1="70" y1="320" x2="420" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#e34739" />
                <stop offset="100%" stopColor="#e8634a" />
              </linearGradient>
              <radialGradient id="dotGlow" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#f58e76" />
                <stop offset="60%" stopColor="#e34739" />
                <stop offset="100%" stopColor="#ba2b1f" />
              </radialGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#ba2b1f" floodOpacity="0.3" />
              </filter>
            </defs>
            <circle cx="420" cy="110" r="14" fill="url(#dotGlow)" filter="url(#shadow)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
