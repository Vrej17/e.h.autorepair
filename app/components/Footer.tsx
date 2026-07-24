import { Clock, Mail, Phone, Wrench, MapPin } from "lucide-react";
import { INFORMATION } from "../constants/information";
import Link from "next/link";
import InstaSVG from "../svg/InstaSVG";
import YelpSVG from "../svg/YelpSVG";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between w-full pb-12 border-b border-white/5 max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:gap-8">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg flex items-center justify-center">
                <Image
                  src="/favicon.png"
                  alt="E.H. Auto Repair Logo"
                  width={50}
                  height={50}
                />
              </div>
              <span className="font-heading text-lg font-black tracking-wider text-white">
                E.H. <span className="text-gold-500">AUTO</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-lg:max-w-9/12 max-lg:text-sm max-w-sm font-light">
              Providing specialized collision restoration, elite custom
              painting, and premium vehicle detailing. Committed to returning
              your vehicle to factory safety specifications with a flawless
              finish.
            </p>
          </div>

          {/* Operating Hours Card */}
          <div className="pt-0 rounded-2xl border-gold-500/10 space-y-3">
            <div className="flex items-center gap-2 text-gold-400 font-bold text-lg uppercase tracking-wider">
              <Clock className="w-5 h-5 text-gold-500" />
              <span>Shop Hours</span>
            </div>
            <div className="space-y-3 text-xs max-lg:text-sm text-gray-400">
              <div className="flex gap-4">
                <span>Monday - Friday</span>
                <span className="text-white font-semibold ml-auto">
                  8:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex gap-4">
                <span>Saturday</span>
                <span className="text-white font-semibold ml-auto">
                  9:00 AM - 4:00 PM
                </span>
              </div>
              <div className="flex gap-4">
                <span>Sunday</span>
                <span className="text-gold-500 font-bold ml-auto">Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="pt-0 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-gold-400 font-bold text-lg uppercase tracking-wider">
              <span>Connect</span>
            </div>

            <ul className="space-y-3 text-xs text-gray-400 m-0 p-0 list-none max-lg:text-sm">
              <li className="flex items-center gap-2 border-b border-white/5">
                <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`tel:${INFORMATION.number}`}
                  className="text-gray-400 hover:text-white transition-colors">
                  {INFORMATION.number}
                </a>
              </li>

              <li className="flex items-center gap-2 border-b border-white/5">
                <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${INFORMATION.email}`}
                  className="text-gray-400 hover:text-white transition-colors">
                  {INFORMATION.email}
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={INFORMATION.addressLink}
                  className="text-gray-400 leading-tight">
                  {INFORMATION.address}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <YelpSVG className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 leading-tight"
                  href={INFORMATION.yelp}>
                  {INFORMATION.yelp}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <InstaSVG className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                <a
                  target="_blank"
                  href={INFORMATION.insta}
                  className="text-gray-400 leading-tight">
                  {INFORMATION.insta}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} E.H. Auto Repair. All rights reserved.
          </p>
          <div className="flex gap-4">
            <p className="hover:text-white transition-colors">Privacy Policy</p>
            <span>•</span>
            <p className="hover:text-white transition-colors">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
