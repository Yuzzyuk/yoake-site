// ProjectsSection.tsx
import Script from "next/script";

/**
 * 実績：リール埋め込み（動画＋クライアント名のみ）
 * - PC: 2列 / SP: 1列
 * - 角丸 + シャドウ／余白は最小限
 * - Instagram公式スクリプトは一回だけ読み込み
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="proj-section">
      <div className="proj-wrap">
        <h2 className="proj-title">Works / Projects</h2>

        <div className="proj-grid">
          {/* 1. Able Carry JP */}
          <article className="work-card">
            <div className="ig-outer">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DKjmHeKsf34/"
                data-instgrm-version="14"
                style={{ background: "#fff", margin: 0, width: "100%" }}
              />
            </div>
            <h3 className="client">Able Carry Japan</h3>
          </article>

          {/* 2. DJI Global */}
          <article className="work-card">
            <div className="ig-outer">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DEG566XvbjW/"
                data-instgrm-version="14"
                style={{ background: "#fff", margin: 0, width: "100%" }}
              />
            </div>
            <h3 className="client">DJI Global</h3>
          </article>

          {/* 3. DJI OSMO */}
          <article className="work-card">
            <div className="ig-outer">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DEMsoU_CLRW/"
                data-instgrm-version="14"
                style={{ background: "#fff", margin: 0, width: "100%" }}
              />
            </div>
            <h3 className="client">DJI OSMO</h3>
          </article>

          {/* 4. Four Seasons Hotel Kyoto */}
          <article className="work-card">
            <div className="ig-outer">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/C6QW3x8v3qq/"
                data-instgrm-version="14"
                style={{ background: "#fff", margin: 0, width: "100%" }}
              />
            </div>
            <h3 className="client">Four Seasons Hotel Kyoto</h3>
          </article>
        </div>
      </div>

      {/* Instagram公式スクリプト（1回だけ） */}
      <Script async src="//www.instagram.com/embed.js" />
      <style jsx>{`
        .proj-section {
          background: #ffffff;
          padding: 64px 20px;
        }
        .proj-wrap {
          max-width: 1100px;
          margin: 0 auto;
        }
        .proj-title {
          text-align: center;
          font-weight: 900;
          font-size: clamp(24px, 4.5vw, 36px);
          letter-spacing: -0.02em;
          margin: 0 0 28px;
        }

        /* グリッド */
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 860px) {
          .proj-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }
        }

        /* カード */
        .work-card {
          background: #fff;
          border-radius: 16px;
          padding: 12px 12px 14px;
          box-shadow: 0 6px 22px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        /* 埋め込みの外枠（角丸＋影を効かせる） */
        .ig-outer {
          overflow: hidden;
          border-radius: 12px;
          background: #fff;
        }

        /* クライアント名だけ中央に */
        .client {
          margin: 10px 6px 0;
          text-align: center;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 0.01em;
        }
      `}</style>
    </section>
  );
}
