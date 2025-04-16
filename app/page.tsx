// pages/index.js
"use client"

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { RoomCard } from "@/components/RoomCard";
import { TestimonialCard } from "@/components/Testimonial";
import { FAQAccordion } from "@/components/FAQAccordian";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { ChevronRight, MapPin, Compass, Clock } from 'lucide-react';
import mount from '../app/assets/mount.webp'
import mount1 from '../app/assets/mount1.jpg'
import mount2 from '../app/assets/mount2.jpg'
import Image from 'next/image';
import Footer from '@/components/Footer';
import bathroom from './assets/bathroom.jpg'
import bedroom from './assets/bedroom.jpg'
import roomint from './assets/roomint.jpg'
import room from './assets/room.jpg'
import hallway from './assets/hallway.jpg'
import bathroom2 from './assets/bathroom2.jpg'
export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  
  const rooms = [
    {
      id: 1,
      name: "Deluxe King Room",
      description: "Spacious room with two king-sized bed, modern amenities.",
      price: "2999+",
      image: roomint,
      amenities: ["AC", "Free WiFi", "TV","Room Service", "Work Desk"],
      type: "DELUXE",
      available: true
    },
    {
      id: 2,
      name: "Premium Double Bed Room",
      description: "Comfortable room with one queen bed, perfect for families or small groups traveling together.",
      price: "1500+",
      image: room,
      amenities: ["AC", "Free WiFi", "TV", "Room Service", "Work Desk"],
      type: "PREMIUM",
      available: true
    },
    {
      id: 3,
      name: "Standard Single Room",
      description: "Cozy, budget-friendly room with all essential amenities for the solo traveler.",
      price: "1000+",
      image: bedroom,
      amenities: ["AC", "Free WiFi", "TV", "Attached Bathroom"],
      type: "STANDARD",
      available: false
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      avatar: "/api/placeholder/100/100",
      location: "Mumbai",
      rating: 5,
      text: "My stay at Aditya Guest House was absolutely perfect. The room was spotless, staff was attentive, and the location was convenient for all my meetings. Will definitely return!"
    },
    {
      id: 2,
      name: "Rajiv Mehta",
      avatar: "/api/placeholder/100/100",
      location: "Bangalore",
      rating: 4,
      text: "Great value for money in the heart of the city. Clean rooms and friendly service made my business trip much more pleasant."
    },
    {
      id: 3,
      name: "Sarah Johnson",
      avatar: "/api/placeholder/100/100",
      location: "London",
      rating: 5,
      text: "As an international traveler, I appreciated the helpful staff and comfortable accommodations. The free breakfast was a delightful bonus!"
    }
  ];

  const faqs = [
    {
      question: "What are your check-in and check-out times?",
      answer: "Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late check-out may be arranged based on availability, possibly with additional charges."
    },
    {
      question: "Do you offer airport transfers?",
      answer: "Yes, we offer airport pickup and drop-off services at an additional cost. Please contact us at least 24 hours in advance to arrange this service."
    },
    {
      question: "Is breakfast included in the room rate?",
      answer: "Yes, complimentary breakfast is included with all room bookings. We serve continental and Indian breakfast options from 7:00 AM to 10:30 AM."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Free cancellation up to 48 hours before check-in. Cancellations within 48 hours of arrival may be subject to a one-night charge."
    },
    {
      question: "Are pets allowed?",
      answer: "We regret that pets are not allowed in our guest house, with the exception of service animals."
    }
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: mount, alt: "Aditya Guest House Exterior" },
    { src: mount1, alt: "Mount Abu Lake View" },
    { src: mount2, alt: "Luxurious Room Interior" }
  ];
  const galleryImages = [
    { src: bedroom, label: "Room Interior" },
    { src: room, label: "Bathroom" },
    { src: roomint, label: "Dining Area" },
    { src: hallway, label: "Lobby" },
    { src: bathroom, label: "Exterior" },
    { src: bathroom2, label: "Balcony View" },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Aditya Guest House - Premium Yet Affordable Stay</title>
        <meta name="description" content="Experience comfort and luxury at affordable prices at Aditya Guest House." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      

      {/* Hero Section */}
<section className="relative h-screen w-full overflow-hidden">

{/* Background Image Carousel */}
<div className="absolute inset-0">
  {images.map((image, index) => (
    <div 
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        currentImage === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/70 mix-blend-multiply"></div>
      <Image
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

{/* Centered Content */}
<div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
  <div className="max-w-4xl">
    {/* Location Badge */}
    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-blue-100 mb-6 mx-auto">
      <MapPin size={16} className="mr-2" />
      <span>Heart of Mount Abu, Rajasthan</span>
    </div>
    
    {/* Main Heading */}
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.5)" }}>
      Experience Tranquility at <span className="text-blue-300">Aditya Guest House</span>
    </h1>
    
    {/* Description */}
    <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto" style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.4)" }}>
      The premier destination for travelers seeking comfort and convenience in the serene hill station of Mount Abu, surrounded by breathtaking lakes and landscapes.
    </p>

    {/* Feature Icons */}
    <div className="flex flex-wrap justify-center gap-6 mb-10 text-blue-100">
      <div className="flex items-center">
        <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
          <MapPin size={20} />
        </div>
        <span>Minutes from Nakki Lake</span>
      </div>
      <div className="flex items-center">
        <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
          <Compass size={20} />
        </div>
        <span>Near Delwara Temple</span>
      </div>
      <div className="flex items-center">
        <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
          <Clock size={20} />
        </div>
        <span>24/7 Service</span>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center justify-center">
        Book Your Stay Now
        <ChevronRight size={16} className="ml-2" />
      </button>
      <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-lg border border-white/30 transition-all">
        View Our Rooms
      </button>
    </div>
  </div>
</div>

{/* Bottom Decorative Element */}
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>

{/* Image Pagination Dots */}
<div className="absolute bottom-8 right-8 z-20 flex space-x-2">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentImage(index)}
      className={`w-3 h-3 rounded-full transition-all ${
        currentImage === index ? "bg-white scale-110" : "bg-white/40"
      }`}
      aria-label={`View image ${index + 1}`}
    />
  ))}
</div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established in 2020, Aditya Guest House has been providing exceptional hospitality services for over many years. 
              Nestled in a prime location, we offer the perfect blend of comfort, convenience, and affordability to both business 
              and leisure travelers. Our dedicated staff ensures that each guest experiences a memorable stay with personalized service and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-gray-600">We treat each guest as family, offering personalized service and attention to make your stay special.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">Centrally located with easy access to business districts, shopping centers, and tourist attractions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Amenities</h3>
              <p className="text-gray-600">All rooms feature modern amenities including high-speed WiFi, air conditioning, and smart TVs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Rooms</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Choose from our selection of thoughtfully designed rooms, each offering the perfect balance of comfort and style.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              {["all", "standard", "deluxe", "premium"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === type
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms
              .filter((room) => activeTab === "all" || room.type === activeTab)
              .map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Take a visual tour of our guest house facilities and experience what makes us special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden group rounded-lg h-64">
                <Image src={image.src} alt={image.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-medium">{["Room Interior", "2 Bed Room", "4 Bed Room", "Hallway", "Bathroom", "Bathroom"][index % 6]}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comfort & Amenities</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              We offer a range of services and amenities to make your stay comfortable and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "wifi", title: "Free WiFi", description: "High-speed internet throughout the property" },
              { icon: "coffee", title: "Complimentary Breakfast", description: "Start your day with a delicious breakfast" },
              { icon: "parking", title: "Free Parking", description: "Secure parking space for guests" },
              { icon: "concierge-bell", title: "24/7 Room Service", description: "Round-the-clock assistance" },
              { icon: "tshirt", title: "Laundry Service", description: "Same-day laundry and dry cleaning" },
              { icon: "utensils", title: "In-house Restaurant", description: "Featuring local and international cuisine" },
              { icon: "shield-alt", title: "24/7 Security", description: "CCTV surveillance and security staff" },
              { icon: "first-aid", title: "Medical Assistance", description: "On-call doctor and first aid" }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mr-4 bg-blue-100 rounded-full p-3 text-blue-600">
                  <i className={`fas fa-${item.icon} fa-fw`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      
      {/* Booking Section */}
     

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Find answers to commonly asked questions about our guest house and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
     

      {/* Newsletter Section */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-blue-100">Get exclusive offers, updates, and travel tips delivered directly to your inbox.</p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button className="whitespace-nowrap bg-white text-blue-600 hover:bg-blue-50">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}