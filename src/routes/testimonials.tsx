import { createFileRoute, Link } from '@tanstack/react-router'
import { PlayIcon, QuoteIcon, StarIcon, ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/testimonials')({
  component: Testimonials,
  head: () => ({
    meta: [
      { title: 'Client Testimonials | Jose Anzola Compass Miami' },
      {
        name: 'description',
        content: "Read and watch what clients say about working with Jose Anzola — Compass real estate agent in Miami.",
      },
    ],
  }),
})

const written = [
  { text: "Jose sold our Coral Gables home in eight days — above asking, with multiple offers. His prep work and pricing strategy were unreal. He knew exactly which repairs would move the needle and which were a waste of money.", name: 'David & Laura T.', role: 'Sellers, Coral Gables' },
  { text: "As an investor, I need a numbers-first agent. Jose has helped me acquire three rental properties. His underwriting is as sharp as mine and his flip experience shows in every deal review.", name: 'Roberto M.', role: 'Investor, South Florida' },
  { text: "First-time buyers in Brickell. Jose walked us through every single step and helped us negotiate a better price than we thought possible. No pressure, total transparency.", name: 'Maria & Carlos R.', role: 'Buyers, Brickell' },
  { text: "We'd tried to sell our home with another agent for four months — no offers. Switched to Jose. Sold in three weeks. Enough said.", name: 'Patricia W.', role: 'Seller, Miami Beach' },
  { text: "Relocating from New York, Jose handled everything remotely. Video tours, contract review, inspection coordination. Keys in hand without us flying down once.", name: 'Michael S.', role: 'Relocation buyer, Aventura' },
  { text: "Jose's Compass Private Exclusive strategy got us a great offer before our home even hit the market. Saved us the stress of open houses and got a premium price.", name: 'Jennifer L.', role: 'Seller, Key Biscayne' },
]

const videos = [
  { title: 'Sellers, Coral Gables', thumb: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { title: 'First-Time Buyers, Brickell', thumb: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80' },
  { title: 'Investor, 3 Rentals', thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
]

function Testimonials() {
  return (
    <div className="bg-luxury-950 text-white">
      <section className="py-20 md:py-28 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Client Stories</div>
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
            Trusted by sellers, buyers &amp; investors.
          </h1>
          <p className="text-luxury-200 text-lg font-light leading-relaxed">
            The numbers matter — but the relationships matter more. Here's what clients say about working with Jose.
          </p>
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-gold-400" />)}
            <span className="text-white ml-2 font-semibold">5.0</span>
            <span className="text-luxury-400 text-sm">on Google</span>
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="py-20 md:py-28 px-6 bg-luxury-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Video Testimonials</h2>
            <p className="text-luxury-300 text-sm uppercase tracking-[0.15em]">Placeholders — real videos coming soon</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.title} className="group relative aspect-video rounded-2xl overflow-hidden luxury-card cursor-pointer">
                <img src={v.thumb} alt={v.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold-400/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayIcon className="w-7 h-7 text-luxury-950 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-semibold text-sm">{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written testimonials */}
      <section className="py-20 md:py-28 px-6 ivory-bg text-luxury-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Written Reviews</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {written.map((t) => (
              <div key={t.name} className="ivory-card rounded-2xl p-8 relative">
                <QuoteIcon className="absolute top-5 right-5 w-10 h-10 text-gold-500" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-gold-500" />)}
                </div>
                <p className="text-luxury-700 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm text-luxury-900">{t.name}</div>
                  <div className="text-luxury-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-luxury-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to add your story?
          </h2>
          <Link to="/contact" className="btn-gold px-8 py-4 rounded-lg text-base inline-flex">
            Start a Conversation
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
