import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/home.module.css";

const columns = [
  ["Product", "Platform", "Pricing", "Reach Calculator", "Product Tour"],
  ["Company", "About us", "Blogs", "Partner Programme", "Contact Us"],
  ["Support", "Book a Demo", "FAQs", "Privacy Policy", "Terms of Use"],
  ["Contact Us", "+91 158 518 9194", "hello@someli.ai"],
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Image className={styles.footerLogo} src="/devolopment/a798b437c84e4c07dde9b5e4576f8fbef8b5d2cc.png" alt="Someli" width={583} height={237} />
        <div className={styles.footerGrid}>
          {columns.map(([title, ...links]) => (
            <div className={styles.footerColumn} key={title}>
              <strong>{title}</strong>
              {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
            </div>
          ))}
        </div>
        <div className={styles.copyright}><span>© 2026 Someli AI. All rights reserved.</span><span>Facebook · LinkedIn · YouTube</span></div>
      </div>
    </footer>
  );
}
