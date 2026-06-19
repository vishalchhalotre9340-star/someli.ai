import Link from "next/link";
import { pricingFeatures } from "@/data/homepage";
import styles from "@/styles/home.module.css";

const sideFeatures = [
  ["AI Content Strategy", "Build data-driven content that resonates."],
  ["Advanced Analytics", "Track performance and optimize for growth."],
  ["Team Collaboration", "Empower your team to share and engage."],
  ["Integrations", "Connect with your favorite tools."],
  ["Priority Support", "Get fast, human support."],
  ["Smart Scheduling", "Post at the perfect time."],
];

export default function Pricing() {
  return (
    <section className={`${styles.section} ${styles.pricing}`}>
      <span className={styles.eyebrow}>Transparent pricing</span>
      <h2 className={styles.heading}>One plan. Everything you need to scale employee advocacy.</h2>
      <p className={styles.copy}>Powerful features. Meaningful impact.</p>
      <div className={styles.pricingGrid}>
        <div className={styles.featurePanel}>
          {sideFeatures.map(([title, copy]) => (
            <div className={styles.featureItem} key={title}>
              <i className={styles.featureIcon}>◎</i><div><strong>{title}</strong><span>{copy}</span></div>
            </div>
          ))}
        </div>
        <article className={styles.pricePanel}>
          <small>● ALL-IN-ONE PLAN</small><h3>$1,500</h3><span>/ month</span>
          <ul>{pricingFeatures.map((feature) => <li key={feature}>● {feature}</li>)}</ul>
          <Link className={styles.outlineButton} href="/demo">Start Your Free Trial →</Link>
        </article>
        <div className={styles.featurePanel}>
          {["Scale Your Reach", "Stronger Brand", "Engaged Employees", "Better Results"].map((title) => (
            <div className={styles.featureItem} key={title}>
              <i className={styles.featureIcon}>↗</i><div><strong>{title}</strong><span>Meaningful visibility and measurable growth.</span></div>
            </div>
          ))}
          <aside className={styles.guarantee}><strong>30-Day Money Back Guarantee!</strong><span>Not satisfied? Get a full refund within 30 days.</span></aside>
        </div>
      </div>
    </section>
  );
}
