import styles from "./impactStrip.module.css";

// Reference impact metrics.
const metrics = [
  {
    value: "2.8X",
    title: "More Engagement",
    detail: "than brand posts",
    icon: "people",
  },
  {
    value: "4X",
    title: "More Trust",
    detail: "from audiences",
    icon: "handshake",
  },
  {
    value: "3X",
    title: "More Reach",
    detail: "through employee networks",
    icon: "chart",
  },
  {
    value: "24%",
    title: "Higher Conversion",
    detail: "through social selling",
    icon: "dollar",
  },
  {
    value: "Stronger",
    title: "Employer Brand",
    detail: "& Talent Attraction",
    icon: "star",
  },
];

const logos = [
  { text: "MONOGRAM", style: "loop" },
  { text: "UGV", style: "block" },
  { text: "LOGOIPSUM", style: "loop" },
  { text: "TYPEFORM", style: "gothic" },
  { text: "N", style: "mark" },
  { text: "UGV", style: "block" },
];

function MetricIcon({ type }) {
  if (type === "people") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="13" cy="10" r="4" />
        <path d="M5 26v-3c0-4 3-7 8-7s8 3 8 7v3M22 8c3 0 5 2 5 5s-2 5-5 5M24 19c2 1 3 3 3 6" />
      </svg>
    );
  }

  if (type === "handshake") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m4 12 6-5 6 3 6-3 6 5-4 10-5 4-4-2-3 1-7-7-1-6Z" />
        <path d="m10 15 5 4c1 1 3 1 4 0l3-3M9 20l2-2M13 23l2-2" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 5v22h23M10 22V13h4v9M18 22V8h4v14M26 22v-6h3" />
      </svg>
    );
  }

  if (type === "dollar") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M22 8c-2-2-10-2-10 3 0 6 11 2 11 8 0 5-8 5-12 2M17 3v26" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m16 3 4 8 9 1-6.5 6.5 1.5 9L16 23l-8 4.5 1.5-9L3 12l9-1 4-8Z" />
    </svg>
  );
}

export default function ImpactStrip() {
  return (
    <section className={styles.section} aria-labelledby="businesses-title">
      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <article className={styles.metricCard} key={metric.title}>
            <MetricIcon type={metric.icon} />
            <strong>{metric.value}</strong>
            <h2>{metric.title}</h2>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>

      <div className={styles.businesses}>
        <h2 id="businesses-title">Businesses that grow with Someli</h2>
        <div className={styles.logoMarquee}>
          <div className={styles.logoTrack}>
            {[...logos, ...logos].map((logo, index) => (
              <span
                className={`${styles.logo} ${styles[logo.style]}`}
                aria-hidden={index >= logos.length}
                key={`${logo.text}-${index}`}
              >
                {logo.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
