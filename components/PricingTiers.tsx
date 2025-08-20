"use client";

export default function PricingTiers() {
  const tiers = [
    {
      name: "ライト",
      price: "¥300K〜",
      best: "スモールスタート",
      items: ["SNS運用 or 映像1本", "英日コピー校正", "簡易レポート"],
    },
    {
      name: "スタンダード",
      price: "¥600K〜",
      best: "最も人気",
      items: ["月次SNS運用＋映像", "企画/撮影/編集/字幕", "英語運用・広告対応", "月次レポート"],
      highlight: true,
    },
    {
      name: "グロース",
      price: "¥1.2M〜",
      best: "攻めの成長",
      items: ["戦略設計/検証プラン", "複数本制作＋UGC誘発", "広告/クリエイティブ改善", "KPIダッシュボード"],
    },
  ];

  return (
    <section style={{ padding: "72px 20px", maxWidth: 1200, margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: 26 }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,.12)",
            background: "rgba(0,0,0,.04)",
            fontSize: 12,
            letterSpacing: ".12em",
            color: "#222",
          }}
        >
          PRICING
        </div>
        <h2 style={{ margin: "10px 0 8px", fontSize: "clamp(28px,4.6vw,44px)", fontWeight: 900, color: "#0f1214" }}>
          料金の目安
        </h2>
      </header>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "1fr",
        }}
      >
        {tiers.map((t, i) => (
          <article
            key={i}
            style={{
              border: "1px solid rgba(0,0,0,.08)",
              borderRadius: 16,
              background: "#fff",
              padding: 16,
              position: "relative",
              boxShadow: t.highlight ? "0 18px 50px rgba(0,0,0,.10)" : "none",
            }}
          >
            {t.highlight && (
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  right: 12,
                  padding: "6px 10px",
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, rgba(255,138,0,0.95), rgba(229,46,113,0.95))",
                  color: "#0c0c0f",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                MOST POPULAR
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{t.name}</h3>
              <div style={{ fontSize: 22, fontWeight: 900 }}>{t.price}</div>
            </div>
            <div style={{ fontSize: 13, opacity: 0.7, marginTop: 2 }}>{t.best}</div>
            <ul style={{ margin: "10px 0 0", paddingLeft: 18, lineHeight: 1.8 }}>
              {t.items.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
            <div style={{ marginTop: 12 }}>
              <a
                href="#contact"
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  fontWeight: 700,
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#111",
                  background: "#fff",
                  textDecoration: "none",
                }}
              >
                相談して見積もる
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
