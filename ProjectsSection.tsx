// ProjectsSection.tsx（リポジトリ直下。app/page.tsx からは ../ProjectsSection で import）
"use client";

import Script from "next/script";

type Reel = { url: string; title: string; tag?: string };

// Instagram埋め込みの最小HTML
function igEmbedHTML(url: string, caption = "View on Instagram") {
  const permalink = url.replace(/^\/\//, "https://");
  return `
<blockquote class="instagram-media" data-instgrm-permalink="${permalink}" data-instgrm-version="14"
  style="background:#FFF;border:0;border-radius:12px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 12px 32px rgba(0,0,0,0.15);margin:0;padding:0;max-width:540px;width:100%;">
  <a href="${permalink}" target="_blank" rel="noopener" style="display:block;padding:19% 0;background:#fff;line-height:0;"></a>
  <p style="color:#c9c8cd;font:14px/17px Arial,sans-serif;margin:8px 0;padding:8px 0;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
    <a href="${permalink}" target="_blank" rel="noopener" style="color:#c9c8cd;text-decoration:none;">${caption}</a>
  </p>
</blockquote>`;
}

export default function ProjectsSection() {
  // 並べたいリール（好きに増減OK）
  const reels: Reel[] = [
    { url: "https://www.instagram.com/reel/DKjmHeKsf34/", title: "Able Carry JP — Reels", tag: "Instagram" },
    { url: "https://www.instagram.com/reel/DEG566XvbjW/", title: "DJI — Reels", tag: "Instagram" },
    { url: "https://www.instagram.com/reel/DEMsoU_CLRW/", title: "DJI Osmo — Reels", tag: "Instagram" },
    { url: "https://www.instagram.com/reel/C6QW3x8v3qq/", title: "Four Seasons Kyoto", tag: "Instagram" },
    { url: "https://www.instagram.com/reel/C7fzR60POEj/", title: "Four Seasons Kyoto 2", tag: "Instagram" },
  ];

  return (
    <section id="projects" style={{ padding: "92px 20px", maxWidth: 1200, margin: "0 auto" }}>
      {/* ヘッダ */}
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
            opacity: .85,
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
          実績ピックアップ（縦型を横2枚で整理）
        </h2>
        <p style={{ margin: 0, opacity: .8 }}>
          縦長Reelsを**横2カラム**に整列。スマホでは1カラム表示。
        </p>
      </div>

      {/* 2カラムグリッド（スマホは1） */}
      <div id="reels-grid" style={{ display: "grid", gap: 18, gridTemplateColumns: "1fr" }}>
        <style>{`
          @media (min-width: 860px){
            #reels-grid { grid-template-columns: repeat(2, 1fr); gap: 22px; }
          }
          .reel-card {
            border: 1px solid rgba(255,255,255,.12);
            background: rgba(255,255,255,.03);
            border-radius: 18px;
            padding: 14px;
            transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          }
          .reel-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255,255,255,.25);
            box-shadow: 0 16px 40px rgba(0,0,0,.35);
          }
          .reel-head {
            display:flex; align-items:center; justify-content:space-between; gap:12px;
            padding: 4px 4px 10px 4px;
          }
          .pill {
            font-size: 11px; opacity:.9; padding:6px 10px; border-radius:999px;
            border:1px solid rgba(255,255,255,.22); background: rgba(0,0,0,.25);
          }
          .title {
            font-weight:800; font-size:14px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
          }
          /* Instagram側が高さを決めるので、ここでは幅100%だけ指定 */
          .ig-wrap { width: 100%; }
        `}</style>

        {reels.map((r, i) => (
          <article key={i} className="reel-card">
            <div className="reel-head">
              <span className="pill">{r.tag ?? "Instagram"}</span>
              <div className="title" title={r.title}>{r.title}</div>
            </div>
            <div
              className="ig-wrap"
              // ネイティブ埋め込みをそのまま描画（縦長のまま）。列幅に応じて自動でリサイズされる。
              dangerouslySetInnerHTML={{ __html: igEmbedHTML(r.url, r.title) }}
            />
          </article>
        ))}
      </div>

      {/* Instagram公式スクリプト（1回だけ、遅延読み込み） */}
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
