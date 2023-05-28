"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#f3f4f6]">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
