import styles from "@/styles/home.module.css";

const steps = [
  "Content Discovery",
  "Smart Scheduling",
  "Auto-Distribution",
  "Employee Engagement",
  "Analytics & Optimization",
];

export default function ManagementSystem() {
  return (
    <section className={`${styles.section} ${styles.management}`}>
      <div className={`${styles.container} ${styles.twoColumn}`}>
        <div className={styles.managementCopy}>
          <span className={styles.eyebrow}>Automated influence</span>
          <h2 className={styles.heading}>One Central System to Manage and Oversee Your Entire Organisation and Team Content</h2>
          <p className={styles.copy}>
            Someli brings your entire employee advocacy strategy into a single, seamless workflow,
            combining team scheduling with total brand control.
          </p>
          <p className={styles.copy}>
            Smart approvals keep your corporate identity protected while executives and employees
            publish relevant professional content in a few clicks.
          </p>
        </div>

        <div className={styles.stepsVisual}>
          {steps.map((step, index) => (
            <div className={styles.miniStep} key={step}>
              <strong>0{index + 1}/ {step}</strong>
              <span>Built to simplify, automate, and improve your team&apos;s reach.</span>
            </div>
          ))}
          <div className={styles.device} aria-label="Someli dashboard placeholder">
            <div className={styles.screenTop}><b>someli dashboard</b><span>Overview · Analytics</span></div>
            <div className={styles.screenGrid}>{Array.from({ length: 6 }, (_, i) => <span key={i} />)}</div>
            <div className={styles.phone}>Post<br />ready</div>
          </div>
        </div>
      </div>
    </section>
  );
}
