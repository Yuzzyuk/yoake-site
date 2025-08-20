"use client";

export default function ProcessTimeline() {
  const steps = [
    { n: "01", title: "相談", desc: "課題と目標をヒアリング。海外/国内の方針を決定。" },
    { n: "02", title: "戦略", desc: "KPI・メッセージ・チャンネル設計。英日トーン＆スタイル定義。" },
    { n: "03", title: "制作", desc: "撮影/編集/字幕/ローカライズ。シネマティックな世界観で。" },
    { n: "04", title: "配信", desc: "各SNSへ最適化投稿。英語運用・広告も対応。" },
    { n: "05", title: "レポート", desc: "学習→改善。UGC/指名検索/再生の伸びを可視化。" },
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
          PROCESS
        </div>
        <h2 style={{ margin: "10px 0 8px", fontSize: "clamp(28px,4.6vw,44px)", fontWeight: 900, color: "#0f1214" }}>
          相談 → 戦略 → 制作 → 配信 → レポーティング
        </h2>
      </header>

      <ol
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 14,
          counterReset: "step",
        }}
      >
        {steps.map((s, i) => (
          <li
            key={i}
            style={{
              listStyle: "none",
              border: "1px solid rgba(0,0,0,.08)",
              background: "#fff",
              borderRadius: 16,
              padding: 16,
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 14,
              alignItems: "center",
              transition: "transform .25s ease, box-shadow .25s ease",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                display: "grid",
                placeItems: "center",
                fontWeight: 800,
                background:
                  "linear-gradient(90deg, rgba(255,138,0,0.95), rgba(229,46,113,0.95))",
                color: "#0c0c0f",
              }}
            >
              {s.n}
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#0f1214" }}>{s.title}</div>
              <div style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
