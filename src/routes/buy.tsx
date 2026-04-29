import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowRightIcon,
  CalculatorIcon,
  CheckIcon,
  SearchIcon,
} from '../components/Icons'
import { ShowingForm } from '../components/Forms'

export const Route = createFileRoute('/buy')({
  component: Buy,
  head: () => ({
    meta: [
      { title: 'Buy a Home in Miami | Jose Anzola Compass' },
      {
        name: 'description',
        content: 'Buy a home in Miami or South Florida with Jose Anzola, Compass. Expert guidance, private access, and a smart buyer process.',
      },
    ],
  }),
})

function Buy() {
  return (
    <div className="bg-luxury-950 text-white">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Buyers</div>
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
            Find the right home in Miami —<br />
            <span className="text-gradient-gold">with an advocate who knows value.</span>
          </h1>
          <p className="text-luxury-200 text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            From off-market access to strategic offer crafting, Jose represents buyers in the $700K+
            market across Miami and South Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings" className="btn-gold px-8 py-4 rounded-lg text-base">
              Browse Listings
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="btn-gold-outline px-8 py-4 rounded-lg text-base">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer process */}
      <section className="bg-luxury-900/50 py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">The Buyer Process</div>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Five steps to keys in hand.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4 lg:gap-6">
            {[
              { num: '01', title: 'Find your agent', body: 'A consultation to align on goals, timeline, budget, and wish list.' },
              { num: '02', title: 'Get pre-approved', body: "Financing in place so you're ready to move on the right home." },
              { num: '03', title: 'Search homes', body: 'Curated MLS + off-market search, with private showings across Miami.' },
              { num: '04', title: 'Submit offer', body: 'Strategic offer tuned to market conditions with negotiation on your side.' },
              { num: '05', title: 'Close', body: 'Inspection, appraisal, contingencies managed — to keys in hand.' },
            ].map((s) => (
              <div key={s.num} className="luxury-card rounded-2xl p-6 lg:p-7">
                <div className="step-number mb-4 text-3xl">{s.num}</div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-luxury-300 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools (MLS & Mortgage) */}
      <section className="py-20 md:py-28 px-6 bg-luxury-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="luxury-card rounded-2xl p-8 lg:p-10">
            <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 mb-5">
              <SearchIcon className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">MLS Property Search</h3>
            <p className="text-luxury-300 text-sm leading-relaxed mb-6">
              Search every active listing in Miami-Dade, Broward, and Palm Beach. Full MLS
              integration coming soon — in the meantime, send me your criteria and I'll curate
              matches including off-market homes.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <input placeholder="Neighborhood" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-luxury-400 rounded-lg text-sm focus:outline-none focus:border-gold-400" disabled />
              <input placeholder="Min price" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-luxury-400 rounded-lg text-sm focus:outline-none focus:border-gold-400" disabled />
              <input placeholder="Max price" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-luxury-400 rounded-lg text-sm focus:outline-none focus:border-gold-400" disabled />
              <input placeholder="Min beds" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-luxury-400 rounded-lg text-sm focus:outline-none focus:border-gold-400" disabled />
            </div>
            <Link to="/contact" className="btn-gold-outline px-5 py-3 rounded-lg text-sm">
              Request Custom Search
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <MortgageCalculator />
        </div>
      </section>

      {/* Schedule showing */}
      <section className="ivory-bg py-20 md:py-28 px-6 text-luxury-900">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">See it in Person</div>
            <div className="gold-divider mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Schedule a showing.
            </h2>
            <p className="text-luxury-500 text-lg leading-relaxed mb-6">
              Send the address or MLS number and a preferred time. Jose will confirm access and
              walk the home with you.
            </p>
            <ul className="space-y-3 text-luxury-700">
              {['Private, agent-accompanied walkthrough', 'Honest pros, cons, and pricing read', 'No high-pressure pitch — ever'].map((x) => (
                <li key={x} className="flex items-start gap-2.5">
                  <CheckIcon className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="ivory-card rounded-2xl p-8 lg:p-10">
            <h3 className="font-serif text-xl font-bold mb-2">Request a Showing</h3>
            <p className="text-luxury-500 text-sm mb-6">Usually confirmed within hours.</p>
            <ShowingForm theme="light" />
          </div>
        </div>
      </section>
    </div>
  )
}

function MortgageCalculator() {
  const [price, setPrice] = useState(1000000)
  const [down, setDown] = useState(20)
  const [rate, setRate] = useState(6.5)
  const [term, setTerm] = useState(30)

  const loan = price - (price * down) / 100
  const monthlyRate = rate / 100 / 12
  const n = term * 12
  const payment = monthlyRate === 0
    ? loan / n
    : (loan * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)

  return (
    <div className="luxury-card rounded-2xl p-8 lg:p-10">
      <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 mb-5">
        <CalculatorIcon className="w-6 h-6" />
      </div>
      <h3 className="font-serif text-2xl font-bold text-white mb-3">Mortgage Calculator</h3>
      <p className="text-luxury-300 text-sm mb-6">
        A quick estimate of your monthly payment. For exact numbers, I'll connect you with a trusted lender.
      </p>

      <div className="space-y-5 mb-6">
        <div>
          <div className="flex justify-between text-xs text-luxury-200 mb-2">
            <span className="uppercase tracking-wider">Home Price</span>
            <span className="text-gold-400 font-semibold">${price.toLocaleString()}</span>
          </div>
          <input type="range" min={300000} max={5000000} step={25000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-gold-400" />
        </div>
        <div>
          <div className="flex justify-between text-xs text-luxury-200 mb-2">
            <span className="uppercase tracking-wider">Down Payment</span>
            <span className="text-gold-400 font-semibold">{down}%</span>
          </div>
          <input type="range" min={5} max={50} value={down} onChange={(e) => setDown(+e.target.value)} className="w-full accent-gold-400" />
        </div>
        <div>
          <div className="flex justify-between text-xs text-luxury-200 mb-2">
            <span className="uppercase tracking-wider">Interest Rate</span>
            <span className="text-gold-400 font-semibold">{rate.toFixed(2)}%</span>
          </div>
          <input type="range" min={3} max={10} step={0.1} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full accent-gold-400" />
        </div>
        <div>
          <div className="flex justify-between text-xs text-luxury-200 mb-2">
            <span className="uppercase tracking-wider">Term</span>
            <span className="text-gold-400 font-semibold">{term} yrs</span>
          </div>
          <select value={term} onChange={(e) => setTerm(+e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg text-sm focus:outline-none focus:border-gold-400">
            {[15, 20, 30].map((t) => <option key={t} value={t}>{t} years</option>)}
          </select>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gold-400/20 to-gold-500/5 border border-gold-400/30 rounded-xl p-5 text-center">
        <div className="text-luxury-300 text-xs uppercase tracking-[0.15em] mb-1">Estimated Monthly Payment</div>
        <div className="font-serif text-3xl font-bold text-gradient-gold">
          ${Math.round(payment).toLocaleString()}<span className="text-luxury-300 text-lg font-normal">/mo</span>
        </div>
        <div className="text-luxury-400 text-xs mt-2">Principal &amp; interest only. Taxes, insurance, and HOA not included.</div>
      </div>
    </div>
  )
}
