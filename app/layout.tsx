import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Gowri Sankar Nelam - Software Developer & Computer Science Student",
  description:
    "Computer Science Engineering student at Vignan Institute of Information Technology with expertise in Full-Stack Development, Data Analytics, and Machine Learning. Experienced in MERN Stack, Python, and modern web technologies.",
  keywords:
    "Software Developer, Full Stack Developer, Computer Science Student, React, Node.js, Python, MERN Stack, Data Analytics, Machine Learning, Web Development",
  authors: [{ name: "Gowri Sankar Nelam" }],
  creator: "Gowri Sankar Nelam",
  openGraph: {
    title: "Gowri Sankar Nelam - Software Developer",
    description: "Computer Science Engineering student specializing in Full-Stack Development and Data Analytics",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}>{children}</body>
    </html>
  )
}
