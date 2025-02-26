"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            <Link
              href="#about"
              className="text-xl font-medium hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="#services"
              className="text-xl font-medium hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="#hire"
              className="text-xl font-medium hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              HIRE TEAM
            </Link>
            <Link
              href="#careers"
              className="text-xl font-medium hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CAREERS
            </Link>
            <Link
              href="#blogs"
              className="text-xl font-medium hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              BLOGS
            </Link>
            <Link
              href="#contact"
              className="text-xl font-medium hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

