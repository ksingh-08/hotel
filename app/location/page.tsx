"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPinIcon,
  NavigationIcon,
  ArrowRightIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const LocationPage = () => {
  const properties = [
    {
      name: "Aditya Guest House",
      description: "At the crossroads of convenience and luxury",
      address: "Near Pologround, Sani Gaon, Mount Abu, Rajasthan(307501)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9093269731675!2d72.70676887520307!3d24.592325278105264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cd5adbd753feb%3A0x5fbf97b5bfe0ae19!2sAditya%20Guest%20House!5e0!3m2!1sen!2sin!4v1744815594641!5m2!1sen!2sin",
      directionsUrl: "https://maps.app.goo.gl/yXTzKKLoitHwQCmX9",
      href: "/location/aditya",
    },
    {
      name: "Asha Guest House",
      description: "Peaceful retreat in a serene neighborhood",
      address: "Near Nakki Lake, Mount Abu, Rajasthan(307501)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9093269731675!2d72.70676887520307!3d24.592325278105264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cd5adbd753feb%3A0x5fbf97b5bfe0ae19!2sAsha%20Guest%20House!5e0!3m2!1sen!2sin!4v1744815594641!5m2!1sen!2sin",
      directionsUrl: "https://maps.app.goo.gl/yXTzKKLoitHwQCmX9",
      href: "/location/asha",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-indigo-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-300 opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="relative inline-block text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-snug">
            <span className="relative z-10">Our Properties</span>
            <span className="absolute -inset-1 transform -skew-y-3 bg-gradient-to-r from-blue-100 to-indigo-100 z-0 rounded-lg"></span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Choose from our selection of premium guest houses, each offering unique experiences and locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {properties.map((property, index) => (
            <motion.div
              key={property.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative">
                <div className="w-full h-80 relative">
                  <iframe
                    src={property.mapUrl}
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0 border-0 w-full h-full"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <a
                    href={property.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NavigationIcon className="w-6 h-6 text-blue-600 cursor-pointer" />
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent py-6 px-6">
                  <h3 className="text-2xl font-bold text-white">{property.name}</h3>
                  <p className="text-gray-200">{property.description}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Location</h3>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-100">
                  <address className="not-italic text-gray-700 text-lg">
                    {property.address}
                  </address>
                </div>

                <Link href={property.href}>
                  <Button className="w-full flex items-center justify-center gap-2 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 rounded-xl group">
                    View Details
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationPage;
