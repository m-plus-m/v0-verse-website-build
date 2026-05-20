"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "About Verse",
    questions: [
      {
        q: "What is Verse?",
        a: "Verse is an AI-powered audience intelligence platform that connects research, profiling and media planning in one workflow. It brings together three engines — Discover (audience discovery from social and behavioral data), Explore (deep profiling across 50+ data providers) and Plan (cross-channel media planning across 70+ media types in 46 countries). Verse is powered by TelmarHelixa."
      },
      {
        q: "What is the difference between Verse and TelmarHelixa?",
        a: "TelmarHelixa is the company — the team, the technology and the data partnerships built over 50+ years. Verse is the product brand that brings TelmarHelixa's three core engines (Discover, Explore and Plan) together under a single AI-powered workflow. TelmarHelixa was formed from the merger of Telmar (media planning, founded 1968) and Helixa (social and behavioral intelligence)."
      },
      {
        q: "What is audience intelligence?",
        a: "Audience intelligence is the practice of collecting, analyzing and activating data about consumer behaviors, preferences, affinities and media consumption to inform marketing strategy, creative development and media planning. Unlike traditional demographic research, audience intelligence platforms combine social signals, search behavior, survey data and media consumption patterns to build a multidimensional understanding of who audiences are, what they care about and how to reach them."
      },
      {
        q: "How is Verse different from other audience intelligence platforms?",
        a: "Most competitors do one thing well — Audiense and Resonate focus on audience discovery, GWI focuses on profiling, Gemius and Nielsen Media Impact focus on planning. Verse is the only platform that connects all three in a single workflow, so teams move from insight to media plan without rebuilding audiences across disconnected tools. Verse is also data-neutral: it works with any data provider rather than locking you into a single source."
      },
      {
        q: "What data sources does Verse connect to?",
        a: "Verse connects to 50+ data providers across 46 countries, including MRI Simmons, GWI, Kantar, Comscore, YouGov and many others. The Discover engine also draws from proprietary data built on social signals, search behavior, browsing activity and app usage. TelmarHelixa's Data Hub processes over 2,500 individual datasets per year across 70+ media types."
      },
    ]
  },
  {
    title: "Discover",
    questions: [
      {
        q: "What is Discover?",
        a: "Discover is a proprietary audience intelligence engine that uses social signals, search behavior, browsing data and app usage to identify and understand audiences. Unlike platforms dependent on a single social network, Discover draws from multiple behavioral data sources. It supports audience segmentation, cultural trend detection, influencer identification, competitive benchmarking and persona generation."
      },
      {
        q: "What does audience segmentation do in Discover?",
        a: "Discover's segmentation divides your target audience into interest-based clusters in seconds. Whether you're building a buyer persona or exploring new consumer segments, segmentation surfaces the sub-groups and niche communities that get hidden when you look at a large audience in aggregate. It helps identify white-space opportunities and underserved audiences, and it's especially useful for shaping targeted creative and media placements."
      },
      {
        q: "How does Discover's segmentation work?",
        a: "Discover uses k-means clustering analysis to group users who share similar interests (for example: hair care, fast food, crime TV shows). People who engage with the same types of content appear in the same clusters, giving you a clear picture of the distinct communities within any audience."
      },
      {
        q: "What are audience psychographics in Discover?",
        a: "Psychographics classify people based on their interests, attitudes, habits, values and opinions — not just demographics. Discover uses machine-learning algorithms to estimate 90 unique lifestyle traits, helping you understand your audience's mindset and create more personalized experiences and content."
      },
      {
        q: "How does Discover calculate lifestyle affinities?",
        a: "Each lifestyle trait (like \"Party Goer\" or \"Art Appreciator\") is defined by a combination of relevant interests. To score a high affinity, a user needs to meet threshold criteria across those interests. The process works in three steps: first, Discover groups each user's engagement with social pages and posts into interest categories. Second, it measures the proportion of those interest categories for each user. Third, it compares each user's proportion against the average U.S. adult population."
      },
      {
        q: "What demographic data does Discover cover?",
        a: "Discover's demographic sample is representative of the American population aged 18–69, covering age, gender and location."
      },
      {
        q: "Can I compare multiple audiences in Discover?",
        a: "Yes — Discover lets you compare up to three different audience targets in the same search. You can compare brands, influencers, TV show audiences or lifestyle segments side by side to see what makes them similar and different. This is useful for competitive analysis, category benchmarking, and evaluating how influencers or brand partners align with your audience."
      },
      {
        q: "What do affinity, reach and penetration mean in Discover?",
        a: "These are the key metrics Discover uses to report audience interest. Affinity measures how distinctively an audience over-indexes on a particular interest compared to the general population. Reach measures how many people in an audience engage with a topic. Penetration measures what percentage of an audience engages with it. Agencies, brands and media companies use these metrics to understand what's unique about their audiences and make strategic marketing decisions."
      },
    ]
  },
  {
    title: "Explore",
    questions: [
      {
        q: "What is Explore?",
        a: "Explore is an enterprise data mining platform that enables deep audience profiling across 50+ data providers in a single workspace. You can run advanced statistical analysis — factor analysis, clustering, correspondence analysis — without coding. Explore accesses over 300 consumer, brand and media research releases and generates custom visualizations in seconds. Audience segments transfer directly into Plan for media planning."
      },
    ]
  },
  {
    title: "Plan",
    questions: [
      {
        q: "What is Plan?",
        a: "Plan is a cross-channel media planning solution that determines optimal reach, frequency and channel mix across 70+ media types in 46 countries. It combines consumer, channel and measurement data using proprietary methodology to produce unified cross-media plans spanning TV, digital, OOH, audio, print and emerging channels. Plan is the only media planning platform to incorporate ESG scores into planning optimization."
      },
      {
        q: "What data sources can I use with Plan?",
        a: "Plan is data-neutral — it works across any data source and integrates both digital and traditional media channels. This flexibility lets you design campaigns tailored to your strategy without being locked into a single platform or provider."
      },
    ]
  },
  {
    title: "Use Cases",
    questions: [
      {
        q: "How can Verse help my agency win more pitches?",
        a: "Verse gives your strategy team real-time audience insights built on actual behaviors, not just survey responses. You can identify the most relevant audiences for a pitch, back creative concepts with data, and move from insight to strategy faster than teams stitching together multiple research tools."
      },
      {
        q: "How can my agency adapt to changing consumer behavior?",
        a: "Discover tracks evolving consumer behaviors shaped by technology, economic shifts and cultural trends in real time. Your team stays current without waiting for the next wave of survey data."
      },
      {
        q: "How can Verse help with cross-channel media planning?",
        a: "Plan lets you build campaigns that optimize reach, frequency, impressions and GRPs across 70+ media types and 46 countries. Audience segments flow directly from Discover and Explore into Plan, so you're planning against the same audience definition your insights team built — no translation errors, no rebuilding."
      },
      {
        q: "How do I build better audiences for media planning?",
        a: "Combine Discover's real-time social and behavioral signals with Explore's deep profiling across 50+ data providers. Build dynamic, addressable audiences that reflect how consumers actually behave, then push them directly into Plan for activation."
      },
      {
        q: "How can Verse help align my marketing and insights teams?",
        a: "Verse gives every team — insights, media, creative — access to the same audience definition, built once and used across the workflow. No more version-of-the-truth debates or re-building segments in different tools for different teams."
      },
      {
        q: "How can I use social data for brand strategy?",
        a: "Discover surfaces real-time audience signals from social, search and browsing behavior. You can track cultural trends, monitor brand perception and identify emerging audience segments without commissioning expensive custom research."
      },
      {
        q: "How can Verse help me respond to advertiser briefs faster?",
        a: "Verse lets you profile your channel audiences in depth and map them against advertiser targets. You can quantify the value of your audience, content and platform with data that goes well beyond basic demographics — making your brief response faster and more compelling."
      },
      {
        q: "How can I differentiate my audience from competing channels?",
        a: "Use Discover and Explore to analyze competitor channel audiences alongside your own. Surface the unique traits, affinities and behaviors that make your audience distinctive, and build that into a data-backed narrative for advertisers."
      },
    ]
  },
  {
    title: "Verse AI",
    questions: [
      {
        q: "What is Verse AI?",
        a: "Verse AI is an upcoming AI workflow layer that connects Discover, Explore and Plan into a single automated pipeline. Drop in a brief, pitch deck or RFP and Verse AI routes the work across all three engines — moving from audience insight to media plan without manual handoffs between tools."
      },
      {
        q: "When will Verse AI be available?",
        a: "Verse AI is currently in development. You can join the early access list to get a preview from our team and be among the first to help shape the product when beta opens."
      },
      {
        q: "How do I get early access to Verse AI?",
        a: "Visit the Verse website and click Get Early Access. We're opening early beta to a limited group of teams who want to help shape the product. You'll get a hands-on preview and direct input into how it works for your team."
      },
    ]
  },
  {
    title: "Getting Started",
    questions: [
      {
        q: "How do I get a demo of Verse?",
        a: "Visit verse.telmarhelixa.com and click Book a Demo. You'll get a walkthrough of Discover, Explore and Plan and see how teams are using them to get from audience insight to media plan faster."
      },
      {
        q: "How much does Verse cost?",
        a: "Pricing depends on which engines you need and the scale of your data requirements. Contact our team for a tailored quote."
      },
    ]
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-border/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-medium text-foreground pr-4">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[1000px] pb-5' : 'max-h-0'}`}>
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15682102_1280_720_30fps-A6Ovhq3xP1RFIdF5FV6l7aoXZ2F3KO.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-[#2B2D42]/90" />
        
        {/* Gradient glows */}
        <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-[#F15E24]/20 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-[#C52F86]/15 blur-[80px]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-[family-name:var(--font-display)] lowercase">
            Frequently Asked Questions
          </h1>
        </div>
      </section>
      
      {/* FAQ Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-accent/40">
                {section.title}
              </h2>
              <div>
                {section.questions.map((item, itemIndex) => (
                  <FAQItem key={itemIndex} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
