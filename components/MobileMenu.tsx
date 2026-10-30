'use client'

import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X, Zap, TrendingUp, BarChart3, Globe2, Search, Target } from 'lucide-react'
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

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        <a className="nav-cta" href="/#contact" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowRight size={15} /></a>
      </nav>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </>
  )
}

export function Brand() {
  return <span className="brand"><span className="brand-mark"><span /></span><span>1WIN</span></span>
}

export function HomeHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="1Win Search home" suppressHydrationWarning>
        <span className="brand-mark"><span /></span>
<span suppressHydrationWarning>1WIN</span>
      </a>
      <div className="header-reg">1WIN REG: 147039</div>
      <MobileMenu />
    </header>
  )
}
