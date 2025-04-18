"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPinIcon,
  NavigationIcon,
  CarIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
  MapIcon,
  BusIcon,
  PlaneIcon,
  TrainIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const AshaLocationPage = () => {
  const [activeTab, setActiveTab] = useState("attractions");
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-indigo-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-300 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-purple-200 opacity-20 blur-2xl"></div>
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
            <span className="relative z-10">Asha Guest House Location</span>
            <span className="absolute -inset-1 transform -skew-y-3 bg-gradient-to-r from-blue-100 to-indigo-100 z-0 rounded-lg"></span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Nestled in a peaceful neighborhood near Nakki Lake, offering a serene retreat with easy access to Mount Abu's attractions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Map and Address Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="w-full h-80 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9015743027244!2d72.71084689999999!3d24.5925928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2bb4812fd6f1%3A0xa9feb28d260a4c0f!2sAsha%20Guest%20House!5e0!3m2!1sen!2sin!4v1744985456775!5m2!1sen!2sin"
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
                  href="https://maps.app.goo.gl/dB41FXmDhr1DyQZB8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NavigationIcon className="w-6 h-6 text-blue-600 cursor-pointer" />
                </a>
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent py-6 px-6">
                <h3 className="text-2xl font-bold text-white">
                  Asha Guest House
                </h3>
                <p className="text-gray-200">
                  Peaceful retreat in a serene neighborhood
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <MapPinIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Our Address
                </h3>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-100">
                <address className="not-italic text-gray-700 text-lg mb-6">
                  <span className="font-medium">Near Nakki Lake,</span>
                  <br />
                  Mount Abu,
                  <br />
                  Rajasthan(307501)
                </address>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919414244541"
                    className="flex items-center justify-center text-gray-700 bg-white px-4 py-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all group"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
                    +91 9414244541
                  </a>
                  <a
                    href="mailto:mailtohimmat@gmail.com"
                    className="flex items-center justify-center text-gray-700 bg-white px-4 py-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all group"
                  >
                    <MailIcon className="w-5 h-5 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
                    mailtohimmat@gmail.com
                  </a>
                </div>
              </div>
              <a
                  href="https://maps.app.goo.gl/dB41FXmDhr1DyQZB8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <Button className="text-white w-full flex items-center justify-center gap-2 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 rounded-xl group">
                Get Directions
                <ExternalLinkIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
            </div>
          </motion.div>

          {/* Information Tabs */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            variants={itemVariants}
          >
            {/* Tab Navigation */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("attractions")}
                className={`flex-1 py-5 text-center font-medium text-lg transition-all duration-300 ${
                  activeTab === "attractions"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <MapIcon className="w-5 h-5" />
                  Nearby Attractions
                </span>
              </button>
              <button
                onClick={() => setActiveTab("transportation")}
                className={`flex-1 py-5 text-center font-medium text-lg transition-all duration-300 ${
                  activeTab === "transportation"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <CarIcon className="w-5 h-5" />
                  Transportation
                </span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "attractions" && (
                <motion.div
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {[
                    {
                      place: "Nakki Lake",
                      distance: "0.2 km",
                      time: "2 min walk",
                      color: "bg-blue-100",
                      textColor: "text-blue-700",
                      icon: <MapPinIcon className="w-5 h-5" />,
                    },
                    {
                      place: "Market Road",
                      distance: "0.5 km",
                      time: "5 min walk",
                      color: "bg-green-100",
                      textColor: "text-green-700",
                      icon: <MapPinIcon className="w-5 h-5" />,
                    },
                    {
                      place: "Sunset Point",
                      distance: "1.5 km",
                      time: "20 min walk",
                      color: "bg-purple-100",
                      textColor: "text-purple-700",
                      icon: <MapPinIcon className="w-5 h-5" />,
                    },
                    {
                      place: "Delwara Temple",
                      distance: "3 km",
                      time: "15 min drive",
                      color: "bg-amber-100",
                      textColor: "text-amber-700",
                      icon: <MapPinIcon className="w-5 h-5" />,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 ${
                        hoverItem === `attraction-${index}`
                          ? "scale-102 shadow-lg"
                          : ""
                      }`}
                      onMouseEnter={() => setHoverItem(`attraction-${index}`)}
                      onMouseLeave={() => setHoverItem(null)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mr-4 shadow-md ${item.textColor}`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800">
                          {item.place}
                        </h4>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <div className="flex items-center mr-4">
                            <MapPinIcon className="w-4 h-4 mr-1" />
                            <span>{item.distance}</span>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "transportation" && (
                <motion.div
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {[
                    {
                      mode: "Udaipur Airport",
                      details: "185 km (4 hours drive)",
                      icon: <PlaneIcon className="w-5 h-5" />,
                      color: "bg-blue-100",
                      textColor: "text-blue-700",
                    },
                    {
                      mode: "Abu Road Railway Station",
                      details: "28 km (1 hour drive)",
                      icon: <TrainIcon className="w-5 h-5" />,
                      color: "bg-green-100",
                      textColor: "text-green-700",
                    },
                    {
                      mode: "Bus Stand",
                      details: "1 km (15 min walk)",
                      icon: <BusIcon className="w-5 h-5" />,
                      color: "bg-purple-100",
                      textColor: "text-purple-700",
                    },
                    {
                      mode: "Local Transport",
                      details: "Available 24/7",
                      icon: <CarIcon className="w-5 h-5" />,
                      color: "bg-amber-100",
                      textColor: "text-amber-700",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-5 rounded-xl border border-gray-100 ${
                        item.color
                      } hover:shadow-md transition-all duration-300 ${
                        hoverItem === `transport-${index}`
                          ? "scale-102 shadow-lg"
                          : ""
                      }`}
                      onMouseEnter={() => setHoverItem(`transport-${index}`)}
                      onMouseLeave={() => setHoverItem(null)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-md ${item.textColor}`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800">
                          {item.mode}
                        </h4>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          <span>{item.details}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AshaLocationPage; 