import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function ReachCTA() {
  return (
    <section className={`${styles.section} ${styles.dark} ${styles.reach}`}>
      <div className={`${styles.container} ${styles.twoColumn}`}>
        <div>
          <span className={styles.eyebrow}>Reach multiplier</span>
          <h2 className={styles.heading}>See your potential. Multiply your reach.</h2>
          <p className={styles.copy}>Calculate how employee advocacy can 10x your brand reach on LinkedIn.</p>
          <div className={styles.formula}>
            <span>Your Brand Reach <strong>120k</strong></span><b>×</b>
            <span>Employee Networks <strong>250k+</strong></span><b>=</b>
            <span><strong>10X · 1.2M+</strong></span>
          </div>
        </div>
        <article className={styles.reportCard}>
          <span className={styles.eyebrow}>Trusted by 500+ companies</span>
          <h3>Request your free reach report</h3>
          <p className={styles.copy}>Get a personalized report and discover your true reach potential.</p>
          <ul><li>Custom reach analysis</li><li>Benchmark vs. industry leaders</li><li>Actionable recommendations</li></ul>
          <Link className={styles.outlineButton} href="/demo">Generate my report →</Link>
        </article>
      </div>
    </section>
  );
}
