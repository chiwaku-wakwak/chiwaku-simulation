import React from "react";
import Link from "next/link";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-25 px-2">
        <h1 className="text-2xl font-bold mb-4">
          シミュレーション班・公式ページへようこそ
        </h1>
        <p>⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>
        <h2 className="text-xl font-bold mt-8 mb-4">お試しシミュレーション</h2>

        <p className="mb-2">
          シミュレーションのイメージを掴んでいただくために、実際の企画で展示するシミュレーションの簡易版をここに置きます。
        </p>

        <ul className="list-disc pl-5 mt-4">
          <li>
            <Link href="/pendulum" className="text-blue-600 underline">
              二重振り子シミュレーション
            </Link>
          </li>
          <li>
            <Link href="/seismic" className="text-blue-600 underline">
              地震波伝播シミュレーション
            </Link>
          </li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-4">お知らせ</h2>
        <h3 className="text-lg font-bold mb-2">五月祭総選挙について</h3>
        <p className="mb-2">
          五月祭では、来場者の投票と評価を総合的に判断して人気企画を決定する「五月祭総選挙」を実施しています。投票は、第 98
          回五月祭 HP の企画詳細ページの「企画紹介」欄から行うことができます。本企画への投票をよろしくお願いいたします！
        </p>
      </main>
      <Footer />
    </div>
  );
}
