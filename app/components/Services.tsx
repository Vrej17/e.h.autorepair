"use client";
import { SERVICES } from "@/app/constants/services";

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 bg-dark-950 relative overflow-hidden">
      {/* Light gradient highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-gold-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">
            Excellence in Action
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
            Our Elite Auto Services
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
          <p className="text-gray-400 text-sm sm:text-base">
            From minor scratch removal to complete collision rebuilding, E.H.
            Auto Repair delivers premium craftsmanship with an uncompromising
            attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc, i) => {
            const IconComp = svc.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2">
                {/* Gold glowing hover corner effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-gold-500/5 to-transparent rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-6">
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 rounded-xl bg-dark-900 border border-gold-500/10 flex items-center justify-center transition-all duration-500 group-hover:border-gold-500/40 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    <IconComp className="w-6 h-6 text-gold-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide transition-colors group-hover:text-gold-400">
                      {svc.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
