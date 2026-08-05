import { createFileRoute, Link } from '@tanstack/react-router'
import { LegalPage, LegalP, LegalList, type LegalSection } from '../components/LegalPage'

export const Route = createFileRoute('/terms-and-conditions')({
  component: TermsAndConditions,
  head: () => ({
    meta: [
      { title: 'Terms & Conditions | Jose Anzola | Compass Miami Real Estate' },
      {
        name: 'description',
        content:
          'Terms and conditions for the use of Jose Anzola\'s Compass Miami real estate website, including MLS/IDX listing accuracy, intellectual property, fair housing commitment, and limitation of liability.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
  }),
})

const EFFECTIVE_DATE = 'August 5, 2026'

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: (
      <>
        <LegalP>
          This website is operated by Jose Anzola, a licensed real estate agent affiliated with
          Compass in Miami, Florida ("we," "us," or "our"). By accessing or using this website, you
          agree to these Terms and Conditions and to our{' '}
          <Link
            to="/privacy-policy"
            className="text-gold-600 hover:text-gold-700 underline underline-offset-2 transition"
          >
            Privacy Policy
          </Link>
          . If you do not agree, please do not use the website.
        </LegalP>
        <LegalP>
          We may revise these Terms at any time. Changes take effect when posted, and your continued
          use of the website constitutes acceptance of the revised Terms.
        </LegalP>
      </>
    ),
  },
  {
    id: 'permitted-use',
    title: 'Permitted Use of the Website',
    body: (
      <>
        <LegalP>
          This website is provided for your personal, non-commercial use in learning about real
          estate services and identifying properties you may be interested in buying, selling, or
          renting. You agree not to:
        </LegalP>
        <LegalList
          items={[
            'Copy, scrape, harvest, frame, mirror, or redistribute any portion of the website or its listing content, whether manually or by automated means such as bots, crawlers, or data-extraction tools.',
            'Use the website or any listing data for any commercial purpose, including compiling a competing property database or generating leads for another brokerage or service.',
            'Attempt to gain unauthorized access to the website, its servers, or any connected system, or interfere with its normal operation or security.',
            'Submit false, misleading, or fraudulent information through any form, or submit another person\'s information without their permission.',
            'Use the website in any way that violates applicable federal, state, or local law, or the rules of any Multiple Listing Service whose data appears on the site.',
          ]}
        />
        <LegalP>
          We may suspend or terminate access to the website, without notice, for any use that
          violates these Terms.
        </LegalP>
      </>
    ),
  },
  {
    id: 'no-agency-relationship',
    title: 'No Brokerage Relationship or Professional Advice',
    body: (
      <>
        <LegalP>
          Using this website, submitting a form, or exchanging messages with us does not by itself
          create a brokerage, agency, or fiduciary relationship. A real estate relationship is formed
          only through a written agreement signed by you and the appropriate parties, in accordance
          with Florida law and Compass brokerage policy.
        </LegalP>
        <LegalP>
          Content on this website — including market commentary, valuation estimates, neighborhood
          information, and general guidance about buying, selling, or investing — is provided for
          informational purposes only. It is not legal, tax, accounting, appraisal, engineering,
          insurance, or investment advice. You should consult qualified professionals before making
          any real estate decision, and you should obtain independent inspections, surveys, and title
          review for any property you intend to purchase.
        </LegalP>
      </>
    ),
  },
  {
    id: 'listing-accuracy',
    title: 'Accuracy of MLS / IDX Listing Data',
    body: (
      <>
        <LegalP>
          Property listings displayed on this website may be supplied in whole or in part through
          Internet Data Exchange (IDX) feeds from local Multiple Listing Services (MLS) serving Miami
          and South Florida. That information originates with listing brokers and third-party sources
          — not with us — and is provided on an "as is, as available" basis.
        </LegalP>
        <LegalList
          items={[
            'All listing information, including price, status, square footage, lot size, room count, year built, taxes, association fees, zoning, school assignments, and photographs, is deemed reliable but is not guaranteed and should be independently verified.',
            'Listings may be delayed, incomplete, or out of date. A property shown as available may already be under contract, withdrawn, or sold, and prices are subject to change without notice.',
            'Measurements and floor plans are approximate. Renderings, virtual staging, and photographs may not reflect the current condition of a property.',
            'Nothing on this website constitutes an appraisal or a guarantee of value. Automated or general valuation figures are estimates only.',
            'IDX content is for consumers\' personal, non-commercial use in identifying prospective properties and may not be used for any other purpose. Some listings may be marketed by other brokerages, and each remains the property of its listing broker.',
            'We reserve the right to correct or remove listing content at any time, including at the direction of the applicable MLS or listing broker.',
          ]}
        />
        <LegalP>
          Buyers and sellers are responsible for verifying all material facts through their own
          inspections, professional advisors, and public records before relying on any information
          presented here.
        </LegalP>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: (
      <>
        <LegalP>
          Except for third-party content identified below, the design, text, graphics, photography,
          video, layout, and code of this website are owned by or licensed to Jose Anzola and are
          protected by United States copyright, trademark, and other intellectual property laws. You
          may view and print pages for your personal, non-commercial use only. Any other
          reproduction, modification, distribution, republication, or creation of derivative works
          requires our prior written permission.
        </LegalP>
        <LegalList
          items={[
            'The "Compass" name, logo, and related marks are the property of Compass, Inc. and are used in accordance with its brand guidelines. Jose Anzola is an agent affiliated with Compass and is not the owner of those marks.',
            'MLS listing data, listing photographs, and associated compilations remain the property of the applicable MLS, listing broker, or photographer and are used under license.',
            'Other product names, logos, and trademarks appearing on this website belong to their respective owners and are used for identification only.',
          ]}
        />
        <LegalP>
          If you believe content on this website infringes your copyright, please contact us with a
          description of the material and its location, and we will investigate and respond promptly.
        </LegalP>
      </>
    ),
  },
  {
    id: 'fair-housing',
    title: 'Fair Housing Commitment',
    body: (
      <>
        <LegalP>
          We are fully committed to the letter and spirit of United States policy for the achievement
          of equal housing opportunity throughout the nation. Jose Anzola and Compass support and
          comply with the federal Fair Housing Act, the Americans with Disabilities Act, the Florida
          Fair Housing Act, and applicable Miami-Dade County fair housing ordinances.
        </LegalP>
        <LegalP>
          We do not discriminate in the sale, rental, financing, or marketing of housing, or in the
          provision of real estate brokerage services, on the basis of race, color, religion, sex,
          handicap or disability, familial status, national origin, or any other characteristic
          protected by applicable federal, state, or local law.
        </LegalP>
        <LegalP>
          Descriptions of properties and neighborhoods on this website are intended to describe the
          property itself and never to indicate a preference for, or steer any person toward or away
          from, any community based on a protected characteristic. School information, demographic
          references, and neighborhood commentary from third-party sources are provided for general
          informational purposes only and should be independently verified by each buyer according to
          their own needs. Every inquiry received through this website is handled equally.
        </LegalP>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links and Services',
    body: (
      <LegalP>
        This website may link to or embed third-party websites and services, including MLS search
        tools, mortgage calculators, mapping providers, scheduling tools, review platforms, and
        social media. Those services are controlled by others, and we do not endorse and are not
        responsible for their content, accuracy, availability, terms, or privacy practices. Your use
        of a third-party service is governed by that provider's own terms.
      </LegalP>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Disclaimers and Limitation of Liability',
    body: (
      <>
        <LegalP>
          This website and all content on it are provided "as is" and "as available," without
          warranties of any kind, whether express or implied. To the fullest extent permitted by law,
          we disclaim all warranties, including implied warranties of merchantability, fitness for a
          particular purpose, title, non-infringement, and any warranty that the website will be
          uninterrupted, secure, error-free, or that content — including listing data — will be
          accurate, complete, or current.
        </LegalP>
        <LegalP>
          To the fullest extent permitted by law, Jose Anzola, Compass, and their respective
          affiliates, agents, employees, and content providers will not be liable for any indirect,
          incidental, special, consequential, exemplary, or punitive damages, or for any lost
          profits, lost opportunities, or lost data, arising out of or related to your use of this
          website or your reliance on any information obtained from it — including inaccurate or
          delayed MLS or IDX listing data — even if advised of the possibility of such damages.
        </LegalP>
        <LegalP>
          Where liability cannot be excluded, our total aggregate liability relating to the website
          is limited to one hundred U.S. dollars ($100). Nothing in these Terms limits any liability
          that cannot lawfully be limited, including obligations arising under Florida real estate
          licensing law in connection with an actual brokerage engagement. Some jurisdictions do not
          allow certain exclusions of warranties or limitations of liability, so portions of this
          section may not apply to you.
        </LegalP>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    body: (
      <LegalP>
        You agree to indemnify and hold harmless Jose Anzola and Compass, and their respective
        affiliates, agents, and employees, from any claims, losses, liabilities, damages, costs, and
        expenses — including reasonable attorneys' fees — arising out of your use of this website,
        your breach of these Terms, or your violation of any applicable law or the rights of any
        third party.
      </LegalP>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Severability',
    body: (
      <LegalP>
        These Terms are governed by the laws of the State of Florida, without regard to its conflict
        of law rules. Any dispute arising out of or relating to this website or these Terms will be
        brought exclusively in the state or federal courts located in Miami-Dade County, Florida, and
        you consent to the jurisdiction of those courts. If any provision of these Terms is found
        unenforceable, that provision will be limited or removed to the minimum extent necessary and
        the remaining provisions will stay in full force. These Terms, together with the Privacy
        Policy, constitute the entire agreement between you and us regarding your use of this
        website.
      </LegalP>
    ),
  },
]

function TermsAndConditions() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="The terms that govern the use of this website."
      intro="Please read these terms carefully. They cover how this website may be used, how to interpret MLS and IDX listing information, intellectual property, our fair housing commitment, and the limits of our liability."
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
    />
  )
}
