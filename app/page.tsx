export default function Home() {
  return (
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
            opacity: 0.9
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
  );
}
