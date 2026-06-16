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
    <div className="bg-white text-luxury-950">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Contact</div>
            <div className="gold-divider mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
              Let's talk about your next move.
            </h1>
            <p className="text-luxury-600 text-lg leading-relaxed mb-10">
              Buying, selling, or investing — reach out and Jose will respond personally,
              usually within hours.
            </p>

            <div className="space-y-5 mb-10">
              <a href="tel:+13059045613" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                  <PhoneIcon className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">Call or Text</div>
                  <div className="text-luxury-950 font-semibold text-lg">(305) 904-5613</div>
                </div>
              </a>

              <a href="mailto:jose.anzola@compass.com" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                  <MailIcon className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-luxury-950 font-semibold text-lg">jose.anzola@compass.com</div>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <div className="text-xs text-luxury-400 uppercase tracking-wider mb-0.5">Service Area</div>
                  <div className="text-luxury-950 font-semibold text-lg">Miami &amp; South Florida</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-luxury-400 uppercase tracking-wider mb-3">Follow Jose</div>
              <div className="flex gap-3">
               {[
                  { icon: <InstagramIcon className="w-4 h-4" />, href: 'https://www.instagram.com/joseganzola/', label: 'Instagram' },
                  { icon: <GoogleIcon className="w-4 h-4" />, href: 'https://share.google/2FjYHiwE7J4ev4Uyx', label: 'Google' },
                  { icon: <LinkedInIcon className="w-4 h-4" />, href: 'https://www.linkedin.com/in/jose-anzola/', label: 'LinkedIn' },
                  { icon: <FacebookIcon className="w-4 h-4" />, href: 'https://www.facebook.com/profile.php?id=61575098395033', label: 'Facebook' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-luxury-950/5 border border-luxury-950/10 flex items-center justify-center text-luxury-500 hover:text-gold-600 hover:border-gold-400/30 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-luxury-950/10 pt-8 mt-10">
              <p className="text-luxury-400 text-xs tracking-wider uppercase mb-2">Brokered by</p>
              <p className="text-luxury-950 font-semibold text-lg">Compass Real Estate</p>
              <p className="text-luxury-400 text-sm">Miami, Florida</p>
            </div>
          </div>

          <div className="luxury-card rounded-2xl p-8 lg:p-10 self-start">
            <h2 className="font-serif text-2xl font-bold text-luxury-950 mb-2">Send a Message</h2>
            <p className="text-luxury-500 text-sm mb-7">
              Fill out the form — Jose will be in touch within 24 hours.
            </p>
            <ContactForm theme="light" />
          </div>
        </div>
      </section>
    </div>
  )
}
