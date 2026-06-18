'use client';

import React, { useState } from 'react';
import styles from './Faqs.module.css';

const ChevronIcon = () => (
  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { 
      question: "When will I feel a difference?", 
      answer: "You will typically start feeling a difference within the first two weeks of consistent use as the changes take effect." 
    },
    { 
      question: "When will I feel a difference?", 
      answer: "You will typically start feeling a difference within the first two weeks of consistent use as the changes take effect." 
    },
    { 
      question: "When will I feel a difference?", 
      answer: "You will typically start feeling a difference within the first two weeks of consistent use as the changes take effect." 
    },
    { 
      question: "When will I feel a difference?", 
      answer: "You will typically start feeling a difference within the first two weeks of consistent use as the changes take effect." 
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>FAQ's</h2>
      
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`${styles.faqRow} ${openIndex === index ? styles.faqRowActive : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className={styles.faqHeader}>
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <ChevronIcon />
            </div>
            
            <div className={styles.faqAnswer}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
