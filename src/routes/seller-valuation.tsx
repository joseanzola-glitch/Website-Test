import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PhoneIcon, MailIcon } from '../components/Icons'

export const Route = createFileRoute('/seller-valuation')({
  component: SellerValuation,
  head: () => ({
    meta: [
      { title: 'Home Valuation | Jose Anzola Compass Real Estate' },
      { name: 'description', content: 'Discover What Your Home Could Sell For' },
    ],
  }),
})

function SellerValuation() {
  const [submitted, setSubmitted] = useState(false)
  const [contactMethod, setContactMethod] = useState({ phone: '', email: '' })
  const [contactError, setContactError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!contactMethod.phone.trim() && !contactMethod.email.trim()) {
      setContactError('Please provide either a phone number or an email address.')
      return
    }

    setContactError('')
    const form = e.currentTarget
    const formData = new FormData(form)

    // Force Netlify to recognize the form submission name explicitly
    formData.set('form-name', 'seller-valuation')

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then((res) => {
        if (res.ok) {
          // CHATGPT ADS PIXEL EVENT
          if (typeof window !== 'undefined' && (window as any).oaiq) {
            (window as any).oaiq('measure', 'lead_created', { type: 'customer_action' })
          }
          setSubmitted(true)
        } else {
          alert('Form submission failed at server. Please try again.')
        }
      })
      .catch((error) => alert('Submission failed. Please try again: ' + error))
  }

  return (
    <div className="bg-white text-luxury-950 py-16 px-6 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        
        {/* Hidden static form for Netlify build scanner */}
        <form name="seller-valuation" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="seller-valuation" />
          <input type="text" name="bot-field" />
          <input type="text" name="address" />
          <input type="text" name="name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        {/* HEADLINE */}
        <div className="text-center mb-10">
          <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-3">
            Home Valuation & Market Analysis
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Discover What Your Home Could Sell For
          </h1>
          <p className="text-luxury-600 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Receive a personal pricing analysis and selling strategy from Jose, local Compass Real Estate Agent. No pressure and no obligation.
          </p>
        </div>

        {/* FORM CONTAINER */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-10 shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Request Received!</h3>
              <p className="text-luxury-600 text-sm mb-6">
                Thank you. Jose will respond personally as soon as possible.
              </p>
              <div className="pt-4 border-t border-slate-200 text-xs text-luxury-500">
                Need immediate assistance? Call <a href="tel:+13059045613" className="text-gold-600 font-semibold hover:underline">(305) 904-5613</a>
              </div>
            </div>
          ) : (
            <form 
              name="seller-valuation" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="seller-valuation" />
              <p className="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-700 mb-1">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="123 Main St, Miami, FL 33133"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500 text-sm"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactMethod.phone}
                    onChange={(e) => {
                      setContactMethod({ ...contactMethod, phone: e.target.value })
                      if (contactError) setContactError('')
                    }}
                    placeholder="(305) 904-5613"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactMethod.email}
                    onChange={(e) => {
                      setContactMethod({ ...contactMethod, email: e.target.value })
                      if (contactError) setContactError('')
                    }}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>
              </div>

              {contactError && (
                <p className="text-red-500 text-xs font-medium">{contactError}</p>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-700 mb-1">
                  Optional Message / Property Details
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Renovations, timeline, or specific questions..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-gold-500 text-sm"
                />
              </div>

              <p className="text-[11px] text-slate-500 leading-normal pt-2">
                By submitting, you consent to receive calls or SMS messages from Jose Anzola regarding your inquiry. Messaging/data rates may apply. Consent is not a condition of service.
              </p>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-400 text-luxury-950 font-semibold py-4 rounded-lg uppercase tracking-widest text-xs hover:opacity-95 transition-opacity cursor-pointer mt-2"
              >
                Request My Home Valuation
              </button>

              <p className="text-center text-xs text-luxury-600 font-medium pt-2">
                Jose will respond personally as soon as possible.
              </p>
            </form>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-xs text-luxury-600 font-medium">
          <a href="tel:+13059045613" className="inline-flex items-center gap-2 hover:text-gold-600 transition-colors">
            <PhoneIcon className="w-4 h-4 text-gold-600" />
            <span>(305) 904-5613</span>
          </a>
          <span>&middot;</span>
          <a href="mailto:jose.anzola@compass.com" className="inline-flex items-center gap-2 hover:text-gold-600 transition-colors">
            <MailIcon className="w-4 h-4 text-gold-600" />
            <span>jose.anzola@compass.com</span>
          </a>
        </div>

      </div>
    </div>
  )
}
