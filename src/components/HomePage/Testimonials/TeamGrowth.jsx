import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function TeamGrowth() {
  return (
    <section className={`${styles.section} ${styles.dark} ${styles.teamSection}`}>
      <div className={`${styles.container} ${styles.twoColumn}`}>
        <div className={styles.teamText}>
          <span className={styles.eyebrow}>People-powered reach</span>
          <h2 className={styles.heading}>Your team is your greatest growth engine</h2>
          <p className={styles.copy}>
            When your team builds their personal brand your company becomes the obvious choice.
            Teams with 70%+ participation typically see exponential growth in visibility.
          </p>
          <Link className={styles.outlineButton} href="/demo">Build your team&apos;s influence →</Link>
        </div>

        <div className={styles.quoteWrap}>
          <span className={`${styles.benefitPill} ${styles.pillOne}`}>✓ More reach across more people</span>
          <span className={`${styles.benefitPill} ${styles.pillTwo}`}>✓ Higher trust and credibility</span>
          <article className={styles.quoteCard}>
            <div className={styles.quoteMark}>“</div>
            <blockquote>
              Most founders think growth comes from ads. It doesn&apos;t. It comes from consistent visibility.
            </blockquote>
            <div className={styles.author}>
              <span className={styles.avatar}>
                <Image src="/devolopment/156d02dae086f1e5a58fcb4f8b5769a0ee0e61e5.jpg" alt="Ananya Sharma" fill sizes="43px" />
              </span>
              <span>Ananya Sharma · Founder &amp; CEO</span>
            </div>
          </article>
          <span className={`${styles.benefitPill} ${styles.pillThree}`}>✓ More inbound opportunities</span>
        </div>
      </div>
    </section>
  );
}
