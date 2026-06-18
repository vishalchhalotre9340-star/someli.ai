"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const NAV_ITEMS = [
  { label: "Platform", href: "/platform" },
  {
    label: "Solutions",
    dropdown: [
      { label: "For Corporates", href: "/solutions/corporates" },
      { label: "How Someli Works", href: "/solutions/how-it-works" },
      { label: "Why Someli", href: "/solutions/why-someli" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Product Tour", href: "/resources/product-tour" },
      { label: "Client Cases", href: "/resources/client-cases" },
      { label: "Blogs & Insights", href: "/resources/blogs" },
      { label: "Tools & Calculators", href: "/resources/tools" },
      { label: "Guides & Playbooks", href: "/resources/guides" },
      { label: "Help Center", href: "/resources/help" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    dropdown: [
      { label: "Our Story", href: "/company/story" },
      { label: "Careers & Partnerships", href: "/company/careers" },
      { label: "Contact us", href: "/company/contact" },
    ],
  },
];

function SomeliLogo() {
  return (
    <Link href="/" className={styles.logo}>
      <svg viewBox="0 0 32 32" fill="none" className={styles.logoIcon}>
        <circle cx="16" cy="16" r="16" fill="#F97316" opacity="0.12" />
        <path d="M9 16C9 12.134 12.134 9 16 9s7 3.134 7 7-3.134 7-7 7"
          stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2.5" fill="#F97316" />
      </svg>
      <span className={styles.logoText}>
        someli<span className={styles.logoDot}>.</span>ai
      </span>
    </Link>
  );
}

function DropdownMenu({ items, isOpen }) {
  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ""}`}>
      <div className={styles.dropdownArrow} />
      {items.map((item) => (
        <Link key={item.label} href={item.href} className={styles.dropdownItem}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.dropdown) {
    return (
      <Link href={item.href} className={styles.navLink}>
        · {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className={styles.navItem}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button onClick={() => setOpen((p) => !p)} className={styles.navButton} aria-expanded={open}>
        · {item.label}
        <svg className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <DropdownMenu items={item.dropdown} isOpen={open} />
    </div>
  );
}

function MobileMenu({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => { if (!isOpen) setOpenSection(null); }, [isOpen]);

  return (
    <div className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : ""}`} onClick={onClose}>
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.mobileDrawerOpen : ""}`}
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.mobileHeader}>
          <SomeliLogo />
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className={styles.mobileNavGroup}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                    className={styles.mobileNavButton}
                  >
                    {item.label}
                    <svg className={`${styles.mobileChevron} ${openSection === item.label ? styles.mobileChevronOpen : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`${styles.mobileSubmenu} ${openSection === item.label ? styles.mobileSubmenuOpen : ""}`}>
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} href={sub.href} onClick={onClose} className={styles.mobileSubLink}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} onClick={onClose} className={styles.mobileNavLink}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.mobileCta}>
          <Link href="/login" onClick={onClose} className={styles.mobileLoginBtn}>Log in</Link>
          <Link href="/demo" onClick={onClose} className={styles.mobileDemoBtn}>Book a Demo</Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          <SomeliLogo />
          <nav className={styles.desktopNav}>
            {NAV_ITEMS.map((item) => <NavItem key={item.label} item={item} />)}
          </nav>
          <div className={styles.desktopCta}>
            <Link href="/login" className={styles.loginBtn}>· Log in</Link>
            <Link href="/demo" className={styles.demoBtn}>· Book a Demo</Link>
          </div>
          <button className={styles.hamburger} onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className={styles.navSpacer} />
    </>
  );
}