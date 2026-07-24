"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { INFORMATION } from "../constants/information";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled && isMobileMenuOpen
          ? "py-3 bg-black/80"
          : isScrolled
            ? "py-3 bg-black/80 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : isMobileMenuOpen
              ? "py-3"
              : "py-5"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href="/">
            <div className="shrink-0 flex items-center gap-2 cursor-pointer">
              <Image
                priority
                src="/e_h_logo.png"
                alt="E.H. Auto Repair Logo"
                width={100}
                height={80}
              />
              <div>
                <span className="font-heading text-lg sm:text-xl font-black tracking-wider text-white">
                  E.H. <span className="text-gold-500">AUTO</span>
                </span>
                <p className="text-[9px] text-gold-300/80 tracking-widest uppercase font-semibold leading-none -mt-0.5">
                  Repair & Paint
                </p>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-300 hover:text-gold-400 text-sm font-medium tracking-wide transition-colors">
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-gray-300 hover:text-gold-400 text-sm font-medium tracking-wide transition-colors">
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-gold-400 text-sm font-medium tracking-wide transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA / Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${INFORMATION.number}`}
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-semibold transition-colors">
              <Phone className="w-4 h-4 animate-bounce" />
              <span>{INFORMATION.number}</span>
            </a>
            <Link
              href="#contact"
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-linear-to-r from-gold-400 to-gold-600 rounded-md hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] active:scale-95">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-gold-400 focus:outline-none p-2 rounded-md transition-colors"
              aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full border-b border-gold-500/10 transition-all bg-black/80 duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-2xl">
          <Link
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-gold-400 py-2 text-base font-medium transition-colors">
            Services
          </Link>
          <Link
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-gold-400 py-2 text-base font-medium transition-colors">
            Gallery
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-gold-400 py-2 text-base font-medium transition-colors">
            Contact
          </Link>
          <div className="pt-4 border-t border-gray-800 flex flex-col gap-4">
            <a
              href={`tel:${INFORMATION.number}`}
              className="flex items-center gap-2 text-gold-400 text-sm font-semibold">
              <Phone className="w-4 h-4" />
              <span>{INFORMATION.number}</span>
            </a>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-black bg-linear-to-r from-gold-400 to-gold-600 rounded-md hover:from-gold-300 hover:to-gold-500 transition-colors shadow-lg">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
