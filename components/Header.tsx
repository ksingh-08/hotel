"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  InfoIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Contact", href: "/contact-us", icon: PhoneIcon },
    { name: "Location", href: "/location", icon: MapPinIcon },
  ];

  const properties = [
    {
      name: "Aditya Guest House",
      href: "/booking-aditya",
      description: "Luxury rooms in the heart of the city",
      icon: HomeIcon,
    },
    {
      name: "Asha Guest House",
      href: "/booking-asha",
      description: "Peaceful retreat in a serene neighborhood",
      icon: HomeIcon,
    },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-20 flex items-center space-x-1 text-xl font-bold">
            <span className="text-blue-600">Himmat</span>
            <span className="text-gray-800">Singh</span>
            {/* <span className="text-sm text-gray-500 ml-2">Guest Houses</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-9 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Properties Dropdown */}
            <div className="relative">
              <button
                className="bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center space-x-1 font-medium px-4 py-2 rounded-md"
                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
              >
                <HomeIcon className="h-4 w-4" />
                <span>Book Any Guest House</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isPropertiesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                >
                  {properties.map((property) => (
                    <Link
                      key={property.name}
                      href={property.href}
                      className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <property.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {property.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {property.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 md:hidden backdrop-blur-md">
          <div className="flex flex-col pt-20 items-center bg-white px-12 pb-8 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 py-2 border-b border-gray-200 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Mobile Properties */}
            <div className="py-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <HomeIcon className="h-4 w-4" />
                <span>Book Any Guest House</span>
              </div>
              <div className="mt-2 ml-6 space-y-2">
                {properties.map((property) => (
                  <Link
                    key={property.name}
                    href={property.href}
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {property.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;