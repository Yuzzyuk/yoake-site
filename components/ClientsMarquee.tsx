"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  { src: "/logos/duolingo.png", alt: "Duolingo" },
  { src: "/logos/shizuoka.png", alt: "Shizuoka Prefecture" },
  { src: "/logos/notion.png", alt: "Notion" },
  { src: "/logos/toefl.png", alt: "TOEFL" },
  { src: "/logos/cambly.png", alt: "Cambly" },
  { src: "/logos/minerva.png", alt: "Minerva University" },
  { src: "/logos/torifa.png", alt: "Torifa" },
  { src: "/logos/speak.png", alt: "Speak" },
];

export default function ClientsMarquee() {
  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-2xl font-bold mb-8">
        SNSコンサル / コラボ実績
      </h2>
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="mx-8 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
