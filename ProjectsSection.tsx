// /ProjectsSection.tsx
import Script from "next/script";

/**
 * 使い方メモ
 * - /public/projects/ にサムネ(横長でも縦長でもOK)を入れると、左パネルの背面に“ぼかし背景”として自動使用。
 * - サムネが無い項目はフェールセーフでグラデ背景になります（エラーになりません）。
 * - Instagram埋め込みのリンクはそのまま使えます（blockquote + embed.js）。
 */

type Project = {
  title: string;
  client: string;
  permalink: string;    // Instagram 投稿URL
  thumb?: string;       // /public/projects/xxx.jpg（任意）
  purpose: string[];    // 海外展開/ブランディング/UGC など
  metrics?: string[];   // KPI小さく（再生・CV・増加など）
  role?: string[];      // 担当（Strategy/Filming/Editing/SNS Ops など）
  platform?: string[];  // IG/TikTok/YouTube 等
};

const projects: Project[] = [
  {
    title: "Able Carry JP Launch Reel",
    client: "Able Carry Japan",
    permalink: "https://www.instagram.com/reel/DKjmHeKsf34/",
    thumb: "/projects/ablecarry.jpg",
    purpose: ["海外展開", "プロダクト訴求"],
    metrics: ["再生 1.2M+", "保存率↑", "サイト流入↑"],
    role: ["企画/脚本", "Filming", "Editing", "SNS運用助言"],
    platform: ["Instagram Reels"],
  },
  {
    title: "DJI Global Reel",
    client: "DJI",
    permalink: "https://www.instagram.com/reel/DEG566XvbjW/",
    thumb: "/projects/dji.jpg",
    purpose: ["ブランディング", "UGC誘発"],
    metrics: ["高エンゲージ", "コメント質↑"],
    role: ["Filming", "Editing", "Color"],
    platform: ["Instagram Reels", "TikTok"],
  },
  {
    title: "DJI OSMO Feature Reel",
    client: "DJI OSMO",
    permalink: "https://www.instagram.com/reel/DEMsoU_CLRW/",
    thumb: "/projects/osmo.jpg",
    purpose: ["機能訴求", "海外視聴獲得"],
    metrics: ["完視聴率↑", "指名検索↑"],
    role: ["Filming", "Editing", "Motion"],
    platform: ["Instagram Reels"],
  },
  {
    title: "Four Seasons Kyoto Collab",
    client: "Four Seasons Hotel Kyoto",
    permalink: "https://www.instagram.com/reel/C6QW3x8v3qq/",
    thumb: "/projects/fskyoto.jpg",
    purpose: ["ブランディング", "観光誘致"],
    metrics: ["滞在意向↑", "問い合わせ増"],
    role: ["企画/演出", "Filming", "Editing"],
    platform: ["Instagram Reels", "YouTube Shorts"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="proj-section">
      <div className="head">
        <div className="pill">WORK / PROJECTS</div>
        <h2>目的ドリブンで成果に繋げる</h2>
        <p className="sub">
          海外展開 / ブランディング / UGC誘発 など目的タグで探せます。リールは2本並び、横の余白は“背景演出”に変換。
        </p>

        {/* 目的タグ（見た目だけのピル。将来フィルタ化してもOK） */}
        <div className="tags">
          {["海外展開", "ブランディング", "UGC", "ホテル/観光", "ガジェット"].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="grid">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="card"
            style={
              p.thumb
                ? ({ ["--bg" as any]: `url(${p.thumb})` } as React.CSSProperties)
                : undefined
            }
          >
            {/* 左：埋め込み（縦長を想定）。背面はぼかし背景（スマートフィル） */}
            <div className="left">
              <div className="embedShell">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={p.permalink}
                  data-instgrm-version="14"
                  // data-instgrm-captioned // ← 必要ならキャプション付き
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: 12,
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5),0 8px 24px 0 rgba(0,0,0,0.12)",
                    margin: 0,
                    width: "100%",
                  }}
                />
              </div>
            </div>

            {/* 右：サイドパネル（B2B向けの情報小出し） */}
            <div className="right">
              <div className="meta">
                <div className="client">{p.client}</div>
                <h3 className="title">{p.title}</h3>

                <div className="rows">
                  {p.purpose?.length ? (
                    <div className="row">
                      <div className="label">目的</div>
                      <div className="val">{p.purpose.join(" / ")}</div>
                    </div>
                  ) : null}

                  {p.metrics?.length ? (
                    <div className="row">
                      <div className="label">成果</div>
                      <div className="val">{p.metrics.join(" ・ ")}</div>
                    </div>
                  ) : null}

                  {p.role?.length ? (
                    <div className="row">
                      <div className="label">担当</div>
                      <div className="val">{p.role.join(" / ")}</div>
                    </div>
                  ) : null}

                  {p.platform?.length ? (
                    <div className="row">
                      <div className="label">Platform</div>
                      <div className="val">{p.platform.join(" / ")}</div>
                    </div>
                  ) : null}
                </div>

                <div className="ctaRow">
                  <a className="btn btn-primary" href={p.permalink} target="_blank" rel="noreferrer">
                    Instagramで見る
                  </a>
                  <a className="btn btn-ghost" href="#contact">相談する</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Instagram公式スクリプト（1回だけ読み込み） */}
      <Script async src="//www.instagram.com/embed.js" />
      <style jsx>{styles}</style>
    </section>
  );
}

const styles = `
.proj-section{
  padding: 80px 20px 64px;
  max-width: 1200px;
  margin: 0 auto;
}
.head{ text-align:center; margin-bottom: 22px; }
.pill{
  display:inline-block; padding:6px 12px; border-radius:999px;
  border:1px solid rgba(0,0,0,.08); background:#fff;
  font-size:12px; letter-spacing:.12em; opacity:.85;
}
.head h2{
  margin:12px 0 6px; font-size: clamp(28px, 4.2vw, 40px);
  font-weight:900; letter-spacing:-.02em;
}
.sub{ opacity:.8; max-width: 820px; margin: 0 auto; line-height: 1.7; }
.tags{ margin-top:14px; display:flex; gap:8px; justify-content:center; flex-wrap:wrap; }
.tag{
  padding:6px 10px; border-radius:999px; border:1px solid rgba(0,0,0,.08);
  background:#fff; font-size:12px; opacity:.9;
}

.grid{
  display: grid;
  gap: 16px;
  margin-top: 22px;
}
@media (min-width: 860px){
  .grid{ grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
}

/* ===== カード：左が埋め込み、右がサイドパネル ===== */
.card{
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.card:hover{
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(0,0,0,.12);
  border-color: rgba(0,0,0,.12);
}

/* ぼかし背景（スマートフィル）※thumb があれば使用、無ければフェールバック */
.card::before{
  content:"";
  position:absolute; inset:0;
  background: var(--bg, radial-gradient(1200px 420px at 50% 0%, rgba(0,0,0,.06), transparent 60%));
  background-size: cover; background-position: center;
  filter: blur(22px) saturate(1.05);
  transform: scale(1.1);
  opacity: .18;
  pointer-events: none;
}

/* レイアウト：モバイルは縦、デスクトップは左右 */
.left, .right{ position: relative; z-index: 1; }
@media (min-width: 980px){
  .card{ grid-template-columns: minmax(0, 1fr) 340px; }
}

/* 左：縦長埋め込みを“枠内で”綺麗に見せる */
.embedShell{
  position: relative;
  aspect-ratio: 9 / 16;      /* 縦長を確保 */
  width: 100%;
  margin: 14px;
  border-radius: 16px;
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,.02));
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.06);
}
.instagram-media{
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

/* 右：B2Bサイド情報 */
.right{
  padding: 16px 16px 18px;
  display: grid;
  align-content: center;
}
.meta{ background: #fff; }
.client{
  font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
  opacity: .75; margin-bottom: 4px;
}
.title{
  font-size: 18px; font-weight: 800; margin: 0 0 10px;
}
.rows{ display: grid; gap: 8px; }
.row{ display: grid; grid-template-columns: 82px 1fr; gap: 8px; align-items: start; }
.label{
  font-size: 12px; opacity: .6;
}
.val{
  font-size: 14px; opacity: .9; line-height: 1.6;
}

.ctaRow{
  display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap;
}
.btn{
  display:inline-flex; align-items:center; justify-content:center;
  gap: 8px; padding: 10px 14px; border-radius: 999px;
  font-weight: 700; font-size: 13px; text-decoration: none;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
}
.btn-primary{
  background: linear-gradient(90deg, rgba(255,138,0,0.95), rgba(229,46,113,0.95));
  color: #0c0c0f;
  box-shadow: 0 8px 24px rgba(229,46,113,.25);
}
.btn-primary:hover{ transform: translateY(-1px); }
.btn-ghost{
  border: 1px solid rgba(0,0,0,.12);
  color: #111; background: #fff;
}
.btn-ghost:hover{ transform: translateY(-1px); }
`;
