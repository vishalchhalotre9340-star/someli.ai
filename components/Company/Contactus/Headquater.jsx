import React from 'react';
import styles from './Headquater.module.css';

const PinIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const ClockIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

export default function Headquater() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>Our<br />Headquarters</h2>
          
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <PinIcon />
              <p className={styles.text}>
                DIFC Innovation Hub,<br />
                1st floor, Gate Avenue South,<br />
                Dubai International Financial Center
              </p>
            </div>
            
            <div className={styles.infoItem}>
              <PhoneIcon />
              <p className={styles.text}>+971 58 518 9194</p>
            </div>

            <div className={styles.infoItem}>
              <EmailIcon />
              <p className={styles.text}>hello@someli.ai</p>
            </div>

            <div className={styles.infoItem}>
              <ClockIcon />
              <p className={styles.text}>Sun- Thu, 9:00 AM to 6:00 PM (GST)</p>
            </div>
          </div>
        </div>

        {/* Right Content (Map) */}
        <div className={styles.rightContent}>
          <div className={styles.mapWrapper}>
            {/* Embedded Google Map pointing to London to perfectly match the design provided */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281080757!2d-0.24168019448375837!3d51.52877184047468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus" 
              className={styles.mapIframe}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Headquarters Location Map"
            ></iframe>
            {/* Decorative white square mimicking the map control cover shown in the mockup */}
            <div className={styles.whiteSquare}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
