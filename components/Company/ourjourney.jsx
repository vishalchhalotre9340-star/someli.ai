import React from 'react';
import styles from './ourjourney.module.css';

export default function OurJourney() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Top Header */}
        <div className={styles.topHeader}>
          <span className={styles.badge}>Our Journey</span>
          <h2 className={styles.heading}>From an idea to impact</h2>
          <p className={styles.subheading}>A journey of passion, innovation, and purpose.</p>
        </div>

        {/* Center Timeline Icon */}
        <div className={styles.timelineCenter}>
          <div className={styles.iconWrapper}>
            <svg className={styles.targetIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
              <path d="M14.5 9.5L22 2" strokeWidth="2" />
            </svg>
          </div>
          <h3 className={styles.goalsTitle}>Your Goals</h3>
        </div>

        {/* Bottom Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left List */}
          <ul className={styles.list}>
            <li className={styles.listItem}>Increase brand visibility and reputation</li>
            <li className={styles.listItem}>Build trust with your audience</li>
            <li className={styles.listItem}>Attract top talent</li>
            <li className={styles.listItem}>support sales and lead generation</li>
            <li className={styles.listItem}>Drive employee engagement</li>
          </ul>

          {/* Right Card */}
          <div className={styles.card}>
            <h3 className={styles.cardHeading}>So we built Someli</h3>
            <p className={styles.cardText}>
              An employee advocacy platform that makes it effortless for your team to share branded content, and for your brand to grow organically, consistently, and at scale.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
