import React from 'react';
import styles from './lookingfor.module.css';

const CheckIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#f0745f" />
    <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function LookingFor() {
  const criteria = [
    "50+ active corporate clients",
    "B2B Focus Preferred",
    "Strong Executive Relationship",
    "Digital Transformation Expertise"
  ];

  const columns = [
    { title: "Marketing Agencies", items: criteria },
    { title: "PR & Communication Firms", items: criteria },
    { title: "HR & Employer Branding Consultants", items: criteria }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Who we are looking for?</h2>
      
      <div className={styles.grid}>
        {columns.map((col, idx) => (
          <div key={idx} className={styles.column}>
            <h3 className={styles.columnTitle}>{col.title}</h3>
            <div className={styles.list}>
              {col.items.map((item, itemIdx) => (
                <div key={itemIdx} className={styles.listItem}>
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
