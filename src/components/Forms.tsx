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
        <CheckIcon className="w-8 h-8 text-gold-400" />
      </div>
      <h3 className="font-serif text-2xl text-white mb-3">{title}</h3>
      <p className="text-luxury-200 max-w-sm mx-auto">{body}</p>
    </div>
  )
}

const inputClasses =
  'w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-luxury-300 rounded-lg focus:outline-none focus:border-gold-400 focus:bg-white/8 transition-all duration-300 text-sm'

const labelClasses =
  'block text-xs font-medium text-luxury-200 mb-2 uppercase tracking-wider'

const inputLightClasses =
  'w-full px-5 py-4 bg-white border border-luxury-100 text-luxury-900 placeholder-luxury-300 rounded-lg focus:outline-none focus:border-gold-500 transition-all duration-300 text-sm'

const labelLightClasses =
  'block text-xs font-medium text-luxury-500 mb-2 uppercase tracking-wider'

export function ContactForm({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isLight = theme === 'light'
  const inp = isLight ? inputLightClasses : inputClasses
  const lab = isLight ? labelLightClasses : labelClasses

  const [fields, setFields] = useState({ name: '', email: '', phone: '', interest: 'General inquiry', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await submitForm('contact', fields)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await submitForm('schedule-showing', fields)
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
      <button type="submit" disabled={loading} className="btn-gold w-full py-4 rounded-lg text-base tracking-wide cursor-pointer disabled:opacity-60">
        {loading ? 'Requesting...' : 'Request Showing'}
      </button>
    </form>
  )
}
