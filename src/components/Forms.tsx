import { useState } from 'react'
import { CheckIcon } from './Icons'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

async function submitForm(formName: string, data: Record<string, string>) {
  await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': formName, ...data }),
  })
}

function SuccessMessage({ title, body }: { title: string; body: string }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-500/20 flex items-center justify-center">
        <CheckIcon className="w-8 h-8 text-gold-600" />
      </div>
      <h3 className="font-serif text-2xl text-luxury-950 mb-3">{title}</h3>
      <p className="text-luxury-600 max-w-sm mx-auto">{body}</p>
    </div>
  )
}

const inputClasses =
  'w-full px-5 py-4 bg-luxury-950/5 border border-luxury-950/10 text-luxury-950 placeholder-luxury-300 rounded-lg focus:outline-none focus:border-gold-400 focus:bg-luxury-950/5 transition-all duration-300 text-sm'

const labelClasses =
  'block text-xs font-medium text-luxury-600 mb-2 uppercase tracking-wider'

const inputLightClasses =
  'w-full px-5 py-4 bg-white border border-luxury-100 text-luxury-900 placeholder-luxury-300 rounded-lg focus:outline-none focus:border-gold-500 transition-all duration-300 text-sm'

const labelLightClasses =
  'block text-xs font-medium text-luxury-500 mb-2 uppercase tracking-wider'

const PRIVACY_POLICY_URL = 'https://joseguillermoanzola.com/privacy-policy'
const TERMS_URL = 'https://joseguillermoanzola.com/terms-and-conditions'

function SmsConsentCheckbox({
  checked,
  onChange,
  required,
  isLight,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
  required: boolean
  isLight: boolean
}) {
  const linkClasses = 'underline underline-offset-2 text-gold-600 hover:text-gold-500 transition-colors duration-300'

  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        name="consent"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required={required}
        aria-required={required}
        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-gold-500"
      />
      <span className={`${isLight ? 'text-luxury-500' : 'text-luxury-400'} text-xs leading-relaxed`}>
        By clicking &quot;Submit&quot;, I agree to be contacted by Jose Anzola at Compass via text messages (SMS/MMS),
        phone calls, and email regarding real estate services at the number provided. Messages may be automated. Consent
        is not required as a condition of purchase. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to
        opt-out at any time. Read our{' '}
        <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className={linkClasses}>
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className={linkClasses}>
          Terms of Service
        </a>
        .
      </span>
    </label>
  )
}

export function ContactForm({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isLight = theme === 'light'
  const inp = isLight ? inputLightClasses : inputClasses
  const lab = isLight ? labelLightClasses : labelClasses

  const [fields, setFields] = useState({ name: '', email: '', phone: '', interest: 'General inquiry', message: '' })
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Phone is optional on this form, so consent is only required once a number is provided.
  const consentRequired = fields.phone.trim().length > 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (consentRequired && !consent) return
    setLoading(true)
    await submitForm('contact', { ...fields, consent: consent ? 'Yes' : 'No' })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <SuccessMessage
        title="Message Received"
        body="Jose will be in touch within 24 hours. Expect a thoughtful, tailored response."
      />
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this: <input name="bot-field" />
        </label>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lab}>Full Name *</label>
          <input type="text" name="name" value={fields.name} onChange={handleChange} required className={inp} />
        </div>
        <div>
          <label className={lab}>Email *</label>
          <input type="email" name="email" value={fields.email} onChange={handleChange} required className={inp} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lab}>Phone</label>
          <input type="tel" name="phone" value={fields.phone} onChange={handleChange} placeholder="(305) 000-0000" className={inp} />
        </div>
        <div>
          <label className={lab}>I'm interested in</label>
          <select name="interest" value={fields.interest} onChange={handleChange} className={inp}>
            <option>General inquiry</option>
            <option>Selling a home</option>
            <option>Buying a home</option>
            <option>Investment properties</option>
          </select>
        </div>
      </div>
      <div>
        <label className={lab}>Message *</label>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell me about your real estate goals..."
          className={`${inp} resize-none`}
        />
      </div>
      <SmsConsentCheckbox checked={consent} onChange={setConsent} required={consentRequired} isLight={isLight} />
      <button type="submit" disabled={loading} className="btn-gold w-full py-4 rounded-lg text-base tracking-wide cursor-pointer disabled:opacity-60">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      <p className={`${isLight ? 'text-luxury-400' : 'text-luxury-400'} text-xs text-center`}>
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  )
}

export function ShowingForm({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isLight = theme === 'light'
  const inp = isLight ? inputLightClasses : inputClasses
  const lab = isLight ? labelLightClasses : labelClasses

  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    date: '',
    time: 'Morning',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [consent, setConsent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Phone is a required field on this form, so consent is always required.
    if (!consent) return
    setLoading(true)
    await submitForm('schedule-showing', { ...fields, consent: consent ? 'Yes' : 'No' })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <SuccessMessage
        title="Showing Requested"
        body="Jose will confirm your showing time and property access shortly."
      />
    )
  }

  return (
    <form
      name="schedule-showing"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="schedule-showing" />
      <p className="hidden">
        <label>
          Don't fill this: <input name="bot-field" />
        </label>
      </p>
      <div>
        <label className={lab}>Property Address or MLS # *</label>
        <input type="text" name="property" value={fields.property} onChange={handleChange} required className={inp} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={lab}>Preferred Date</label>
          <input type="date" name="date" value={fields.date} onChange={handleChange} className={inp} />
        </div>
        <div>
          <label className={lab}>Time of Day</label>
          <select name="time" value={fields.time} onChange={handleChange} className={inp}>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Weekend</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lab}>Full Name *</label>
          <input type="text" name="name" value={fields.name} onChange={handleChange} required className={inp} />
        </div>
        <div>
          <label className={lab}>Email *</label>
          <input type="email" name="email" value={fields.email} onChange={handleChange} required className={inp} />
        </div>
      </div>
      <div>
        <label className={lab}>Phone *</label>
        <input type="tel" name="phone" value={fields.phone} onChange={handleChange} required className={inp} />
      </div>
      <div>
        <label className={lab}>Notes</label>
        <textarea
          name="notes"
          value={fields.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Anything specific you'd like me to highlight during the showing?"
          className={`${inp} resize-none`}
        />
      </div>
      <SmsConsentCheckbox checked={consent} onChange={setConsent} required isLight={isLight} />
      <button type="submit" disabled={loading} className="btn-gold w-full py-4 rounded-lg text-base tracking-wide cursor-pointer disabled:opacity-60">
        {loading ? 'Requesting...' : 'Request Showing'}
      </button>
    </form>
  )
}
