import {
  Wrench,
  Paintbrush,
  ShieldAlert,
  Zap,
  Sparkles,
  Compass,
  Hammer,
} from "lucide-react";

export const BOOKING_SERVICES = [
  {
    value: "collision",
    label: "Collision & Body Repair",
  },
  { value: "paint", label: "Premium Custom Paint" },
  { value: "frame", label: "Frame Straightening" },
  { value: "dent", label: "Paintless Dent Removal" },
  {
    value: "polish",
    label: "Polish",
  },
];
export const SERVICES = [
  {
    icon: ShieldAlert,
    title: "Collision & Body Repair",
    desc: "Complete structural repair using computerized measuring systems to restore your vehicle to factory safety specifications.",
  },
  {
    icon: Paintbrush,
    title: "Premium Custom Painting",
    desc: "Downdraft spray booths and advanced computerized color matching guarantee a flawless finish.",
  },
  {
    icon: Wrench,
    title: "Frame Straightening",
    desc: "Advanced frame straightening equipment restores your vehicle's structural integrity, ensuring proper safety, handling, and suspension alignment after collision damage.",
  },
  {
    icon: Zap,
    title: "Paintless Dent Removal",
    desc: "Advanced techniques to massage dents out from behind the panel, preserving your vehicle's original factory paint.",
  },
  {
    icon: Compass,
    title: "Scratch & Chip Correction",
    desc: "Professional spot repairs, advanced wet sanding, and paint touch-ups that make scrapes and rock chips vanish.",
  },
  {
    icon: Hammer,
    title: "Mechanical Repair",
    desc: "From routine maintenance to complex diagnostics, our certified technicians deliver reliable repairs with precision and care.",
  },
];
