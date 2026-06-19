import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.heading}>Ready to 10x your reach?</h2>
            <div className={styles.guaranteeChip}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>30 days money back<br/>guarantee</span>
            </div>
          </div>
          <p className={styles.subtext}>
            Join thousands of professionals and companies building influence that drives real results.
          </p>
          <button className={styles.demoButton}>
            <span>•</span> Book a Demo <span>→</span>
          </button>
        </div>

        <div className={styles.divider}></div>

        {/* Middle Section - Logo */}
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoMain}>
              <img src="/assets/footer-logo.png" alt="someli" style={{ height: '150px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </div>
           
          </div>
        </div>

        {/* Columns Section */}
        <div className={styles.columns}>
          <div>
            <h3 className={styles.columnHeading}>Product</h3>
            <ul className={styles.columnList}>
              <li className={styles.columnItem}>Platform</li>
              <li className={styles.columnItem}>Pricing</li>
              <li className={styles.columnItem}>Reach Calculator</li>
              <li className={styles.columnItem}>Product Tour</li>
              <li className={styles.columnItem}>Supercharge Plan</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.columnHeading}>Company</h3>
            <ul className={styles.columnList}>
              <li className={styles.columnItem}>About us</li>
              <li className={styles.columnItem}>Blogs</li>
              <li className={styles.columnItem}>Partner Programme</li>
              <li className={styles.columnItem}>Affiliate Programme</li>
              <li className={styles.columnItem}>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.columnHeading}>Support</h3>
            <ul className={styles.columnList}>
              <li className={styles.columnItem}>Book a Demo</li>
              <li className={styles.columnItem}>FAQ</li>
              <li className={styles.columnItem}>Privacy Policy</li>
              <li className={styles.columnItem}>Terms of Use</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.columnHeading}>Contact Us</h3>
            <div className={styles.columnList}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +971 58 518 9194
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                hello@someli.ai
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © 2026 Someli AI. All rights reserved.
          </div>
          <div className={styles.socialIcons}>
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
