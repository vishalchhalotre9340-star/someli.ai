import React from 'react';
import styles from './whyjoinsomeli.module.css';

export default function WhyJoinSomeli() {
  const cards = [
    { num: 1, title: 'Global Impact' },
    { num: 2, title: 'Remote First Culture' },
    { num: 3, title: 'Growth Opportunities' },
    { num: 4, title: 'Innovative Product' }
  ];

  return (
    <section className={styles.section}>
      {/* Abstract background swoosh graphics */}
      <svg className={styles.bgSwoosh} viewBox="0 0 1000 500" preserveAspectRatio="xMaxYMax slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M 500 500 C 600 300, 800 100, 1000 -100" stroke="#f0745f" strokeWidth="2" fill="none" opacity="0.15" />
        <path d="M 400 500 C 550 350, 750 150, 1000 0" stroke="#f0745f" strokeWidth="4" fill="none" opacity="0.25" />
        <path d="M 600 500 C 700 350, 900 200, 1000 50" stroke="#f0745f" strokeWidth="1" fill="none" opacity="0.1" />
        <path d="M 300 500 C 500 400, 700 250, 1000 100" stroke="#f0745f" strokeWidth="8" fill="none" opacity="0.05" />
        <path d="M 700 500 C 800 400, 950 300, 1000 200" stroke="#f0745f" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>

      <div className={styles.content}>
        <span className={styles.badge}>OUR TEAM</span>
        <h2 className={styles.heading}>Why Join Someli</h2>

        <div className={styles.cardsContainer}>
          {cards.map((card) => (
            <div key={card.num} className={styles.card}>
              <div className={styles.numberBox}>{card.num}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>Submit agency profile</p>
            </div>
          ))}
        </div>

        <a href="#" className={styles.ctaBtn}>
          <span className={styles.dot}></span>
          Become a Partner &rarr;
        </a>
      </div>
    </section>
  );
}
