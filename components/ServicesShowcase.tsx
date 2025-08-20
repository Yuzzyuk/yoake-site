"use client";
import Image from "next/image";

export default function ServicesShowcase() {
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
          WHAT WE DO
        </div>
        <h2 style={{ margin: "10px 0 8px", fontSize: "clamp(28px,4.6vw,44px)", fontWeight: 900, color: "#0f1214" }}>
          英日バイリンガルで “海外に届く” 3本柱
        </h2>
        <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.75 }}>
          海外向けSNS運用／映像プロモーション／ミュージック・アーティスト案件まで、戦略から配信まで伴走します。
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gap: 18,
          gridTemplateColumns: "1fr",
        }}
      >
        {/* 1. 海外向けSNS運用 */}
        <ServiceCard
          badge="Global Social"
          title="海外向けSNS運用"
          subtitle="英語圏の視聴獲得 / 指名検索増 / UGC誘発"
          image="/services/global.jpg"
          points={[
            "効果：英語圏での視聴獲得、フォロワー増、UGC創出",
            "納期：戦略1–2週、運用は月次",
            "料金：¥300K〜/月（戦略＋運用）",
          ]}
        />

        {/* 2. 映像プロモーション */}
        <ServiceCard
          badge="Cinematic Promo"
          title="シネマティック映像プロモ"
          subtitle="ブランディングムービー / プロダクトPV / 短尺広告"
          image="/services/promo.jpg"
          points={[
            "効果：ブランド想起、CV貢献、広告効果改善",
            "納期：2–6週（内容により）",
            "料金：¥400K〜",
          ]}
        />

        {/* 3. ミュージック/アーティスト */}
        <ServiceCard
          badge="Artist Works"
          title="ミュージック / アーティスト案件"
          subtitle="MV制作 / ライブ映像 / ティザー / SNS展開"
          image="/services/music.jpg"
          points={[
            "効果：ファンベース拡大、話題化、グロース設計",
            "納期：1–4週（内容により）",
            "料金：¥300K〜",
          ]}
        />
      </div>
    </section>
  );
}

function ServiceCard(props: {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  points: string[];
}) {
  return (
    <article
      style={{
        display: "grid",
        gap: 14,
        gridTemplateColumns: "1fr",
        border: "1px solid rgba(0,0,0,.08)",
        borderRadius: 18,
        padding: 14,
        background: "#fff",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 14 }}>
        <Image
          src={props.image}
          alt={props.title}
          width={1600}
          height={900}
          style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", aspectRatio: "16/9" }}
          priority
        />
      </div>

      <div style={{ padding: "4px 4px 0" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,.12)",
            background: "rgba(0,0,0,.04)",
            fontSize: 12,
            letterSpacing: ".12em",
            color: "#222",
          }}
        >
          {props.badge}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
          <h3 style={{ margin: "10px 0 2px", fontSize: 22, fontWeight: 800, color: "#0f1214" }}>{props.title}</h3>
          <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.75 }}>{props.subtitle}</p>
        </div>

        <ul style={{ margin: "8px 0 0", paddingLeft: 18, lineHeight: 1.8 }}>
          {props.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <div style={{ marginTop: 12 }}>
          <a
            href="#projects"
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
            事例を見る
          </a>
        </div>
      </div>
    </article>
  );
}
