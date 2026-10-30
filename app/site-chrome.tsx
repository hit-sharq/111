'use client'

import type { ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/approach' },
  { label: 'Results', href: '/results' },
  { label: 'Insights', href: '/insights' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Register', href: 'https://pakakumi.com/register' },
  { label: 'Login', href: 'https://pakakumi.com/login' },
]

export function Brand() {
  return <span className="brand"><span className="brand-mark"><span /></span><span>1WIN</span></span>
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header"><a href="/" aria-label="1Win Search home"><Brand /></a><div className="header-reg">1WIN REG: 147039</div><nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<a className="nav-cta" href="/#contact" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowRight size={15} /></a></nav><button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></header>
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><a href="/"><Brand /></a><p>Search strategy for the<br />1win ecosystem.</p><div className="footer-cta"><span>Need an SEO partner?</span><a href="mailto:search@1win.com">search@1win.com <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© 2026 1Win Search. Internal growth system.</span><div>{navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="/#contact">Contact</a></div><span className="footer-note">Built for discovery.</span></div></footer>
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <main className="site-shell"><SiteHeader />{children}<SiteFooter /></main>
}

export function Breadcrumbs({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={item.href} className={`breadcrumb-item ${index === items.length - 1 ? 'is-current' : ''}`}>
            {index < items.length - 1 ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
            {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
export function SignalGraphic({ type = 'bars' }: { type?: 'bars' | 'orbit' | 'route' }) {
  return <div className={`signal-graphic signal-${type}`} aria-hidden="true"><svg viewBox="0 0 600 360" role="presentation"><defs><linearGradient id="limeLine" x1="0" x2="1"><stop stopColor="#d8f36b" /><stop offset="1" stopColor="#92aa32" /></linearGradient></defs>{type === 'bars' && <><path d="M60 290H540M60 290V55" stroke="#778271" strokeWidth="1" /><path d="M95 250L180 220L265 245L355 145L445 170L530 75" fill="none" stroke="url(#limeLine)" strokeWidth="5" /><circle cx="530" cy="75" r="9" fill="#d8f36b" /></>}{type === 'orbit' && <><ellipse cx="300" cy="180" rx="220" ry="88" fill="none" stroke="#92aa32" strokeWidth="2" /><ellipse cx="300" cy="180" rx="130" ry="175" fill="none" stroke="#778271" strokeWidth="1" transform="rotate(35 300 180)" /><circle cx="300" cy="180" r="28" fill="#d8f36b" /><circle cx="500" cy="158" r="9" fill="#d8f36b" /></>}{type === 'route' && <><path d="M65 275C145 80 220 310 300 140S455 105 535 65" fill="none" stroke="url(#limeLine)" strokeWidth="5" /><circle cx="65" cy="275" r="8" fill="#d8f36b" /><circle cx="300" cy="140" r="8" fill="#d8f36b" /><circle cx="535" cy="65" r="8" fill="#d8f36b" /></>}</svg></div>
}
