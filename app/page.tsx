import ClientsMarquee from "../components/ClientsMarquee";
import ProjectsSection from "../ProjectsSection";
import ServicesShowcase from "../components/ServicesShowcase";

export default function Home() {
  return (
    <div>
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
            プロダクトの熱量を世界へ
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            
              href="#projects"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, rgba(255,138,0,0.95), rgba(229,46,113,0.95))",
                color: "#0c0c0f",
                textDecoration: "none",
              }}
            >
              VIEW PROJECTS
            </a>
            
              href="#members"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                textDecoration: "none",
              }}
            >
              MEET THE TEAM
            </a>
            
              href="#contact"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                textDecoration: "none",
              }}
            >
              CONTACT
            </a>
          </div>
        </div>
      </main>

      <ServicesShowcase />

      <section id="members">
        <div
          style={{
            position: "relative",
            padding: "92px 20px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
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
              OUR CREATIVE MEMBERS
            </div>
            <h2
              style={{
                margin: "10px 0 8px",
                fontSize: "clamp(28px,4.6vw,44px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                background: "linear-gradient(90deg,#fff,rgba(255,255,255,.7))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              チームで"世界観"を届ける
            </h2>
            <p
              style={{
                margin: "0 auto",
                maxWidth: 760,
                opacity: 0.8,
                lineHeight: 1.7,
              }}
            >
              登録者20万人級のYouTuber × SNSマーケ × 映像制作。熱量をそのまま世界へ。
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "1fr",
            }}
            className="members-grid"
          >
            <MemberCard
              img="/Yuzzy.jpg"
              name="Yuzzy"
              role="SNS Advisor / Consulting & Marketing"
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
        </div>
      </section>

      <ClientsMarquee />

      <section id="projects">
        <ProjectsSection />
      </section>

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
        <p>お問い合わせフォームは後で実装します。まずはメンバー紹介をご確認ください。</p>
      </section>

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
            <a href="#services" style={{ color: "#fff", textDecoration: "none" }}>
              Services
            </a>
            <a href="#members" style={{ color: "#fff", textDecoration: "none" }}>
              Members
            </a>
            <a href="#projects" style={{ color: "#fff", textDecoration: "none" }}>
              Projects
            </a>
            <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </div>
      </footer>

      <style jsx>{`
        @media (min-width: 860px) {
          .members-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 22px !important;
          }
        }
      `}</style>
    </div>
  );
}

function MemberCard(props: { img: string; name: string; role: string; lines: string[] }) {
  return (
    <article
      style={{
        position: "relative",
        borderRadius: 22,
        overflow: "hidden",
        padding: 14,
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.12)",
        transition: "transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s, border-color .35s",
      }}
      className="member-card"
    >
      <img
        src={props.img}
        alt={props.name}
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          objectFit: "cover",
          borderRadius: 14,
        }}
      />
      <div style={{ padding: "12px 6px 6px" }}>
        <div
          style={{
            margin: "10px 0 2px",
            fontWeight: 800,
            fontSize: 20,
          }}
        >
          {props.name}
        </div>
        <div
          style={{
            margin: "0 0 10px",
            opacity: 0.8,
            fontSize: 13,
            letterSpacing: ".01em",
          }}
        >
          {props.role}
        </div>
        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            opacity: 0.88,
          }}
        >
          {props.lines.map((t, i) => (
            <li key={i} style={{ margin: "6px 0" }}>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .member-card:hover {
          transform: translateY(-8px) rotateX(1deg);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
          border-color: rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </article>
  );
}
