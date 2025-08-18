// app/page.tsx
import Image from "next/image";

const members = [
  {
    name: "山田 太郎",
    role: "CEO",
    description: "会社をまとめるリーダー。",
    image: "/member1.jpg",
  },
  {
    name: "佐藤 花子",
    role: "CTO",
    description: "技術をリードするエンジニア。",
    image: "/member2.jpg",
  },
  {
    name: "鈴木 次郎",
    role: "Designer",
    description: "デザイン担当。UI/UXが得意。",
    image: "/member3.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">メンバー紹介</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
            <p className="mt-2 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
