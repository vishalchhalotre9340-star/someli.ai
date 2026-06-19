import React from 'react';
import styles from './lifeatsomeli.module.css';

export default function LifeAtSomeli() {
  const images = {
    col1: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
    ],
    col2: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
    ],
    col3: [
      "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    ],
    col4: [
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80"
    ],
    col5: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    ]
  };

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Column 1 */}
        <div className={styles.column}>
          <img src={images.col1[0]} alt="Team overhead" className={`${styles.img} ${styles.c1i1}`} />
          <img src={images.col1[1]} alt="Meeting" className={`${styles.img} ${styles.c1i2}`} />
          <img src={images.col1[2]} alt="Office" className={`${styles.img} ${styles.c1i3}`} />
        </div>

        {/* Column 2 */}
        <div className={styles.column}>
          <img src={images.col2[0]} alt="Wooden table" className={`${styles.img} ${styles.c2i1}`} />
          <img src={images.col2[1]} alt="Hands stacked" className={`${styles.img} ${styles.c2i2}`} />
        </div>

        {/* Column 3 */}
        <div className={styles.column}>
          <img src={images.col3[0]} alt="High five" className={`${styles.img} ${styles.c3i1}`} />
          <img src={images.col3[1]} alt="Sticky notes" className={`${styles.img} ${styles.c3i2}`} />
        </div>

        {/* Column 4 */}
        <div className={styles.column}>
          <img src={images.col4[0]} alt="Meeting room" className={`${styles.img} ${styles.c4i1}`} />
          <img src={images.col4[1]} alt="Glass wall" className={`${styles.img} ${styles.c4i2}`} />
        </div>

        {/* Column 5 */}
        <div className={styles.column}>
          <img src={images.col5[0]} alt="Desk laptop" className={`${styles.img} ${styles.c5i1}`} />
          <img src={images.col5[1]} alt="Overhead large table" className={`${styles.img} ${styles.c5i2}`} />
          <img src={images.col5[2]} alt="Orange room" className={`${styles.img} ${styles.c5i3}`} />
        </div>

        {/* Heading placed perfectly in the center pocket */}
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Life at Someli</h2>
        </div>
      </div>
    </section>
  );
}
