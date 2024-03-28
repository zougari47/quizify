import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz App',
  description: 'Quiz App with Next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "bg-[url('/world.jpg')] bg-cover h-screen flex justify-center items-center " +
          inter.className
        }
      >
        {children}
      </body>
    </html>
  )
}
