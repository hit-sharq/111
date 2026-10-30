import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, BarChart3, Target, Zap } from 'lucide-react'
import { PageFrame, SignalGraphic } from '../site-chrome'
import { HomeHeader } from '../components/MobileMenu'

export const metadata: Metadata = {
  title: '1Win | Sports Betting, Casino, and Aviator',
  description: '1win is your destination for sports betting, casino games, slots, live tables, poker, and Aviator. Register, deposit, and play responsibly.',
  alternates: { canonical: 'https://1winsearch.com' },
  openGraph: {
    title: '1Win | Sports Betting, Casino, and Aviator',
    description: '1win is your destination for sports betting, casino games, slots, live tables, poker, and Aviator.',
    type: 'website',
  },
}

const features = [
  { icon: '⚽', title: 'Sportsbook', text: 'Football, tennis, basketball, cricket, esports, and live betting across thousands of markets.' },
  { icon: '✈️', title: 'Aviator & Crash', text: 'Play 1win Aviator and other crash games with auto cash out and live multipliers.' },
  { icon: '🎰', title: 'Casino & Slots', text: 'Slots, live blackjack, roulette, baccarat, and poker from leading providers.' },
  { icon: '🎁', title: 'Bonuses', text: 'Welcome offers, free bets, reload bonuses, and cashback promotions.' },
  { icon: '💳', title: 'Fast Payments', text: 'Cards, e-wallets, bank transfers, crypto, and mobile money where available.' },
  { icon: '🛡️', title: 'Responsible Gaming', text: 'Deposit limits, self-exclusion, and reality checks to keep play safe.' },
]

const popularArticles = [
  { slug: '1win-complete-guide-aviator-kenya', title: 'Complete guide to 1win Aviator', tag: 'AVIATOR', text: 'Registration, deposits, betting, cash out, and strategy for 1win Aviator.' },
  { slug: '1win-welcome-bonus-explained', title: '1win welcome bonus explained', tag: 'BONUSES', text: 'How to claim the first deposit bonus and clear wagering requirements.' },
  { slug: '1win-payment-methods-deposits-withdrawals', title: '1win payment methods', tag: 'PAYMENTS', text: 'Cards, e-wallets, crypto, mobile money—deposits and withdrawals explained.' },
  { slug: '1win-odds-explained-decimal-fractional', title: '1win odds explained', tag: 'BETTING GUIDE', text: 'Decimal vs fractional odds, implied probability, and calculating returns.' },
  { slug: '1win-responsible-gambling-guide', title: '1win responsible gambling', tag: 'PLAYER SAFETY', text: 'Deposit limits, self-exclusion, and support resources for safe play.' },
  { slug: '1win-mobile-app-download', title: '1win mobile app', tag: 'MOBILE', text: 'Download and set up the 1win app on iOS and Android.' },
]

export default function Page() {
  return (
    <main className="site-shell">
      <HomeHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">1WIN</div>
          <h1>Sports betting,<br /><em>casino & Aviator.</em></h1>
          <p className="hero-lede">1win is your destination for sports betting, casino games, slots, live tables, poker, and Aviator. Register, deposit, and play responsibly.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/insights/1win-complete-guide-aviator-kenya">Start playing Aviator <ArrowRight size={17} /></a>
            <a className="text-link" href="/insights/1win-welcome-bonus-explained">See welcome bonus <span>↓</span></a>
          </div>
          <div className="proof-row"><div><strong>Sports</strong><span>& casino</span></div><div><strong>Aviator</strong><span>& crash games</span></div><div><strong>Mobile</strong><span>& app</span></div></div>
        </div>
        <div className="hero-art" aria-label="1win betting illustration" role="img">
          <div className="art-grid" />
          <div className="art-label label-top">1WIN SPORTSBOOK</div>
          <div className="chart-line"><span className="chart-node node-one" /><span className="chart-node node-two" /><span className="chart-node node-three" /><span className="chart-node node-four" /></div>
          <div className="chart-axis"><span>PRE</span><span>LIVE</span><span>CASINO</span><span>AVIATOR</span><span>SLOTS</span><span>NOW</span></div>
          <div className="floating-card card-top"><Zap size={15} /><span>Cash out fast</span><strong>Aviator</strong></div>
          <div className="floating-card card-bottom"><span className="mini-icon"><BarChart3 size={14} /></span><div><small>1win markets</small><strong>Sports <b>+ Casino</b></strong></div></div>
        </div>
      </section>

      <div className="ticker" aria-label="Features"><div><span>SPORTSBOOK</span><span>•</span><span>CASINO</span><span>•</span><span>AVIATOR</span><span>•</span><span>SLOTS</span><span>•</span><span>POKER</span><span>•</span><span>BONUSES</span></div></div>

      <section className="section features-section" id="features">
        <div className="section-intro"><div><div className="eyebrow">What 1win offers</div><h2>Everything in<br /><em>one place.</em></h2></div><p>From pre-match sports and live betting to Aviator crash games, slots, and live casino tables—1win brings it all into a single account.</p></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><span className="svg-emoji">{feature.icon}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
      </section>

      <section className="section popular-section" id="popular">
        <div className="section-intro"><div><div className="eyebrow">Popular guides</div><h2>Helpful reads for<br /><em>1win players.</em></h2></div><a className="text-link" href="/insights">View all articles <ArrowRight size={16} /></a></div>
        <div className="insight-grid">{popularArticles.map((article) => { const Icon = Target; return <article className="article-card" key={article.slug}><div className="article-art"><Icon size={28} /></div><div className="insight-meta">{article.tag}</div><h3>{article.title}</h3><p>{article.text}</p><a href={`/insights/${article.slug}`}>Read article <ArrowRight size={15} /></a></article> })}</div>
      </section>

      <section className="section faq-section"><div className="faq-heading"><div className="eyebrow">Good to know</div><h2>Questions,<br /><em>answered.</em></h2></div><div className="faq-preview"><p>Quick answers about 1win products, payments, bonuses, and responsible gaming. See the full list.</p><a className="text-link" href="/faq">View all FAQs <ArrowRight size={16} /></a></div></section>

      <section className="contact-section" id="contact"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="eyebrow">Need help?</div><h2>Ready to play<br /><em>responsibly?</em></h2><p>Set your limits, read the terms, and keep play fun. Gambling involves risk.</p><a className="button button-light" href="/faq">Visit the help center <ArrowRight size={17} /></a></section>

      <footer className="site-footer"><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>1WIN</span></a><p>1win betting, casino, and Aviator. Play responsibly.</p><div className="footer-cta"><span>1WIN REG: 147039</span><a href="mailto:support@1win.com">support@1win.com <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© 2026 1Win. All rights reserved.</span><div><a href="/services">Sportsbook</a><a href="/approach">Casino</a><a href="/results">Aviator</a><a href="/insights">Guides</a><a href="/faq">FAQ</a><a href="https://pakakumi.com/register">Register</a><a href="https://pakakumi.com/login">Login</a></div><span className="footer-note">Gambling can be addictive. Play responsibly.</span></div></footer>
    </main>
  )
}