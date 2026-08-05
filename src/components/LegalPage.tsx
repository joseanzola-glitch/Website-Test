import { Link } from '@tanstack/react-router'
import { ArrowRightIcon, MailIcon, PhoneIcon, MapPinIcon } from './Icons'

export type LegalSection = {
  id: string
  title: string
  body: React.ReactNode
}

/** Body paragraph for legal copy. */
export function LegalP({ children }: { children: React.ReactNode }) {
  return <p className="text-luxury-600 leading-relaxed mb-4">{children}</p>
}

/** Bulleted list for legal copy. */
export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 mb-5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-luxury-600 leading-relaxed">
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Back to Home link, styled as a subtle ghost button. */
export function BackToHome({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`btn-ghost px-6 py-3 rounded-lg text-sm ${className}`}>
      <ArrowRightIcon className="w-4 h-4 mr-2 rotate-180" />
      Back to Home
    </Link>
  )
}

/**
 * Shared shell for the Privacy Policy and Terms & Conditions pages —
 * light luxury theme, gold accent dividers, section index, and contact block.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  effectiveDate,
  sections,
}: {
  eyebrow: string
  title: string
  intro: string
  effectiveDate: string
  sections: LegalSection[]
}) {
  return (
    <div className="bg-white text-luxury-950">
      <section className="py-16 md:py-20 px-6 border-b border-luxury-950/10">
        <div className="max-w-6xl mx-auto">
          <BackToHome className="mb-10" />
          <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            {eyebrow}
          </div>
          <div className="gold-divider mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05] max-w-3xl">
            {title}
          </h1>
          <p className="text-luxury-600 text-lg leading-relaxed max-w-2xl mb-8">{intro}</p>
          <p className="text-luxury-400 text-xs uppercase tracking-wider">
            Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-luxury-950 font-semibold mb-4 tracking-wide text-xs uppercase">
                On This Page
              </div>
              <ul className="space-y-2.5 text-sm text-luxury-500 border-l border-luxury-950/10 pl-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:text-gold-600 transition">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`scroll-mt-28 ${i > 0 ? 'mt-12 pt-12 border-t border-luxury-950/10' : ''}`}
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">{s.title}</h2>
                <div className="gold-divider mb-6" />
                {s.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ivory-bg border-t border-luxury-950/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="luxury-card rounded-2xl p-8 lg:p-10">
            <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">
              Questions?
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-luxury-950 mb-3">
              Contact Jose Anzola
            </h2>
            <p className="text-luxury-500 text-sm leading-relaxed mb-8 max-w-xl">
              For any questions about this page, your personal information, or how this website is
              used, reach out directly and Jose will respond personally.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <a href="tel:+13059045613" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">
                    Call or Text
                  </div>
                  <div className="text-luxury-950 font-semibold text-sm">(305) 904-5613</div>
                </div>
              </a>
              <a href="mailto:jose.anzola@compass.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors flex-shrink-0">
                  <MailIcon className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <div className="text-luxury-950 font-semibold text-sm break-all">
                    jose.anzola@compass.com
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">
                    Brokered By
                  </div>
                  <div className="text-luxury-950 font-semibold text-sm">
                    Compass &middot; Miami, FL
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-luxury-950/10 pt-8 flex flex-wrap items-center gap-4">
              <BackToHome />
              <Link to="/contact" className="btn-dark px-6 py-3 rounded-lg text-sm">
                Contact Jose
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
