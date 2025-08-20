"use client";
import ClientsMarquee from "../components/ClientsMarquee";
import ProjectsSection from "../ProjectsSection";
import ServicesShowcase from "../components/ServicesShowcase";
import ProcessTimeline from "../components/ProcessTimeline";
import PricingTiers from "../components/PricingTiers";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* ===== 1. Hero（白・最小限） ===== */}
      <main
        id="hero"
        style={{
          minHeight: "75vh",
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(900px 420px at 50% -10%, rgba(0,0,0,0.04), transparent), #ffffff",
          textAlign: "center",
          padding: "56px 20px 24px",
          scrollMarginTop: 88,
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1
            style={{
              margin: "6px 0 10px",
              fontSize: "clamp(36px, 6.6vw, 64px)",
              lineHeight: 1.07,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#0f1214",
            }}
          >
            Japan to the World.
          </h1>

          <p
            style={{
              margin: "0 auto 18px",
              maxWidth: 760,
              fontSize: "clamp(15px, 2.2vw, 18px)",
              color: "rgba(0,0,0,0.75)",
              lineHeight: 1.75,
            }}
          >
            バイリンガル×SNS×シネマティックで、ブランドを世界へ。<br />
            海外向けSNS運用／映像プロモ／アーティスト案件まで、戦略から配信まで伴走。
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, rgba(255,138,0,0.95), rgba(229,46,113,0.95))",
                color: "#0c0c0f",
              }}
            >
              無料で相談する
            </a>
            <a
              href="#projects"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 700,
                border: "1px solid rgba(0,0,0,0.18)",
                color: "#111",
                background: "#fff",
              }}
            >
              作品を見る
            </a>
          </div>

          {/* 3つの強みチップ */}
          <div
            style={{
              marginTop: 18,
              display: "flex",
              gap: 8,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {["英日バイリンガル対応", "海外SNS運用ノウハウ", "シネマティック映像制作"].map((t, i) => (
              <span
                key={i}
                style={{
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(0,0,0,.12)",
                  background: "rgba(0,0,0,.04)",
                  fontSize: 12,
                  letterSpacing: ".04em",
                  color: "#222",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* KPI 4つ */}
          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 10,
            }}
          >
            {[
              { k: "累計再生", v: "45M+" },
              { k: "最大再生", v: "13M" },
              { k: "総フォロワー", v: "250K+" },
              { k: "海外案件比率", v: "60%+" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid rgba(0,0,0,.08)",
                  background: "#fff",
                  borderRadius: 14,
                  padding: "12px 10px",
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 800 }}>{item.v}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>{item.k}</div>
              </div>
            ))}
          </div>

          {/* 下スクロール矢印 */}
          <a
            href="#services"
            aria-label="scroll to services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 18,
              fontSize: 13,
              color: "#111",
              opacity: 0.8,
              textDecoration: "none",
            }}
          >
            ↓ What we do
          </a>
        </div>
      </main>

      {/* ===== 2. What we do / Services（3本柱） ===== */}
      <section id="services" style={{ scrollMarginTop: 88 }}>
        <ServicesShowcase />
      </section>

      {/* ===== 4. Social Proof（ロゴ・マルキー） ===== */}
      <section id="clients" style={{ scrollMarginTop: 88 }}>
        <ClientsMarquee />
      </section>

      {/* ===== 3. Work / Projects（既存の ProjectsSection） ===== */}
      <section id="projects" style={{ scrollMarginTop: 88 }}>
        <ProjectsSection />
      </section>

      {/* ===== 5. Team（既存） ===== */}
      <section id="members" className="members-section" style={{ scrollMarginTop: 88 }}>
        <div className="members-head">
          <div className="pill">OUR CREATIVE MEMBERS</div>
          <h2>チームで“世界観”を届ける</h2>
          <p>登録者20万人級のYouTuber × SNSマーケ × 映像制作。熱量をそのまま世界へ。</p>
        </div>

        <div className="row">
          <MemberCard
            img="/Yuzzy.jpg"
            name="Yuzzy"
            role="SNS Advisor / Consulting & Marketing"
            imgPosition="object-top"
            lines={[
              "YouTube登録者20万人（総再生4,500万回）",
              "X 4万人 / Instagram 1.4万人",
              "TOEFL, Notion, Duolingo, 講談社, 角川, 静岡県 等と案件実績",
              "Minerva University 卒。日英バイリンガルで幅広く活動",
            ]}
          />
          <MemberCard
            img="/Mick.jpg"
            name="Mick"
            role="Visual Storyteller / Filming & Editing"
            lines={[
              "YouTube 20万人 / TikTok 5万人",
              "社会実験動画が1,300万再生突破",
              "ユニバーサルミュージック案件 / Magide2023 Grand Champion",
              "Asuka Louis名義で音楽活動。最新作がオルタナTop20",
            ]}
          />
          <MemberCard
            img="/Rin.jpg"
            name="Rintato"
            role="SNS Advisor / Video Editor"
            lines={[
              "慶應経済PEARL 在学、日英バイリンガル",
              "大手カメラ/高級ホテル/航空会社などと制作実績",
              "ホテル系IG運用で半年1.3万人増",
              "150万回超の動画制作実績",
            ]}
          />
        </div>

        {/* 既存スタイル（白ベース調整済み） */}
        <style>{`
          .members-section{
            position: relative;
            padding: 92px 20px;
            max-width: 1200px;
            margin: 0 auto;
          }
          .members-section::before{
            content:"";
            position:absolute; inset:-10% -20% auto -20%;
            height: 420px;
            background:
              radial-gradient(600px 200px at 50% 0%, rgba(229,46,113,.20), transparent 70%),
              radial-gradient(500px 220px at 20% 0%, rgba(0,229,255,.12), transparent 70%),
              radial-gradient(500px 220px at 80% 0%, rgba(255,138,0,.12), transparent 70%);
            filter: blur(40px);
            pointer-events:none;
          }
          .members-head{
            text-align:center;
            margin-bottom: 32px;
          }
          .pill{
            display:inline-block; padding:6px 12px; border-radius:999px;
            border:1px solid rgba(0,0,0,.14); background:rgba(0,0,0,.04);
            font-size:12px; letter-spacing:.12em; opacity:.85; color:#222;
          }
          .members-head h2{
            margin:10px 0 8px; font-size:clamp(28px,4.6vw,44px);
            font-weight:900; letter-spacing:-.02em; color:#0f1214;
          }
          .members-head p{
            margin:0 auto; max-width:760px; opacity:.8; line-height:1.7; color:#222;
          }
          .row{ display:grid; gap:18px; grid-template-columns:1fr; }
          @media (min-width: 860px){ .row{ grid-template-columns: repeat(3, 1fr); gap:22px; } }
          .card{
            position:relative; border-radius: 22px; overflow:hidden; padding:14px;
            background: #ffffff; border:1px solid rgba(0,0,0,.08);
            transform-style: preserve-3d;
            transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s, border-color .35s;
          }
          .card::before{
            content:""; position:absolute; inset: -40% -40%;
            background: conic-gradient(from 0deg, rgba(255,138,0,.12), rgba(229,46,113,.12), rgba(0,229,255,.12), rgba(255,138,0,.12));
            filter: blur(40px); transform: translateZ(-1px);
            opacity:.0; transition: opacity .35s; pointer-events:none;
          }
          .card::after{
            content:""; position:absolute; inset:0;
            background: linear-gradient(120deg, transparent 40%, rgba(0,0,0,.06) 50%, transparent 60%);
            transform: translateX(-120%) skewX(-12deg); transition: transform .7s ease; pointer-events:none;
          }
          .card:hover{
            transform: translateY(-8px) rotateX(1deg);
            box-shadow: 0 24px 60px rgba(0,0,0,.10); border-color: rgba(0,0,0,.16);
          }
          .card:hover::before{ opacity:.6; }
          .card:hover::after{ transform: translateX(120%) skewX(-12deg); }
          .media{ width:100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 14px; animation: float 7s ease-in-out infinite; }
          @keyframes float{ 0%,100%{ transform: translateY(0px); } 50%{ transform: translateY(-6px); } }
          .body{ padding:12px 6px 6px; color:#111; }
          .name{ margin:10px 0 2px; font-weight:800; font-size:20px; }
          .role{ margin:0 0 10px; opacity:.7; font-size:13px; letter-spacing:.01em; }
          .list{ margin:0; padding-left: 18px; opacity:.9; }
          .list li{ margin:6px 0; }
        `}</style>
      </section>

      {/* ===== 6. Process（進め方） ===== */}
      <section id="process" style={{ scrollMarginTop: 88 }}>
        <ProcessTimeline />
      </section>

      {/* ===== 7. Packages / 料金の目安 ===== */}
      <section id="pricing" style={{ scrollMarginTop: 88 }}>
        <PricingTiers />
      </section>

      {/* ===== 9. Contact（CTA強め） ===== */}
      <section
        id="contact"
        style={{
          padding: "72px 20px",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          scrollMarginTop: 88,
        }}
      >
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 8, fontWeight: 900, color: "#0f1214" }}>
          Get an estimate for your upcoming project
        </h2>
        <p style={{ color: "rgba(0,0,0,.74)", margin: "0 auto 18px", lineHeight: 1.7 }}>
          海外向け・国内向けどちらもOK。英日バイリンガル対応で、戦略から配信まで伴走します。
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://calendly.com/your-calendly/intro" /* ←自分のリンクに差し替え */
            style={{
              padding: "12px 20px",
              borderRadius: 999,
              fontWeight: 700,
              background:
                "linear-gradient(90deg, rgba(255,138,0,0.95), rgba(229,46,113,0.95))",
              color: "#0c0c0f",
            }}
          >
            Calendlyで日程調整
          </a>
          <a
            href="mailto:hello@example.com" /* ←自分のメールに差し替え */
            style={{
              padding: "12px 20px",
              borderRadius: 999,
              fontWeight: 700,
              border: "1px solid rgba(0,0,0,0.2)",
              color: "#111",
              background: "#fff",
            }}
          >
            メールで問い合わせ
          </a>
        </div>
      </section>

      {/* ===== 10. Footer ===== */}
      <footer
        style={{
          borderTop: "1px solid rgba(0,0,0,.12)",
          padding: "32px 20px",
          opacity: 0.9,
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            gap: 16,
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: 14,
            color: "#111",
          }}
        >
          <div>© {new Date().getFullYear()} YOAKE</div>
          <nav style={{ display: "flex", gap: 16 }}>
            <a href="#services" style={{ color: "#111" }}>Services</a>
            <a href="#members" style={{ color: "#111" }}>Team</a>
            <a href="#projects" style={{ color: "#111" }}>Projects</a>
            <a href="#process" style={{ color: "#111" }}>Process</a>
            <a href="#pricing" style={{ color: "#111" }}>Pricing</a>
            <a href="#contact" style={{ color: "#111" }}>Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

/* ===== ちいさめ固定ヘッダー（このファイル内で定義） ===== */
function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
        background: "rgba(255,255,255,.84)",
        borderBottom: "1px solid rgba(0,0,0,.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          gap: 16,
        }}
      >
        <a href="#hero" style={{ fontWeight: 800, letterSpacing: ".02em", color: "#0f1214", textDecoration: "none" }}>
          YOAKE
        </a>
        <nav style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 14 }}>
          {[
            ["Services", "#services"],
            ["Projects", "#projects"],
            ["Team", "#members"],
            ["Process", "#process"],
            ["Pricing", "#pricing"],
          ].map(([label, href]) => (
            <a key={href} href={href} style={{ color: "#111", textDecoration: "none", opacity: 0.9 }}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              marginLeft: 6,
              padding: "8px 14px",
              borderRadius: 999,
              fontWeight: 700,
              background:
                "linear-gradient(90deg, rgba(255,138,0,0.95), rgba(229,46,113,0.95))",
              color: "#0c0c0f",
              textDecoration: "none",
            }}
          >
            相談する
          </a>
          <LangToggle />
        </nav>
      </div>
    </header>
  );
}

function LangToggle() {
  // ダミー（実装前）。表示だけ切り替え
  const [lang, setLang] = (typeof window !== "undefined"
    ? (window as any)._yoakeLangState || ["JA", (v: "JA" | "EN") => ((window as any)._yoakeLangState = [v, setLang])]
    : ["JA", (_v: "JA" | "EN") => {}]) as ["JA" | "EN", (v: "JA" | "EN") => void];

  return (
    <button
      onClick={() => setLang(lang === "JA" ? "EN" : "JA")}
      aria-label="language toggle"
      style={{
        marginLeft: 4,
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,.12)",
        background: "#fff",
        fontSize: 12,
        color: "#111",
      }}
    >
      {lang}
    </button>
  );
}

/* ===== Member Card（既存） ===== */
function MemberCard(props: { img: string; name: string; role: string; lines: string[]; imgPosition?: string }) {
  return (
    <article className="card">
      <img src={props.img} alt={props.name} className={`media ${props.imgPosition || ""}`} />
      <div className="body">
        <div className="name">{props.name}</div>
        <div className="role">{props.role}</div>
        <ul className="list">
          {props.lines.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
