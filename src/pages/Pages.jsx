import React from 'react';
import { PageLayout, Brand, ImagePlaceholder, PrizeIcon } from '../components/PageLayout.jsx';
import MonthlyPrizeCard from '../components/MonthlyPrizeCard.jsx';
import { monthlyGroups, monthlyPlans } from '../data/monthlyPlans.js';

export function Cover() {
  return <article className="brochure-page cover-page"><div className="page-border"/><Brand/>
    <div className="cover-title"><h1>LIFESSY</h1><div className="cover-corp">C O R P</div><p className="tagline">EMPOWERING DREAMS. BUILDING WEALTH.</p></div>
    <div className="cover-number"><strong>24</strong><span>M O N T H S</span></div>
    <h2 className="cover-lucky">LUCKY</h2><div className="star-rule">✦</div>
    <p className="cover-quote">“Your Dreams. Your Rewards. Your Journey.”</p>
    <div className="cover-icons">{['bike','tv','phone','car','prize','house'].map((type,i)=><PrizeIcon key={i} type={type}/>)}</div>
    <div className="site-address">W W W . L I F E S S Y . I N</div>
  </article>;
}

export function About() {
  const items = [
    ['prize','Trust','A programme built on clear, month-wise plans.'],
    ['phone','Excitement','A new set of prizes to look forward to every month.'],
    ['car','Premium Rewards','Bikes, Smart QLED TVs, iPhones, cars and a 1 BHK house.'],
    ['house','Customer Loyalty','A 24-month journey shared with Lifessy.'],
  ];
  return <PageLayout number="2" eyebrow="A B O U T&nbsp; U S" title="Welcome to Lifessy" className="about-page">
    <p className="about-tagline">EMPOWERING DREAMS. BUILDING WEALTH.</p>
    <p className="intro-copy">At Lifessy Corp, we believe every customer's dream deserves a place on the journey. This brochure presents our 24-Month Lucky Plan: a month-by-month line-up of rewards, from bikes and Smart QLED TVs to iPhones, cars and a 1 BHK house.</p>
    <div className="feature-grid">{items.map(([icon,title,desc])=><section className="feature-box" key={title}><PrizeIcon type={icon}/><h2>{title}</h2><p>{desc}</p></section>)}</div>
    <div className="site-address">W W W . L I F E S S Y . I N</div>
  </PageLayout>;
}

const products = ['Himalayan Life Seabuckthorn Juice','Magnetic Care Kit (Gents)','Magnetic Care Kit (Ladies)','Nithya Sanjeevini Juice','Daily Fresh Sanitary Napkin','Marine Collagen Powder','Foot Patch','Spirulina & Shatavari Capsules','Red Ganoderma Coffee','Glamour Kit','Daily Care Kit','Anti Diabetic Juice','Miracle Noni, Healthy Heart & Digestive Juice','Gas Safety'];
export function Programme() {
  const rows = [products.slice(0, 4), products.slice(4, 8), products.slice(8, 11), products.slice(11, 14)];
  return <PageLayout number="3" eyebrow="T H E&nbsp; P R O G R A M M E" title="The 24-Month Lucky" className="programme-page">
    <p className="intro-copy">The Lifessy Lucky is a 24-month reward programme. Each month has its own numbered plan, Month 1 to Month 24, with a set of prizes listed by category. Buy any products at <mark>Rs 2000</mark> and get the benefits of the products.</p>
    <h2 className="section-title">Lifessy Product Range</h2><div className="title-rule product-rule" aria-hidden="true"><i/></div>
    <div className="product-grid">{rows.map((row,index)=><div className={`product-row product-row-${index + 1}`} key={index}>{row.map(product=><div className="product-box" key={product}><ImagePlaceholder kind="product" label={product}/><b>{product}</b></div>)}</div>)}</div>
  </PageLayout>;
}

const categories = [['bike','Bikes & Scooters'],['tv','43-inch Smart QLED TV'],['tv','75-inch Smart QLED TV'],['phone','iPhones'],['car','Cars'],['house','1 BHK House']];
export function PrizeCategories() {
  return <PageLayout number="4" eyebrow="T H E&nbsp; P R O G R A M M E" title="Prize Categories by Month" className="categories-page">
    <div className="category-list">{categories.map(([kind,title])=><div className="category-row" key={title}><PrizeIcon type={kind}/><h2>{title}</h2><ImagePlaceholder kind={kind} label={title}/></div>)}</div>
    <p className="disclaimer">Images are for illustration only.</p>
  </PageLayout>;
}

const majorHighlights = [[6,'Car: Swift','car'],[12,'Car: Venue','car'],[18,'Car: TATA “Aries”','car'],[23,'Car: Swift Dzire','car'],[24,'1 BHK House','house']];
export function Timeline() {
  return <PageLayout number="5" eyebrow="2 4 - M O N T H&nbsp; T I M E L I N E" title="Monthly Prize Highlights" className="timeline-page">
    <div className="timeline-grid">{monthlyPlans.map(plan=><div className={`timeline-month ${plan.major ? 'highlight' : ''}`} key={plan.month}><span>{plan.month}</span>{plan.major&&<PrizeIcon type={plan.month===24?'house':'car'}/>}</div>)}</div>
    <h2 className="section-title">Major Prizes by Month</h2><div className="title-rule timeline-rule" aria-hidden="true"><i/></div>
    <div className="major-list">{majorHighlights.map(([month,text,icon])=><div className="major-chip" key={month}><PrizeIcon type={icon}/><b>Month {month}</b><span>{text}</span></div>)}</div>
  </PageLayout>;
}

export function MonthlyPlans({ group }) {
  const plans = monthlyGroups[group];
  const start = plans[0].month, end = plans[2].month;
  return <PageLayout number={6 + group} eyebrow="M O N T H L Y&nbsp; L U C K Y&nbsp; P L A N S" title={`Months ${start} – ${end}`} className="monthly-page">
    <div className="monthly-list">{plans.map(plan=><MonthlyPrizeCard plan={plan} key={plan.month}/>)}</div>
  </PageLayout>;
}

const steps = [
  ['24 monthly plans','The programme runs for 24 months. Each month has its own numbered plan, from Month 1 to Month 24.'],
  ['A prize set every month','Each plan lists its prizes by category: bikes or scooters, Smart QLED TVs, iPhones, cars and more.'],
  ['Major prizes along the way','Cars appear in Months 6, 12, 18 and 23, and the 1 BHK house in Month 24.'],
];
const participation = [
  'Pay the ₹2,000/- membership amount online and choose one product (1 prize).',
  'Receive your participation ID, which continues until the last month.',
  'Pay ₹2,000/- every month before the 10th and receive one product.',
  'Winners are announced every month.',
];
export function HowItWorks() {
  return <PageLayout number="14" eyebrow="T H E&nbsp; P R O G R A M M E" title="How the Lucky Works" className="how-page">
    <div className="steps-list">{steps.map(([title,text],i)=><section className="step-box" key={title}><span className="step-number">{i+1}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</div>
    <h2 className="section-title">How to participate</h2><div className="title-rule participation-rule" aria-hidden="true"><i/></div>
    <ol className="participation-list">{participation.map(item=><li key={item}>{item}</li>)}</ol>
    <p className="small-note">Dates, method, eligibility and the prize claim and delivery process will be confirmed by Lifessy.</p>
    <section className="info-box"><h2>Important Customer Information</h2><ul>
      <li>Prizes are allotted month by month, following the Lifessy 24-Month Lucky Plan (Month 1 to Month 24).</li>
      <li>Prize names, models and quantities are as shown on the monthly plan pages.</li>
      <li>Where a bike or scooter brand or iPhone model is not specified, Lifessy will confirm it.</li>
    </ul></section>
  </PageLayout>;
}

const terms = [
  'Membership amount – ₹2,000/- per ID, with one product choice only.',
  'You will receive a participation ID, and it will continue until the last\nmonth.',
  'The scheme will be conducted on the 15th of every month, from 10 AM\nto 12 PM, live in the presence of the members present.',
  'The result of every month will be live-streamed on the Lifessy YouTube\nChannel, or the result will be sent to every member individually\nthrough WhatsApp.',
  'You can buy any number of IDs by paying ₹2,000/- per ID and\nselecting one product.',
  'After completing 24 months, along with the product, you will get a\n43-inch Smart QLED TV.',
  'Remaining members who do not win any prize should select\nconsolation prizes, which will be given to them within 60 days of the\nfinal month.',
  'Consolation prizes will be given.',
  'The monthly installment amount is not considered an investment;\nconsider it as the prize amount for the 43-inch QLED TV.',
  "The organisers' decision will be the final decision.",
];
export function Terms() {
  return <PageLayout number="15" eyebrow="I M P O R T A N T" title="Terms & Conditions" className="terms-page">
    <section className="terms-panel"><h2>24 Months – Every Month Product Purchase</h2><ol>{terms.map(term=><li key={term}><span>{term.split('\n').map((line,index)=><React.Fragment key={index}>{index > 0 && <br/>}{line}</React.Fragment>)}</span></li>)}</ol>
      <h2 className="note-label">NOTE:</h2><p>Registration costs and applicable government fees for the vehicles shall<br/>be borne by the bumper prize winner.</p>
      <p>Images of the prizes shown in the brochure are for illustrative purposes<br/>only and may differ from the actual prizes.</p>
      <p className="friends-note">Lifessy Lucky Only for Friends and Relatives</p>
    </section>
  </PageLayout>;
}

export function ThankYou() {
  return <article className="brochure-page thanks-page"><div className="page-border"/><Brand/><div className="thanks-star">★</div>
    <h1>THANK YOU</h1><div className="title-rule"><i/></div>
    <p className="cover-quote">“Your Dreams. Your Rewards. Your Journey.”</p><div className="closing-brand"><h2>LIFESSY</h2><span>C O R P</span><p>EMPOWERING DREAMS. BUILDING WEALTH.</p></div>
    <div className="site-address">W W W . L I F E S S Y . I N</div>
  </article>;
}
