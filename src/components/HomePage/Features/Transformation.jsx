import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function Transformation() {
  return (
    <section className={`${styles.section} ${styles.gridBackground} ${styles.transformation}`}>
      <div className={`${styles.container} ${styles.comparisonGrid}`}>
        <div className={styles.compareCopy}>
          <span className={styles.eyebrow}>Visible growth</span>
          <h2 className={styles.heading}>From invisible to in-demand</h2>
          <p className={styles.copy}>See how professionals and teams transform their LinkedIn presence with Someli AI.</p>
          <Link className={styles.outlineButton} href="/platform">See How it Works →</Link>
        </div>
        <article className={styles.compareCard}>
          <h3>Before Someli</h3>
          <p>× Irregular posting</p><p>× Low engagement</p><p>× Limited reach</p><p>× No personal branding</p>
        </article>
        <article className={`${styles.compareCard} ${styles.afterCard}`}>
          <h3>After Someli</h3>
          <p>● Daily high-impact content</p><p>● 3-5x more impressions</p><p>● Stronger authority</p><p>● Inbound opportunities</p>
        </article>
      </div>
    </section>
  );
}
