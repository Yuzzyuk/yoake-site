// ProjectsSection.tsx（リポジトリ直下。app/page.tsx からは ../ProjectsSection で import）
// 16:9のカードで一覧表示 → クリックで埋め込みを遅延表示（軽くて見やすい）

"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";

type Project = {
  title: string;
  url: string;          // Instagramの /reel/... or /p/... か YouTubeの watch?v=...
  tag?: string;         // 表示用の小タグ
  cover?: string;       // /thumb-xxx.jpg（任意。無ければグラデ）
};

const PROJECTS: Project[] = [
  { title: "Able Carry JP — Reels", url: "https://www.instagram.com/reel/DKjmHeKsf34/", tag: "Instagram", cover: "/thumb-able.jpg" },
  { title: "DJI — Reels",            url: "https://www.instagram.com/reel/DEG566XvbjW/", tag: "Instagram", cover: "/thumb-dji.jpg" },
  { title: "DJI Osmo — Reels",       url: "https://www.instagram.com/reel/DEMsoU_CLRW/", tag: "Instagram" },
  { title: "Four Seasons Kyoto",     url: "https://www.instagram.com/reel/C6QW3x8v3qq/", tag: "Instagram" },
  { title: "Four Seasons Kyoto 2",   url: "https://www.instagram.com/reel/C7fzR60POEj/", tag: "Instagram" },
  // 例）YouTubeも混在OK：
  // { title: "Brand Film 2024", url: "https://www.youtube.com/watch?v=xxxxxxxxxxx", tag: "YouTube", cover: "/thumb-brandfilm.jpg" },
];

// URLから配信元を推定
function providerOf(url: string): "instagram" | "youtube" | "other" {
  if (/instagram\.com/.test(url)) return "instagram";
  if (/youtube\.com|youtu\.be/.test(url)) return "youtube";
  return "other";
}

// Instagram埋め込みHTML（最小形）
function igEmbedHTML(url: string, caption = "View on Instagram") {
  const permalink = url.replace(/^\/\//, "https://");
  return `
<blockquote class="instagram-media" data-instgrm-permalink="${permalink}" data-instgrm-version="14"
  style="background:#fff;border:0;border-radius:12px;box-shadow:0 0 1px 0 rgba(0,0,0,.5),0 12px 32px rgba(0,0,0,.15);margin:0;padding:0;max-width:540px;width:100%;">
  <a href="${permalink}" target="_blank" rel="noopener" style="display:block;padding:19% 0;background:#fff;line-height:0;"></a>
  <p style="color:#c9c8cd;font:14px/17px Arial,sans-serif;margin:8px 0;padding:8px 0;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
    <a href="${permalink}" target="_blank" rel="noopener" style="color:#c9c8cd;text-decoration:none;">${caption}</a>
  </p>
</blockquote>`;
}

// YouTube watch→embed 変換
function toYouTubeEmbed(url: string) {
  const m = url.match(/(?:v=|\.be\/)([A-Za-z0-9_-]{6,})/);
  const id = m?.[1] ?? "";
  return id ? `https://www.youtube.com/embed/${id}?rel=0` : "";
}

export default function ProjectsSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Instagramスクリプトが読み込まれたら、埋め込みを加工
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && window?.instgrm?.Embeds) {
      // @ts-ignore
      window.instgrm.Embeds.process();
    }
  }, [playingIndex]);

  const items = useMemo(() => PROJECTS, []);

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
          実績ピックアップ（クリックで再生）
        </h2>
        <p style={{ margin: 0, opacity: .8 }}>一覧はすべて横長16:9で整列。クリックするとその場で埋め込み再生に切り替わります。</p>
      </div>

      {/* グリッド */}
      <div id="proj-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        <style>{`
          @media (min-width: 860px){
            #proj-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          }
          @media (min-width: 1200px){
            #proj-grid { grid-template-columns: repeat(3, 1fr); }
          }
          .card {
            position: relative;
            border: 1px solid rgba(255,255,255,.12);
            background: rgba(255,255,255,.03);
            border-radius: 18px;
            overflow: hidden;
            transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          }
          .card:hover {
            transform: translateY(-4px);
            border-color: rgba(255,255,255,.25);
            box-shadow: 0 16px 40px rgba(0,0,0,.35);
          }
          .frame {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            background: radial-gradient(60% 120% at 20% 10%, rgba(229,46,113,.25), transparent),
                        radial-gradient(60% 120% at 80% 0%, rgba(0,229,255,.18), transparent),
                        linear-gradient(135deg, rgba(255,138,0,.18), rgba(11,12,16,.6));
          }
          .cover {
            position:absolute; inset:0; background-size: cover; background-position: center;
            filter: saturate(1.05) contrast(1.02);
          }
          .shade {
            position:absolute; inset:0;
            background: linear-gradient(180deg, rgba(0,0,0,.0), rgba(0,0,0,.45) 65%, rgba(0,0,0,.65));
          }
          .meta {
            position:absolute; left:12px; right:12px; bottom:10px;
            display:flex; align-items:center; justify-content:space-between; gap:12px;
            color:#fff;
          }
          .tag {
            font-size: 11px; opacity:.9; padding:6px 10px; border-radius:999px;
            border:1px solid rgba(255,255,255,.22); background: rgba(0,0,0,.3);
          }
          .title {
            font-weight:800; font-size:14px; text-shadow: 0 2px 12px rgba(0,0,0,.6);
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap; margin-left:8px;
          }
          .play {
            position:absolute; inset:0; display:grid; place-items:center; pointer-events:none;
          }
          .play svg {
            width:54px; height:54px; opacity:.9;
            filter: drop-shadow(0 10px 18px rgba(0,0,0,.45));
          }
          .embed {
            position:absolute; inset:0; display:block;
          }
          .hidden {
            display:none;
          }
        `}</style>

        {items.map((p, i) => {
          const active = playingIndex === i;
          const prov = providerOf(p.url);
          return (
            <article className="card" key={i}>
              {/* 表示レイヤ：サムネ/タイトル */}
              <div
                className="frame"
                onClick={() => setPlayingIndex(active ? null : i)}
                style={{ cursor: "pointer" }}
                aria-label={`Play ${p.title}`}
                role="button"
              >
                {/* カバー画像（任意） */}
                {p.cover ? (
                  <div className="cover" style={{ backgroundImage: `url(${p.cover})` }} />
                ) : null}
                <div className="shade" />
                <div className="meta">
                  <div style={{ display: "flex", alignItems: "center", minWidth: 0 }}>
                    {p.tag ? <span className="tag">{p.tag}</span> : null}
                    <span className="title" title={p.title}>{p.title}</span>
                  </div>
                  <div className="play" aria-hidden>
                    {/* 再生アイコン（SVG） */}
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.45)"/>
                      <polygon points="10,8 18,12 10,16" fill="#fff"/>
                    </svg>
                  </div>
                </div>

                {/* クリック後：埋め込みを上に被せる */}
                <div className={`embed ${active ? "" : "hidden"}`}>
                  {prov === "instagram" ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: igEmbedHTML(p.url, p.title) }}
                      style={{ position: "absolute", inset: 0 }}
                    />
                  ) : prov === "youtube" ? (
                    <iframe
                      src={toYouTubeEmbed(p.url)}
                      title={p.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ width: "100%", height: "100%", border: 0, position: "absolute", inset: 0 }}
                    />
                  ) : (
                    <a href={p.url} target="_blank" rel="noopener" style={{
                      position:"absolute", inset:0, display:"grid", placeItems:"center", color:"#fff"
                    }}>Open</a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Instagram公式スクリプト（遅延読み込み・クリック後にprocess） */}
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
