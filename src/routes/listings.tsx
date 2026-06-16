import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRightIcon, SearchIcon } from '../components/Icons'

export const Route = createFileRoute('/listings')({
  component: Listings,
  head: () => ({
    meta: [
      { title: 'Featured Listings | Jose Anzola Compass Miami' },
      {
        name: 'description',
        content: 'Browse active and recently sold listings represented by Jose Anzola at Compass in Miami and South Florida.',
      },
    ],
  }),
})

type Status = 'All' | 'Active' | 'Sold'

const listings = [
  { status: 'Active', price: '$2,590,000', beds: 4, baths: 5, sqft: '2,666', address: '67 NW 109th St, Miami Shores, FL 33168', neighborhood: 'Miami Shores', image: '/67NW.jpg' },
  { status: 'Active', price: '$799,000', beds: 3, baths: 2, sqft: '1,500', address: '2257 SW 11th St, Miami, FL 33135', neighborhood: 'Shenandoah', image: '/2257SW.jpg' },
  { status: 'Active', price: '$3,900,000', beds: 5, baths: 5, sqft: '4,200', address: '21 Venetian Cswy, Miami Beach, FL', neighborhood: 'Venetian Islands', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80' },
  { status: 'Active', price: '$985,000', beds: 2, baths: 2.5, sqft: '1,880', address: '450 Alton Rd #1502, Miami Beach, FL', neighborhood: 'South Beach', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80' },
  { status: 'Sold', price: '$3,200,000', beds: 6, baths: 6, sqft: '4,850', address: '89 Palm Island, Miami Beach, FL', neighborhood: 'Palm Island', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80' },
  { status: 'Sold', price: '$1,295,000', beds: 3, baths: 3, sqft: '2,180', address: '321 Ocean Dr, Key Biscayne, FL', neighborhood: 'Key Biscayne', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80' },
  { status: 'Sold', price: '$1,650,000', beds: 4, baths: 3, sqft: '2,750', address: '765 Anastasia Ave, Coral Gables, FL', neighborhood: 'Coral Gables', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80' },
  { status: 'Sold', price: '$875,000', beds: 3, baths: 2, sqft: '1,920', address: '5432 NW 107 Ave, Doral, FL', neighborhood: 'Doral', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80' },
]

function Listings() {
  const [filter, setFilter] = useState<Status>('All')
  const filtered = listings.filter((l) => filter === 'All' || l.status === filter)

  return (
    <div className="bg-white text-luxury-950">
      <section className="py-20 px-6 border-b border-luxury-950/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Portfolio</div>
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
            Featured Listings
          </h1>
          <p className="text-luxury-600 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12">
            A selection of active and recently sold homes across Miami and South Florida.
          </p>

          {/* NEW PREMIUM LIVE MLS PORTAL ACCESS BOX */}
          <div className="max-w-xl mx-auto mb-16 p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-600">
                <SearchIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-luxury-950">Search Entire Miami MLS</h3>
                <p className="text-luxury-500 text-xs font-light">Access thousands of live real-time properties</p>
              </div>
            </div>
            <a 
              href="<iframe src="https://sef.mlsmatrix.com/Matrix/public/IDX.aspx?idx=1eae1f21" width="100%" height="100%" frameborder="0" marginwidth="0" marginheight="0"></iframe>"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-gold-500 hover:bg-gold-600 text-white font-semibold uppercase tracking-wider text-[10px] px-5 py-3 rounded-lg transition-all shadow-sm hover:-translate-y-0.5 whitespace-nowrap"
            >
              Launch Live Search
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {(['All', 'Active', 'Sold'] as Status[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition cursor-pointer ${
                  filter === f
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-luxury-950'
                    : 'bg-luxury-950/5 border border-luxury-950/10 text-luxury-600 hover:border-gold-400/40'
                }`}
              >
                {f === 'Active' ? 'For Sale' : f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((l) => (
            <div key={l.address} className="group relative overflow-hidden rounded-2xl luxury-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={l.image} alt={l.address} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-4 left-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                  l.status === 'Active'
                    ? 'bg-gold-400 text-luxury-950'
                    : 'bg-white/90 text-gold-600 border border-gold-400/40'
                }`}>
                  {l.status === 'Sold' ? 'Sold' : 'For Sale'}
                </span>
              </div>
              <div className="p-6">
                <div className="text-gold-600 text-xs tracking-widest uppercase mb-2 font-semibold">{l.neighborhood}</div>
                <div className="text-luxury-950 font-serif text-2xl font-bold mb-1">{l.price}</div>
                <div className="text-luxury-500 text-sm mb-3">{l.address}</div>
                <div className="flex gap-3 text-luxury-400 text-xs">
                  <span>{l.beds} BD</span><span>&middot;</span>
                  <span>{l.baths} BA</span><span>&middot;</span>
                  <span>{l.sqft} SQ FT</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-ivory-100 border-t border-luxury-950/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-600">
            <SearchIcon className="w-7 h-7" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-luxury-950 mb-4">
            Looking for something specific?
          </h2>
          <p className="text-luxury-500 text-lg mb-8 font-light">
            Off-market access, private exclusives, and curated matches. Send me your wish list and I'll go find it.
          </p>
          <Link to="/contact" className="btn-gold px-8 py-4 rounded-lg text-base">
            Request a Custom Search
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
