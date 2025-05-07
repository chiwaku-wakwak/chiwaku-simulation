// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="space-box">
          <h3 className="text-lg font-bold mb-2 lg:mb-0">
            2025年 東京大学 理学部 地球惑星物理・環境学科有志
          </h3>
        </div>
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} 五月祭地球惑星系：シミュレーション班
        </p>
        <div className="flex space-x-4">
        <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <Link href="/pendulum" className="hover:underline">
            二重振り子
          </Link>
          <Link href="/seismic" className="hover:underline">
            地震波
          </Link>
          <a
            href="https://github.com/random776/seismic_tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
