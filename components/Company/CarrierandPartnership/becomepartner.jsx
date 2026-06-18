'use client';

import React, { useState } from 'react';
import styles from './becomepartner.module.css';

const Arrow = () => (
  <div className={styles.arrow}>
    <svg className={styles.arrowSvg} viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5H36M36 5L32 1M36 5L32 9" stroke="#b04331" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default function BecomePartner() {
  // Using active state to add the glassmorphism card hover effect. Defaulting to 1 to match the mockup.
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { num: 1, title: 'Apply' },
    { num: 2, title: 'Qualification' },
    { num: 3, title: 'Discovery' },
    { num: 4, title: 'Launch' }
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
        <h2 className={styles.heading}>Our Partnership Process</h2>

        <div className={styles.stepsContainer}>
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div 
                className={`${styles.step} ${activeStep === step.num ? styles.stepActive : ''}`}
                onMouseEnter={() => setActiveStep(step.num)}
              >
                <div className={styles.numberBox}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>Submit agency profile</p>
              </div>
              
              {idx < steps.length - 1 && <Arrow />}
            </React.Fragment>
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
