"use client";

import React, { useState } from 'react';
import styles from './faq.module.css';

const faqs = [
  {
    question: "When will I feel a difference?",
    answer: "You will typically start seeing an increase in engagement within the first two weeks of consistent posting. Our automated strategy builds momentum over time, maximizing your overall reach."
  },
  {
    question: "When will I feel a difference?",
    answer: "You will typically start seeing an increase in engagement within the first two weeks of consistent posting. Our automated strategy builds momentum over time, maximizing your overall reach."
  },
  {
    question: "When will I feel a difference?",
    answer: "You will typically start seeing an increase in engagement within the first two weeks of consistent posting. Our automated strategy builds momentum over time, maximizing your overall reach."
  },
  {
    question: "When will I feel a difference?",
    answer: "You will typically start seeing an increase in engagement within the first two weeks of consistent posting. Our automated strategy builds momentum over time, maximizing your overall reach."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqWrapper}>
      {/* Dark FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>FAQ's</h2>
        
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <svg 
                  className={`${styles.faqIcon} ${openIndex === index ? styles.faqIconOpen : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* White Partnerships Section */}
      <section className={styles.partnershipsSection}>
        <h3 className={styles.partnershipsTitle}>OUR PARTNERSHIPS</h3>
        <div className={styles.logosTrack}>
          {/* Logo 1: Circular Maze */}
          <svg viewBox="0 0 100 40" style={{ height: "40px", width: "auto" }}>
            <path d="M50 35C41.7157 35 35 28.2843 35 20C35 11.7157 41.7157 5 50 5C58.2843 5 65 11.7157 65 20C65 28.2843 58.2843 35 50 35ZM50 31C56.0751 31 61 26.0751 61 20C61 13.9249 56.0751 9 50 9C43.9249 9 39 13.9249 39 20C39 26.0751 43.9249 31 50 31ZM50 27C53.866 27 57 23.866 57 20C57 16.134 53.866 13 50 13C46.134 13 43 16.134 43 20C43 23.866 46.134 27 50 27ZM50 23C51.6569 23 53 21.6569 53 20C53 18.3431 51.6569 17 50 17C48.3431 17 47 18.3431 47 20C47 21.6569 48.3431 23 50 23Z" fill="currentColor"/>
          </svg>
          
          {/* Logo 2: Futuristic LOGOIPSUM */}
          <svg viewBox="0 0 150 40" style={{ height: "30px", width: "auto" }}>
            <text x="0" y="28" fontFamily="Arial Black, Impact, sans-serif" fontSize="24" fontWeight="900" letterSpacing="1">LOGOIPSUM</text>
          </svg>

          {/* Logo 3: Geometric LGO */}
          <svg viewBox="0 0 100 40" style={{ height: "36px", width: "auto" }}>
             <path d="M10 30L25 10H45L30 30H10Z" fill="currentColor"/>
             <path d="M40 30L55 10H75L60 30H40Z" fill="currentColor"/>
             <path d="M70 30L85 10H105L90 30H70Z" fill="currentColor"/>
          </svg>

          {/* Logo 4: Futuristic LOGOIPSUM */}
          <svg viewBox="0 0 150 40" style={{ height: "30px", width: "auto" }}>
            <text x="0" y="28" fontFamily="Arial Black, Impact, sans-serif" fontSize="24" fontWeight="900" letterSpacing="1">LOGOIPSUM</text>
          </svg>

          {/* Logo 5: Tribal LOGOIPSUM */}
          <svg viewBox="0 0 160 40" style={{ height: "34px", width: "auto" }}>
            <text x="10" y="26" fontFamily="Courier New, monospace" fontSize="22" fontWeight="bold" letterSpacing="2" transform="skewX(-15)">LOGOIPSUM</text>
            <path d="M0 20L10 10H150L160 20L150 30H10Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
          
          {/* Logo 6: Circular Maze (Repeat) */}
          <svg viewBox="0 0 100 40" style={{ height: "40px", width: "auto" }}>
            <path d="M50 35C41.7157 35 35 28.2843 35 20C35 11.7157 41.7157 5 50 5C58.2843 5 65 11.7157 65 20C65 28.2843 58.2843 35 50 35ZM50 31C56.0751 31 61 26.0751 61 20C61 13.9249 56.0751 9 50 9C43.9249 9 39 13.9249 39 20C39 26.0751 43.9249 31 50 31ZM50 27C53.866 27 57 23.866 57 20C57 16.134 53.866 13 50 13C46.134 13 43 16.134 43 20C43 23.866 46.134 27 50 27ZM50 23C51.6569 23 53 21.6569 53 20C53 18.3431 51.6569 17 50 17C48.3431 17 47 18.3431 47 20C47 21.6569 48.3431 23 50 23Z" fill="currentColor"/>
          </svg>
        </div>
      </section>
    </div>
  );
}
