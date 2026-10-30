import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageFrame, SignalGraphic } from '../site-chrome'
import { FaqItem } from '../../components/FaqItem'
import { organizationSchema, faqSchema } from '../../lib/schema'

export const metadata: Metadata = {
  title: '1Win FAQ | Questions Answered',
  description: 'Clear answers about 1win products, payments, bonuses, and responsible gaming. Deposit limits, self-exclusion, KYC, and more.',
  alternates: { canonical: 'https://1winsearch.com/faq' },
  openGraph: {
    title: '1Win FAQ | Questions Answered',
    description: 'Clear answers about 1win products, payments, bonuses, and responsible gaming.',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What does 1win offer?',
    answer: '1win brings sports betting, live betting, casino games, slots, live dealer tables, poker, and a mobile-first experience together in one connected platform. Availability can vary by market.',
  },
  {
    question: 'Can I access 1win on mobile?',
    answer: 'Yes. The 1win experience is designed for mobile browsers and supported apps, so players can browse markets, games, and account features on the device they use most.',
  },
  {
    question: 'Is 1win available in my country?',
    answer: '1win availability, products, payment options, and promotions vary by jurisdiction. Check the official 1win website for the correct regional experience and always follow local laws and responsible gaming guidance.',
  },
  {
    question: 'How do I deposit and withdraw on 1win?',
    answer: '1win supports bank cards, e-wallets, bank transfers, and cryptocurrency depending on your region. Most deposits process quickly; withdrawal times depend on the method and whether your account is verified.',
  },
  {
    question: 'What responsible gaming tools does 1win provide?',
    answer: 'Deposit limits, self-exclusion, reality checks, and links to support organizations are available in account settings. Set limits before you play and use them if gambling stops being fun.',
  },
  {
    question: 'Do 1win bonuses have wagering requirements?',
    answer: 'Yes. Bonus funds usually carry wagering requirements that must be met before withdrawal. Always review the terms, minimum odds, eligible games, and expiry dates for each promotion.',
  },
]

const faqJsonLd = faqSchema({ faqs })
const orgJsonLd = organizationSchema()

export default function FaqPage() {
  return (
    <PageFrame>
      <section className="inner-hero">
        <div>
          <div className="eyebrow">1win help center / 05</div>
          <h1>Questions,<br /><em>answered.</em></h1>
          <p>Clear answers about 1win products, payments, bonuses, and responsible gaming. If you cannot find what you need, get in touch.</p>
        </div>
        <SignalGraphic type="bars" />
      </section>
      <section className="inner-section faq-page">
        <div className="eyebrow">Good to know</div>
        <h2>Everything you asked<br />about 1win.</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
      <section className="contact-band">
        <div>
          <h2>Still need help?</h2>
          <p>Tell us what you are looking for and we will point you in the right direction.</p>
        </div>
        <a className="button button-primary" href="mailto:search@1win.com">
          Start a conversation <ArrowRight size={17} />
        </a>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgJsonLd, faqJsonLd]) }}
      />
    </PageFrame>
  )
}