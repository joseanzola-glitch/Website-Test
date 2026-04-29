import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ChatWidget } from '../components/ChatWidget'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Jose Anzola | Miami Real Estate Agent | Compass' },
      {
        name: 'description',
        content:
          "Jose Anzola is a Compass real estate agent in Miami helping homeowners sell for top dollar. Serving sellers, buyers, and investors across South Florida.",
      },
      {
        name: 'keywords',
        content:
          'Miami real estate, sell home Miami, Compass real estate agent, South Florida realtor, Jose Anzola, investment properties Miami',
      },
      { property: 'og:title', content: 'Jose Anzola | Miami Real Estate Agent | Compass' },
      {
        property: 'og:description',
        content: "Helping Miami homeowners sell for top dollar. Trusted buyers, sellers, and investor advisor at Compass.",
      },
    ],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
})

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
