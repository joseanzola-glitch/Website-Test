import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { PhoneIcon, MailIcon } from '../components/Icons'

export const Route = createFileRoute('/seller-valuation')({
  component: SellerValuation,
  head: () => ({
    meta: [
      { title: 'Home Valuation | Jose Anzola Compass Real Estate' },
      { name: 'description', content: 'Find out what your Miami home could sell for.' },
    ],
  }),
})

const PHONE_DISPLAY = '(305) 904-5613'
const PHONE_TEL = '+13059045613'
const EMAIL = 'jose.anzola@compass.com'

// Add more real client quotes here and they will appear automatically.
const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      'The team is incredible. They sold my properties in record time, and they made the entire process super easy. Thank you for everything.',
    name: 'Alfredo Schael',
    role: 'Seller',
  },
]

const inputClass =
  'w-full px-4 py-3.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30 text-base'
const labelClass = 'block text-sm font-semibold text-luxury-700 mb-1'

function ContactLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium text-luxury-700 ${className}`}>
      <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-gold-600">
        <PhoneIcon className="w-4 h-4 text-gold-600" />
        <span>{PHONE_DISPLAY}</span>
      </a>
      <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-gold-600">
        <MailIcon className="w-4 h-4 text-gold-600" />
        <span>{EMAIL}</span>
      </a>
    </div>
  )
}

function SellerValuation() {
  const [step, setStep] = useState<1 | 2>(1)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const [error, setError] = useState('')
  const [source, setSource] = useState('')
  const [f, setF] = useState({ address: '', name: '', phone: '', email: '' })

  // Remember how the visitor arrived (UTM params / ad click id) so each lead shows its source.
  useEffect(() => {
    setSource(window.location.search)
  }, [])

  const update = (key: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setF({ ...f, [key]: e.target.value })
    if (error) setError('')
  }

  const goToStep2 = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!f.phone.trim() && !f.email.trim()) {
      setError('Add a phone number or an email so Jose can reach you.')
      return
    }
    setError('')
    setStatus('sending')

    const bot =
      (e.currentTarget.elements.namedItem('bot-field') as HTMLInputElement)?.value || ''
    const params = new URLSearchParams({
      'form-name': 'seller-valuation',
      'bot-field': bot,
      address: f.address,
      name: f.name,
      phone: f.phone,
      email: f.email,
      source,
    })

    try {
      const doFetch = (window as any).__netlifyFetch || fetch
      const res: Response = await doFetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`)

      // Count the conversion only after Netlify confirms the lead was saved.
      try {
        ;(window as any).oaiq?.('measure', 'lead_created', { type: 'customer_action' })
      } catch {}
      setStatus('done')
    } catch (err) {
      console.error(err)
      setStatus('idle')
      setError(`We couldn't send that. Please call or text Jose at ${PHONE_DISPLAY}.`)
    }
  }

  return (
    <div className="bg-white text-luxury-950 pb-24 md:pb-0">
      <main className="max-w-xl mx-auto px-5 pt-12 pb-12">
        {/* Hidden static form so Netlify detects the fields at build time */}
        <form name="seller-valuation" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="seller-valuation" />
          <input type="text" name="bot-field" />
          <input type="text" name="address" />
          <input type="text" name="name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="source" />
        </form>

        {/* Social proof first: testimonial + centered trust lines */}
        <section
          className="mb-10 md:w-[56rem] md:max-w-[calc(100vw-2.5rem)] md:relative md:left-1/2 md:-translate-x-1/2"
          aria-label="Client testimonials"
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative overflow-hidden rounded-2xl border-2 border-gold-400 bg-gradient-to-br from-white to-gold-400/15 p-7 md:p-9 shadow-xl mb-4"
            >
              <span
                aria-hidden="true"
                className="absolute -top-2 right-5 font-serif text-9xl leading-none text-gold-400/30 select-none"
              >
                “
              </span>
              <div className="text-gold-500 text-3xl tracking-widest text-center" role="img" aria-label="5 out of 5 stars">
                <span aria-hidden="true">★★★★★</span>
              </div>
              <blockquote className="mt-4 italic font-medium text-luxury-900 text-lg md:text-2xl leading-relaxed text-center">
                "{t.quote}"
              </blockquote>
            </figure>
          ))}
        </section>

        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-center">
          What could your Miami home sell for?
        </h1>
        <p className="mt-4 text-lg text-luxury-600 text-center font-light leading-relaxed">
          Get a pricing analysis from Jose, a local Compass agent. It's free, takes under a minute, and there's no obligation.
        </p>

        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          {status === 'done' ? (
            <div className="text-center py-4" role="status">
              <div className="w-12 h-12 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                ✓
              </div>
              <h2 className="font-serif text-2xl font-bold mb-2">Request received</h2>
              <p className="text-luxury-600 mb-6">
                Jose will review your property and follow up personally.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="px-5 py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 font-semibold text-sm"
                >
                  Call Jose now
                </a>
                <a
                  href={`sms:${PHONE_TEL}`}
                  className="px-5 py-3 rounded-lg border border-slate-300 bg-white font-semibold text-sm"
                >
                  Text Jose
                </a>
              </div>
            </div>
          ) : step === 1 ? (
            <form onSubmit={goToStep2} className="space-y-4">
              <div>
                <label htmlFor="address" className={labelClass}>
                  Property address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  value={f.address}
                  onChange={update('address')}
                  placeholder="123 Main St, Miami, FL 33133"
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-400 font-semibold py-4 rounded-lg text-base hover:opacity-95 cursor-pointer"
              >
                Get my home value
              </button>
              <p className="text-center text-sm text-luxury-600">Step 1 of 2</p>
            </form>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-luxury-600 truncate">{f.address}</span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-gold-600 font-semibold shrink-0 ml-3 cursor-pointer"
                >
                  Change
                </button>
              </div>

              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={f.name}
                  onChange={update('name')}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={f.phone}
                  onChange={update('phone')}
                  placeholder={PHONE_DISPLAY}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="font-normal text-luxury-500">(phone or email is required)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={f.email}
                  onChange={update('email')}
                  placeholder="name@example.com"
                  className={inputClass}
                />
              </div>

              <p role="alert" aria-live="polite" className="text-red-600 text-sm font-medium empty:hidden">
                {error}
              </p>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-400 font-semibold py-4 rounded-lg text-base hover:opacity-95 disabled:opacity-60 cursor-pointer"
              >
                {status === 'sending' ? 'Sending…' : 'Send my request'}
              </button>

              <p className="text-xs text-slate-500 leading-normal">
                By submitting, you consent to receive calls or SMS messages from Jose Anzola regarding your inquiry. Messaging/data rates may apply. Consent is not a condition of service.
              </p>
            </form>
          )}
        </div>

        {/* Visible contact details */}
        <ContactLinks className="mt-6" />

        <ul className="mt-6 space-y-2 text-center text-luxury-700 text-base">
          <li>A personal analysis from Jose, not an automated estimate</li>
          <li>Free, with no pressure to list</li>
          <li>Local Compass agent serving Miami and South Florida</li>
        </ul>


      </main>

      {/* Sticky call/text bar on phones */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-3 flex gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex-1 text-center py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 font-semibold text-sm"
        >
          Call Jose
        </a>
        <a
          href={`sms:${PHONE_TEL}`}
          className="flex-1 text-center py-3 rounded-lg border border-slate-300 font-semibold text-sm"
        >
          Text Jose
        </a>
      </div>
    </div>
  )
}
