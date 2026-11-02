'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Flame, Menu, ShieldCheck, Smartphone, Trophy, X, Zap } from 'lucide-react'

const sports = [
  { label: 'Football', icon: '⚽', count: '1,248 markets' },
  { label: 'Basketball', icon: '🏀', count: '486 markets' },
  { label: 'Tennis', icon: '🎾', count: '392 markets' },
  { label: 'eSports', icon: '◈', count: '208 markets' },
  { label: 'Cricket', icon: '🏏', count: '256 markets' },
  { label: 'Ice Hockey', icon: '🏒', count: '184 markets' },
]

const matches = [
  { league: 'UEFA Champions League', home: 'Real Madrid', away: 'Manchester City', time: '20:00', odds: ['1.82', '3.95', '3.60'] },
  { league: 'Premier League', home: 'Arsenal', away: 'Chelsea', time: '17:30', odds: ['1.64', '4.20', '5.10'] },
  { league: 'Serie A', home: 'Inter Milan', away: 'AC Milan', time: '19:45', odds: ['2.05', '3.30', '3.25'] },
]

const faqs = [
  { q: 'What is 1win?', a: '1win is an online betting and casino platform offering sports betting, crash games (Aviator), slots, live casino, and poker. It operates under Curacao license OGL/2024/587/0621.' },
  { q: 'Is 1win legit in Kenya?', a: 'Yes, 1win operates under Curacao Gaming Authority license OGL/2024/587/0621 and accepts players from Kenya.' },
  { q: 'Who owns 1win?', a: '1win is owned by 1win N.V., a company registered in Curaçao under company number 147039.' },
  { q: "How do I register on 1win?", a: 'Click Register, enter your phone number or email, create a password, verify your account via SMS, and start playing.' },
  { q: 'How do I log in to 1win?', a: 'Click Login, enter your phone number or email and password, then click Sign in.' },
  { q: 'How does the 1win welcome bonus work?', a: 'New players can claim a deposit match bonus on their first deposit. Bonus funds must be wagered before withdrawal.' },
  { q: 'What is 1win Aviator?', a: 'Aviator is a crash game where a plane takes off and the multiplier climbs. Cash out before the plane flies away to win.' },
  { q: 'How do I deposit on 1win?', a: 'Use cards, e-wallets, bank transfers, crypto, or mobile money where available. Go to the cashier and select your method.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-white">
      {/* Header */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b12]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-2" aria-label="1win home">
            <img src="/images/1win-wordmark.png" width="132" height="40" alt="1win" className="h-10 w-[132px] object-contain" />
            <span className="ml-2 text-xs font-bold tracking-tight text-white/80">1WIN REG: 147039</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-white/65 md:flex">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/sports'; }}
              className="text-white cursor-pointer hover:text-white"
            >
              Sports
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com'; }}
              className="text-white cursor-pointer hover:text-white"
            >
              Casino
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/aviator'; }}
              className="text-white cursor-pointer hover:text-white"
            >
              Aviator
            </a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/login'; }}
              className="rounded-xl px-4 py-2.5 text-sm font-bold text-white/75 cursor-pointer hover:text-white"
            >
              Log in
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/register'; }}
              className="registration rounded-xl bg-[#00b956] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#08d66a] cursor-pointer"
            >
              Register
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b1018] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm font-semibold">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/sports'; }}
                className="text-white cursor-pointer hover:text-white"
              >
                Sports
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com'; }}
                className="text-white cursor-pointer hover:text-white"
              >
                Casino
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/aviator'; }}
                className="text-white cursor-pointer hover:text-white"
              >
                Aviator
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/register'; }}
                className="registration rounded-xl bg-[#00b956] px-4 py-3 text-center text-white cursor-pointer"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="top" className="relative isolate mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-48">
        <div className="pointer-events-none absolute -right-40 -top-20 -z-10 size-[520px] rounded-full bg-blue-500/15 blur-[100px]" />
        <div className="pointer-events-none absolute -left-60 top-52 -z-10 size-[440px] rounded-full bg-blue-600/10 blur-[110px]" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr] lg:gap-12">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[.16em] text-blue-300">
              <Flame size={14} fill="currentColor" /> The thrill starts here
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.065em] sm:text-7xl lg:text-[82px]">
              Bet smarter.<br />
              <span className="text-[#0d7cff]">Win bigger.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
              Your new home for live sports, sharp odds and instant action. Join millions of fans making every match matter.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#register" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0d7cff] px-7 py-4 font-bold shadow-[0_15px_40px_rgba(255,91,34,.24)] transition hover:-translate-y-0.5 hover:bg-[#ff713d]">
                Create free account <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a href="#sports" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-7 py-4 font-bold text-white/80 transition hover:border-white/30 hover:text-white">
                Explore sports <ChevronDown size={18} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-white/45">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Secure & trusted</span>
              <span className="flex items-center gap-2"><Zap size={16} className="text-yellow-400" /> Instant payouts</span>
              <span className="flex items-center gap-2"><Smartphone size={16} className="text-blue-400" /> Mobile ready</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute inset-8 rounded-[40px] bg-blue-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#111923] p-4 shadow-2xl shadow-black/40 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">Live now</p>
                  <p className="mt-1 font-bold">Top events today</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-red-500/15 px-2.5 py-1 text-[10px] font-bold uppercase text-red-400">
                  <i className="size-1.5 rounded-full bg-red-400" /> 24 live
                </span>
              </div>
              <div className="mb-4 rounded-2xl bg-gradient-to-br from-[#253752] to-[#121923] p-5">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-white/45">
                  <span>Champions League</span>
                  <span className="text-red-300">Live 2nd half</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="text-center">
                    <div className="mx-auto mb-2 grid size-12 place-items-center rounded-2xl bg-white/10 text-2xl">⚪</div>
                    <p className="text-xs font-semibold">Real Madrid</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-black">2 : 1</p>
                    <p className="mt-1 text-[10px] text-white/40">68:24</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-2 grid size-12 place-items-center rounded-2xl bg-white/10 text-2xl">🔵</div>
                    <p className="text-xs font-semibold">Man City</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {matches.map((match) => (
                  <div key={match.home} className="rounded-xl border border-white/7 bg-white/[.035] p-3">
                    <div className="flex items-center justify-between text-[10px] text-white/35">
                      <span>{match.league}</span>
                      <span>{match.time}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2 text-xs font-semibold">
                      <span>{match.home} <span className="text-white/35">vs</span> {match.away}</span>
                      <div className="flex gap-1.5">
                        {match.odds.map((odd, i) => (
                          <span key={odd} className="rounded-md bg-white/10 px-2 py-1 font-bold text-blue-300">
                            {['1', 'X', '2'][i]} {odd}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <button className="mt-4 w-full rounded-xl bg-white/10 py-3 text-xs font-bold text-white/75 transition hover:bg-white/15">
                  View all live events <ArrowRight className="ml-1 inline" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400">About 1win</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Everything you need to know</h2>
            </div>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-white/80">
                1win is an international online betting and casino platform operated by 1win N.V., registered in Curaçao under company number 147039, license OGL/2024/587/0621.
              </p>
              <p className="text-lg leading-8 text-white/80">
                We offer sports betting across football, tennis, basketball, cricket, esports and more — plus casino games, slots, live dealer tables, poker, and Aviator crash games.
              </p>
              <p className="text-lg leading-8 text-white/80">
                Available on desktop and mobile, with fast deposits, secure withdrawals, and bonuses for new and existing players.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[.03] p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <span className="font-semibold text-white">License</span>
                </div>
                <p className="mt-2 text-sm text-white/60">OGL/2024/587/0621 (Curaçao)</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[.03] p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏢</span>
                  <span className="font-semibold text-white">Company</span>
                </div>
                <p className="mt-2 text-sm text-white/60">1win N.V., Reg: 147039</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[.03] p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <span className="font-semibold text-white">Available</span>
                </div>
                <p className="mt-2 text-sm text-white/60">Kenya and international</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[.03] p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span className="font-semibold text-white">Platform</span>
                </div>
                <p className="mt-2 text-sm text-white/60">Web, iOS, Android</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports */}
      <section id="sports" className="border-y border-white/8 bg-[#0b1119] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400">Sportsbook</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Every sport. One place.</h2>
            </div>
            <a href="#register" className="hidden items-center gap-2 text-sm font-bold text-blue-300 sm:flex">
              View all sports <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((sport, index) => (
              <a href="#register" key={sport.label} className="group rounded-2xl border border-white/8 bg-white/[.03] p-5 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/8">
                <div className="mb-7 flex items-start justify-between">
                  <span className="text-3xl">{sport.icon}</span>
                  <span className="rounded-full bg-white/8 px-2 py-1 text-[10px] font-bold text-white/40">0{index + 1}</span>
                </div>
                <h3 className="font-bold">{sport.label}</h3>
                <p className="mt-1 text-xs text-white/40">{sport.count}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Casino */}
      <section id="casino" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400">Casino</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Slots, Live Tables & Poker</h2>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Slots', icon: '🎰', desc: 'Hundreds of titles with progressive jackpots' },
              { name: 'Blackjack', icon: '♠️', desc: 'Beat the dealer in classic card games' },
              { name: 'Roulette', icon: '🎡', desc: 'European, American and French tables' },
              { name: 'Baccarat', icon: '🃏', desc: 'Player, banker or tie — high stakes' },
              { name: 'Poker', icon: '♥️', desc: 'Texas Hold\'em and Omaha cash games' },
              { name: 'Live Casino', icon: '📹', desc: 'Real dealers streaming in real-time' },
            ].map((game, index) => (
              <a href="#register" key={game.name} className="group rounded-2xl border border-white/8 bg-white/[.03] p-5 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/8">
                <div className="mb-7 flex items-start justify-between">
                  <span className="text-3xl">{game.icon}</span>
                  <span className="rounded-full bg-white/8 px-2 py-1 text-[10px] font-bold text-white/40">0{index + 1}</span>
                </div>
                <h3 className="font-bold">{game.name}</h3>
                <p className="mt-1 text-xs text-white/40">{game.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Aviator */}
      <section id="aviator" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400">Crash Game</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Play 1win Aviator</h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-white/[.03] p-8 text-center">
              <div className="mb-4 text-6xl">✈️</div>
              <h3 className="font-bold text-white">Cash out in time</h3>
              <p className="text-sm text-white/60 mt-3">Watch the multiplier climb and cash out before the plane flies away.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[.03] p-8 text-center">
              <div className="mb-4 text-6xl">⚡</div>
              <h3 className="font-bold text-white">Auto cash out</h3>
              <p className="text-sm text-white/60 mt-3">Set your target multiplier and let the system cash out for you.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[.03] p-8 text-center">
              <div className="mb-4 text-6xl">🎯</div>
              <h3 className="font-bold text-white">Multipliers to 100x+</h3>
              <p className="text-sm text-white/60 mt-3">High multipliers for those who time their exit right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section id="bonus" className="mx-auto max-w-7xl px-5 py-20">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0d7cff] via-[#db3d1e] to-[#7d211a] px-7 py-12 sm:px-14 lg:flex lg:items-center lg:justify-between lg:px-20">
          <div className="pointer-events-none absolute -right-20 -top-40 size-[420px] rounded-full border-[70px] border-white/10" />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-100/70">Welcome to the winning side</p>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl">
              Get up to <span className="text-yellow-300">100% bonus</span> on your first deposit.
            </h2>
            <p className="mt-4 max-w-lg text-blue-50/75">
              New players can claim a deposit match bonus on their first deposit. Bonus funds carry wagering requirements — always review the terms before claiming.
            </p>
            <a href="#register" className="relative mt-8 inline-flex shrink-0 items-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-[#d63e20] transition hover:bg-blue-50 lg:mt-0">
              Claim bonus <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section id="payments" className="border-t border-white/8 bg-[#0b1119] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400">Deposits & Withdrawals</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Fast, secure payments</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Bank Cards', icon: '💳', desc: 'Visa, Mastercard — instant deposits' },
              { name: 'E-wallets', icon: '📱', desc: 'Fast, secure digital payments' },
              { name: 'Crypto', icon: '₿', desc: 'Bitcoin, Ethereum and more' },
              { name: 'Mobile Money', icon: '📞', desc: 'M-Pesa and local options where available' },
            ].map((pay, index) => (
              <a href="#register" key={pay.name} className="group rounded-2xl border border-white/8 bg-white/[.03] p-5 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/8">
                <div className="mb-7 flex items-start justify-between">
                  <span className="text-3xl">{pay.icon}</span>
                  <span className="rounded-full bg-white/8 px-2 py-1 text-[10px] font-bold text-white/40">0{index + 1}</span>
                </div>
                <h3 className="font-bold">{pay.name}</h3>
                <p className="mt-1 text-xs text-white/40">{pay.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400">Good to know</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Frequently asked questions</h2>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index} className="border border-white/8 rounded-xl bg-white/[.03] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full px-5 py-4 text-left text-white/90"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-white/60 text-sm leading-relaxed">{faq.a}</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="relative overflow-hidden px-5 py-24 text-center lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Your next win starts now</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-[-.05em] sm:text-6xl">
          Ready to make it count?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-white/50">
          Join 1win today and experience betting without limits.
        </p>
        <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/register'; }}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#0d7cff] px-8 py-4 font-bold shadow-lg shadow-blue-500/20 transition hover:bg-[#ff713d] cursor-pointer"
            >
              Register now <ArrowRight size={18} />
            </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 px-5 py-8 text-xs text-white/35">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-base font-black text-white">
            <img src="/images/1win-wordmark.png" width="132" height="40" alt="1win" className="h-8 w-auto object-contain" />
          </div>
          <p>© 2026 1win. Play responsibly. 18+</p>
          <div className="flex gap-5">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/terms-of-service'; }}
              className="text-white cursor-pointer hover:text-white"
            >
              Terms
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/privacy-policy'; }}
              className="text-white cursor-pointer hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.href = 'https://pakakumi.com/responsible-gambling'; }}
              className="text-white cursor-pointer hover:text-white"
            >
              Responsible gaming
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}