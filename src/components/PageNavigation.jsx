import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const pages = [
  ['/', 'Cover'], ['/about', 'About Us'], ['/programme', 'The Programme'], ['/prize-categories', 'Prize Categories'], ['/timeline', '24-Month Timeline'],
  ['/monthly-plans/1-3', 'Months 1–3'], ['/monthly-plans/4-6', 'Months 4–6'], ['/monthly-plans/7-9', 'Months 7–9'], ['/monthly-plans/10-12', 'Months 10–12'],
  ['/monthly-plans/13-15', 'Months 13–15'], ['/monthly-plans/16-18', 'Months 16–18'], ['/monthly-plans/19-21', 'Months 19–21'], ['/monthly-plans/22-24', 'Months 22–24'],
  ['/how-it-works', 'How the Lucky Works'], ['/terms', 'Terms & Conditions'], ['/thank-you', 'Thank You'],
].map(([path, label], index) => ({ path, label, number: index + 1 }));

export default function PageNavigation() {
  const { pathname } = useLocation();
  const index = Math.max(0, pages.findIndex(page => page.path === pathname));
  const prev = pages[Math.max(0, index - 1)];
  const next = pages[Math.min(15, index + 1)];
  return <nav className="site-nav" aria-label="Brochure pages">
    <Link className="nav-step" to={prev.path} aria-label="Previous page" aria-disabled={index === 0}>‹ <span>Previous</span></Link>
    <label className="page-picker"><span>{index + 1} / 16</span><select aria-label="Go to page" value={pathname} onChange={event => { window.location.href = event.target.value; }}>
      {pages.map(page => <option key={page.path} value={page.path}>{String(page.number).padStart(2,'0')} · {page.label}</option>)}
    </select></label>
    <Link className="nav-step" to={next.path} aria-label="Next page" aria-disabled={index === 15}><span>Next</span> ›</Link>
    <div className="nav-dots">{pages.map(page => <Link key={page.path} to={page.path} title={`Page ${page.number}: ${page.label}`} aria-label={`Page ${page.number}`} className={index === page.number - 1 ? 'active' : ''}/>)}</div>
  </nav>;
}
