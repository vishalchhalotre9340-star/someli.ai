import React from 'react';
import styles from './ourpartnership.module.css';

const Logo1 = () => (
  <svg viewBox="0 0 40 40" className={styles.logoSvg} aria-label="Partner Logo">
    <path d="M 20 2 C 10 2 4 10 4 20 L 4 38 M 36 38 L 36 20 C 36 10 30 2 20 2" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M 20 9 C 13 9 9 14 9 20 L 9 38 M 31 38 L 31 20 C 31 14 27 9 20 9" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M 20 16 C 17 16 15 18 15 20 L 15 38 M 25 38 L 25 20 C 25 18 23 16 20 16" stroke="currentColor" strokeWidth="3" fill="none"/>
  </svg>
);

const Logo2 = () => (
  <svg viewBox="0 0 200 40" className={styles.logoSvg} aria-label="Partner Logo">
    <text x="0" y="32" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="800" letterSpacing="-1" fill="currentColor">logoipsum</text>
  </svg>
);

const Logo3 = () => (
  <svg viewBox="0 0 100 40" className={styles.logoSvg} aria-label="Partner Logo">
    <path d="M 15 5 L 85 5 L 95 20 L 85 35 L 15 35 L 5 20 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"/>
    <text x="50" y="27" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="900" fontStyle="italic" fill="currentColor" textAnchor="middle">LOGO</text>
  </svg>
);

const Logo4 = () => (
  <svg viewBox="0 0 200 40" className={styles.logoSvg} aria-label="Partner Logo">
    <text x="0" y="30" fontFamily="Times New Roman, serif" fontSize="34" fontStyle="italic" fontWeight="900" letterSpacing="0" fill="currentColor">logoipsum</text>
  </svg>
);

export default function OurPartnership() {
  const logos = [
    <Logo1 key="l1" />,
    <Logo2 key="l2" />,
    <Logo3 key="l3" />,
    <Logo2 key="l4" />,
    <Logo4 key="l5" />,
    <Logo1 key="l6" />,
    <Logo3 key="l7" />
  ];

  // Repeat the logos multiple times to ensure the marquee fills the screen and loops seamlessly
  const scrollTrack = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Partnerships</h2>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {scrollTrack.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
