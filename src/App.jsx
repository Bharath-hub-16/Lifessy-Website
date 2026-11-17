import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pages } from './components/PageNavigation.jsx';
import { About, Cover, HowItWorks, MonthlyPlans, PrizeCategories, Programme, Terms, ThankYou, Timeline } from './pages/Pages.jsx';

const brochurePages = [
  Cover,
  About,
  Programme,
  PrizeCategories,
  Timeline,
  ...Array.from({ length: 8 }, (_, group) => () => <MonthlyPlans group={group} />),
  HowItWorks,
  Terms,
  ThankYou,
];

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageIndex = pages.findIndex(page => page.path === pathname);
    if (pageIndex > 0) {
      requestAnimationFrame(() => {
        document.getElementById(`page-${pageIndex + 1}`)?.scrollIntoView({ block: 'start' });
      });
    }
  }, []);

  return <main className="app-shell"><div className="brochure-stack">
    {brochurePages.map((Page, index) => <div className="brochure-page-slot" id={`page-${index + 1}`} key={index}>
      <Page />
    </div>)}
  </div></main>;
}
