"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Video, Camera, Share2, Layout, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

// 送信処理
async function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    alert("Thanks! We received your message.");
    form.reset();
  } else {
    alert("Failed to send. Please try again.");
  }
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#07070A] text-white overflow-x-hidden">
      <Nav />
      <Hero />
      {/* 👇 ここにあとで <iframe> で動画を入れてOK */}
      <Services />
      <Projects />
      <Members />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl/20 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-widest">
          <span className="inline-flex size-6 rounded-full bg-gradient-to-tr from-fuchsia-500 to-emerald-400" />
          <span>YOAKE</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#members" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 hover:border-white/40 transition">
            <Sparkles className="size-4 opacity-70 group-hover:opacity-100" />
            <span className="text-sm">Get a quote</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.9]);

  return (
    <section id="home" className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 md:pt-28 md:pb-40">
      <motion.div style={{ y: y1, scale }} className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Let its value soar to the world — その価値を、世界へ羽ばたけ。
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl/tight font-black tracking-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
            Hyper–Creative Studio
          </span>
          <span className="block text-white/70">for Brands that Move Culture</span>
        </h1>
        <p className="mt-6 max-w-2xl text-white/70 text-lg">
          SNSの爆発力とシネマティックな映像表現で、<br className="hidden md:block" />
          プロダクトの熱量を世界に届けるチーム。
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects">
            <Button className="rounded-full px-6 h-11">VIEW PROJECTS</Button>
          </a>
          <a href="#services" className="group inline-flex items-center gap-2 text-white/70 hover:text-white">
            <span>What we do</span>
            <ArrowUpRight className="size-4 translate-y-[1px] group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: <Share2 className="size-5" />, title: "SNS Consulting",
      jp: "フォロワーを増やすだけでなく、本当に届けたい人に届く設計。コンテンツ企画から広告運用まで。"
    },
    {
      icon: <Layout className="size-5" />, title: "SNS Marketing",
      jp: "プラットフォーム特性に基づくクリエイティブ運用。分析→仮説→実装を高速で回す。"
    },
    {
      icon: <Video className="size-5" />, title: "Video Editing",
      jp: "YouTuber視点の編集。テンポ・演出・デザインを調和し、ブランドの魅力を最大化。"
    },
    {
      icon: <Camera className="size-5" />, title: "Videography",
      jp: "シネマ〜アンティーク調まで。世界観を丸ごと表現し、ファンを惹きつける映像。"
    }
  ];
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 md:py-32">
      <h2 className="text-3xl md:text-5xl font-bold">Services</h2>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-h-48">
              <div className="flex items-center gap-3">{it.icon}<h3 className="text-xl font-semibold">{it.title}</h3></div>
              <p className="mt-2 text-sm text-white/70">{it.jp}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const items = [
    { title: "Shortform Launch", tag: "TikTok/IG Reels" },
    { title: "Cinematic Brand Film", tag: "YouTube" },
    { title: "Global Campaign", tag: "Cross-Platform" },
    { title: "E-commerce Boost", tag: "Direct Response" },
  ];
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 md:py-32">
      <h2 className="text-3xl md:text-5xl font-bold">Selected Projects</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} className="rounded-3xl bg-white/5 border border-white/10 p-6 min-h-48">
            <span className="text-xs uppercase text-white/60">{it.tag}</span>
            <h3 className="text-2xl font-semibold">{it.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Members() {
  const people = [
    {
      name: "Yuzzy",
      role: "SNS Advisor",
      desc: "YouTube登録者20万人、総再生4500万回。Duolingo・TOEFL・Notion・講談社・角川・静岡県との案件実績。",
    },
    {
      name: "Mick",
      role: "Visual Storyteller",
      desc: "社会実験動画が1300万再生。ユニバーサルミュージック案件、映像コンテスト優勝。音楽活動も展開中。",
    },
    {
      name: "Rintato",
      role: "SNS Advisor / Video Editor",
      desc: "大手カメラ・高級ホテル・航空会社などと制作実績。IG運用で半年1.3万人増。150万再生超の動画制作。",
    },
  ];
  return (
    <section id="members" className="mx-auto max-w-7xl px-4 py-24 md:py-32">
      <h2 className="text-3xl md:text-5xl font-bold">Our Creative Members</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {people.map((p, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-white/60">{p.role}</p>
            <p className="mt-2 text-sm text-white/70">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 md:py-32">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-3xl md:text-5xl font-bold">Get a quote for your upcoming project</h3>
        <form className="mt-8 grid md:grid-cols-3 gap-3" onSubmit={submit}>
          <input name="name" placeholder="Your name" className="rounded-xl bg-black/40 border border-white/15 px-4 h-12" />
          <input name="contact" placeholder="Email or phone" className="rounded-xl bg-black/40 border border-white/15 px-4 h-12" />
          <button className="rounded-xl bg-white text-black h-12 px-6 font-semibold hover:bg-white/90 transition inline-flex items-center justify-center gap-2">
            <Send className="size-4" /> Send
          </button>
          <textarea name="message" placeholder="Tell us about your project..." className="md:col-span-3 rounded-xl bg-black/40 border border-white/15 p-4 h-32" />
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/70">
        <span>© {new Date().getFullYear()} YOAKE</span>
        <div className="flex gap-4">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#members" className="hover:text-white">About us</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
