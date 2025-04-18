"use client";
import { useState } from "react";
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  CheckCircleIcon,
  ShieldIcon,
  HeartIcon,
  CreditCardIcon,
  StarIcon,
} from "lucide-react";
import clsx from "clsx";

const steps = ["Dates & Details", "Room Selection", "Review & Confirm"];

export default function Booking() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    location: "Beach Resort",
    roomType: "",
  });

  const nextStep = () =>
    setFormStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setFormStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefitCards = [
    {
      icon: <ShieldIcon className="w-6 h-6 text-blue-500" />,
      title: "Best Price Guarantee",
      description:
        "We promise the most competitive rates on all our accommodations",
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
      title: "Free Cancellation",
      description:
        "Most rooms offer free cancellation up to 24 hours before arrival",
    },
    {
      icon: <HeartIcon className="w-6 h-6 text-red-500" />,
      title: "Personalized Experience",
      description: "Tailored stays to meet your specific preferences and needs",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-950 to-blue-900 min-h-screen pb-12">
      {/* Hero */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <img
          src="/api/placeholder/1920/1080"
          alt="Luxury Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Discover <span className="text-blue-300">Elegance</span>
          </h1>
          <p className="mt-2 text-blue-100">
            Seamless booking for an unforgettable stay
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container max-w-5xl mx-auto px-4 -mt-14 relative z-10">
        {/* Booking Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 mb-12">
          {/* Stepper */}
          <div className="flex justify-between mb-8 max-w-lg mx-auto">
            {steps.map((label, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-center">
                  <div
                    className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      formStep >= i ? "bg-blue-500" : "bg-gray-500"
                    )}
                  >
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="h-1 bg-white/30 w-36 mx-2" />
                  )}
                </div>
                <span className="mt-2 text-xs text-white font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg space-y-6">
            {formStep === 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Select Your Dates
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <Field label="Check-in Date">
                    <Input
                      icon={<CalendarIcon className="w-5 h-5 text-blue-600" />}
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Check-out Date">
                    <Input
                      icon={<CalendarIcon className="w-5 h-5 text-blue-600" />}
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Guests">
                    <Select
                      icon={<UsersIcon className="w-5 h-5 text-blue-600" />}
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      options={["1", "2", "3", "4+"]}
                    />
                  </Field>
                  <Field label="Location">
                    <Select
                      icon={<MapPinIcon className="w-5 h-5 text-blue-600" />}
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      options={[
                        "Beach Resort",
                        "Mountain Retreat",
                        "City Center",
                        "Countryside Villa",
                      ]}
                    />
                  </Field>
                </div>
                <div className="mt-8 max-w-xs mx-auto">
                  <ButtonNext
                    label="Continue to Room Selection"
                    onClick={nextStep}
                  />
                </div>
              </>
            )}

            {formStep === 1 && (
              <>
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Choose Your Room
                </h2>
                <div className="grid gap-4 max-w-2xl mx-auto">
                  {[
                    {
                      type: "Standard Room",
                      desc: "King bed, city view, 32 sq.m",
                      price: "$149",
                      amenities: ["Free WiFi", "Air Conditioning", "TV"],
                      rating: 4.2,
                    },
                    {
                      type: "Deluxe Room",
                      desc: "King bed, ocean view, 45 sq.m",
                      price: "$199",
                      tag: "Popular",
                      amenities: [
                        "Free WiFi",
                        "Air Conditioning",
                        "TV",
                        "Minibar",
                      ],
                      rating: 4.7,
                    },
                    {
                      type: "Executive Suite",
                      desc: "Panoramic view, 65 sq.m",
                      price: "$299",
                      amenities: [
                        "Free WiFi",
                        "Air Conditioning",
                        "Smart TV",
                        "Minibar",
                        "Jacuzzi",
                      ],
                      rating: 4.9,
                    },
                  ].map((room) => (
                    <div
                      key={room.type}
                      onClick={() =>
                        setFormData({ ...formData, roomType: room.type })
                      }
                      className={clsx(
                        "p-4 border rounded-lg cursor-pointer transition",
                        formData.roomType === room.type
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:border-blue-300 hover:shadow"
                      )}
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-24 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src="/api/placeholder/300/200"
                            alt={room.type}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                {room.type}
                                {room.tag && (
                                  <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                    {room.tag}
                                  </span>
                                )}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {room.desc}
                              </p>
                              <div className="flex items-center mt-1">
                                <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="ml-1 text-sm text-gray-700">
                                  {room.rating}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-blue-600 font-bold text-lg">
                                {room.price}
                              </p>
                              <p className="text-xs text-gray-500">per night</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="flex flex-wrap gap-1">
                              {room.amenities.map((amenity) => (
                                <span
                                  key={amenity}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 max-w-xs mx-auto">
                  <ButtonBack onClick={prevStep} />
                  <ButtonNext label="Continue" onClick={nextStep} />
                </div>
              </>
            )}

            {formStep === 2 && (
              <>
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Review Your Booking
                </h2>
                <div className="max-w-md mx-auto bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h3 className="font-medium text-blue-800 mb-3">
                    Booking Summary
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Check-in:</span>
                      <span>{formData.checkIn || "Not selected"}</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Check-out:</span>
                      <span>{formData.checkOut || "Not selected"}</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Guests:</span>
                      <span>{formData.guests}</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Location:</span>
                      <span>{formData.location}</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Room:</span>
                      <span>{formData.roomType || "Not selected"}</span>
                    </li>
                    <li className="flex justify-between pt-2 text-blue-800 font-medium">
                      <span>Total:</span>
                      <span>
                        {formData.roomType === "Standard Room"
                          ? "$149"
                          : formData.roomType === "Deluxe Room"
                          ? "$199"
                          : formData.roomType === "Executive Suite"
                          ? "$299"
                          : "$0"}{" "}
                        per night
                      </span>
                    </li>
                  </ul>

                  <div className="mt-4">
                    <h3 className="font-medium text-gray-700 mb-2">
                      Payment Method
                    </h3>
                    <div className="border border-gray-200 rounded p-3 bg-white flex items-center">
                      <CreditCardIcon className="w-5 h-5 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">
                        Pay securely during confirmation
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6 max-w-xs mx-auto">
                  <ButtonBack onClick={prevStep} />
                  <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition font-medium">
                    Confirm
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold text-base mb-1">
                {card.title}
              </h3>
              <p className="text-blue-100 text-xs">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white text-center mb-4">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Sarah Johnson",
                location: "New York",
                comment:
                  "The accommodations exceeded all expectations. The staff went above and beyond.",
                rating: 5,
              },
              {
                name: "Mark Williams",
                location: "London",
                comment:
                  "Breathtaking views and exceptional service. The booking process was smooth.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10"
              >
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-blue-100 italic mb-3 text-sm">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-2">
                    <p className="text-white font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-200 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Reusable Components ---

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
}

function Input({
  icon,
  ...props
}: { icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-50 hover:bg-gray-100 transition">
      {icon}
      <input className="ml-2 bg-transparent flex-1 outline-none" {...props} />
    </div>
  );
}

function Select({
  icon,
  options,
  ...props
}: {
  icon: React.ReactNode;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-50 hover:bg-gray-100 transition">
      {icon}
      <select className="ml-2 bg-transparent flex-1 outline-none" {...props}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function ButtonNext({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-700 transition shadow"
    >
      {label}
      <ArrowRightIcon className="w-4 h-4" />
    </button>
  );
}

function ButtonBack({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition"
    >
      <ChevronLeftIcon className="w-4 h-4 mr-1" />
      Back
    </button>
  );
}
