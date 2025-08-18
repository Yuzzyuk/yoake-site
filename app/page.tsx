export default function Home() {
  return (
    <>
      {/* ===== Hero（あなたが元々使っている部分） ===== */}
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(1000px 500px at 50% -10%, rgba(255,255,255,0.06), transparent), linear-gradient(135deg, #0f0f0f 0%, #181832 60%, #0f0f0f 100%)",
          textAlign: "center",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background:
                  "linear-gradient(90deg, rgba(255,138,0,1), rgba(229,46,113,1))",
                display: "inline-block",
              }}
            />
            Let its value soar to the world
          </div>

          <h1
            style={{
              margin: "18px 0 8px",
              fontSize: "clamp(40px, 7vw, 96px)",
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              background: "linear-gradient(90deg, #ffffff, rgba(255,255,255,0.6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            YOAKE — Hyper-Creative Studio
          </h1>

          <p
            style={{
              margin: "12px auto 28px",
              maxWidth: 720,
              fontSize: "clamp(16px, 2.2vw, 20px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
            }}
          >
            SNSの爆発力 × シネマティックな映像で、<br />
            プロダクトの熱量を世界へ。
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a
              href="#projects"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, rgba(255,138,0,0.95), rgba(229,46,113,0.95))",
                color: "#0c0c0f",
              }}
            >
              VIEW PROJECTS
            </a>
            <a
              href="#members"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              MEET THE TEAM
            </a>
            <a
              href="#contact"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              CONTACT
            </a>
          </div>

          {/* 後でここに YouTube の <iframe> を入れてOK */}
        </div>
      </main>

      {/* ===== Members（3人の詳細） ===== */}
      <section id="members" style={{ padding: "72px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 12,
              letterSpacing: ".06em",
              opacity: 0.75,
              padding: "6px 12px",
              border: "1px solid rgba(255,255,255,.14)",
              borderRadius: 999,
            }}
          >
            OUR CREATIVE MEMBERS
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              margin: "8px 0 10px",
              fontWeight: 900,
              letterSpacing: "-.02em",
              textAlign: "center",
            }}
          >
            チームで“世界観”を届ける
          </h2>
          <p style={{ opacity: 0.82, maxWidth: 720, margin: "0 auto" }}>
            YouTuber視点のSNS運用 × 映像表現。プロダクトの熱量を、そのまま世界へ。
          </p>
        </div>

        {/* Grid */}
        <div id="member-grid" style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr" }}>
          <style>{`
            @media (min-width: 820px) {
              #member-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
            }
            .card { border: 1px solid rgba(255,255,255,.14); background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)); border-radius: 20px; overflow: hidden; transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
            .card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,.25); box-shadow: 0 12px 30px rgba(0,0,0,.35); }
            .media { aspect-ratio: 4/3; width: 100%; object-fit: cover; display: block; }
            .body { padding: 18px; }
            .role { margin: 6px 0 10px; opacity: .8; font-size: 14px; }
            .desc { margin: 0; opacity: .85; lineHeight: 1.6; font-size: 14px; white-space: pre-line; }
            .linkrow { margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap; }
            .link { padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,.2); font-size: 13px; color: #fff; }
          `}</style>

          {/* Yuzzy */}
          <article className="card">
            <img src="/Yuzzy.jpg" alt="Yuzzy" className="media" />
            <div className="body">
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Yuzzy</h3>
              <p className="role">留学系YouTuber / SNS総フォロワー25万人</p>
              <p className="desc">
                YouTube登録者20万人（総再生4,500万回）、Xフォロワー4万人、Instagramフォロワー1.4万人{"\n"}
                TOEFL、Notion、Duolingo、講談社、角川、静岡県などとの案件実績{"\n"}
                高校時代にIBで英国留学を経験後、米国 Minerva University に入学・卒業{"\n"}
                日本語と英語のバイリンガルとして、幅広い領域で活動中
              </p>
              <div className="linkrow">
                <a className="link" href="#contact">Contact</a>
              </div>
            </div>
          </article>

          {/* Mick */}
          <article className="card">
            <img src="/Mick.jpg" alt="Mick" className="media" />
            <div className="body">
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Mick</h3>
              <p className="role">留学系YouTuber / クリエイター・アーティスト</p>
              <p className="desc">
                YouTube登録者20万人、TikTokフォロワー5万人{"\n"}
                社会実験動画が1,300万再生を突破{"\n"}
                高校時代に米国のパブリックスクールに留学{"\n"}
                「VIDEOGRAPHERS TOKYO ONLINE 2020」に登壇{"\n"}
                ユニバーサルミュージックと契約し、ジャスティン・ビーバー「Anyone」のプロモーション映像を制作{"\n"}
                アメリカ・アリゾナ州の映像コンテスト「Magide2023」で学校初のGrand Championを受賞{"\n"}
                現在はアトランタを拠点にAsuka Louis名義で音楽活動。最新アルバム Process は全工程を自ら手掛け、オルタナティブ・トップアルバムTop20にランクイン
              </p>
              <div className="linkrow">
                <a className="link" href="#contact">Contact</a>
              </div>
            </div>
          </article>

          {/* Rintato */}
          <article className="card">
            <img src="/Rin.jpg" alt="Rintato" className="media" />
            <div className="body">
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Rintato</h3>
              <p className="role">SNS Advisor / Video Editor</p>
              <p className="desc">
                慶應義塾大学 経済学部PEARL在学、日英バイリンガル{"\n"}
                完全未経験から3年で大手カメラメーカーや高級ホテル、航空会社などと制作実績{"\n"}
                実績例：Chiba Jets、DJI、Intercontinental DaNang、Miyachi (Rapper)、Vietnam Airlines など{"\n"}
                ホテル系列のInstagramアカウント運用で、半年間にフォロワー1.3万人増加を達成{"\n"}
                150万回再生を超える動画制作実績を持つ
              </p>
              <div className="linkrow">
                <a className="link" href="#contact">Contact</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ===== Contact（後で本実装。今はプレースホルダー） ===== */}
      <section id="contact" style={{ padding: "56px 20px", maxWidth: 900, margin: "0 auto", textAlign: "center", opacity: 0.85 }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 8, fontWeight: 900 }}>Get an estimate for your upcoming project</h2>
        <p>問い合わせフォームは後で実装します。まずはメンバー紹介を公開中。</p>
      </section>

      {/* ===== Footer ===== */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,.12)",
          padding: "32px 20px",
          opacity: 0.8,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: 16,
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: 14,
          }}
        >
          <div>© {new Date().getFullYear()} YOAKE</div>
          <nav style={{ display: "flex", gap: 16 }}>
            <a href="#members" style={{ color: "#fff" }}>Members</a>
            <a href="#contact" style={{ color: "#fff" }}>Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
