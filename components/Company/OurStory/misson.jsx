import React from 'react';
import styles from './misson.module.css';

export default function Misson() {
  return (
    <div className={styles.container}>
      
      {/* Section 1: Mission & Vision */}
      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          
          <div className={styles.missionText}>
            <h2 className={styles.outlineHeading}>Mission</h2>
            <p className={styles.missionDesc}>
              Most social media tools help you post. We help you grow. Every
              feature in Someli is designed around a single question: will this
              drive real business results? That's why we pair smart automation
              with dedicated marketing support, engagement reports, and
              actionable AI recommendations — not just dashboards.
            </p>
            <div className={styles.divider}></div>
            <h2 className={styles.outlineHeading}>Vision</h2>
          </div>

          <div className={styles.cardsContainer}>
            <div className={styles.cardsRowTop}>
              <div className={styles.statCard}>
                <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
                <div className={styles.statValue}>2.8X</div>
                <div className={styles.statLabel}>More Engagement<br/>than brand posts</div>
              </div>

              <div className={styles.statCard}>
                <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div className={styles.statValue}>4X</div>
                <div className={styles.statLabel}>More Trust<br/>from audiences</div>
              </div>

              <div className={styles.statCard}>
                <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
                <div className={styles.statValue}>3X</div>
                <div className={styles.statLabel}>More Reach<br/>through employee networks</div>
              </div>
            </div>

            <div className={styles.cardsRowBottom}>
              <div className={styles.statCard}>
                <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 1v22" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
                <div className={styles.statValue}>24%</div>
                <div className={styles.statLabel}>Higher Conversion<br/>through social selling</div>
              </div>

              <div className={styles.statCard}>
                <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <div className={styles.statValue}>Stronger</div>
                <div className={styles.statLabel}>Employer Brand<br/>& Talent Attraction</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className={styles.whatWeDoSection}>
        <div className={styles.whatWeDoGrid}>
          
          <div className={styles.puzzleGraphic}>
            <svg className={styles.puzzleSvg} viewBox="-40 -40 420 420" xmlns="http://www.w3.org/2000/svg">
              {/* Piece 01 (Top Left) - Rotated and offset */}
              <g transform="translate(-25, -20) rotate(-8 90 90)">
                <path d="M 15 0 L 180 0 L 180 60 A 30 30 0 0 1 180 120 L 180 180 L 120 180 A 30 30 0 0 1 60 180 L 0 180 L 0 15 A 15 15 0 0 1 15 0 Z" fill="#f46342" />
                {/* Thick cross pattern overlay */}
                <path d="M 110 110 L 150 150 M 150 110 L 110 150" stroke="rgba(255,255,255,0.15)" strokeWidth="18" strokeLinecap="round" />
                <text x="35" y="65" fill="white" fontSize="48" fontWeight="800" letterSpacing="-1">01</text>
                <text x="35" y="105" fill="white" fontSize="16" fontWeight="400">AI that thinks</text>
                <text x="35" y="128" fill="white" fontSize="16" fontWeight="400">like a Marketer</text>
              </g>

              {/* Piece 02 (Top Right) */}
              <g transform="translate(180, 0)">
                <path d="M 0 0 L 165 0 A 15 15 0 0 1 180 15 L 180 180 L 120 180 A 30 30 0 0 1 60 180 L 0 180 L 0 120 A 30 30 0 0 0 0 60 L 0 0 Z" fill="#fae3d9" />
                <text x="110" y="80" fill="#f9b5a2" fontSize="48" fontWeight="800" letterSpacing="-1">02</text>
              </g>

              {/* Piece 03 (Bottom Left) */}
              <g transform="translate(0, 180)">
                <path d="M 0 0 L 60 0 A 30 30 0 0 0 120 0 L 180 0 L 180 60 A 30 30 0 0 0 180 120 L 180 180 L 15 180 A 15 15 0 0 1 0 165 L 0 0 Z" fill="#fae3d9" />
                <text x="35" y="160" fill="#f9b5a2" fontSize="48" fontWeight="800" letterSpacing="-1">03</text>
              </g>

              {/* Piece 04 (Bottom Right) */}
              <g transform="translate(180, 180)">
                <path d="M 0 0 L 60 0 A 30 30 0 0 0 120 0 L 180 0 L 180 165 A 15 15 0 0 1 165 180 L 0 180 L 0 120 A 30 30 0 0 1 0 60 L 0 0 Z" fill="#fae3d9" />
                <text x="110" y="160" fill="#f9b5a2" fontSize="48" fontWeight="800" letterSpacing="-1">04</text>
              </g>
            </svg>
          </div>

          <div className={styles.wwdContent}>
            <span className={styles.badge}>What We Do</span>
            <h2 className={styles.wwdHeading}>
              Your Brand Has a<br />
              Voice. We Help You<br />
              Multiply It.
            </h2>

            <div className={styles.accordion}>
              {/* Item 1 - Active */}
              <div className={`${styles.accordionItem} ${styles.itemActive}`}>
                <span className={styles.itemNum}>01</span>
                <h3 className={styles.itemTitle}>AI That Thinks Like a Marketer</h3>
                <p className={styles.itemDesc}>
                  Our AI learns your brand, your goals, and your audience to generate content that actually converts.
                </p>
              </div>
              
              {/* Item 2 - Inactive */}
              <div className={styles.accordionItem}>
                <span className={styles.itemNum}>02</span>
                <h3 className={styles.itemTitle}>A Platform Built for Teams</h3>
                <p className={styles.itemDesc}>
                  Seamlessly onboard employees and manage content flows across multiple departments and regions.
                </p>
              </div>
              
              {/* Item 3 - Inactive */}
              <div className={styles.accordionItem}>
                <span className={styles.itemNum}>03</span>
                <h3 className={styles.itemTitle}>Everything in one place</h3>
                <p className={styles.itemDesc}>
                  Track your entire social strategy, employee advocacy, and analytics from a single unified dashboard.
                </p>
              </div>
              
              {/* Item 4 - Inactive */}
              <div className={styles.accordionItem}>
                <span className={styles.itemNum}>04</span>
                <h3 className={styles.itemTitle}>CRM & Lead Capture Made Easy</h3>
                <p className={styles.itemDesc}>
                  Automatically pipe generated leads from social directly into your existing CRM workflows.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
