"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";

const locations = [
  {
    name: "Aditya Guest House",
    description: "At the crossroads of convenience and luxury",
    address: "Near Pologround, Sani Gaon, Mount Abu, Rajasthan(307501)",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9015743027244!2d72.71084689999999!3d24.5925928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2bb4812fd6f1%3A0xa9feb28d260a4c0f!2sAsha%20Guest%20House!5e0!3m2!1sen!2sin!4v1744985326528!5m2!1sen!2sin",
    directionsUrl: "https://maps.app.goo.gl/yXTzKKLoitHwQCmX9",
    href: "/location/aditya",
  },
  {
    name: "Asha Guest House",
    description: "Where comfort meets serenity",
    address: "Near Pologround, Sani Gaon, Mount Abu, Rajasthan(307501)",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9015743027244!2d72.71084689999999!3d24.5925928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2bb4812fd6f1%3A0xa9feb28d260a4c0f!2sAsha%20Guest%20House!5e0!3m2!1sen!2sin!4v1744985326528!5m2!1sen!2sin",
    directionsUrl: "https://maps.app.goo.gl/yXTzKKLoitHwQCmX9",
    href: "/location/asha",
  },
];

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Our Locations
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {location.name}
                </h2>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="flex items-start space-x-2 text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>{location.address}</span>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Navigation className="h-5 w-5" />
                    <span>Get Directions</span>
                  </Link>
                  <Link
                    href={location.href}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
