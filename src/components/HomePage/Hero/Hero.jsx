import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

// Hero network profile data.
const people = [
  {
    name: "David Carter",
    connections: "20K Connections",
    image: "/devolopment/869f527d1106ee87c0e6384db41a68768d505040.jpg",
    position: "top",
  },
  {
    name: "Chris Taylor",
    connections: "9.8K Connections",
    image: "/devolopment/bca373271b6020b0151ad3f4590d216edf8d05a2.jpg",
    position: "rightTop",
  },
  {
    name: "Casey Brown",
    connections: "13.2K Connections",
    image: "/devolopment/f7a341a208998cd3f2a085c224ffc07f73daeeac.jpg",
    position: "right",
  },
  {
    name: "Riley White",
    connections: "10.9K Connections",
    image: "/devolopment/156d02dae086f1e5a58fcb4f8b5769a0ee0e61e5.jpg",
    position: "rightBottom",
  },
  {
    name: "Alex Johnson",
    connections: "12.5K Connections",
    image: "/devolopment/235d83e02cc318ec9c669651e514f7884fdbc41c.png",
    position: "bottom",
  },
  {
    name: "Jamie Parker",
    connections: "8.7K Connections",
    image: "/devolopment/f2b18a506176efdf748a955532ed114e07746e6b.jpg",
    position: "leftBottom",
  },
  {
    name: "Taylor Morgan",
    connections: "11.1K Connections",
    image: "/devolopment/ef93d1abf5cab58ac523cb7346140f6ea054f39f.jpg",
    position: "left",
  },
  {
    name: "Jordan Lee",
    connections: "10.8K Connections",
    image: "/devolopment/74d7ebfb6a25178a5301032bec9cda6b1659badf.jpg",
    position: "leftTop",
  },
];

const ratingPeople = [
  people[7],
  {
    image: "/devolopment/cfd2beb5e3f42fe2f28dab3adafabd8832d52f3f.png",
    name: "Customer",
  },
  people[4],
  people[2],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path d="m3.5 2.5 5 3.5-5 3.5Z" />
    </svg>
  );
}

function ProfileCard({ person, index }) {
  return (
    <div
      className={`${styles.profileCard} ${styles[person.position]}`}
      style={{ "--profile-index": index }}
    >
      <span className={styles.profilePhoto}>
        <Image src={person.image} alt="" fill sizes="54px" />
      </span>
      <span className={styles.profileText}>
        <strong>{person.name}</strong>
        <small>{person.connections}</small>
      </span>
    </div>
  );
}

function SomeliMark() {
  return (
    <Image
      src="/devolopment/a798b437c84e4c07dde9b5e4576f8fbef8b5d2cc.png"
      alt=""
      width={583}
      height={237}
      className={styles.postLogo}
    />
  );
}

function SocialPost() {
  return (
    <article className={styles.socialPost}>
      <header className={styles.postHeader}>
        <span className={styles.postBrandIcon}>×</span>
        <span>
          <strong>Someli</strong>
          <small>2.3M Followers</small>
          <small>2h ago · ◉</small>
        </span>
        <b>•••</b>
      </header>

      <div className={styles.postCopy}>
        <strong>
          Great teams don&apos;t just execute,
          <br />they empower, adapt, and grow together.
          <br />Proud of what we are building.
        </strong>
        <span>#TeamSomeli #Growth #Innovation.</span>
      </div>

      <div className={styles.postCreative}>
        <SomeliMark />
      </div>

      <div className={styles.postStats}>
        <span>🔴 🟢 🟡 &nbsp; 342</span>
        <span>16 Comments 42 reposts</span>
      </div>

      <footer className={styles.postActions}>
        <span>♡ Like</span>
        <span>◯ Comment</span>
        <span>↻ Repost</span>
        <span>➤ Send</span>
      </footer>
    </article>
  );
}

function NetworkVisual() {
  return (
    <div className={styles.networkVisual} aria-label="Someli content connecting with professional networks">
      <div className={styles.globe}>
        <div className={styles.globeDots} />
        <div className={styles.globeRing} />
        <div className={styles.spokes} aria-hidden="true">
          {Array.from({ length: 8 }, (_, index) => (
            <span key={index} style={{ "--spoke-index": index }} />
          ))}
        </div>
      </div>

      <SocialPost />

      {people.map((person, index) => (
        <ProfileCard key={person.name} person={person} index={index} />
      ))}
    </div>
  );
}

function CustomerRating() {
  return (
    <div className={styles.customerRating}>
      <div className={styles.ratingAvatars}>
        {ratingPeople.map((person, index) => (
          <span key={`${person.image}-${index}`}>
            <Image src={person.image} alt="" fill sizes="34px" />
          </span>
        ))}
      </div>
      <div>
        <div className={styles.stars}>★★★★★</div>
        <p><strong>4.8/5</strong> from 200+ customers</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Employee advocacy and AI powered personal branding platform
          </p>

          <h1>
            10x your reach.
            <br />Build influence that
            <br />drives real business.
          </h1>

          <p className={styles.description}>
            Someli builds influence at scale, helping founders and teams
            create high-impact content, build personal brands, and drive 3-5x
            more impressions every single day.
          </p>

          <div className={styles.actions}>
            <Link href="/demo" className={styles.primaryAction}>
              <span aria-hidden="true">•</span> Book a Demo
            </Link>
            <Link href="/platform" className={styles.secondaryAction}>
              <ArrowIcon /> See how it works
            </Link>
          </div>

          <CustomerRating />
        </div>

        <NetworkVisual />
      </div>
    </section>
  );
}
