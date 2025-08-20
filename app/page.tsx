import ClientsMarquee from "../components/ClientsMarquee";
import ProjectsSection from "../ProjectsSection";
import ServicesShowcase from "../components/ServicesShowcase";

export default function Home() {
  return (
    <>
      {/* 動的背景 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-orange-500/5 via-transparent to-pink-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>

      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <div className="text-3xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                YOAKE
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Projects', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group rounded-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1">
              <div className="w-6 h-0.5 bg-white/80"></div>
              <div className="w-6 h-0.5 bg-white/80"></div>
              <div className="w-6 h-0.5 bg-white/80"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <main className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center py-32">
          {/* ステータスバッジ */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 mb-8 group hover:border-orange-500/30 transition-all duration-300">
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 animate-pulse"></div>
            <span className="text-sm font-medium tracking-wider uppercase text-gray-300">
              Let its value soar to the world
            </span>
          </div>

          {/* メインタイトル */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
              <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
                YOAKE
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Hyper-Creative Studio
              </span>
            </h1>
            {/* グロー効果 */}
            <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none opacity-20 blur-xl pointer-events-none">
              <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                YOAKE
              </span>
            </div>
          </div>

          {/* サブタイトル */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-12 max-w-5xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-semibold">SNSの爆発力</span> × <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent font-semibold">シネマティックな映像</span>で、<br className="hidden md:block" />
            プロダクトの熱量を世界へ
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 bg-[length:200%_100%] font-bold text-black text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 hover:bg-[position:100%_0%]">
              <span className="relative z-10 flex items-center gap-2">
                VIEW PROJECTS
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            <button className="group relative px-10 py-4 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 font-bold text-lg transition-all duration-500 hover:scale-105 hover:border-white/30 hover:bg-white/10">
              <span className="relative z-10 flex items-center gap-2">
                MEET THE TEAM
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
            </button>
          </div>

          {/* 統計情報 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: "20M+", label: "YouTube登録者" },
              { number: "4.5B+", label: "総再生回数" },
              { number: "50+", label: "企業案件実績" },
              { number: "3", label: "言語対応" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* フローティング要素 */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-orange-400/20 to-pink-500/20 blur-xl animate-bounce [animation-duration:3s]"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl animate-bounce [animation-duration:4s] [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl animate-bounce [animation-duration:5s] [animation-delay:2s]"></div>
      </main>

      {/* サービス */}
      <ServicesShowcase />

      {/* チームセクション */}
      <section id="members" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 text-sm font-medium tracking-wider uppercase mb-8">
              OUR CREATIVE MEMBERS
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              チームで"世界観"を届ける
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              登録者20万人級のYouTuber × SNSマーケ × 映像制作。熱量をそのまま世界へ。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Yuzzy",
                role: "SNS Advisor / Consulting & Marketing",
                img: "/Yuzzy.jpg",
                stats: [
                  "YouTube登録者20万人（総再生4,500万回）",
                  "X 4万人 / Instagram 1.4万人", 
                  "TOEFL, Notion, Duolingo等案件実績",
                  "Minerva University卒。日英バイリンガル"
                ]
              },
              {
                name: "Mick", 
                role: "Visual Storyteller / Filming & Editing",
                img: "/Mick.jpg",
                stats: [
                  "YouTube 20万人 / TikTok 5万人",
                  "社会実験動画が1,300万再生突破",
                  "ユニバーサルミュージック案件実績",
                  "Magide2023 Grand Champion"
                ]
              },
              {
                name: "Rintato",
                role: "SNS Advisor / Video Editor", 
                img: "/Rin.jpg",
                stats: [
                  "慶應経済PEARL在学、日英バイリンガル",
                  "大手カメラ/高級ホテル等制作実績",
                  "ホテル系IG運用で半年1.3万人増",
                  "150万回超の動画制作実績"
                ]
              }
            ].map((member, index) => (
              <article key={index} className="group relative">
                {/* グロー効果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-pink-500/0 to-cyan-400/0 group-hover:from-orange-500/20 group-hover:via-pink-500/20 group-hover:to-cyan-400/20 rounded-3xl blur-xl transition-all duration-500 -z-10"></div>
                
                <div className="relative overflow-hidden rounded-3xl backdrop-blur-sm bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                  {/* 画像部分 */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* フローティングバッジ */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-xs font-medium">
                        Creator
                      </div>
                    </div>
                  </div>

                  {/* コンテンツ部分 */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">{member.name}</h3>
                    <p className="text-gray-400 text-sm font-medium mb-6 leading-relaxed">{member.role}</p>
                    
                    <ul className="space-y-3">
                      {member.stats.map((stat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 mt-2 flex-shrink-0"></div>
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* SNSリンク */}
                    <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                      {['YouTube', 'Instagram', 'X'].map((platform) => (
                        <button key={platform} className="w-10 h-10 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300 group/btn">
                          <span className="text-xs font-medium group-hover/btn:text-orange-400 transition-colors">{platform[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 実績 */}
      <ClientsMarquee />

      {/* プロジェクト */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* コンタクト */}
      <section id="contact" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Get an estimate for your<br />upcoming project
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            お問い合わせフォームは後で実装します。まずはメンバー紹介をご確認ください。
          </p>
          <button className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 bg-[length:200%_100%] font-bold text-black text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 hover:bg-[position:100%_0%]">
            <span className="relative z-10 flex items-center gap-3">
              CONTACT US
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-3xl font-black bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">YOAKE</div>
            <nav className="flex flex-wrap gap-8 text-sm font-medium text-gray-400">
              {['Services', 'Members', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </nav>
            <div className="text-gray-500 text-sm">© {new Date().getFullYear()} YOAKE Studio. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
