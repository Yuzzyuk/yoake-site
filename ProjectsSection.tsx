// ProjectsSection.tsx  ← リポジトリ直下に置いている想定（app/page.tsx からは ../ProjectsSection で読んでいる）
// Instagramの埋め込みは blockquote を DOM に描画して、公式スクリプト( https://www.instagram.com/embed.js )
// を1回読み込めばOK。Reactでは巨大な生HTMLは dangerous で入れるのが最短。

"use client";

import Script from "next/script";

type ReelProps = {
  url: string;     // Instagramの投稿URL（/reel/〜/ か /p/〜/）
  caption?: string;
};

// 生のblockquoteを返す（JSXに直すと style オブジェクト化や属性変換が面倒なので文字列で）
function makeEmbedHTML(url: string, caption?: string) {
  // Instagramはプロトコル相対 // でも動くが、Nextでは https 明示が安全
  const permalink = url.replace(/^\/\//, "https://");
  const cap = caption ?? "View this post on Instagram";
  return `
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${permalink}" data-instgrm-version="14"
  style="background:#FFF;border:0;border-radius:12px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5), 0 12px 32px 0 rgba(0,0,0,0.15);margin:0;max-width:540px;min-width:326px;padding:0;width:100%;">
  <div style="padding:16px;">
    <a href="${permalink}" target="_blank" rel="noopener" style="background:#FFF;line-height:0;padding:0;text-align:center;text-decoration:none;width:100%;display:block;">
      <div style="padding:19% 0;"></div>
    </a>
    <p style="color:#c9c8cd;font-family:Arial,sans-serif;font-size:14px;line-height:17px;margin:8px 0 0;overflow:hidden;padding:8px 0 7px;text-align:center;text-overflow:ellipsis;white-space:nowrap;">
      <a href="${permalink}" target="_blank" rel="noopener" style="color:#c9c8cd;font-family:Arial,sans-serif;font-size:14px;line-height:17px;text-decoration:none;">${cap}</a>
    </p>
  </div>
</blockquote>`;
}

function Reel({ url, caption }: ReelProps) {
  return (
    <div
      className="ig-embed"
      // 生HTMLをそのまま描画
      dangerouslySetInnerHTML={{ __html: makeEmbedHTML(url, caption) }}
    />
  );
}

export default function ProjectsSection() {
  // ここに見せたいリールURLを並べるだけ
  const reels: ReelProps[] = [
    { url: "https://www.instagram.com/reel/DKjmHeKsf34/", caption: "Able Carry JP の投稿" },
    { url: "https://www.instagram.com/reel/DEG566XvbjW/", caption: "DJI の投稿" },
    { url: "https://www.instagram.com/reel/DEMsoU_CLRW/", caption: "DJI Osmo の投稿" },
    { url: "https://www.instagram.com/reel/C6QW3x8v3qq/", caption: "Four Seasons Hotel Kyoto の投稿" },
    { url: "https://www.instagram.com/reel/C7fzR60POEj/", caption: "Four Seasons Hotel Kyoto の投稿" },
  ];

  return (
    <section id="projects" style={{ padding: "72px 20px", maxWidth: 1200, margin: "0 auto" }}>
      {/* セクション ヘッダ */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.18)",
            background: "rgba(255,255,255,.05)",
            fontSize: 12,
            letterSpacing: ".12em",
            opacity: 0.85,
          }}
        >
          SELECTED PROJECTS
        </div>
        <h2
          style={{
            margin: "10px 0 8px",
            fontSize: "clamp(28px,4.6vw,44px)",
            fontWeight: 900,
            letterSpacing: "-.02em",
            background: "linear-gradient(90deg,#fff,rgba(255,255,255,.7))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          実績ピックアップ
        </h2>
        <p style={{ margin: 0, opacity: 0.8 }}>Instagram Reels をサイト内に埋め込み表示</p>
      </div>

      {/* グリッド */}
      <div id="ig-grid" style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr" }}>
        <style>{`
          @media (min-width: 860px) {
            #ig-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          }
          @media (min-width: 1200px) {
            #ig-grid { grid-template-columns: repeat(3, 1fr); }
          }
          .card {
            border: 1px solid rgba(255,255,255,.12);
            background: rgba(255,255,255,.03);
            border-radius: 20px;
            padding: 16px;
            transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          }
          .card:hover {
            transform: translateY(-4px);
            border-color: rgba(255,255,255,.25);
            box-shadow: 0 16px 40px rgba(0,0,0,.35);
          }
          .ig-embed { width: 100%; }
        `}</style>

        {reels.map((r, i) => (
          <div className="card" key={i}>
            <Reel url={r.url} caption={r.caption} />
          </div>
        ))}
      </div>

      {/* Instagram公式スクリプト（1回だけでOK） */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          if (window?.instgrm?.Embeds) window.instgrm.Embeds.process();
        }}
      />
    </section>
  );
}
