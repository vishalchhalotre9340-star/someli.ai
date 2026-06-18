import React from 'react';
import styles from './carrierandpartnership.module.css';

export default function CarrierAndPartnership() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Content area */}
        <div className={styles.leftContent}>
          <span className={styles.badge}>Careers & Partnerships</span>
          <h1 className={styles.heading}>
            Build growth, create impact, grow with Someli
          </h1>
          <p className={styles.description}>
            Partner with the leading employee advocacy platform across MENA, 
            and beyond and join our growing global team.
          </p>
          
          <div className={styles.actions}>
            <a href="#" className={styles.primaryBtn}>
              <span className={styles.dot}></span>
              Become a Partner
            </a>
            <a href="#" className={styles.secondaryBtn}>
              <span className={styles.dot}></span>
              View open Positions
            </a>
          </div>
        </div>

        {/* Right Content area: Bar chart and arrow graphic */}
        <div className={styles.rightContent}>
          <svg className={styles.graphicSvg} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f4865d" />
                <stop offset="100%" stopColor="#c72e36" />
              </linearGradient>
              
              <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle fill="#d0d0d0" cx="2" cy="2" r="1"></circle>
              </pattern>

              <marker id="arrowhead" markerWidth="24" markerHeight="24" refX="16" refY="12" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M 0 0 L 24 12 L 0 24 Q 5 12 0 0 Z" fill="#1a1a1a" />
              </marker>
            </defs>

            {/* Dotted Triangles */}
            <polygon points="80,260 220,120 280,260" fill="url(#dotPattern)" />
            <polygon points="260,140 330,70 400,160" fill="url(#dotPattern)" />

            {/* X-axis base line */}
            <path d="M 100 350 L 460 350" stroke="#d0d0d0" strokeWidth="1" />

            {/* Gradient Bars */}
            <rect x="220" y="300" width="30" height="50" fill="url(#barGradient)" />
            <rect x="265" y="260" width="30" height="90" fill="url(#barGradient)" />
            <rect x="310" y="210" width="30" height="140" fill="url(#barGradient)" />
            <rect x="355" y="140" width="30" height="210" fill="url(#barGradient)" />
            <rect x="400" y="60" width="30" height="290" fill="url(#barGradient)" />

            {/* Thick black swooping arrow */}
            <path 
              d="M 170 310 C 270 330, 340 230, 415 45" 
              stroke="#1a1a1a" 
              strokeWidth="12" 
              fill="none" 
              strokeLinecap="round" 
              markerEnd="url(#arrowhead)" 
            />
          </svg>
        </div>

      </div>
    </section>
  );
}
