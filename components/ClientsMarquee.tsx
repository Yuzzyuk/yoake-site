"use client";
import Image from "next/image";

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
    <section id="clients" style={{ padding: "56px 20px", maxWidth: 1200, margin: "0 auto" }}>
      <h2
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: "clamp(22px, 3.6vw, 32px)",
          marginBottom: 18,
          letterSpacing: "-.01em",
        }}
      >
        SNSコンサル / コラボ実績
      </h2>

      <div style={{ position: "relative", overflow: "hidden", padding: "14px 0" }}>
        <div className="marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="logo">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={64}
                className="img"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          gap: 48px;
          width: max-content;
          animation: marquee 22s linear infinite;
          will-change: transform;
          opacity: 0.95;
        }
        .logo {
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          padding: 8px 0;
          filter: grayscale(1);
          opacity: 0.8;
          transition: filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
        }
        .logo:hover {
          filter: grayscale(0);
          opacity: 1;
          transform: translateY(-2px);
        }
        .img {
          object-fit: contain;
          height: 40px;
          width: auto;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 760px) {
          .marquee { gap: 32px; }
          .img { height: 32px; }
        }
      `}</style>
    </section>
  );
}
