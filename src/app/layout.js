import { Inter } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import { QueryProvider } from "@/lib/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mazzady ",
  description: "The best place for auctions",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <NavBar />
        <QueryProvider>{children}</QueryProvider>
        <Footer />
      </body>
    </html>
  )
}
