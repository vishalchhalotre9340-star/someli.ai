import React from 'react';
import styles from './carrier.module.css';

const PencilIcon = () => (
  <svg className={styles.icon} style={{ transform: 'none' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const ChevronIcon = () => (
  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function Career() {
  const jobListings = [
    "Product Designer",
    "UI/UX Designer",
    "Visual Illustrator"
  ];

  const cards = [
    { title: "Design Team", jobs: jobListings },
    { title: "Design Team", jobs: jobListings },
    { title: "Design Team", jobs: jobListings },
    { title: "Design Team", jobs: jobListings }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>CAREERS</span>
        <h2 className={styles.heading}>
          Join the Team Building the Future of Employee Advocacy
        </h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconWrapper}>
              <PencilIcon />
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            
            <div className={styles.jobList}>
              {card.jobs.map((job, jobIdx) => (
                <div key={jobIdx} className={styles.jobRow}>
                  <span className={styles.jobTitle}>{job}</span>
                  <ChevronIcon />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
