import { createFileRoute } from '@tanstack/react-router'
import { LegalPage, LegalP, LegalList, type LegalSection } from '../components/LegalPage'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Jose Anzola | Compass Miami Real Estate' },
      {
        name: 'description',
        content:
          'How Jose Anzola, real estate agent with Compass in Miami, collects, uses, and protects information submitted through this website, including contact forms, cookies, and MLS/IDX property searches.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
  }),
})

const EFFECTIVE_DATE = 'August 5, 2026'

const sections: LegalSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    body: (
      <>
        <LegalP>
          This Privacy Policy explains how Jose Anzola, a licensed real estate agent affiliated with
          Compass in Miami, Florida ("we," "us," or "our"), handles information collected through
          this website. It applies to this website only and not to any third-party website or
          service that may be linked from it.
        </LegalP>
        <LegalP>
          By using this website, submitting a form, or contacting us by email, phone, or text, you
          consent to the practices described in this Privacy Policy. If you do not agree, please
          discontinue use of the website.
        </LegalP>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: (
      <>
        <LegalP>
          We collect information you provide voluntarily, as well as limited technical information
          collected automatically when you browse the site.
        </LegalP>
        <p className="text-luxury-950 font-semibold mb-3">Information you provide directly</p>
        <LegalList
          items={[
            'Contact details submitted through contact forms, home valuation requests, buyer or seller inquiries, and consultation requests — typically your name, email address, and phone number.',
            'The content of your message, including property preferences, price range, timeline, neighborhoods of interest, and the address of a property you may wish to sell.',
            'Information you send us by email, phone call, text message, or through the website chat assistant.',
            'Optional details you choose to share during the course of a real estate transaction or consultation.',
          ]}
        />
        <p className="text-luxury-950 font-semibold mb-3">Information collected automatically</p>
        <LegalList
          items={[
            'Standard server and log data such as IP address, browser type, device type, operating system, referring page, and the pages you view.',
            'General geographic location inferred from your IP address, used to present relevant market information.',
            'Interaction data such as which listings or pages you view and how long you spend on them.',
          ]}
        />
        <LegalP>
          We do not knowingly collect information from children under 13, and we do not request
          sensitive categories of personal information such as Social Security numbers or financial
          account numbers through this website. Documents required for a transaction are handled
          through Compass systems and secure transaction platforms rather than this site.
        </LegalP>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    body: (
      <>
        <LegalP>Information collected through this website is used to:</LegalP>
        <LegalList
          items={[
            'Respond to your inquiry and provide the real estate services, market information, or property details you requested.',
            'Prepare home valuations, comparative market analyses, and property recommendations.',
            'Send listing alerts, market updates, or follow-up communications where you have requested them or where we have an existing business relationship with you.',
            'Operate, maintain, secure, and improve the website and its content.',
            'Comply with Florida real estate licensing obligations, brokerage record-keeping requirements, and other applicable law.',
          ]}
        />
        <LegalP>
          We do not sell your personal information. We do not rent or trade your contact details to
          unrelated third parties for their own marketing purposes.
        </LegalP>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and Similar Technologies',
    body: (
      <>
        <LegalP>
          This website uses cookies and similar technologies — small data files stored by your
          browser — to keep the site functioning correctly and to understand how visitors use it.
          The cookies used fall into the following general categories:
        </LegalP>
        <LegalList
          items={[
            'Essential cookies, which support core functions such as page navigation, security, and remembering that a form has been submitted.',
            'Preference cookies, which remember choices such as saved searches or recently viewed properties.',
            'Analytics cookies, which help us measure traffic and understand which pages and listings are most useful to visitors.',
          ]}
        />
        <LegalP>
          Most browsers let you refuse or delete cookies through their settings. Blocking cookies may
          cause parts of this website — including property search and form submission — to function
          incorrectly. Some browsers also offer a "Do Not Track" signal; because no common industry
          standard for responding to that signal exists, this website does not currently respond to
          it.
        </LegalP>
      </>
    ),
  },
  {
    id: 'mls-idx-searches',
    title: 'MLS / IDX Property Search Data',
    body: (
      <>
        <LegalP>
          Property listing information on this website may be provided through Internet Data Exchange
          (IDX) feeds from local Multiple Listing Services (MLS) serving Miami-Dade, Broward, and
          surrounding South Florida counties. IDX content is displayed under the rules of the
          applicable MLS and is intended solely for the personal, non-commercial use of consumers
          identifying properties they may be interested in buying or renting.
        </LegalP>
        <LegalList
          items={[
            'Search criteria you enter — such as location, price range, bedroom count, or property type — may be retained so we can respond to your inquiry, save your search, or send you matching listings.',
            'If you create a saved search or request listing alerts, we retain the criteria and your contact details for as long as needed to deliver those alerts, until you unsubscribe.',
            'Listing data itself originates with the MLS and participating brokerages. It is licensed to us for display and remains subject to MLS rules, including required refresh intervals and takedown requests.',
            'MLS and IDX providers may receive limited technical information necessary to serve listing content and photos to your browser, and may apply their own compliance, audit, and fraud-prevention measures.',
          ]}
        />
        <LegalP>
          We do not use your property search activity to make automated decisions about you, and we
          do not use it in any manner inconsistent with fair housing law. All inquiries are handled
          without regard to race, color, religion, sex, handicap, familial status, national origin,
          or any other protected class.
        </LegalP>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Analytics and Service Providers',
    body: (
      <>
        <LegalP>
          We use a limited number of third-party providers to operate this website and to understand
          how it is used. These providers may collect or process information on our behalf, subject
          to their own privacy policies:
        </LegalP>
        <LegalList
          items={[
            'Website hosting and content delivery providers, which process server logs and IP addresses in order to deliver pages and protect against abuse.',
            'Analytics providers, which use cookies and similar identifiers to report aggregate traffic patterns, page performance, and referral sources.',
            'Email, form-delivery, and customer relationship tools used to receive and respond to your inquiries.',
            'MLS and IDX listing providers that supply property data displayed on the site.',
            'Compass, the licensed brokerage with which Jose Anzola is affiliated, for transaction management, compliance, and record-keeping as required by law and brokerage policy.',
            'Advertising and social media platforms, where we run marketing campaigns; these platforms may set their own cookies and measure ad performance.',
          ]}
        />
        <LegalP>
          We may also disclose information where required by law, subpoena, or court order; to
          protect our legal rights or the safety of others; to investigate fraud or misuse; or in
          connection with a sale or reorganization of the business. Links to third-party websites are
          provided for convenience only, and we are not responsible for their privacy practices.
        </LegalP>
      </>
    ),
  },
  {
    id: 'communications',
    title: 'Email, Text, and Call Communications',
    body: (
      <>
        <LegalP>
          By providing your phone number or email address, you agree that we may contact you about
          your inquiry and about real estate matters by phone, text message, or email. Message and
          data rates may apply to text messages.
        </LegalP>
        <LegalP>
          You may opt out at any time — reply STOP to text messages, use the unsubscribe link in any
          marketing email, or email{' '}
          <a
            href="mailto:jose.anzola@compass.com"
            className="text-gold-600 hover:text-gold-700 underline underline-offset-2 transition"
          >
            jose.anzola@compass.com
          </a>{' '}
          with your request. We may still need to contact you regarding an active transaction or a
          legal obligation after you opt out of marketing messages.
        </LegalP>
      </>
    ),
  },
  {
    id: 'data-retention-security',
    title: 'Data Retention and Security',
    body: (
      <>
        <LegalP>
          We retain inquiry and transaction information for as long as necessary to provide our
          services and to satisfy Florida real estate record-retention requirements and brokerage
          policy, after which it is deleted or archived.
        </LegalP>
        <LegalP>
          We use reasonable administrative and technical safeguards — including encrypted connections
          and access controls — to protect the information we hold. No method of transmission or
          storage over the internet is completely secure, however, and we cannot guarantee absolute
          security. Please do not send sensitive financial information such as bank account or Social
          Security numbers through website forms or unencrypted email.
        </LegalP>
      </>
    ),
  },
  {
    id: 'your-choices',
    title: 'Your Choices and Rights',
    body: (
      <>
        <LegalP>
          You may request access to, correction of, or deletion of the personal information we hold
          about you, and you may ask us to stop sending marketing communications. Depending on where
          you live, you may have additional rights under applicable privacy law.
        </LegalP>
        <LegalP>
          To make a request, contact us using the details below. We may need to verify your identity
          before acting, and we may retain information we are required to keep by law or brokerage
          record-keeping rules.
        </LegalP>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: (
      <LegalP>
        We may update this Privacy Policy from time to time to reflect changes in our practices, the
        services offered on this website, or applicable law. Revisions take effect when posted, and
        the effective date above will be updated accordingly. Please review this page periodically.
      </LegalP>
    ),
  },
]

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How your information is collected and protected."
      intro="Your privacy matters. This policy explains what information this website collects, how it is used, and the choices available to you when working with Jose Anzola and Compass in Miami."
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
    />
  )
}
