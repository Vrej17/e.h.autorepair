import Image from "next/image";
import { INFORMATION } from "../constants/information";

export default function Location() {
  return (
    <section className="#location flex items-center justify-center flex-col gap-8 px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">
          FIND US HERE
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
          Our Location In Map
        </h2>
        <div className="w-16 h-1 bg-linear-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
      </div>
      <a
        target="_blank"
        className="mx-auto w-[70%] h-full"
        href={INFORMATION.addressLink}>
        <Image
          src="/location-map.png"
          alt="E.H. Auto Repair Location"
          width={849}
          height={780}
          className="rounded-2xl object-cover shadow-2xl shadow-gold-500/20"
        />
      </a>
    </section>
  );
}
