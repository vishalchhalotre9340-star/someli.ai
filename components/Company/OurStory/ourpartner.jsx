import React from 'react';
import styles from './ourpartner.module.css';

export default function OurPartner() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Our Partnerships</h3>
      
      <div className={styles.logoSlider}>
        <div className={styles.logoTrack}>
          {/* We repeat the group 3 times to ensure a seamless infinite scroll loop */}
          {[1, 2, 3].map((setIndex) => (
            <React.Fragment key={setIndex}>
              {/* Logo 1: Circular wave */}
              <svg className={styles.logo} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40zm0-70C33.4 20 20 33.4 20 50s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm0-30c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z"/>
              </svg>

              {/* Logo 2: Wide futuristic logoipsum */}
              <svg className={styles.logo} viewBox="0 0 200 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10h10v20h20v10H20V10z M60 10h30v10H70v10h20v10H60V10z M110 10h20v30h-20V10z M140 10h30v10h-20v10h20v10h-30V10z" />
                <path d="M180 10h20v30h-20V10z M10 20v10h10v-10z" />
                <rect x="0" y="5" width="200" height="30" rx="10" fill="none" stroke="currentColor" strokeWidth="4"/>
              </svg>

              {/* Logo 3: Diamond Slant LOGO */}
              <svg className={styles.logo} viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0h100l-20 40H0L20 0z" fill="currentColor" opacity="0.8"/>
                <path d="M30 15h60" stroke="currentColor" strokeWidth="6"/>
                <path d="M20 25h60" stroke="currentColor" strokeWidth="6"/>
              </svg>

              {/* Logo 4: Wide futuristic logoipsum (Repeat) */}
              <svg className={styles.logo} viewBox="0 0 200 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10h10v20h20v10H20V10z M60 10h30v10H70v10h20v10H60V10z M110 10h20v30h-20V10z M140 10h30v10h-20v10h20v10h-30V10z" />
                <path d="M180 10h20v30h-20V10z M10 20v10h10v-10z" />
                <rect x="0" y="5" width="200" height="30" rx="10" fill="none" stroke="currentColor" strokeWidth="4"/>
              </svg>

              {/* Logo 5: Tribal spiky */}
              <svg className={styles.logo} viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20l20-15 20 15-20 15L0 20zm40 0l20-15 20 15-20 15L40 20zm40 0l20-15v30L80 20z" />
                <path d="M10 20l10-7.5 10 7.5-10 7.5L10 20zm40 0l10-7.5 10 7.5-10 7.5L50 20z" fill="#ffffff"/>
              </svg>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
