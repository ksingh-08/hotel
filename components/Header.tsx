"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-20 flex items-center space-x-1 text-xl font-bold">
            <span className="text-blue-600">Aditya</span>
            <span className="text-gray-800">Guest House</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden relative z-20"
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 md:hidden backdrop-blur-md">
          <div className="flex flex-col pt-18 items-center bg-white px-12 pb-8 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 py-2 border-b border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className=" w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link href="/booking" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
