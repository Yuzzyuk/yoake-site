export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #0f0f0f, #1a1a40)",
        color: "white",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "1rem",
          background: "linear-gradient(90deg, #ff8a00, #e52e71)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Yoake Site 🚀
      </h1>

      <p style={{ fontSize: "1.3rem", maxWidth: "600px", lineHeight: 1.6 }}>
        Welcome to your{" "}
        <span style={{ color: "#00e5ff" }}>Next.js</span> +{" "}
        <span style={{ color: "#7cffcb" }}>Vercel</span> homepage.<br />
        Let’s build something amazing together 🌅
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "9999px",
            background:
              "linear-gradient(90deg, rgba(255,138,0,0.9), rgba(229,46,113,0.9))",
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "0.3s",
          }}
        >
          Deploy on Vercel
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "9999px",
            border: "2px solid #00e5ff",
            color: "#00e5ff",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "0.3s",
          }}
        >
          Learn Next.js
        </a>
      </div>
    </main>
  );
}
