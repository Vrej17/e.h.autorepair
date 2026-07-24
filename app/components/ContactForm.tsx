"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, ChevronDown } from "lucide-react";
import { INFORMATION } from "../constants/information";
import { BOOKING_SERVICES } from "../constants/services";
import Link from "next/link";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isOpenServiceCategory, setIsOpenServiceCategory] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    }, 800);
  };
  const handleServiceSelect = (service: { value: string; label: string }) => {
    setFormData((prev) => ({
      ...prev,
      service: service.label,
    }));
    setIsOpenServiceCategory(false);
  };
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      e.stopPropagation();
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpenServiceCategory(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="contact"
      className="py-16 bg-dark-900 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-2/3 w-125 h-125 rounded-full bg-gold-600/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            {/* Header info */}
            <div className="space-y-4">
              <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">
                Let's Connect
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
                Schedule Your Appointment
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-gold-500 to-transparent"></div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ready to restore your vehicle to immaculate condition? Get in
                touch with our team or schedule an appointment. We'll get back
                to you within 2 business hours.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/50 border border-white/5 hover:border-gold-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-gold-400 font-bold uppercase tracking-wider">
                    Call Us Directly
                  </h4>
                  <a
                    href={`tel:${INFORMATION.number}`}
                    className="text-white hover:text-gold-400 font-bold transition-colors">
                    {INFORMATION.number}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/50 border border-white/5 hover:border-gold-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-gold-400 font-bold uppercase tracking-wider">
                    Email Inquiry
                  </h4>
                  <a
                    href={`mailto:${INFORMATION.email}`}
                    className="text-white hover:text-gold-400 font-bold transition-colors">
                    {INFORMATION.email}
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/50 border border-white/5 hover:border-gold-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-gold-400 font-bold uppercase tracking-wider">
                    Location
                  </h4>
                  <a
                    target="_blank"
                    href={INFORMATION.addressLink}
                    className="text-white font-bold leading-tight">
                    4265 Power Inn Rd Sacramento
                    <br />
                    <span className="text-gray-400 font-normal text-xs">
                      CA 95826 United States
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 mt-auto">
            <div className="h-max rounded-3xl glass-panel p-6 sm:p-10 shadow-2xl relative">
              {formSubmitted ? (
                <div className="h-full min-h-100 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Booking Request Sent
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                    Thank you! Your inquiry was successfully received. An E.H.
                    Auto representative will call you shortly to confirm your
                    booking.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gold-500 border border-gold-500/20 hover:border-gold-500/50 hover:bg-gold-500/5 rounded-lg transition-colors">
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>

                    {/* Service Type Selection */}
                    {/* <div className="space-y-1.5">
                      <label
                        htmlFor="service"
                        className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                        Service Category
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors cursor-pointer">
                        <option
                          value="collision"
                          className="bg-black text-white w-3">
                          Collision & Body Repair
                        </option>
                        <option
                          value="paint"
                          className="bg-black text-white w-3">
                          Premium Custom Paint
                        </option>
                        <option
                          value="frame"
                          className="bg-black text-white w-3">
                          Frame Straightening
                        </option>
                        <option
                          value="dent"
                          className="bg-black text-white w-3">
                          Paintless Dent Removal
                        </option>
                        <option
                          value="coating"
                          className="bg-black text-white w-3">
                          Ceramic Detail & Polish
                        </option>
                      </select>
                    </div>
                    */}

                    <div ref={dropdownRef} className="relative w-full">
                      <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">
                        Service Category
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          setIsOpenServiceCategory((prev) => !prev)
                        }
                        className="w-full px-4 py-3 rounded-lg! bg-dark-950 border border-white/10 text-white text-left flex justify-between items-center hover:border-gold-500 focus:outline-none focus:border-gold-500 transition">
                        <span
                          className={
                            formData.service ? "text-white" : "text-gray-500"
                          }>
                          {formData.service || "Select a Service"}
                        </span>

                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            isOpenServiceCategory ? "rotate-180" : ""
                          }`}></ChevronDown>
                      </button>

                      {isOpenServiceCategory && (
                        <div className="absolute left-0 right-0 mt-2 bg-dark-950 border border-white/10 rounded-lg overflow-hidden shadow-xl z-50">
                          {BOOKING_SERVICES.map((service) => (
                            <button
                              key={service.value}
                              type="button"
                              onClick={() => handleServiceSelect(service)}
                              className="w-full px-4 py-3 text-left text-white hover:bg-gold-500 hover:text-black transition-colors rounded-lg">
                              {service.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                      Vehicle Details & Damage Notes
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                      placeholder="Please enter your car make, model, year, and a description of the damage or services required."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-auto py-4 text-sm font-bold uppercase tracking-wider text-black bg-linear-to-r from-gold-400 to-gold-600 rounded-lg hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.35)] active:scale-[0.98]">
                    Submit Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
