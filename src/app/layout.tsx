import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blockchain Präsentation",
  description: "Eine interaktive Präsentation über Blockchain-Technologie",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-[#13103F] text-[#35F1AB]`}>
        {children}
      </body>
    </html>
  )
}
