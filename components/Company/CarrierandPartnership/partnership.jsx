'use client';

import React, { useState } from 'react';
import styles from './partnership.module.css';

export default function Partnership() {
  const [activeRegion, setActiveRegion] = useState('MENA');

  const regions = [
    {
      id: 'MENA',
      title: 'MENA',
      isPriority: true,
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman']
    },
    { id: 'INDIA', title: 'INDIA', isPriority: false, countries: [] },
    { id: 'AUSTRALIA', title: 'AUSTRALIA', isPriority: false, countries: [] },
    { id: 'USA', title: 'USA', isPriority: false, countries: [] }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>Partnerships</span>
        <h2 className={styles.heading}>Become a strategic growth partner</h2>
        <p className={styles.description}>
          We are building a carefully selected partner ecosystem across key global markets. 
          We are seeking high-performing agencies and consulting firms that serve enterprise 
          and mid-market organizations looking to increase employee engagement, brand reach, 
          and social impact.
        </p>
      </div>

      <div className={styles.content}>
        {/* Accordion Region Cards */}
        <div className={styles.regionsList}>
          {regions.map((region) => {
            const isActive = activeRegion === region.id;
            return (
              <div 
                key={region.id} 
                className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                onClick={() => setActiveRegion(region.id)}
              >
                <div className={styles.cardTitle}>
                  {region.title}
                  {isActive && region.isPriority && (
                    <span className={styles.priorityBadge}>PRIORITY REGION</span>
                  )}
                </div>
                {isActive && region.countries.length > 0 && (
                  <div className={styles.countryList}>
                    {region.countries.map(country => (
                      <div key={country} className={styles.countryItem}>
                        <span className={styles.countryDot}></span>
                        {country}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Map Graphic Area */}
        <div className={styles.mapContainer}>
          <svg className={styles.mapSvg} viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="activeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f0815a" />
                <stop offset="100%" stopColor="#cc363b" />
              </linearGradient>
            </defs>

            {/* Stylized Abstract World Map Base (Gray) */}
            <g fill="#e6e6e6">
              {/* North America */}
              <path d="M 120,60 C 200,40 320,50 300,150 C 250,220 180,200 150,150 C 100,100 80,80 120,60 Z"/>
              {/* South America */}
              <path d="M 230,220 C 300,210 320,280 250,420 C 220,450 180,300 230,220 Z"/>
              {/* Europe */}
              <path d="M 450,50 C 550,30 600,80 550,130 C 480,120 420,100 450,50 Z"/>
              {/* Africa */}
              <path d="M 430,150 C 550,120 600,200 550,350 C 500,400 450,300 430,150 Z"/>
              {/* Asia Base */}
              <path d="M 580,40 C 750,20 900,80 850,200 C 750,250 650,200 580,40 Z"/>
            </g>

            {/* Highlighted Regions (Gradient) */}
            {/* USA */}
            <path d="M 150,110 C 250,100 280,140 250,170 C 180,180 140,160 150,110 Z" fill="url(#activeGrad)" opacity={activeRegion === 'USA' ? 1 : 0.8} />
            
            {/* MENA */}
            <path d="M 480,160 C 580,150 620,180 580,220 C 520,230 460,200 480,160 Z" fill="url(#activeGrad)" opacity={activeRegion === 'MENA' ? 1 : 0.8} />
            
            {/* India */}
            <path d="M 660,180 C 720,180 700,280 660,260 C 640,240 640,200 660,180 Z" fill="url(#activeGrad)" opacity={activeRegion === 'INDIA' ? 1 : 0.8} />
            
            {/* Australia */}
            <path d="M 750,320 C 850,300 900,350 850,420 C 780,450 720,380 750,320 Z" fill="url(#activeGrad)" opacity={activeRegion === 'AUSTRALIA' ? 1 : 0.8} />

            {/* Location Pins over MENA region */}
            <g transform="translate(520, 180) scale(0.6)">
              <path className={styles.pin} d="M0,0 C-10,-10 -15,-20 -15,-30 C-15,-45 0,-50 15,-50 C30,-50 30,-35 30,-30 C30,-20 20,-10 15,0 L7.5,15 Z" fill="#1a1a1a"/>
              <circle cx="7.5" cy="-30" r="6" fill="white"/>
            </g>
            <g transform="translate(560, 170) scale(0.5)">
              <path className={styles.pin} d="M0,0 C-10,-10 -15,-20 -15,-30 C-15,-45 0,-50 15,-50 C30,-50 30,-35 30,-30 C30,-20 20,-10 15,0 L7.5,15 Z" fill="#1a1a1a"/>
              <circle cx="7.5" cy="-30" r="6" fill="white"/>
            </g>
            <g transform="translate(580, 200) scale(0.7)">
              <path className={styles.pin} d="M0,0 C-10,-10 -15,-20 -15,-30 C-15,-45 0,-50 15,-50 C30,-50 30,-35 30,-30 C30,-20 20,-10 15,0 L7.5,15 Z" fill="#1a1a1a"/>
              <circle cx="7.5" cy="-30" r="6" fill="white"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
