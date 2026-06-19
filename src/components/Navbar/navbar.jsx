"use client";

// Shared site navigation.
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";

const NAV_ITEMS = [
  { label: "Platform", href: "/platform" },
  {
    label: "Solutions",
    children: [
      { label: "For Corporates", href: "/solutions/corporates" },
      { label: "How Someli Works", href: "/solutions/how-it-works" },
      { label: "Why Someli", href: "/solutions/why-someli" },
    ],
  },
  {
    label: "Resources",
    children: [
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
    children: [
      { label: "Our Story", href: "/company/story" },
      { label: "Careers & Partnerships", href: "/company/careers" },
      { label: "Contact us", href: "/company/contact" },
    ],
  },
];

function Chevron({ open = false }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
      viewBox="0 0 12 12"
      aria-hidden="true"
    >
      <path d="m3 4.5 3 3 3-3" />
    </svg>
  );
}

function Logo({ onClick }) {
  return (
    <Link href="/" className={styles.logo} onClick={onClick} aria-label="Someli home">
      <Image
        src="/devolopment/a798b437c84e4c07dde9b5e4576f8fbef8b5d2cc.png"
        alt="Someli — 10X Reach, 10X Connections"
        width={583}
        height={237}
        priority
        className={styles.logoImage}
      />
    </Link>
  );
}

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  if (!item.children) {
    return (
      <Link href={item.href} className={styles.navLink}>
        <span className={styles.navDot} aria-hidden="true">•</span>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className={styles.navItem}
      ref={itemRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={styles.navButton}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={styles.navDot} aria-hidden="true">•</span>
        {item.label}
        <Chevron open={open} />
      </button>

      <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : ""}`}>
        {item.children.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            className={styles.dropdownLink}
            onClick={() => setOpen(false)}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);

  function closeMenu() {
    setExpandedItem(null);
    onClose();
  }

  return (
    <div
      className={`${styles.mobileOverlay} ${open ? styles.mobileOverlayOpen : ""}`}
      aria-hidden={!open}
      onClick={closeMenu}
    >
      <aside
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.mobileHeader}>
          <Logo onClick={closeMenu} />
          <button type="button" className={styles.closeButton} onClick={closeMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5 19 19M19 5 5 19" />
            </svg>
          </button>
        </div>

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <div className={styles.mobileGroup} key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className={styles.mobileTrigger}
                    aria-expanded={expandedItem === item.label}
                    onClick={() => setExpandedItem((current) => current === item.label ? null : item.label)}
                  >
                    {item.label}
                    <Chevron open={expandedItem === item.label} />
                  </button>
                  <div className={`${styles.mobileSubmenu} ${expandedItem === item.label ? styles.mobileSubmenuOpen : ""}`}>
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} onClick={closeMenu}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} className={styles.mobileLink} onClick={closeMenu}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.mobileActions}>
          <Link href="/login" className={styles.mobileLogin} onClick={closeMenu}>Log in</Link>
          <Link href="/demo" className={styles.mobileDemo} onClick={closeMenu}>Book a Demo</Link>
        </div>
      </aside>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          <Logo />

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => <DesktopItem key={item.label} item={item} />)}
          </nav>

          <div className={styles.desktopActions}>
            <Link href="/login" className={styles.loginLink}>
              <span aria-hidden="true">•</span> Log in
            </Link>
            <Link href="/demo" className={styles.demoLink}>
              <span aria-hidden="true">•</span> Book a Demo
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(true)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className={styles.spacer} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
