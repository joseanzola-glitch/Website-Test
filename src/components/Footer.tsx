import { Link } from '@tanstack/react-router'
import { FacebookIcon, InstagramIcon, LinkedInIcon, GoogleIcon } from './Icons'

export function Footer() {
  return (
    <footer className="bg-ivory-100 border-t border-luxury-950/10 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-luxury-950 font-serif font-bold text-sm">
                JA
              </div>
              <div>
                <div className="text-luxury-950 font-semibold text-base">Jose Anzola</div>
                <div className="text-gold-600 text-xs tracking-widest uppercase">Compass</div>
              </div>
            </Link>
            <p className="text-luxury-500 text-sm max-w-md leading-relaxed mb-6">
              Helping Miami homeowners sell for top dollar. Real estate agent with Compass,
              serving buyers, sellers, and investors across South Florida.
            </p>
            <div className="flex items-center gap-3">
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
                  className="w-9 h-9 rounded-full bg-luxury-950/5 border border-luxury-950/10 flex items-center justify-center text-luxury-500 hover:text-gold-600 hover:border-gold-400/30 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-luxury-950 font-semibold mb-4 tracking-wide text-sm uppercase">Explore</div>
            <ul className="space-y-2.5 text-sm text-luxury-500">
              <li><Link to="/sell" className="hover:text-gold-600 transition">Sell a Home</Link></li>
              <li><Link to="/buy" className="hover:text-gold-600 transition">Buy a Home</Link></li>
              <li><Link to="/listings" className="hover:text-gold-600 transition">Listings</Link></li>
              <li><Link to="/about" className="hover:text-gold-600 transition">About Jose</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold-600 transition">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-luxury-950 font-semibold mb-4 tracking-wide text-sm uppercase">Contact</div>
            <ul className="space-y-2.5 text-sm text-luxury-500">
              <li><a href="tel:+13059045613" className="hover:text-gold-600 transition">(305) 904-5613</a></li>
              <li><a href="mailto:jose.anzola@compass.com" className="hover:text-gold-600 transition">jose.anzola@compass.com</a></li>
              <li>Miami &amp; South Florida</li>
              <li><Link to="/contact" className="hover:text-gold-600 transition">Schedule a Consultation</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-950/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-luxury-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Jose Anzola. All rights reserved. Licensed Real Estate Agent &middot; Compass
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-luxury-500">
            <Link to="/privacy-policy" className="hover:text-gold-600 transition">Privacy Policy</Link>
            <span className="text-luxury-950/20" aria-hidden="true">|</span>
            <Link to="/terms-and-conditions" className="hover:text-gold-600 transition">Terms &amp; Conditions</Link>
            <span className="text-luxury-950/20 hidden sm:inline" aria-hidden="true">|</span>
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
