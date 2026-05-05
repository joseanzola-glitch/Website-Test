import { Link } from '@tanstack/react-router'
import { ArrowRightIcon, PhoneIcon, CalendarIcon, HomeIcon } from './Icons'

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = true,
  center = true,
}: {
  eyebrow?: string
  title: string
  description?: string
  dark?: boolean
  center?: boolean
}) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <div className="text-gold-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4">
          {eyebrow}
        </div>
      )}
      <div className={`gold-divider mb-6 ${center ? 'mx-auto' : ''}`} />
      <h2 className={`font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight ${dark ? 'text-white' : 'text-luxury-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} font-light ${dark ? 'text-luxury-300' : 'text-luxury-500'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export function CTABanner() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-luxury-950">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(212,168,67,0.25) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(212,168,67,0.15) 0%, transparent 55%)',
        }}
      />
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to make your next move?
        </h2>
        <p className="text-luxury-200 text-lg mb-10 max-w-xl mx-auto font-light">
          Whether buying, selling, or investing — the first step starts with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/sell" className="btn-gold px-8 py-4 rounded-lg text-base tracking-wide inline-flex items-center justify-center gap-2">
            <HomeIcon className="w-5 h-5" />
            Sell a Home
          </Link>
          <Link to="/contact" className="btn-gold-outline px-8 py-4 rounded-lg text-base tracking-wide inline-flex items-center justify-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Book Appointment
          </Link>
          <a href="tel:+13059045613" className="btn-ghost px-8 py-4 rounded-lg text-base tracking-wide inline-flex items-center justify-center gap-2">
            <PhoneIcon className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

export function StatsBar() {
  const stats = [
    { value: '20 Under 40', label: 'Recognition' },
    { value: '$500M+', label: 'In Sales Volume' },
    { value: '200+', label: 'Clients Served' },
    { value: '5.0', label: 'Google Rating' },
  ]
  return (
    <section className="border-y border-white/5 bg-luxury-900">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-gradient-gold text-3xl md:text-4xl font-serif font-bold mb-2">{stat.value}</div>
            <div className="text-luxury-300 text-xs font-medium uppercase tracking-[0.15em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function TrustStrip() {
  return (
    <div className="border-t border-white/5 bg-luxury-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-luxury-400 text-xs tracking-widest uppercase font-medium">
        <span>Compass</span>
        <span className="text-gold-500/40">•</span>
        <span>Licensed Realtor</span>
        <span className="text-gold-500/40">•</span>
        <span>20 Under 40 Honoree</span>
        <span className="text-gold-500/40">•</span>
        <span>Real Estate Investor</span>
        <span className="text-gold-500/40">•</span>
        <span>Equal Housing</span>
      </div>
    </div>
  )
}

export function FeatureTile({
  icon,
  title,
  description,
  href,
  cta,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
  cta?: string
}) {
  return (
    <div className="luxury-card rounded-2xl p-7 group">
      <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-400/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-luxury-300 leading-relaxed mb-5 text-sm">{description}</p>
      {href && cta && (
        <a href={href} className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm hover:text-gold-300 transition">
          {cta}
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      )}
    </div>
  )
}
