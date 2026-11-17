import React from 'react';
import { ImagePlaceholder, PrizeIcon } from './PageLayout.jsx';

export default function MonthlyPrizeCard({ plan }) {
  const images = [
    ...(plan.transport ? ['bike'] : []), ...(plan.tv43 ? ['tv43'] : []),
    ...(plan.tv75 ? ['tv75'] : []), ...(plan.iphone ? ['phone'] : []), ...(plan.majorPrize ? [plan.month === 24 ? 'house' : 'car'] : []),
  ];
  return <section className={`monthly-card ${plan.major ? 'has-major' : ''}`} aria-label={`Month ${plan.month} prize plan`}>
    <div className="month-seal"><strong>{plan.month}</strong><span>MONTH</span>{plan.major && <b>MAJOR PRIZE</b>}</div>
    <div className={`monthly-details ${plan.modelLines?.length ? 'has-models' : ''}`} style={{ '--details-top': `${plan.detailsTop / 5.9527}cqw` }}>
      {plan.transport && <div className="prize-row transport-row"><PrizeIcon type="bike"/><div><b>{plan.transport}</b>{plan.models?.length > 0 && <span>{(plan.modelLines || [plan.models.join(' · ')]).join('\n')}</span>}</div></div>}
      {plan.tv43 > 0 && <div className="prize-row tv-row"><PrizeIcon type="tv"/><b>{plan.tv43} × 43-inch Android Smart QLED TV</b></div>}
      {plan.tv75 > 0 && <div className="prize-row tv-row"><PrizeIcon type="tv"/><b>{plan.tv75} × 75-inch Smart QLED TV</b></div>}
      {plan.iphone && <div className="prize-row"><PrizeIcon type="phone"/><b>{plan.iphone}</b></div>}
      {plan.majorPrize && <div className="prize-row major-prize"><PrizeIcon type={plan.month === 24 ? 'house' : 'car'}/><b>{plan.majorPrize}</b></div>}
    </div>
    <div className="monthly-images">{images.slice(0,4).map((kind, i) => <ImagePlaceholder key={`${kind}-${i}`} kind={kind === 'tv43' || kind === 'tv75' ? 'tv' : kind} label={kind === 'tv75' ? '75-inch TV' : kind === 'tv43' ? '43-inch TV' : kind === 'bike' && plan.transport === '5 scooters' ? 'SCOOTERS' : undefined}/>)}</div>
  </section>;
}
