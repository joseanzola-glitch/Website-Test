import { createFileRoute, Link } from '@tanstack/react-router'
import { QuoteIcon, StarIcon, ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/testimonials')({
  component: Testimonials,
  head: () => ({
    meta: [
      { title: 'Client Testimonials | Jose Anzola Compass Miami' },
      {
        name: 'description',
        content: "Read what clients say about working with Jose Anzola — Compass real estate agent in Miami.",
      },
    ],
  }),
})

const written = [
  {
    text: "Jose G. Anzola is an outstanding agent! He made our first move to Miami stress free by guiding us through everything from neighborhood selection to the final negotiation. He handled the complexities of insurance and inspections with ease, ensuring we got the best possible deal. He also proactively jumped in when there were some headwinds showing great ability to problem solve and excellent relationship management. We highly recommend Jose for his expertise and tireless dedication to his clients.",
    name: 'Guillermo Donayre',
    role: 'Client',
  },
  {
    text: "The team is incredible. They sold my properties in record time, and they made the entire process super easy. Thank you for everything.",
    name: 'Alfredo Schael',
    role: 'Seller',
  },
  {
    text: "Jose and Krystyna did an excellent job during the sales process of our property in the prestigious Coral Ridge section of Fort Lauderdale. They assisted us step by step and helped us overcome many hurdles successfully. They were always available and very responsive. We felt supported and educated throughout the process. We are very pleased and highly recommend their team.",
    name: 'Elfie Wagner',
    role: 'Seller, Coral Ridge',
  },
  {
    text: "Jose was referred to me by a longtime family friend. Throughout the entire process he was very knowledgeable and helpful. He explained every detail clearly. Their professionalism is top tier and I am very happy I chose them.",
    name: 'Sharon Johnson',
    role: 'Client',
  },
  {
    text: "I recently had the opportunity to co-list a home with Jose and it was a fantastic experience. He is responsive, proactive, and a great team player. We worked together to get the best possible result for our seller.",
    name: 'Gerardo Gonzalez',
    role: 'Co-listing Agent',
  },
  {
    text: "Working with Jose and Krystyna was truly a blessing. Jose guided me through every step and kept me informed at all times. He over-delivered and made a stressful process feel manageable. Choosing him was the best decision I made.",
    name: 'Obradella Rudolph',
    role: 'Client',
  },
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
