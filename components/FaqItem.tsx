'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="faq-button"
      >
        <span>{question}</span>
        <ChevronDown size={18} />
      </button>
      {isOpen && <p>{answer}</p>}
    </div>
  )
}