'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full py-6 mt-8 bg-primary text-white rounded-xl shadow-card text-center text-sm">
      <span className="font-semibold text-accent">UrbanMart</span> &copy;{' '}
      {currentYear || new Date().getFullYear()} &mdash; All rights reserved.
    </footer>
  )
}
