import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Quizify - Test Your Knowledge",
  description:
    "A secure quiz application demonstrating security-first development practices. Challenge yourself with trivia questions across various categories and difficulty levels.",
  keywords: [
    "quiz",
    "trivia",
    "knowledge test",
    "security",
    "next.js",
    "typescript",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--muted)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </body>
    </html>
  )
}
