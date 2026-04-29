import { createFileRoute, Link } from '@tanstack/react-router'
import {
  AwardIcon,
  ArrowRightIcon,
  CheckIcon,
  HomeIcon,
  QuoteIcon,
  StarIcon,
} from '../components/Icons'
import { CTABanner } from '../components/Sections'

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({
    meta: [
      { title: 'About Jose Anzola | Compass Miami Real Estate Agent' },
      {
        name: 'description',
        content: "Meet Jose Anzola — Miami real estate agent with Compass, 20 Under 40 honoree, and active real estate investor with flip experience.",
      },
    ],
  }),
})

function About() {
  return (
    <div className="bg-luxury-950 text-white">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-luxury-900 relative border border-white/5 shadow-2xl">
              <img
                src="/jose-anzola.jpg"
                alt="Jose Anzola — Compass real estate agent in Miami"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">About</div>
            <div className="gold-divider mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
              An investor, an advocate, and a Miami insider.
            </h1>
            <p className="text-luxury-200 text-lg leading-relaxed mb-6">
              Hi, I'm Jose Anzola — a real estate agent with Compass specializing in residential
              properties across Miami and South Florida. I help buyers find their dream homes and
              assist sellers in maximizing property value through strategic marketing and expert
              negotiation. Whether you're buying, selling, or investing, I guide you through every
              step of the process.
            </p>
            <p className="text-luxury-200 text-lg leading-relaxed mb-8">
              What sets me apart is that I don't just sell homes — I own, flip, and invest in them.
              That investor's mindset informs every listing I take, every negotiation I run, and
              every buyer I represent. I know what creates value, what kills it, and how to
              position a property so the numbers work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-luxury-900 py-16 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-gold-400/20 rounded-2xl p-8">
            <AwardIcon className="w-8 h-8 text-gold-400 mb-4" />
            <h3 className="font-serif text-xl font-bold text-white mb-2">20 Under 40</h3>
            <p className="text-luxury-300 text-sm leading-relaxed">
              Recognized among South Florida's top young professionals for impact in real estate
              and community.
            </p>
          </div>
          <div className="bg-white/5 border border-gold-400/20 rounded-2xl p-8">
            <HomeIcon className="w-8 h-8 text-gold-400 mb-4" />
            <h3 className="font-serif text-xl font-bold text-white mb-2">Real Estate Investor</h3>
            <p className="text-luxury-300 text-sm leading-relaxed">
              Active investor and flipper — I work with my own capital the same way I work with
              clients': rigorously, and with a plan.
            </p>
          </div>
          <div className="bg-white/5 border border-gold-400/20 rounded-2xl p-8">
            <StarIcon className="w-7 h-7 text-gold-400 mb-4" />
            <h3 className="font-serif text-xl font-bold text-white mb-2">5.0 Star Rating</h3>
            <p className="text-luxury-300 text-sm leading-relaxed">
              Consistently rated 5 stars by clients for responsiveness, clarity, and results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 ivory-bg text-luxury-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">How I Work</div>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold">My promise to clients.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Investor perspective', body: 'Every property gets underwritten like my own — I tell you the real numbers, not the sales pitch.' },
              { title: 'Local intelligence', body: 'I live and work here. I know which buildings are moving, which blocks are hot, and where the next wave is forming.' },
              { title: 'Compass platform', body: 'Private Exclusive marketing, Concierge, and a national buyer network — the best toolkit in the industry.' },
              { title: 'Responsive, always', body: 'You\'ll never wonder where I am. Texts, calls, emails — I\'m on it.' },
            ].map((p) => (
              <div key={p.title} className="ivory-card rounded-2xl p-7">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3 h-3 text-gold-700" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-luxury-500 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-dark px-8 py-4 rounded-lg text-base">
              Let's Talk
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-luxury-950">
        <div className="max-w-4xl mx-auto text-center">
          <QuoteIcon className="w-14 h-14 text-gold-400 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-snug mb-6">
            "Real estate isn't just transactions — it's the biggest decision most families make.
            My job is to make it clear, strategic, and successful."
          </blockquote>
          <div className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold">— Jose Anzola</div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
