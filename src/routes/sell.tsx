import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRightIcon,
  CheckIcon,
  HomeIcon,
  PhoneIcon,
  CalendarIcon,
} from '../components/Icons'
import { ContactForm } from '../components/Forms'

export const Route = createFileRoute('/sell')({
  component: Sell,
  head: () => ({
    meta: [
      { title: 'Sell Your Home | Jose Anzola Compass Miami' },
      {
        name: 'description',
        content:
          'Sell your Miami home for top dollar with Jose Anzola, Compass real estate agent serving Miami and South Florida.',
      },
    ],
  }),
})

function Sell() {
  return (
    <div className="bg-luxury-950 text-white">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Sellers</div>
            <div className="gold-divider mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
              Sell for top dollar.
              <span className="block text-gradient-gold mt-2">With a strategy built to win.</span>
            </h1>
            <p className="text-luxury-200 text-lg leading-relaxed mb-8">
              Selling in Miami is equal parts preparation, pricing, and presentation. Jose combines
              live comps, hyperlocal demand data, and an investor's eye to position your home for
              the strongest possible outcome — and negotiates hard to net you the most at closing.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Data-driven pricing strategy',
                'Compass Concierge: pre-sale upgrades with no upfront cost',
                'Private Exclusive pre-marketing to test demand',
                'Full marketing launch: pro media, print, paid, open houses',
                'Weekly reporting and aggressive negotiation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3 h-3 text-gold-400" />
                  </span>
                  <span className="text-luxury-100">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+13055550000" className="btn-gold-outline px-6 py-3 rounded-lg text-sm">
                <PhoneIcon className="w-4 h-4 mr-2" />
                Call (305) 555-0000
              </a>
              <Link to="/contact" className="btn-ghost px-6 py-3 rounded-lg text-sm">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="luxury-card rounded-2xl p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center text-gold-400">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-white">Talk to Jose</h2>
                  <p className="text-luxury-400 text-xs">Tell me about your home. No obligation.</p>
                </div>
              </div>
              <ContactForm theme="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Seller process */}
      <section className="ivory-bg py-20 md:py-28 px-6 text-luxury-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">The Seller Process</div>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Three phases. One clean path to closing.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: '01',
                phase: 'Pre-Market',
                desc: 'Everything that happens before we go live.',
                steps: [
                  'Strategy session & pricing plan',
                  'Recommended prep: repairs, staging, pro photography',
                  'Listing agreement & launch plan',
                  'Compass Concierge financing if desired',
                ],
              },
              {
                num: '02',
                phase: 'On-Market',
                desc: 'Exposure, interest, offers.',
                steps: [
                  'Compass Private Exclusive soft launch',
                  'Full MLS launch + syndication',
                  'Open houses & agent tours',
                  'Weekly reporting with feedback & metrics',
                ],
              },
              {
                num: '03',
                phase: 'Closing',
                desc: 'From offer to keys handed over.',
                steps: [
                  'Offer review & counter strategy',
                  'Contract to close timeline management',
                  'Inspections, appraisal, and contingency handling',
                  'Clean close, keys delivered',
                ],
              },
            ].map((p) => (
              <div key={p.phase} className="ivory-card rounded-2xl p-8">
                <div className="step-number mb-4">{p.num}</div>
                <h3 className="font-serif text-2xl font-bold mb-2">{p.phase}</h3>
                <p className="text-luxury-500 text-sm mb-5">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-luxury-700 text-sm">
                      <CheckIcon className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-luxury-900 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '98%', label: 'List-to-sold price ratio' },
            { value: '22', label: 'Avg days on market' },
            { value: '$500M+', label: 'Sales volume' },
            { value: '200+', label: 'Homes closed' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-gradient-gold font-serif text-4xl font-bold mb-2">{s.value}</div>
              <div className="text-luxury-300 text-xs uppercase tracking-[0.15em]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-luxury-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Thinking of listing your home?
          </h2>
          <p className="text-luxury-200 text-lg mb-10 font-light">
            Let's talk strategy. An honest conversation with someone who knows the Miami market —
            no pressure, no pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-8 py-4 rounded-lg text-base">
              Schedule a Consultation
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
            <a href="tel:+13055550000" className="btn-gold-outline px-8 py-4 rounded-lg text-base">
              <PhoneIcon className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
