import React from 'react';
import styles from './whatwegive.module.css';

const PlugIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6V4" />
    <path d="M15 6V4" />
    <rect x="6" y="6" width="12" height="10" rx="3" />
    <circle cx="10" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="14" cy="11" r="1" fill="currentColor" stroke="none" />
    <path d="M10 13a2 2 0 0 0 4 0" />
    <path d="M12 16v4" />
  </svg>
);

const UsersIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HeadsetIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1v-4h3v2z" />
    <path d="M3 19a2 2 0 0 0 2 2h1v-4H3v2z" />
    <path d="M19 19c-1 0-2-1-2-2" />
  </svg>
);

export default function WhatWeGive() {
  const cards = [
    {
      title: "Training & Enablement",
      description: "Posts, reels, articles, videos, and graphics, all customized to your brand",
      icon: <PlugIcon />
    },
    {
      title: "Qualified Lead Referrals",
      description: "Employees opt-in and instantly access your private library",
      icon: <UsersIcon />
    },
    {
      title: "Revenue Sharing",
      description: "Employees opt-in and instantly access your private library",
      icon: <UsersIcon />
    },
    {
      title: "Territory access",
      description: "1-click scheduling, so employees share on-brand content in their own voice, on time",
      icon: <HeadsetIcon />
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>WHAT WE GIVE</span>
        <h2 className={styles.heading}>Our Partner Benefits</h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconWrapper}>
              {card.icon}
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
