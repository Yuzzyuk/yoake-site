import ClientsMarquee from "../components/ClientsMarquee";
import ProjectsSection from "../ProjectsSection";

export default function Home() {
  return (
    <>
      {/* ===== Hero（あなたの元コードそのまま） ===== */}
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
        </div>
      </main>

      {/* ===== Members（横3並び） ===== */}
      <section id="members" className="members-section">
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
            border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.05);
            font-size:12px; letter-spacing:.12em; opacity:.85;
          }
          .members-head h2{
            margin:10px 0 8px; font-size:clamp(28px,4.6vw,44px);
            font-weight:900; letter-spacing:-.02em;
            background:linear-gradient(90deg,#fff,rgba(255,255,255,.7));
            -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          }
          .members-head p{
            margin:0 auto; max-width:760px; opacity:.8; line-height:1.7;
          }
          .row{
            display:grid; gap:18px; grid-template-columns:1fr;
          }
          @media (min-width: 860px){
            .row{ grid-template-columns: repeat(3, 1fr); gap:22px; }
          }
          .card{
            position:relative;
            border-radius: 22px;
            overflow:hidden;
            padding:14px;
            background: rgba(255,255,255,.04);
            border:1px solid rgba(255,255,255,.12);
            transform-style: preserve-3d;
            transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s, border-color .35s;
          }
          .card::before{
            content:"";
            position:absolute; inset: -40% -40%;
            background: conic-gradient(from 0deg, rgba(255,138,0,.18), rgba(229,46,113,.18), rgba(0,229,255,.18), rgba(255,138,0,.18));
            filter: blur(40px);
            transform: translateZ(-1px);
            opacity:.0; transition: opacity .35s;
            pointer-events:none;
          }
          .card::after{
            content:"";
            position:absolute; inset:0;
            background: linear-gradient(120deg, transparent 40%, rgba(255,255,255,.25) 50%, transparent 60%);
            transform: translateX(-120%) skewX(-12deg);
            transition: transform .7s ease;
            pointer-events:none;
          }
          .card:hover{
            transform: translateY(-8px) rotateX(1deg);
            box-shadow: 0 24px 60px rgba(0,0,0,.45);
            border-color: rgba(255,255,255,.25);
          }
          .card:hover::before{ opacity:.8; }
          .card:hover::after{ transform: translateX(120%) skewX(-12deg); }
          .media{
            width:100%; aspect-ratio: 4 / 3; object-fit: cover;
            border-radius: 14px;
            animation: float 7s ease-in-out infinite;
          }
          @keyframes float{
            0%,100%{ transform: translateY(0px); }
            50%{ transform: translateY(-6px); }
          }
          .body{ padding:12px 6px 6px; }
          .name{ margin:10px 0 2px; font-weight:800; font-size:20px; }
          .role{ margin:0 0 10px; opacity:.8; font-size:13px; letter-spacing:.01em; }
          .list{ margin:0; padding-left: 18px; opacity:.88; }
          .list li{ margin:6px 0; }
        `}</style>
      </section>

      {/* ===== 実績（ロゴ・マルキー） ===== */}
      <ClientsMarquee />

      {/* ===== Projects（既存の ProjectsSection を呼ぶ） ===== */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* ===== Contact（後で本実装） ===== */}
      <section
        id="contact"
        style={{
          padding: "56px 20px",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          opacity: 0.85,
        }}
      >
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 8, fontWeight: 900 }}>
          Get an estimate for your upcoming project
        </h2>
        <p>問い合わせフォームは後で実装します。まずはメンバー紹介をご確認ください。</p>
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
            maxWidth: 1200,
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
            <a href="#projects" style={{ color: "#fff" }}>Projects</a>
            <a href="#contact" style={{ color: "#fff" }}>Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

/* ===== Card コンポーネント ===== */
function MemberCard(props: { img: string; name: string; role: string; lines: string[]; imgPosition?: string }) {
  return (
    <article className="card">
      <img
        src={props.img}
        alt={props.name}
        className={`media ${props.imgPosition || ""}`}
      />
      <div className="body">
        <div className="name">{props.name}</div>
        <div className="role">{props.role}</div>
        <ul className="list">
          {props.lines.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
    </article>
  );
}
