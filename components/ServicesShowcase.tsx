// components/ServicesShowcase.tsx
"use client";

type Card = {
  key: string;
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
  image: string;   // /public からの相対パス
  badge: string;
  lang: "JP/EN" | "JP" | "EN";
};

const CARDS: Card[] = [
  {
    key: "intl",
    title: "International SNS Consulting",
    subtitle: "海外進出 / 海外向けSNS運用・広告",
    bullets: [
      "英日バイリンガルで戦略設計（市場/競合/ペルソナ）",
      "TikTok / Instagram / YouTube 最適化",
      "英語コピー/字幕・ローカライズ運用、広告運用"
    ],
    href: "#contact",
    image: "/services/global.jpg",
    badge: "Priority",
    lang: "JP/EN",
  },
  {
    key: "promo",
    title: "Bilingual Promo Video",
    subtitle: "海外基準の映像 × SNS最適化",
    bullets: [
      "ショート〜ブランドフィルムまで一貫制作",
      "英語/日本語ナレーション・字幕対応",
      "媒体ごとのアスペクト&テンポ設計"
    ],
    href: "#contact",
    image: "/services/promo.jpg",
    badge: "Film",
    lang: "JP/EN",
  },
  {
    key: "music",
    title: "Music / Entertainment",
    subtitle: "MV・ライブ・アーティストのSNS設計",
    bullets: [
      "MV/ティザー/ライブ映像のクリエイティブ",
      "リール連動のバイラル設計",
      "世界観構築と海外向け展開"
    ],
    href: "#projects",
    image: "/services/music.jpg",
    badge: "Music",
    lang: "JP/EN",
  },
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="sv-wrap">
      <div className="sv-head">
        <div className="pill">WHAT WE DO</div>
        <h2>Bilingual Growth for Global & Domestic</h2>
        <p>
          写真で一発理解。海外/国内どちらも対応。<br className="hide-sm" />
          「SNS × 映像」でブランドの熱量を届けます。
        </p>
      </div>

      <div className="grid">
        {CARDS.map((c) => (
          <article key={c.key} className="card">
            {/* 背景写真 */}
            <div
              className="bg"
              style={{
                backgroundImage: `url(${c.image})`,
              }}
              aria-hidden="true"
            />
            {/* グラデ被せ */}
            <div className="shade" />
            {/* 内容 */}
            <div className="inner">
              <div className="toprow">
                <span className="badge">{c.badge}</span>
                <span className="lang">{c.lang}</span>
              </div>
              <h3 className="title">{c.title}</h3>
              <div className="sub">{c.subtitle}</div>
              <ul className="list">
                {c.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <a className="cta" href={c.href}>相談する</a>
            </div>
          </article>
        ))}
      </div>

      {/* スタイル（このコンポーネント内だけに作用） */}
      <style jsx>{`
        .sv-wrap{
          position: relative;
          padding: 84px 20px 96px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .sv-head{ text-align:center; margin-bottom: 28px; }
        .pill{
          display:inline-block; padding:6px 12px; border-radius:999px;
          border:1px solid rgba(255,255,255,.18);
          background:rgba(255,255,255,.05);
          font-size:12px; letter-spacing:.12em; opacity:.85;
        }
        .sv-head h2{
          margin:12px 0 10px; font-size:clamp(28px,4.6vw,44px);
          font-weight:900; letter-spacing:-.02em;
          background:linear-gradient(90deg,#fff,rgba(255,255,255,.7));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        }
        .sv-head p{
          margin:0 auto; max-width:760px; opacity:.85; line-height:1.8;
        }
        .hide-sm{ display:none; }
        @media (min-width: 760px){ .hide-sm{ display:inline; } }

        .grid{
          display:grid; gap:16px; grid-template-columns: 1fr;
          margin-top: 28px;
        }
        @media (min-width: 980px){
          .grid{ grid-template-columns: repeat(3, 1fr); gap:18px; }
        }

        .card{
          position:relative; overflow:hidden; border-radius:22px;
          min-height: 420px;
          border:1px solid rgba(255,255,255,.14);
          background: #0e0e12;
          isolation:isolate;
          transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s, border-color .35s;
        }
        .card:hover{
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(0,0,0,.45);
          border-color: rgba(255,255,255,.24);
        }

        .bg{
          position:absolute; inset:0; background-size: cover; background-position: center;
          transform: scale(1.03);
          filter: saturate(1.05) contrast(1.05);
          transition: transform .6s ease;
          z-index: -2;
        }
        .card:hover .bg{ transform: scale(1.07); }

        .shade{
          position:absolute; inset:0;
          background:
            linear-gradient(180deg, rgba(0,0,0,.0) 0%, rgba(0,0,0,.35) 38%, rgba(0,0,0,.65) 100%),
            radial-gradient(60% 60% at 80% 0%, rgba(229,46,113,.28), transparent 70%),
            radial-gradient(60% 60% at 0% 0%, rgba(0,229,255,.22), transparent 70%);
          z-index:-1;
        }

        .inner{
          position: absolute; inset: 0; display:flex; flex-direction:column;
          justify-content: flex-end; padding: 18px;
          color: #fff; text-shadow: 0 2px 8px rgba(0,0,0,.35);
          backdrop-filter: blur(0px);
        }
        .toprow{
          display:flex; justify-content: space-between; align-items:center; margin-bottom: 8px;
        }
        .badge{
          display:inline-flex; align-items:center; gap:8px; font-size:12px;
          padding:6px 10px; border-radius:999px;
          border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.06);
          opacity:.95;
        }
        .lang{
          font-size:12px; opacity:.9; letter-spacing:.08em;
          border:1px solid rgba(255,255,255,.18); padding:6px 10px; border-radius:999px;
          background:rgba(255,255,255,.06);
        }
        .title{ margin:6px 0 2px; font-size: clamp(18px, 2.2vw, 22px); font-weight: 900; }
        .sub{ margin:0 0 10px; opacity:.9; font-size: 13.5px; }
        .list{ margin: 8px 0 14px; padding-left: 18px; opacity:.95; }
        .list li{ margin:6px 0; }
        .cta{
          align-self: flex-start;
          display:inline-block; padding:10px 14px; border-radius:14px;
          border:1px solid rgba(255,255,255,.28); color:#fff; font-weight:800;
          background: rgba(255,255,255,.08);
          transition: transform .25s ease, background .25s ease, border-color .25s ease;
        }
        .cta:hover{
          transform: translateY(-2px);
          border-color: rgba(255,255,255,.42);
          background: rgba(255,255,255,.12);
        }
      `}</style>
    </section>
  );
}
