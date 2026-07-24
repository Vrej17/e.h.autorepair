"use client";

import Image from "next/image";
import { ArrowRight, Award, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden bg-radial from-dark-900 via-black to-black">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-600/10 blur-[120px] pointer-events-none animate-pulse duration-[10s]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-[150px] pointer-events-none animate-pulse duration-[8s]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-950/60 border border-gold-500/20 text-gold-400 text-xs font-semibold tracking-wider uppercase">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              <span>The Gold Standard in Auto Restoration</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Precision Repair.
              <br />
              <span className="text-gold-gradient">Flawless Finish.</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              At <strong className="text-white">E.H. Auto Repair</strong>, we
              combine state-of-the-art repair technology with master
              craftsmanship. Specialized in high-end collision restoration,
              expert bodywork, and luxury painting services.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-dark-800 border border-gold-500/20 flex items-center justify-center">
                  <Award className="w-4 h-4 text-gold-500" />
                </div>
                <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider">
                  Certified Experts
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="#services"
                className="group px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-linear-to-r from-gold-400 to-gold-600 rounded-lg hover:from-gold-300 hover:to-gold-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.45)]">
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#gallery"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-white border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/5 rounded-lg text-center transition-all duration-300">
                View Gallery
              </Link>
            </div>
          </div>

          {/* Hero Image / Mockup Panel */}
          <div className="lg:col-span-5 relative flex justify-center animate-fade-in delay-200">
            <div className="relative w-full max-w-112.5 aspect-4/5 sm:aspect-square lg:aspect-4/5">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1.5 rounded-2xl bg-linear-to-br from-gold-500 to-transparent opacity-30 blur-md animate-pulse"></div>

              {/* Image Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-gold-500/20 bg-dark-900 shadow-2xl">
                <Image
                  src="/hero_bg.png"
                  alt="E.H. Auto Repair Workshop Showcase"
                  fill
                  sizes="(max-w-768px) 100vw, 450px"
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

                {/* Embedded Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border-gold-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gold-400 font-bold uppercase tracking-wider">
                      Industry Experts
                    </p>
                    <p className="text-lg font-heading font-black text-white leading-tight">
                      22+ Years Excperience
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-heading font-black text-gold-500 leading-tight">
                      4.9
                    </p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">
                      Google Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
