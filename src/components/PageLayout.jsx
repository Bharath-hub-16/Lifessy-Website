import React from 'react';
import { imageMapping } from '../data/imageMapping.js';

export function Brand({ compact = false }) {
  return <div className={`brand-mark ${compact ? 'compact' : ''}`} aria-label={imageMapping.logo ? 'Lifessy Corp logo' : 'Lifessy Corp logo placeholder'}>
    {imageMapping.logo ? <img src={imageMapping.logo} alt="Lifessy Corp"/> : <><span className="brand-symbol">↗</span><span className="brand-name">lifessy corp</span></>}
  </div>;
}

export function PageLayout({ number, eyebrow, title, children, className = '' }) {
  return <article className={`brochure-page page-${number} ${className}`}>
    <div className="page-border" aria-hidden="true" />
    <main className="page-content">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <h1>{title}</h1>}
      {title && <div className="title-rule" aria-hidden="true"><i /></div>}
      {children}
    </main>
    <footer className="page-footer"><span>L I F E S S Y&nbsp; C O R P</span><span>{number}</span></footer>
  </article>;
}

export function ImagePlaceholder({ kind = 'prize', label }) {
  const cleanLabel = label || ({ bike: 'BIKES', tv: 'SMART QLED TV', phone: 'IPHONE', car: 'CAR', house: 'HOUSE', product: 'PRODUCT' }[kind] || 'IMAGE');
  const mappedImage = kind === 'tv' && cleanLabel.includes('75') ? imageMapping.tv75
    : kind === 'tv' ? imageMapping.tv43
    : kind === 'bike' && cleanLabel === 'SCOOTERS' ? imageMapping.scooters
    : kind === 'bike' ? imageMapping.bikes
    : kind === 'phone' ? imageMapping.iphones
    : kind === 'car' ? imageMapping.cars
    : kind === 'house' ? imageMapping.house
    : kind === 'product' ? imageMapping.products[cleanLabel] : null;
  return <div className={`image-placeholder image-${kind}`} aria-label={`${cleanLabel} image placeholder`}>
    {mappedImage ? <img src={mappedImage} alt={cleanLabel}/> : <><span className="placeholder-symbol" aria-hidden="true">{kind === 'tv' ? '▭' : kind === 'house' ? '⌂' : kind === 'car' ? '▰' : kind === 'phone' ? '▯' : kind === 'product' ? '◈' : '⌁'}</span>
    <span className="placeholder-label">{cleanLabel}</span></>}
  </div>;
}

export function PrizeIcon({ type = 'bike' }) {
  const shapes = {
    bike: <><circle cx="6" cy="17" r="3.5"/><circle cx="18" cy="17" r="3.5"/><path d="m6 17 4-8 4 8H6l5-5h5l2 5m-8-8h4m4 0h2"/></>,
    tv: <><rect x="2.5" y="4" width="19" height="14" rx="1.5"/><path d="m9 22 3-4 3 4"/></>,
    phone: <><rect x="6.5" y="2" width="11" height="20" rx="2"/><path d="M10 5h4m-3 14h2"/></>,
    car: <><path d="M3 15v-3l2-2 2-5h10l3 5 2 2v3H3Z"/><path d="m7 10 1.5-3h7l2 3M5 15v3h2v-2h10v2h2v-3"/><circle cx="7.5" cy="13" r=".6"/><circle cx="16.5" cy="13" r=".6"/></>,
    house: <><path d="m2 11 10-8 10 8M5 9v12h14V9M9 21v-7h6v7"/></>,
    prize: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  };
  return <span className={`prize-icon icon-${type}`} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{shapes[type] || shapes.prize}</svg></span>;
}
