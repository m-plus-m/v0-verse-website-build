import type { Metadata } from 'next'
import { Geist, Geist_Mono, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans"
});

export const metadata: Metadata = {
  title: 'Verse | Global Audience Intelligence, Harmonized',
  description: 'AI-powered audience intelligence that connects research, profiling and media planning. Move from brief to plan across 50+ data providers, 46 countries and 70+ media types.',
  openGraph: {
    title: 'Verse — Global Audience Intelligence, Harmonized',
    description: 'One platform for audience intelligence, audience segmentation, profiling and media planning. Book a demo.',
  },
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Verse?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Verse is an AI-powered audience intelligence platform that connects research, profiling and media planning in one workflow. It brings together three engines — Discover (audience discovery from social and behavioral data), Explore (deep profiling across 50+ data providers) and Plan (cross-channel media planning across 70+ media types in 46 countries). Verse is powered by TelmarHelixa, a B2B audience intelligence company with over 50 years of heritage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is audience intelligence?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Audience intelligence is the practice of collecting, analyzing and activating data about consumer behaviors, preferences, affinities and media consumption to inform marketing strategy, creative development and media planning. Unlike traditional demographic research, audience intelligence platforms like Verse combine social signals, search behavior, survey data and media consumption patterns to build a multidimensional understanding of who audiences are, what they care about and how to reach them."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is Verse different from other audience intelligence platforms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Verse is the only platform that connects audience discovery, deep data profiling and cross-channel media planning in a single integrated workflow. Most competitors offer one of these capabilities — Audiense and Resonate focus on audience discovery, GWI focuses on profiling, and Gemius and Nielsen Media Impact focus on planning. Verse connects all three so teams can move from insight to media plan without rebuilding audiences across disconnected tools. Verse is also data-neutral, meaning it works with any data provider rather than locking users into a single data source."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What data sources does Verse connect to?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Verse connects to 50+ data providers across 46 countries, including MRI Simmons, GWI, Kantar, Comscore, YouGov and many others. The Discover engine also draws from proprietary data sources including social signals, search behavior, browsing activity and app usage. TelmarHelixa's Data Hub processes over 2,500 individual datasets per year across 70+ media types."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who uses Verse?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Verse serves creative agencies looking to win more pitches with data-driven strategies, media agencies building dynamic audiences and planning cross-media campaigns, brands seeking a unified audience definition from research through activation, and media owners who need to respond to briefs faster with deep audience profiling. Customers include major agency holding companies, global brands and leading media owners."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between Verse and TelmarHelixa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TelmarHelixa is the corporate entity — the company behind the technology, data partnerships and platform infrastructure. Verse is the product brand that brings TelmarHelixa's three core products (Discover, Explore and Plan) together under a single AI-powered workflow. TelmarHelixa was formed from the merger of Telmar (media planning, founded 1968) and Helixa (social and behavioral intelligence)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Verse Discover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Verse Discover is a proprietary audience intelligence engine that uses social signals, search behavior, browsing data and app usage to identify and understand audiences. Unlike platforms dependent on a single social network, Discover draws from multiple behavioral data sources. It supports audience segmentation, cultural trend detection, influencer identification, competitive benchmarking and persona generation. Discover also connects to activation partners for direct campaign deployment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Verse Explore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Verse Explore is an enterprise data mining platform that enables deep audience profiling across 50+ data providers in a single workspace. Users can run advanced statistical analysis including factor analysis, clustering and correspondence analysis without coding. Explore accesses over 300 consumer, brand and media research releases and generates custom visualizations in seconds. Audience segments transfer directly from Explore into Plan for media planning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Verse Plan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Verse Plan is a cross-channel media planning solution that determines optimal reach, frequency and channel mix across 70+ media types in 46 countries. It combines consumer, channel and measurement data using proprietary methodology to produce unified cross-media plans spanning TV, digital, OOH, audio, print and emerging channels. Plan is the only media planning platform to incorporate ESG scores into planning optimization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I get a demo of Verse?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can request a demo of Verse by visiting verse.telmarhelixa.com and clicking Book a Demo. A member of the team will walk you through how Discover, Explore and Plan work together to connect audience intelligence with media planning in a single workflow."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
