import React from 'react';
import styles from './contactus.module.css';

const EmailIcon = () => (
  <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChevronIcon = () => (
  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const UAEFlag = () => (
  <svg className={styles.flag} viewBox="0 0 30 15" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="0" width="22" height="5" fill="#00732f" />
    <rect x="8" y="5" width="22" height="5" fill="#ffffff" />
    <rect x="8" y="10" width="22" height="5" fill="#000000" />
    <rect x="0" y="0" width="8" height="15" fill="#ff0000" />
  </svg>
);

export default function ContactUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftContent}>
          <span className={styles.badge}>CONTACT US</span>
          <h2 className={styles.heading}>Got any questions?<br />Contact us</h2>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Sales & Partnerships</h3>
            <p className={styles.cardSubtitle}>Explore partnerships or find the right solution for your organization.</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <EmailIcon />
                <span>hello@someli.ai</span>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon />
                <span>+971 58 518 9194</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Customer Support</h3>
            <p className={styles.cardSubtitle}>Get help with implementation, platform support, or any questions.</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <EmailIcon />
                <span>hello@someli.ai</span>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon />
                <span>+971 58 518 9194</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className={styles.rightContent}>
          <div className={styles.formCard}>
            <h2 className={styles.formHeading}>Book a Demo</h2>
            <p className={styles.formSubtitle}>Tell us a bit about yourself and we'll connect you with the right expert</p>

            <form className={styles.form}>
              <input type="text" className={styles.input} placeholder="Full Name" />
              <input type="email" className={styles.input} placeholder="Work Email" />
              
              <div className={styles.inputRow}>
                <div className={styles.countryCode}>
                  <UAEFlag />
                  <span>+971</span>
                  <ChevronIcon />
                </div>
                <input type="tel" className={styles.input} placeholder="Contact No." />
              </div>

              <input type="text" className={styles.input} placeholder="Company Name" />
              
              <div className={styles.inputGroup}>
                <input type="text" className={styles.input} placeholder="No. of Employees" />
                <div className={styles.selectIcon}>
                  <ChevronIcon />
                </div>
              </div>

              <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Goals/ Challenges"></textarea>

              <button type="submit" className={styles.submitBtn}>
                <span className={styles.dot}></span>
                Book a Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
