import styles from "@/styles/home.module.css";

const cards = ["2-Week Content Planner", "Strategic Content Library", "Branded Posts & Reels"];

export default function ContentManagement() {
  return (
    <section className={`${styles.section} ${styles.dark} ${styles.contentSection}`}>
      <div className={`${styles.container} ${styles.twoColumn} ${styles.contentIntro}`}>
        <div>
          <span className={styles.eyebrow}>Automated visibility</span>
          <h2 className={styles.heading}>Content Management Made Seamless</h2>
        </div>
        <p className={styles.copy}>
          Empower your team to become brand ambassadors without adding friction to their day.
          Someli centralizes ready-to-share marketing assets beside an intuitive scheduler, giving
          leaders full visibility to plan, curate, and oversee content calendars.
        </p>
      </div>
      <div className={styles.contentCards}>
        {cards.map((card, index) => (
          <article className={`${styles.contentCard} ${index === 1 ? styles.contentCardActive : ""}`} key={card}>
            <small>0{index + 1}</small><h3>{card}</h3><div className={styles.contentPreview} />
          </article>
        ))}
      </div>
      <span className={styles.channel}>● Publishes directly to LinkedIn · Instagram · Facebook</span>
    </section>
  );
}
