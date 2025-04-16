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

const LocationSection = () => {
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
    <section
      id="location"
      className="py-24 bg-gradient-to-b from-blue-50 via-indigo-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
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
            <span className="relative z-10">Our Location</span>
            <span className="absolute -inset-1 transform -skew-y-3 bg-gradient-to-r from-blue-100 to-indigo-100 z-0 rounded-lg"></span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Perfectly positioned in the vibrant heart of the city, offering
            seamless access to business districts and must-see attractions.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9093269731675!2d72.70676887520307!3d24.592325278105264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cd5adbd753feb%3A0x5fbf97b5bfe0ae19!2sAditya%20Guest%20House!5e0!3m2!1sen!2sin!4v1744815594641!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0 border-0 w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                <a
                  href="https://maps.app.goo.gl/yXTzKKLoitHwQCmX9" // Replace with your coords
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NavigationIcon className="w-6 h-6 text-blue-600 cursor-pointer" />
                </a>
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent py-6 px-6">
                <h3 className="text-2xl font-bold text-white">
                  Aditya Guest House
                </h3>
                <p className="text-gray-200">
                  At the crossroads of convenience and luxury
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
                  <span className="font-medium">Near Pologround,</span>
                  <br />
                  Sani Gaon,
                  <br />
                  Mount Abu, Rajasthan(307501)
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

              <Button className="w-full flex items-center justify-center gap-2 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 rounded-xl group">
                Get Directions
                <ExternalLinkIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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
                      place: "Central Shopping Mall",
                      distance: "0.5 km",
                      time: "5 min walk",
                      color: "bg-blue-100",
                      textColor: "text-blue-700",
                      icon: <MapPinIcon className="w-5 h-5" />,
                    },
                    {
                      place: "City Conference Center",
                      distance: "1.2 km",
                      time: "15 min walk",
                      color: "bg-green-100",
                      textColor: "text-green-700",
                      icon: <MapPinIcon className="w-5 h-5" />,
                    },
                    {
                      place: "Museum of Modern Art",
                      distance: "2 km",
                      time: "10 min drive",
                      color: "bg-purple-100",
                      textColor: "text-purple-700",
                      icon: <MapPinIcon className="w-5 h-5" />,
                    },
                    {
                      place: "Beach Promenade",
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
                      mode: "Airport",
                      details: "15 km (30 min drive)",
                      icon: <PlaneIcon className="w-5 h-5" />,
                      color: "bg-blue-100",
                      textColor: "text-blue-700",
                    },
                    {
                      mode: "Railway Station",
                      details: "3 km (10 min drive)",
                      icon: <TrainIcon className="w-5 h-5" />,
                      color: "bg-green-100",
                      textColor: "text-green-700",
                    },
                    {
                      mode: "Bus Terminal",
                      details: "1.5 km (20 min walk)",
                      icon: <BusIcon className="w-5 h-5" />,
                      color: "bg-purple-100",
                      textColor: "text-purple-700",
                    },
                    {
                      mode: "Metro Station",
                      details: "500 m (7 min walk)",
                      icon: <NavigationIcon className="w-5 h-5" />,
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

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl flex items-start border border-blue-100 shadow-inner">
                <div className="p-3 bg-blue-500 rounded-full mr-4 shadow-lg">
                  <NavigationIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-blue-800 mb-2">
                    Need transportation assistance?
                  </h4>
                  <p className="text-blue-700 leading-relaxed">
                    Our dedicated concierge team can arrange private transfers
                    or rental cars tailored to your specific needs and schedule.
                  </p>
                  <Button className="mt-4 bg-white text-blue-600 hover:bg-blue-50 border border-blue-200">
                    Contact Concierge
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            {
              title: "Secure Parking",
              description:
                "Complimentary underground parking with 24/7 security surveillance for all guests",
              icon: <CarIcon className="w-8 h-8" />,
              color: "bg-blue-500",
            },
            {
              title: "Curated Local Tours",
              description:
                "Exclusive guided tours arranged by our experienced local experts",
              icon: <MapPinIcon className="w-8 h-8" />,
              color: "bg-indigo-500",
            },
            {
              title: "24/7 Concierge",
              description:
                "Dedicated concierge team available around the clock for personalized assistance",
              icon: <ClockIcon className="w-8 h-8" />,
              color: "bg-purple-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div
                className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="text-5xl font-serif mb-6">"</div>
            <p className="text-xl font-medium italic mb-6 leading-relaxed">
              The location of this hotel is absolutely perfect. Just steps away
              from all the major attractions and with incredibly helpful staff
              who guided us to hidden local gems we would never have found on
              our own.
            </p>
            <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
            <p className="font-bold">Maria S. - Business Traveler</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
