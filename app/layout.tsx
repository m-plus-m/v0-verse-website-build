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
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
