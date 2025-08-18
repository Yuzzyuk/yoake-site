// components/ClientsMarquee.tsx
"use client";

// Next/Image は使わない（比率崩れ防止 & 確実に width:auto を効かせる）

const LOGO_HEIGHT_DESKTOP = 44; // 全ロゴの高さを揃える
const LOGO_HEIGHT_MOBILE = 32;

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
    <section
      id="clients"
      style={{ padding: "56px 20px", maxWidth: 1200, margin: "0 auto" }}
    >
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

      {/* ビューポート */}
      <div style={{ position: "relative", overflow: "hidden", padding: "10px 0" }}>
        {/* 無限スクロールさせるトラック（2倍並べる） */}
        <div className="marquee" aria-hidden="true">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="logoSlot">
              {/* 透過PNGそのままカラー表示。高さだけ揃える */}
              <img
                src={logo.src}
                alt={logo.alt}
                draggable={false}
                className="logoImg"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          gap: 56px;                 /* ロゴ間の余白 */
          width: max-content;
          animation: marquee 22s linear infinite;
          will-change: transform;
        }

        .logoSlot {
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          padding: 6px 0;
          width: auto !important;    /* グローバルCSSの干渉を潰す */
        }

        .logoImg {
          height: ${LOGO_HEIGHT_DESKTOP}px;
          width: auto !important;    /* “横に引き伸ばし”を抑止 */
          object-fit: contain;
          filter: none;
          mix-blend-mode: normal;
          opacity: 1;
          transition: transform 0.25s ease;
          display: block;
        }

        .logoImg:hover {
          transform: translateY(-2px);
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 760px) {
          .marquee { gap: 36px; }
          .logoImg { height: ${LOGO_HEIGHT_MOBILE}px; }
        }
      `}</style>
    </section>
  );
}
