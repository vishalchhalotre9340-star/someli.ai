import { workflowSteps } from "@/data/homepage";
import styles from "@/styles/home.module.css";

export default function Workflow() {
  return (
    <section className={`${styles.section} ${styles.workflowSection}`}>
      <div className={styles.container}>
        <div className={styles.workflowIntro}>
          <span className={styles.eyebrow}>Smart workflow</span>
          <h2 className={styles.heading}>How Someli AI works</h2>
          <p className={styles.copy}>AI + Strategy + Consistency + Influence that grows your business</p>
        </div>
        <div className={styles.workflowList}>
          {workflowSteps.map((step) => (
            <article className={styles.workflowCard} key={step.number}>
              <div className={styles.workflowTitle}><strong>{step.number}</strong><h3>{step.title}</h3></div>
              <div className={styles.workflowBody}><h4>{step.lead}</h4><ul>{step.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              <div className={styles.dashboard}>
                <div className={styles.dashboardHeader}><b>someli</b><span>Dashboard · Content · Insights</span></div>
                <div className={styles.dashboardGrid}>{Array.from({ length: 6 }, (_, i) => <span key={i} />)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
