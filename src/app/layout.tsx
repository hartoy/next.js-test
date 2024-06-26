import type { Metadata } from 'next'
import { Mulish, Alegreya } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import { cookies } from 'next/headers'

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
})
const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const loggedUsername = cookies().get('SocialUsername')
  return (
    <html lang="en">
      <body className={`${mulish.className} ${mulish.variable} ${alegreya.variable} `}>
        <Navbar loggedUsername={loggedUsername?.value} />
        {children}
      </body>
    </html>
  )
}
