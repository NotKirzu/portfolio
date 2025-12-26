import { ThemeProvider } from '@/components/provider/theme'
import Background from '@/components/ui/background'
import Navbar from '@/components/navbar/component'

import { type Metadata } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'
import { SoundProvider } from '@/components/provider/sound'

const geistFont = Geist({
  variable: '--font-geist',
})

const title = 'Ricardo ~ Developer'
const description = "I'm Ricardo 👋 ~ Developer"
const url = 'https://krzu.me'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ricardo',
    'developer',
    'portfolio',
    'nextjs',
    'typescript',
    'tailwindcss',
    'react',
    'javascript',
    'minecraft',
    'paper',
    'plugins',
    'api',
    'web',
    'game',
    'spigot',
    'bukkit',
    'purpur',
    'pufferfish',
  ],
  openGraph: {
    title,
    description,
    siteName: title,
    url,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
        >
          <SoundProvider>
            <div className="bg-background transition duration-300">
              <Background />
              <div className="relative z-10">
                <Navbar />
                {children}
              </div>
            </div>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
