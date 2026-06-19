import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <h2>Ready to 10x your reach?</h2>
      <p>Join thousands of professionals and companies building influence that drives real results.</p>
      <Link className={styles.outlineButton} href="/demo">Book a Demo →</Link>
    </section>
  );
}
