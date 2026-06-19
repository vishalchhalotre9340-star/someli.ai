import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function ProvenImpact() {
  return (
    <>
      <section className={`${styles.section} ${styles.gridBackground} ${styles.impact}`}>
        <div className={`${styles.container} ${styles.twoColumn}`}>
          <div className={styles.ghostNumbers}>
            <strong>2.8x</strong><span>Increase in impressions</span>
            <strong>3-5x</strong><span>Content output</span>
          </div>
          <div className={styles.impactCopy}>
            <span className={styles.eyebrow}>Proven impact</span>
            <h2 className={styles.heading}>Teams using Someli show up every day and the numbers prove it.</h2>
            <h3>Less spend.<br />More attention.<br />Better conversions.</h3>
            <p className={styles.copy}>Real results. From real people.</p>
            <Link className={styles.outlineButton} href="/platform">Calculate your Reach →</Link>
          </div>
        </div>
      </section>
      <section className={styles.partnerships}>
        <h2>Our partnerships</h2>
        <div className={styles.partnerRow}>
          <span>Logoipsum</span><span>UGV</span><span>LOGOIPSUM</span><span>TYPEFORM</span><span>N</span><span>UGV</span>
        </div>
      </section>
    </>
  );
}
