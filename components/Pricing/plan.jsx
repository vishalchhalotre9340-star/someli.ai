import React from 'react';
import styles from './plan.module.css';

export default function PricingPlan() {
  const leftFeatures = [
    {
      title: "AI Content Strategy",
      desc: "Build data-driven content that resonates.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    },
    {
      title: "Advanced Analytics",
      desc: "Track performance & optimize for growth.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    },
    {
      title: "Team Collaboration",
      desc: "Empower your team to share & engage.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    },
    {
      title: "Integrations",
      desc: "Connect with your favorite tools seamlessly.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    },
    {
      title: "Priority Support",
      desc: "Get fast, human support whenever you need it.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    },
    {
      title: "Smart Scheduling",
      desc: "Post at the perfect time, every time.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    },
    {
      title: "Unlimited Content",
      desc: "Generate posts, carousels, videos & more.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    }
  ];

  const rightFeatures = [
    {
      title: "Scale Your Reach",
      desc: "Increase visibility across LinkedIn and beyond.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    },
    {
      title: "Stronger Brand",
      desc: "Build trust and authority with consistent content.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    {
      title: "Engaged Employees",
      desc: "Turn your team into brand advocates.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    {
      title: "Better Results",
      desc: "Drive more engagement, leads, and opportunities.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    }
  ];

  const checkItems = [
    "Brand +24 employees",
    "AI-powered content strategy",
    "Unlimited content generation",
    "Smart scheduling",
    "Advanced analytics",
    "Team collaboration",
    "Integrations & automation",
    "Priority support",
    "Employee advocacy training",
    "Content library & templates"
  ];

  return (
    <section className={styles.planSection}>
      <div className={styles.header}>
        <span className={styles.badge}>TRANSPARENT PRICING</span>
        <h2 className={styles.title}>One plan. Everything you need to scale employee advocacy.</h2>
        <p className={styles.subtitle}>Powerful features. Meaningful impact.</p>
      </div>

      <div className={styles.grid}>
        {/* Left Column */}
        <div className={styles.sideCard}>
          {leftFeatures.map((item, idx) => (
            <div key={idx} className={styles.featureItem}>
              <div className={styles.iconBox}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {item.icon}
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Column */}
        <div className={styles.pricingCard}>
          <div className={styles.pricingHeader}>
            <div className={styles.pricingHeaderLeft}>
              <div className={styles.planName}>
                <span className={styles.planDot}></span> ALL-IN-ONE PLAN
              </div>
              <div className={styles.price}>$1,500</div>
              <div className={styles.period}>/ month</div>
            </div>
            <div className={styles.rocketIcon}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.438 4.438 0 002.946-2.946 4.493 4.493 0 004.306-1.758q.26-.26.495-.536a15.02 15.02 0 01-5.454-5.454q-.276.234-.536.495z" />
              </svg>
            </div>
          </div>
          
          <div className={styles.divider}></div>

          <div className={styles.checklist}>
            {checkItems.map((text, idx) => (
              <div key={idx} className={styles.checkItem}>
                <div className={styles.checkIcon}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {text}
              </div>
            ))}
          </div>

          <button className={styles.ctaButton}>
            &middot; Start Your Free Trial &rarr;
          </button>
          <div className={styles.guaranteeText}>
            30day money back guarantee
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.sideCard} style={{ paddingBottom: '0', gap: '24px' }}>
          {rightFeatures.map((item, idx) => (
            <div key={idx} className={styles.featureItem} style={{ paddingBottom: '16px' }}>
              <div className={styles.iconBox}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {item.icon}
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}

          <div className={styles.guaranteeBlock}>
            <div className={styles.ribbonIcon}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div className={styles.guaranteeTitle}>30-Day Money Back Guarantee!</div>
            <div className={styles.guaranteeDesc}>
              Not satisfied? Get a full refund within 30 days. No questions asked.
            </div>
          </div>
        </div>
      </div>

      {/* Logos section at the bottom */}
      <div className={styles.logosSection}>
        <div className={styles.logosTitle}>BUSINESSES THAT GROW WITH SOMELI</div>
        <div className={styles.logosTrack}>
          {/* Logo 1: Circular Maze */}
          <svg viewBox="0 0 100 40" style={{ height: "40px", width: "auto", opacity: 0.5 }}>
            <path d="M50 35C41.7157 35 35 28.2843 35 20C35 11.7157 41.7157 5 50 5C58.2843 5 65 11.7157 65 20C65 28.2843 58.2843 35 50 35ZM50 31C56.0751 31 61 26.0751 61 20C61 13.9249 56.0751 9 50 9C43.9249 9 39 13.9249 39 20C39 26.0751 43.9249 31 50 31ZM50 27C53.866 27 57 23.866 57 20C57 16.134 53.866 13 50 13C46.134 13 43 16.134 43 20C43 23.866 46.134 27 50 27ZM50 23C51.6569 23 53 21.6569 53 20C53 18.3431 51.6569 17 50 17C48.3431 17 47 18.3431 47 20C47 21.6569 48.3431 23 50 23Z" fill="currentColor"/>
          </svg>
          
          {/* Logo 2: Futuristic LOGOIPSUM */}
          <svg viewBox="0 0 150 40" style={{ height: "30px", width: "auto", opacity: 0.5 }}>
            <text x="0" y="28" fontFamily="Arial Black, Impact, sans-serif" fontSize="24" fontWeight="900" letterSpacing="1">LOGOIPSUM</text>
          </svg>

          {/* Logo 3: Geometric LGO */}
          <svg viewBox="0 0 100 40" style={{ height: "36px", width: "auto", opacity: 0.5 }}>
             <path d="M10 30L25 10H45L30 30H10Z" fill="currentColor"/>
             <path d="M40 30L55 10H75L60 30H40Z" fill="currentColor"/>
             <path d="M70 30L85 10H105L90 30H70Z" fill="currentColor"/>
          </svg>

          {/* Logo 4: Futuristic LOGOIPSUM */}
          <svg viewBox="0 0 150 40" style={{ height: "30px", width: "auto", opacity: 0.5 }}>
            <text x="0" y="28" fontFamily="Arial Black, Impact, sans-serif" fontSize="24" fontWeight="900" letterSpacing="1">LOGOIPSUM</text>
          </svg>

          {/* Logo 5: Tribal LOGOIPSUM */}
          <svg viewBox="0 0 160 40" style={{ height: "34px", width: "auto", opacity: 0.5 }}>
            <text x="10" y="26" fontFamily="Courier New, monospace" fontSize="22" fontWeight="bold" letterSpacing="2" transform="skewX(-15)">LOGOIPSUM</text>
            <path d="M0 20L10 10H150L160 20L150 30H10Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
          
          {/* Logo 6: Circular Maze (Repeat) */}
          <svg viewBox="0 0 100 40" style={{ height: "40px", width: "auto", opacity: 0.5 }}>
            <path d="M50 35C41.7157 35 35 28.2843 35 20C35 11.7157 41.7157 5 50 5C58.2843 5 65 11.7157 65 20C65 28.2843 58.2843 35 50 35ZM50 31C56.0751 31 61 26.0751 61 20C61 13.9249 56.0751 9 50 9C43.9249 9 39 13.9249 39 20C39 26.0751 43.9249 31 50 31ZM50 27C53.866 27 57 23.866 57 20C57 16.134 53.866 13 50 13C46.134 13 43 16.134 43 20C43 23.866 46.134 27 50 27ZM50 23C51.6569 23 53 21.6569 53 20C53 18.3431 51.6569 17 50 17C48.3431 17 47 18.3431 47 20C47 21.6569 48.3431 23 50 23Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statsLeft}>
          <div className={styles.statCol}>
            <div className={styles.statNumber}>2.5x</div>
            <div className={styles.statBox}>
              More engagement<br />than brand posts
            </div>
          </div>
          <div className={styles.statCol}>
            <div className={styles.statNumber}>10x</div>
            <div className={styles.statBox}>
              Greater organic<br />reach per share
            </div>
          </div>
          <div className={styles.statCol}>
            <div className={styles.statNumber}>30<br />Days</div>
            <div className={styles.statBox}>
              Average time to<br />measurable<br />visibility increase
            </div>
          </div>
        </div>
        
        <div className={styles.statsRight}>
          <span className={styles.badge}>EMPLOYEE ADVOCACY</span>
          <h2 className={styles.statsTitle}>Rated 5 Stars by <br /> the Businesses We <br /> Serve</h2>
          <p className={styles.statsDesc}>
            Employee-shared content earns 2.5x more engagement and reaches 10x the audience of brand page posts alone. Someli makes it effortless — your team gets a curated feed of approved, ready-to-share content. One tap. Zero friction. Maximum reach.
          </p>
        </div>
      </div>
    </section>
  );
}
