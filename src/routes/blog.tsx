import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/blog')({
  component: Blog,
  head: () => ({
    meta: [
      { title: 'Blog | Jose Anzola Compass Miami' },
      {
        name: 'description',
        content: 'Market insights, seller playbooks, and Miami real estate updates from Jose Anzola at Compass.',
      },
    ],
  }),
})

const posts = [
  { date: 'Coming Soon', category: 'Market Report', title: 'Q2 Miami Market Report: Where Values Are Heading', excerpt: 'Median price, days on market, and the neighborhoods outperforming the city average.' },
  { date: 'Coming Soon', category: 'Seller Playbook', title: '5 Pre-Market Upgrades That Pay for Themselves', excerpt: 'An investor-approved list of fixes that net sellers more than they cost.' },
  { date: 'Coming Soon', category: 'Buyer Guide', title: 'Off-Market in Miami: How Private Exclusives Actually Work', excerpt: "Why the best homes never hit Zillow — and how to get access." },
]

function Blog() {
  return (
    <div className="bg-luxury-950 text-white">
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Insights</div>
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
            Miami market intelligence.
          </h1>
          <p className="text-luxury-200 text-lg font-light leading-relaxed">
            Market reports, seller playbooks, and buyer guides — straight from the field.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-luxury-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((p) => (
            <div key={p.title} className="luxury-card rounded-2xl p-7 lg:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4 text-xs uppercase tracking-widest">
                <span className="text-gold-400 font-semibold">{p.category}</span>
                <span className="text-luxury-500">&middot;</span>
                <span className="text-luxury-400">{p.date}</span>
              </div>
              <h2 className="font-serif text-xl font-bold text-white mb-3 flex-1">{p.title}</h2>
              <p className="text-luxury-300 text-sm leading-relaxed mb-6">{p.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm opacity-60">
                Coming Soon
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-luxury-900 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Get notified when new posts drop.
          </h2>
          <p className="text-luxury-300 text-lg mb-8 font-light">
            In the meantime, reach out directly for market intel — no newsletter required.
          </p>
          <Link to="/contact" className="btn-gold px-8 py-4 rounded-lg text-base">
            Ask Jose a Question
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
