import { useState } from 'react'
import { ChatIcon } from './Icons'

export function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-luxury-950 flex items-center justify-center shadow-xl hover:shadow-gold-400/30 hover:scale-105 transition-all"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <ChatIcon className="w-6 h-6" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)] bg-luxury-900 border border-gold-400/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-gold-500/20 to-gold-400/10 px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-luxury-950 font-serif font-bold text-sm">
                JA
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Chat with Jose</div>
                <div className="text-gold-400 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Usually replies within minutes
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-luxury-100">
              Hi! I'm Jose. How can I help you today?
            </div>
            <div className="grid grid-cols-1 gap-2">
              <a
                href="/sell"
                className="text-left bg-gold-400/10 border border-gold-400/20 hover:bg-gold-400/20 text-white rounded-lg px-4 py-3 text-sm transition"
              >
                I'm thinking about selling
              </a>
              <a
                href="/buy"
                className="text-left bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg px-4 py-3 text-sm transition"
              >
                I'm looking to buy
              </a>
              <a
                href="/contact"
                className="text-left bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg px-4 py-3 text-sm transition"
              >
                Schedule a consultation
              </a>
              <a
                href="tel:+13055550000"
                className="text-left bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg px-4 py-3 text-sm transition"
              >
                Call me directly
              </a>
            </div>
          </div>
          <div className="px-5 pb-5">
            <p className="text-luxury-400 text-xs text-center">
              Powered by Compass &middot; Live chat integration placeholder
            </p>
          </div>
        </div>
      )}
    </>
  )
}
