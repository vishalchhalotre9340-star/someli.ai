import React from 'react';
import styles from './whatwedo.module.css';

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Content */}
        <div className={styles.leftContent}>
          <span className={styles.badge}>What We Do</span>
          
          <h2 className={styles.heading}>
            See your potential.<br />Multiply your reach.
          </h2>

          <div className={styles.reviewSection}>
            <div className={styles.avatarGroup}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="Customer" className={styles.avatar} />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80" alt="Customer" className={styles.avatar} />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" alt="Customer" className={styles.avatar} />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" alt="Customer" className={styles.avatar} />
            </div>
            
            <div className={styles.starsAndText}>
              <div className={styles.stars}>
                {/* 5 Golden Stars */}
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className={styles.starSvg} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className={styles.reviewText}>4.8/5 from 200+ customers</span>
            </div>
          </div>

          <div className={styles.formulaBanner}>
            <div className={styles.formulaBlock}>
              <svg className={styles.formulaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18M5 21V7l8-4v18M13 3l8 4v14M7 11h2M7 15h2M15 11h2M15 15h2" />
              </svg>
              <div className={styles.formulaText}>
                <span className={styles.formulaLabel}>Your Brand Reach</span>
                <span className={styles.formulaValue}>120k</span>
              </div>
            </div>
            
            <span className={styles.operator}>X</span>

            <div className={styles.formulaBlock}>
              <svg className={styles.formulaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className={styles.formulaText}>
                <span className={styles.formulaLabel}>Employee Networks</span>
                <span className={styles.formulaValue}>250k+</span>
              </div>
            </div>

            <span className={styles.operator}>=</span>

            <div className={styles.formulaBlock}>
              <div className={styles.multiplier}>10X</div>
              <div className={styles.formulaText}>
                <span className={styles.formulaLabel}>More Reach</span>
                <span className={styles.formulaValue}>1.2M+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Card */}
        <div className={styles.reportCard}>
          <div className={styles.cardIconWrapper}>
            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Request your free reach report</h3>
          <p className={styles.cardDesc}>Get a personalized report for your company and discover your true reach potential</p>
          
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Custom reach analysis for your organization
            </li>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Benchmark vs. industry leaders
            </li>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Actionable recommendations to grow
            </li>
          </ul>

          <div className={styles.divider}></div>

          <a href="/report" className={styles.generateBtn}>
            <span className={styles.dot}>•</span> Generate my report
          </a>
        </div>

      </div>
    </section>
  );
}
