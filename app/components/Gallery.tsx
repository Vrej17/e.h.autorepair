"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/hero_bg.png",
    category: "collision",
    title: "Chassis Alignment & Tuning",
    desc: "Premium Porsche body restoration & precision suspension tuning.",
  },
  {
    id: 2,
    src: "/paint_job.png",
    category: "paint",
    title: "Satin Black Refinishing",
    desc: "Computerized multi-stage painting & gloss correction.",
  },
  {
    id: 3,
    src: "/collision_repair.png",
    category: "collision",
    title: "Body Panel Reconstruction",
    desc: "High-grade carbon fiber repair & structural reinforcement.",
  },
  {
    id: 4,
    src: "/detailing.png",
    category: "detailing",
    title: "9H Ceramic Coating Polish",
    desc: "Deep gloss wet-look finish & paint protection film detail.",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    const originalImage = filteredImages[index];
    const originalIndex = galleryImages.findIndex(
      (img) => img.id === originalImage.id,
    );
    setActiveImageIndex(originalIndex);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (activeImageIndex === null) return;

    let newIndex = activeImageIndex;
    if (direction === "prev") {
      newIndex =
        activeImageIndex === 0
          ? galleryImages.length - 1
          : activeImageIndex - 1;
    } else {
      newIndex =
        activeImageIndex === galleryImages.length - 1
          ? 0
          : activeImageIndex + 1;
    }
    setActiveImageIndex(newIndex);
  };

  return (
    <section
      id="gallery"
      className="py-16 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-gold-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">
            Our Masterpieces
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
            Finished Work Showcase
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
          <p className="text-gray-400 text-sm sm:text-base">
            Explore our work. Here are some of the luxury, sports, and custom
            vehicles finished to perfection at E.H. Auto Repair.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 animate-fade-in-up delay-100">
          {[
            { id: "all", label: "Show All" },
            { id: "collision", label: "Collision Repair" },
            { id: "paint", label: "Custom Paint" },
            { id: "polish", label: "Polish" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === btn.id
                  ? "bg-linear-to-r from-gold-400 to-gold-600 text-black shadow-lg shadow-gold-500/20 scale-105"
                  : "bg-dark-800 text-gray-400 hover:text-white border border-white/5 hover:border-gold-500/20"
              }`}>
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up delay-200">
          {filteredImages.map((img, i) => (
            <div
              key={img.id}
              onClick={() => openLightbox(i)}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 bg-dark-950 cursor-pointer shadow-xl transition-all duration-500 hover:border-gold-500/30">
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-w-768px) 100vw, 600px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                {/* Search icon glow in middle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-gold-500/90 text-black flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] text-gold-400 font-extrabold uppercase tracking-widest">
                    {img.category === "collision"
                      ? "Collision Repair"
                      : img.category === "paint"
                        ? "Custom Paint"
                        : "Polish"}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white tracking-wide">
                    {img.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-light line-clamp-2">
                    {img.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal">
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 sm:left-8 text-gray-400 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all active:scale-95"
            aria-label="Previous image">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Content Container */}
          <div className="max-w-4xl w-full px-4 flex flex-col items-center gap-4">
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-gold-500/20 bg-dark-950 shadow-2xl">
              <Image
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].title}
                fill
                sizes="(max-w-1200px) 100vw, 1000px"
                className="object-cover"
              />
            </div>

            {/* Info display at bottom of modal */}
            <div className="text-center space-y-1 max-w-xl">
              <span className="text-[10px] text-gold-400 font-extrabold uppercase tracking-widest">
                {galleryImages[activeImageIndex].category === "collision"
                  ? "Collision Repair"
                  : galleryImages[activeImageIndex].category === "paint"
                    ? "Custom Paint"
                    : "Detailing"}
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                {galleryImages[activeImageIndex].title}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm font-light">
                {galleryImages[activeImageIndex].desc}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 sm:right-8 text-gray-400 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all active:scale-95"
            aria-label="Next image">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
