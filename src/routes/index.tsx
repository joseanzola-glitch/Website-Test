import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRightIcon,
  AwardIcon,
  CalendarIcon,
  CalculatorIcon,
  ChatIcon,
  CheckIcon,
  HomeIcon,
  PhoneIcon,
  QuoteIcon,
  SearchIcon,
  StarIcon,
} from '../components/Icons'
import { CTABanner, StatsBar, TrustStrip, FeatureTile } from '../components/Sections'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="text-white bg-luxury-950">
      <HeroSection />
      <TrustStrip />
      <AboutPreviewSection />
      <StatsBar />
      <ServicesSection />
      <AreasWeServeSection />
      <SellerProcessSection />
      <BuyerProcessSection />
      <FeaturedListingsSection />
      <ToolsSection />
      <TestimonialsSection />
      <CTABanner />
    </div>
  )
}

/* ── HERO ──────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
      {/* Miami skyline aerial drone background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-luxury-950" />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://videos.pexels.com/video-files/3699477/3699477-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/2244903/2244903-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Black overlay for readability (≈55% opacity) */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Subtle bottom fade so the video blends into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-luxury-950" />
        <div className="absolute inset-0 hero-grid opacity-10" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-gold-400/20 text-gold-400 text-xs font-semibold px-5 py-2.5 rounded-full mb-8 tracking-[0.2em] uppercase backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          Miami &amp; South Florida &middot; Compass
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-7 leading-[1.02]">
          Helping Miami homeowners
          <span className="block text-gradient-gold mt-2">sell for top dollar.</span>
        </h1>

        <p className="text-lg md:text-xl text-luxury-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Strategic marketing, expert negotiation, and an investor's eye for value —
          for sellers, buyers, and investors in the $700K+ market.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <Link to="/listings" className="btn-gold px-8 py-4 rounded-lg text-base">
            <HomeIcon className="w-5 h-5 mr-2" />
            View Listings
          </Link>
          <Link to="/contact" className="btn-gold-outline px-8 py-4 rounded-lg text-base backdrop-blur-sm">
            <CalendarIcon className="w-5 h-5 mr-2" />
            Schedule a Consultation
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-luxury-200 text-xs tracking-[0.15em] uppercase font-medium">
          <span className="flex items-center gap-2">
            <AwardIcon className="w-4 h-4 text-gold-400" />
            20 Under 40 Honoree
          </span>
          <span className="text-gold-500/30 hidden sm:inline">|</span>
          <span>Compass Agent</span>
          <span className="text-gold-500/30 hidden sm:inline">|</span>
          <span>Real Estate Investor</span>
          <span className="text-gold-500/30 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-3 h-3 text-gold-400" />)}
            <span className="ml-1 text-gold-300 normal-case tracking-normal">5.0 Google</span>
          </span>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-luxury-950 to-transparent z-[5]" />
    </section>
  )
}

/* ── ABOUT PREVIEW ─────────────────────────────────────────── */

function AboutPreviewSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-luxury-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-luxury-900 relative border border-white/5 shadow-2xl">
            <img
              src="/jose-anzola.jpg"
              alt="Jose Anzola — Compass real estate agent in Miami"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-950/70 via-luxury-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white font-serif text-2xl font-bold">Jose Anzola</div>
              <div className="text-gold-400 text-[10px] tracking-[0.3em] uppercase font-semibold mt-1">Compass · Miami</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-luxury-900 border border-gold-400/30 text-gold-400 font-semibold px-6 py-3 rounded-xl shadow-2xl text-sm tracking-wide">
            Compass Agent
          </div>
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold-400/20 rounded-tl-2xl" />
        </div>

        <div>
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">About Jose</div>
          <div className="gold-divider mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            A Miami-native advisor with an investor's edge.
          </h2>
          <p className="text-luxury-200 text-lg leading-relaxed mb-6">
            Hi, I'm Jose Anzola — a real estate agent with Compass specializing in residential
            properties across Miami and South Florida. I help buyers find their dream homes and
            assist sellers in maximizing property value through strategic marketing and expert
            negotiation. Whether you're buying, selling, or investing, I guide you through every
            step of the process.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 border border-gold-400/20 rounded-xl px-5 py-4">
              <div className="flex items-center gap-2 text-gold-400 mb-1">
                <AwardIcon className="w-4 h-4" />
                <div className="text-xs uppercase tracking-wider font-semibold">Recognition</div>
              </div>
              <div className="text-white font-semibold text-sm">20 Under 40 Honoree</div>
            </div>
            <div className="bg-white/5 border border-gold-400/20 rounded-xl px-5 py-4">
              <div className="flex items-center gap-2 text-gold-400 mb-1">
                <HomeIcon className="w-4 h-4" />
                <div className="text-xs uppercase tracking-wider font-semibold">Experience</div>
              </div>
              <div className="text-white font-semibold text-sm">Investor &amp; Flipper</div>
            </div>
          </div>

          <Link to="/about" className="btn-gold inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm">
            Read the Full Story
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── SERVICES ──────────────────────────────────────────────── */

function ServicesSection() {
  const services = [
    {
      title: 'Selling',
      primary: true,
      badge: 'Primary focus',
      desc: "Sell for top dollar with a full-spectrum strategy: data-backed pricing, professional media, proprietary Compass marketing tools, and relentless negotiation to net you the most at closing.",
      features: ['Pre-market strategy', 'Compass Concierge prep', 'Multi-channel marketing', 'Negotiation-first closing'],
      cta: 'Explore Seller Services',
      href: '/sell',
    },
    {
      title: 'Buying',
      desc: "Find the right home in Miami's fast-moving market. Exclusive access to off-market listings, strategic offer crafting, and an advocate who knows value when he sees it.",
      features: ['Private buyer consult', 'Off-market access', 'Offer strategy', 'Inspection & closing'],
      cta: 'Explore Buyer Services',
      href: '/buy',
    },
    {
      title: 'Investing',
      desc: "An investor-to-investor perspective. I help clients identify high-yield opportunities — flips, rentals, pre-construction — and structure deals that build long-term wealth.",
      features: ['Deal analysis', 'Flip experience', 'Rental ROI modeling', 'Portfolio strategy'],
      cta: 'Explore Investing',
      href: '/contact',
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-luxury-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Services</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">Three ways I can help.</h2>
          <p className="text-luxury-300 text-lg max-w-2xl mx-auto font-light">
            Selling is the focus — but whether you're buying or investing, you get the same
            strategic, detail-obsessed service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative rounded-2xl p-8 lg:p-10 transition-all duration-500 ${
                s.primary
                  ? 'bg-gradient-to-br from-gold-500/15 via-luxury-900 to-luxury-900 border-2 border-gold-400/40 shadow-2xl scale-[1.02]'
                  : 'luxury-card'
              }`}
            >
              {s.badge && (
                <div className="absolute -top-3 left-8 bg-gradient-to-r from-gold-500 to-gold-400 text-luxury-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {s.badge}
                </div>
              )}
              <h3 className="font-serif text-3xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-luxury-300 leading-relaxed mb-6 text-sm">{s.desc}</p>
              <ul className="space-y-2.5 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-luxury-200 text-sm">
                    <CheckIcon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={s.href}
                className={`inline-flex items-center gap-2 font-semibold text-sm transition ${
                  s.primary ? 'text-gold-300 hover:text-gold-200' : 'text-gold-400 hover:text-gold-300'
                }`}
              >
                {s.cta}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SELLER PROCESS (3 phases) ─────────────────────────────── */

function SellerProcessSection() {
  const phases = [
    {
      num: '01',
      phase: 'Pre-Market',
      steps: [
        'Strategy consultation & pricing plan',
        'Market prep (repairs, staging, photography)',
        'Listing agreement & launch plan',
      ],
    },
    {
      num: '02',
      phase: 'On-Market',
      steps: [
        'Compass Private Exclusive test',
        'Full launch, marketing, open houses',
        'Weekly reporting & feedback',
      ],
    },
    {
      num: '03',
      phase: 'Closing',
      steps: [
        'Offer review & negotiation',
        'Inspection & contingency management',
        'Clean close, keys in hand',
      ],
    },
  ]

  return (
    <section className="ivory-bg py-24 md:py-32 px-6 text-luxury-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">The Seller Process</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight">
            From strategy to closing — a proven path.
          </h2>
          <p className="text-luxury-500 text-lg max-w-2xl mx-auto font-light">
            A structured three-phase approach so nothing is left to chance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((p, i) => (
            <div key={p.phase} className="relative">
              {i < phases.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px step-connector z-0" style={{ transform: 'translateX(-2rem)' }} />
              )}
              <div className="ivory-card rounded-2xl p-8 relative z-10">
                <div className="step-number mb-5">{p.num}</div>
                <h3 className="font-serif text-2xl font-bold mb-5">{p.phase}</h3>
                <ul className="space-y-3">
                  {p.steps.map((step) => (
                    <li key={step} className="flex items-start gap-3 text-luxury-700 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/sell" className="btn-dark px-8 py-4 rounded-lg text-base">
            See the Full Seller Playbook
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── BUYER PROCESS (5 steps) ───────────────────────────────── */

function BuyerProcessSection() {
  const steps = [
    { num: '01', title: 'Find your agent', desc: 'Start with a consultation to align on goals, timeline, and budget.' },
    { num: '02', title: 'Get pre-approved', desc: "Secure financing so you're ready to move when the right home appears." },
    { num: '03', title: 'Search homes', desc: "Curated searches, private showings, and off-market access across Miami." },
    { num: '04', title: 'Submit offer', desc: 'Strategic offer crafting with negotiation tactics tuned to the market.' },
    { num: '05', title: 'Close', desc: 'Inspection, appraisal, and a smooth path from contract to keys.' },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-luxury-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">The Buyer Process</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Five steps, no guesswork.
          </h2>
          <p className="text-luxury-300 text-lg max-w-2xl mx-auto font-light">
            A guided path from curiosity to closing — with an experienced advocate at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {steps.map((s) => (
            <div key={s.num} className="luxury-card rounded-2xl p-6 lg:p-7">
              <div className="step-number mb-4 text-3xl">{s.num}</div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-luxury-300 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/buy" className="btn-gold-outline px-8 py-4 rounded-lg text-base">
            See the Full Buyer Playbook
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── FEATURED LISTINGS ─────────────────────────────────────── */

function FeaturedListingsSection() {
  const listings = [
    {
      status: 'Active',
      price: '$2,450,000',
      beds: 4,
      baths: 4,
      sqft: '3,120',
      address: '1234 Brickell Ave, Miami, FL',
      neighborhood: 'Brickell',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
    },
    {
      status: 'Active',
      price: '$1,875,000',
      beds: 5,
      baths: 4.5,
      sqft: '3,650',
      address: '567 Coral Way, Coral Gables, FL',
      neighborhood: 'Coral Gables',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    },
    {
      status: 'Sold',
      price: '$3,200,000',
      beds: 6,
      baths: 6,
      sqft: '4,850',
      address: '89 Palm Island, Miami Beach, FL',
      neighborhood: 'Miami Beach',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
    },
    {
      status: 'Sold',
      price: '$1,295,000',
      beds: 3,
      baths: 3,
      sqft: '2,180',
      address: '321 Ocean Dr, Key Biscayne, FL',
      neighborhood: 'Key Biscayne',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80',
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-luxury-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Portfolio</div>
            <div className="gold-divider mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Featured Listings
            </h2>
            <p className="text-luxury-300 text-lg max-w-xl font-light">
              A mix of active and recently sold properties across Miami and South Florida.
            </p>
          </div>
          <Link to="/listings" className="btn-gold-outline px-6 py-3 rounded-lg text-sm whitespace-nowrap">
            View All Listings
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {listings.map((l) => (
            <div key={l.address} className="group relative overflow-hidden rounded-2xl aspect-[4/3] luxury-card">
              <img
                src={l.image}
                alt={l.address}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 listing-overlay" />
              <div className="absolute top-5 left-5">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                  l.status === 'Active'
                    ? 'bg-gold-400 text-luxury-950'
                    : 'bg-luxury-950/90 text-gold-400 border border-gold-400/40'
                }`}>
                  {l.status === 'Sold' ? 'Sold' : 'For Sale'}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="text-gold-400 text-xs tracking-widest uppercase mb-2 font-semibold">{l.neighborhood}</div>
                <div className="text-white font-serif text-2xl lg:text-3xl font-bold mb-2">{l.price}</div>
                <div className="text-luxury-200 text-sm mb-3">{l.address}</div>
                <div className="flex gap-4 text-luxury-300 text-xs">
                  <span>{l.beds} BD</span>
                  <span>&middot;</span>
                  <span>{l.baths} BA</span>
                  <span>&middot;</span>
                  <span>{l.sqft} SQ FT</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── TOOLS / FEATURE PLACEHOLDERS ──────────────────────────── */

function ToolsSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-luxury-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Tools &amp; Resources</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Start here. Move forward smarter.
          </h2>
          <p className="text-luxury-300 text-lg max-w-2xl mx-auto font-light">
            Research, calculate, and plan — right from this page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureTile
            icon={<SearchIcon className="w-6 h-6" />}
            title="MLS Home Search"
            description="Search every active listing in Miami-Dade and Broward. Full MLS integration coming soon."
            href="/listings"
            cta="Browse Homes"
          />
          <FeatureTile
            icon={<HomeIcon className="w-6 h-6" />}
            title="Seller Strategy"
            description="A custom pre-market plan — pricing, positioning, and the Compass platform tools that sell Miami homes."
            href="/sell"
            cta="Explore Selling"
          />
          <FeatureTile
            icon={<CalculatorIcon className="w-6 h-6" />}
            title="Mortgage Calculator"
            description="Estimate your monthly payment and see what you can comfortably afford."
            href="/buy"
            cta="Calculate"
          />
          <FeatureTile
            icon={<CalendarIcon className="w-6 h-6" />}
            title="Book a Call"
            description="Grab 30 minutes on the calendar — by phone, video, or in person at my office."
            href="/contact"
            cta="Schedule"
          />
        </div>

        <div className="mt-8 luxury-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
              <ChatIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-semibold">Prefer to chat?</div>
              <div className="text-luxury-300 text-sm">Use the live chat in the bottom-right corner.</div>
            </div>
          </div>
          <a href="tel:+13059045613" className="btn-gold-outline px-6 py-3 rounded-lg text-sm">
            <PhoneIcon className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── TESTIMONIALS (written) ────────────────────────────────── */

function TestimonialsSection() {
  const testimonials = [
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

  return (
    <section className="py-24 md:py-32 px-6 bg-luxury-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Client Stories</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Trusted by sellers, buyers &amp; investors.
          </h2>
          <p className="text-luxury-300 text-lg max-w-2xl mx-auto font-light">
            Real stories from real clients across South Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {testimonials.map((t) => (
            <div key={t.name} className="luxury-card rounded-2xl p-8 relative">
              <QuoteIcon className="absolute top-5 right-5 w-10 h-10 text-gold-400" />
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-gold-400" />)}
              </div>
              <p className="text-luxury-200 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-luxury-400 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/testimonials" className="btn-gold-outline px-8 py-4 rounded-lg text-base">
            Read More Stories
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── AREAS WE SERVE ────────────────────────────────────────── */

function AreasWeServeSection() {
  const areas = [
    {
      icon: '🌴',
      title: 'Core Miami Luxury',
      neighborhoods: 'Brickell · Edgewater · Downtown Miami · Wynwood · Midtown',
      description:
        "The high-rise heart of the city. Trophy condos, branded residences, and pre-construction with strong rental yields and global buyer demand. Best for investors seeking liquid, cash-flow-ready luxury assets.",
    },
    {
      icon: '🏡',
      title: 'Family & Established',
      neighborhoods: 'Coral Gables · Coconut Grove · Pinecrest · South Miami',
      description:
        "Tree-lined streets, top-rated schools, and historic architecture. Single-family homes that hold value through every cycle — ideal for long-term appreciation and legacy ownership in Miami's most stable enclaves.",
    },
    {
      icon: '🌊',
      title: 'Coastal & Waterfront',
      neighborhoods: 'Miami Beach · Key Biscayne · Bal Harbour · Sunny Isles · Fort Lauderdale',
      description:
        "Direct ocean, bay, and intracoastal access. Waterfront estates and beachfront condos that command premium pricing year-round and convert beautifully into short-term and seasonal rental income.",
    },
    {
      icon: '📈',
      title: 'Growth & Value',
      neighborhoods: 'Little River · Allapattah · North Miami · Doral · Hialeah · Miami Shores',
      description:
        "Emerging neighborhoods with strong upside. Where smart investors are entering early — flips, value-add multifamily, and pre-construction at prices the core market left behind.",
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-luxury-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Coverage</div>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Areas We Serve
          </h2>
          <p className="text-luxury-300 text-lg max-w-2xl mx-auto font-light">
            Deep, neighborhood-level expertise across Miami and South Florida — categorized by the
            kind of opportunity each area best delivers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {areas.map((a) => (
            <div
              key={a.title}
              className="luxury-card rounded-2xl p-7 lg:p-8 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{a.icon}</div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">{a.title}</h3>
              <div className="text-gold-400 text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
                {a.neighborhoods}
              </div>
              <p className="text-luxury-300 text-sm leading-relaxed flex-1">{a.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="btn-gold-outline px-8 py-4 rounded-lg text-base">
            Talk About Your Target Area
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
