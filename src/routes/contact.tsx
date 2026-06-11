import { createFileRoute } from '@tanstack/react-router'
import { ContactForm } from '../components/Forms'
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  CalendarIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  GoogleIcon,
} from '../components/Icons'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () => ({
    meta: [
      { title: 'Contact Jose Anzola | Compass Miami Real Estate' },
      {
        name: 'description',
        content: 'Get in touch with Jose Anzola — Compass real estate agent in Miami. Phone, email, contact form, and booking.',
      },
    ],
  }),
})

function Contact() {
  return (
    <div className="bg-luxury-950 text-white">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <div className="text-gold-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Contact</div>
            <div className="gold-divider mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
              Let's talk about your next move.
            </h1>
            <p className="text-luxury-200 text-lg leading-relaxed mb-10">
              Buying, selling, or investing — reach out and Jose will respond personally,
              usually within hours.
            </p>

            <div className="space-y-5 mb-10">
              <a href="tel:+13059045613" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                  <PhoneIcon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">Call or Text</div>
                  <div className="text-white font-semibold text-lg">(305) 904-5613</div>
                </div>
              </a>

              <a href="mailto:jose.anzola@compass.com" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                  <MailIcon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-white font-semibold text-lg">jose.anzola@compass.com</div>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">Service Area</div>
                  <div className="text-white font-semibold text-lg">Miami &amp; South Florida</div>
                </div>
              </div>
            </div>

            {/* Booking calendar placeholder */}
            <div className="luxury-card rounded-2xl p-6 mb-10">
              <div className="flex items-center gap-3 mb-3">
                <CalendarIcon className="w-5 h-5 text-gold-400" />
                <div className="text-white font-semibold">Book a 30-minute consult</div>
              </div>
              <p className="text-luxury-300 text-sm mb-4">
                Grab a time directly on Jose's calendar — by phone, video, or in person.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Mon 10:00', 'Tue 2:00', 'Wed 11:30', 'Thu 4:00'].map((t) => (
                  <button key={t} className="px-3 py-2 bg-white/5 border border-white/10 text-luxury-200 rounded-lg text-xs hover:border-gold-400/40 hover:text-gold-300 transition">
                    {t}
                  </button>
                ))}
              </div>
              <p className="text-luxury-500 text-[11px] mt-3">Calendar integration coming soon.</p>
            </div>

            <div>
              <div className="text-xs text-luxury-400 uppercase tracking-wider mb-3">Follow Jose</div>
              <div className="flex gap-3">
                {[
                  { icon: <InstagramIcon className="w-4 h-4" />, href: 'https://www.instagram.com/', label: 'Instagram' },
                  { icon: <GoogleIcon className="w-4 h-4" />, href: 'https://www.google.com/', label: 'Google' },
                  { icon: <LinkedInIcon className="w-4 h-4" />, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
                  { icon: <FacebookIcon className="w-4 h-4" />, href: 'https://www.facebook.com/', label: 'Facebook' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-300 hover:text-gold-400 hover:border-gold-400/30 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 mt-10">
              <p className="text-luxury-400 text-xs tracking-wider uppercase mb-2">Brokered by</p>
              <p className="text-white font-semibold text-lg">Compass Real Estate</p>
              <p className="text-luxury-400 text-sm">Miami, Florida</p>
            </div>
          </div>

          <div className="luxury-card rounded-2xl p-8 lg:p-10 self-start">
            <h2 className="font-serif text-2xl font-bold text-white mb-2">Send a Message</h2>
            <p className="text-luxury-300 text-sm mb-7">
              Fill out the form — Jose will be in touch within 24 hours.
            </p>
            <ContactForm theme="dark" />
          </div>
        </div>
      </section>
    </div>
  )
}
