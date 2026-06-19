import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/homepage";
import styles from "@/styles/home.module.css";

export default function BlogSection() {
  return (
    <section className={`${styles.section} ${styles.gridBackground} ${styles.blogSection}`}>
      <div className={`${styles.container} ${styles.blogLayout}`}>
        <div className={styles.blogIntro}>
          <span className={styles.eyebrow}>Blogs</span>
          <h2 className={styles.heading}>Latest from Blogs</h2>
          <p className={styles.copy}>Discover how experts and teams enhance their LinkedIn profiles using Someli AI.</p>
          <Link className={styles.outlineButton} href="/resources/blogs">View all Blogs →</Link>
        </div>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article className={styles.blogCard} key={post.title}>
              <div className={styles.blogImage}><Image src={post.image} alt="" fill sizes="(max-width: 700px) 100vw, 420px" /></div>
              <h3>{post.title}</h3><Link href="/resources/blogs">Read more →</Link><small className={styles.blogMeta}>Ray Austin · 12 August 2024 · 4 min read</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
