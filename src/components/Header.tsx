import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { PhoneIcon } from './Icons'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Sell', to: '/sell' },
  { label: 'Buy', to: '/buy' },
  { label: 'Listings', to: '/listings' },
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-950/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-luxury-950 font-serif font-bold text-sm">
              JA
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-semibold text-sm tracking-wide">Jose Anzola</div>
              <div className="text-gold-400 text-xs tracking-widest uppercase">Compass</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-luxury-200 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-gold-400 transition"
                activeProps={{ className: 'text-gold-400' }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+13059045613"
              className="hidden md:inline-flex items-center gap-2 text-luxury-200 hover:text-gold-400 transition text-sm font-medium"
              aria-label="Call Now"
            >
              <PhoneIcon className="w-4 h-4" />
              (305) 904-5613
            </a>
            <Link
              to="/contact"
              className="btn-gold hidden sm:inline-block px-5 py-2.5 rounded-lg text-sm"
            >
              Schedule a Call
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white/80 hover:text-white cursor-pointer"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-luxury-900 border-l border-white/10 p-8 flex flex-col">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-white/60 hover:text-white mb-10 cursor-pointer"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-gold-400 text-lg font-medium tracking-wide transition"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-gold text-center px-6 py-3 rounded-lg mt-4"
              >
                Schedule a Call
              </Link>
              <a
                href="tel:+13059045613"
                onClick={() => setMenuOpen(false)}
                className="btn-gold-outline text-center px-6 py-3 rounded-lg"
              >
                Call Now
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
