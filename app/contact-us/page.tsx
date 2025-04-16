"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  ExternalLinkIcon,
  ClockIcon,
  SendIcon,
  CalendarIcon,
  UserIcon,
  MessageSquareIcon,
  HeadphonesIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon
} from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("message");
  const [hoverItem, setHoverItem] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 via-indigo-50 to-white relative overflow-hidden">
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
            <span className="relative z-10">Contact Us</span>
            <span className="absolute -inset-1 transform -skew-y-3 bg-gradient-to-r from-blue-100 to-indigo-100 z-0 rounded-lg"></span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have questions or need assistance? We're here to help you plan your perfect stay with personalized service and prompt attention.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Form Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-4 inline-block">
                    <MessageSquareIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
                  <p className="text-blue-100 mt-2">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <UserIcon className="w-4 h-4 text-blue-600" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MailIcon className="w-4 h-4 text-blue-600" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-blue-600" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MessageSquareIcon className="w-4 h-4 text-blue-600" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  ></textarea>
                </div>
                
                <Button className="w-full flex items-center justify-center gap-2 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 rounded-xl group">
                  Send Message
                  <SendIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
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
                onClick={() => setActiveTab("message")}
                className={`flex-1 py-5 text-center font-medium text-lg transition-all duration-300 ${
                  activeTab === "message" 
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" 
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  Contact Info
                </span>
              </button>
              <button 
                onClick={() => setActiveTab("hours")}
                className={`flex-1 py-5 text-center font-medium text-lg transition-all duration-300 ${
                  activeTab === "hours" 
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" 
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  Business Hours
                </span>
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "message" && (
                <motion.div 
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {[
                    { 
                      title: "Address", 
                      details: "42 Main Street, City Center, 400001", 
                      icon: <MapPinIcon className="w-5 h-5" />,
                      color: "bg-blue-100",
                      textColor: "text-blue-700"
                    },
                    { 
                      title: "Phone", 
                      details: "+91 12345 67890", 
                      link: "tel:+911234567890",
                      icon: <PhoneIcon className="w-5 h-5" />,
                      color: "bg-green-100",
                      textColor: "text-green-700"
                    },
                    { 
                      title: "Email", 
                      details: "info@adityaguesthouse.com", 
                      link: "mailto:info@adityaguesthouse.com",
                      icon: <MailIcon className="w-5 h-5" />,
                      color: "bg-purple-100",
                      textColor: "text-purple-700"
                    },
                    { 
                      title: "Customer Support", 
                      details: "24/7 Guest Services Available", 
                      icon: <HeadphonesIcon className="w-5 h-5" />,
                      color: "bg-amber-100",
                      textColor: "text-amber-700"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 ${hoverItem === `contact-${index}` ? 'scale-102 shadow-lg' : ''}`}
                      onMouseEnter={() => setHoverItem(`contact-${index}`)}
                      onMouseLeave={() => setHoverItem(null)}
                    >
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mr-4 shadow-md ${item.textColor}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800">{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="mt-2 text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                          >
                            {item.details}
                            <ExternalLinkIcon className="w-4 h-4 ml-1 inline-block" />
                          </a>
                        ) : (
                          <p className="text-gray-600 mt-2">{item.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
              
              {activeTab === "hours" && (
                <motion.div 
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {[
                    { 
                      day: "Monday - Friday", 
                      hours: "24 Hours (Reception)", 
                      color: "bg-blue-100",
                      textColor: "text-blue-700"
                    },
                    { 
                      day: "Saturday", 
                      hours: "24 Hours (Reception)", 
                      color: "bg-green-100",
                      textColor: "text-green-700"
                    },
                    { 
                      day: "Sunday", 
                      hours: "24 Hours (Reception)", 
                      color: "bg-purple-100",
                      textColor: "text-purple-700"
                    },
                    { 
                      day: "Concierge Service", 
                      hours: "7:00 AM - 11:00 PM Daily", 
                      color: "bg-amber-100",
                      textColor: "text-amber-700"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-5 rounded-xl border border-gray-100 ${item.color} hover:shadow-md transition-all duration-300 ${hoverItem === `hours-${index}` ? 'scale-102 shadow-lg' : ''}`}
                      onMouseEnter={() => setHoverItem(`hours-${index}`)}
                      onMouseLeave={() => setHoverItem(null)}
                    >
                      <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-md ${item.textColor}`}>
                        <ClockIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800">{item.day}</h4>
                        <p className="text-gray-600 mt-2">{item.hours}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
              
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl flex items-start border border-blue-100 shadow-inner">
                <div className="p-3 bg-blue-500 rounded-full mr-4 shadow-lg">
                  <HeadphonesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-blue-800 mb-2">Need immediate assistance?</h4>
                  <p className="text-blue-700 leading-relaxed">
                    Our guest relations team is available 24/7 to assist with your inquiries and ensure your stay is as comfortable as possible.
                  </p>
                  <Button className="mt-4 bg-white text-blue-600 hover:bg-blue-50 border border-blue-200">
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Social Connection Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            {
              title: "Facebook",
              description: "Follow us for updates and promotions",
              icon: <FacebookIcon className="w-8 h-8" />,
              color: "bg-blue-500",
              link: "#"
            },
            {
              title: "Twitter",
              description: "Stay updated with our latest news",
              icon: <TwitterIcon className="w-8 h-8" />,
              color: "bg-indigo-500",
              link: "#"
            },
            {
              title: "Instagram",
              description: "See our spaces and experiences",
              icon: <InstagramIcon className="w-8 h-8" />,
              color: "bg-purple-500",
              link: "#"
            },
            {
              title: "LinkedIn",
              description: "Connect with our professional network",
              icon: <LinkedinIcon className="w-8 h-8" />,
              color: "bg-blue-600",
              link: "#"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <a href={item.link} className="block">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </a>
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
              The customer service team was incredibly responsive. From our initial inquiry to the special arrangements for our anniversary celebration, everything was handled with exceptional care and attention to detail.
            </p>
            <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
            <p className="font-bold">Raj P. - Returning Guest</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;