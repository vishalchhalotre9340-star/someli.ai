import { certificationLogos } from "@/data/homepage";
import styles from "@/styles/home.module.css";

export default function Certifications() {
  return (
    <section className={styles.certifications}>
      <span className={styles.eyebrow}>Our certifications</span>
      <h2 className={styles.heading}>Our Certifications</h2>
      <div className={styles.certGrid}>{certificationLogos.map((logo, i) => <span key={`${logo}-${i}`}>{logo}</span>)}</div>
    </section>
  );
}
