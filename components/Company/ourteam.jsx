import React from 'react';
import styles from './ourteam.module.css';

export default function OurTeam() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.leftContent}>
          <span className={styles.badge}>Our Team</span>
          <h2 className={styles.heading}>A Team That's In<br />Your Corner</h2>
          <p className={styles.description}>
            When you sign up with Someli, you're not just getting software.
            Depending on your plan, you get a dedicated marketing team
            managing your content strategy, branding, design, and video —
            working as an extension of your business.
          </p>
          <a href="/contact" className={styles.contactBtn}>
            <span className={styles.dot}>•</span> Contact us <span className={styles.arrow}>&#8594;</span>
          </a>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.cardsWrapper}>
            
            {/* Back Card */}
            <div className={`${styles.card} ${styles.cardBack}`}>
              <div className={styles.imageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" 
                  alt="Johny Doe" 
                  className={styles.profileImage} 
                />
                <div className={styles.linkedinIcon}>
                  <svg className={styles.linkedinSvg} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.name}>Johny Doe</h3>
              <span className={styles.role}>Founder & CEO</span>
            </div>

            {/* Front Card */}
            <div className={`${styles.card} ${styles.cardFront}`}>
              <div className={styles.imageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80" 
                  alt="Rajiv Shah" 
                  className={styles.profileImage} 
                />
                <div className={styles.linkedinIcon}>
                  <svg className={styles.linkedinSvg} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.name}>Rajiv Shah</h3>
              <span className={styles.role}>Founder & CEO</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
