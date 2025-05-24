"use client";

import React from "react";
import Header from "@/components/Header";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { FootnoteProvider } from "@/components/FootnoteContext";
import Footer from "@/components/Footer";

const App: React.FC = () => {
  return (
    <FootnoteProvider>
      <Header />
      <main className="pt-25 pb-10 px-4 text-left lg:px-20 lg:pt-30">
        <h1
          className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block lg:text-3xl"
          id="simulation"
        >
          五月祭当日ブログ
        </h1>
        <div className="mb-1 py-3">
          <div className="inline-block px-2 py-1 bg-green-200 text-green-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            シミュレーション統括ブログ
          </div>
          <div className="inline-block px-2 py-1 bg-blue-200 text-blue-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            N体運動
          </div>
        </div>
        <p className="mb-2 py-1">
          五月祭での雰囲気や、今回の展示で見せきれなかったものを中心に紹介していきます。
        </p>

        <h2 className="flex items-center px-3 py-2 bg-gray-100 text-gray-800 text-xl font-bold lg:text-2xl lg:w-2/3">
          <span className="inline-block w-1 h-6 bg-blue-600 py-5 mr-2"></span>
          5 / 24（土）
        </h2>
        <p className="mb-2 pl-4 py-3">
          今日は朝早くから多くの皆様にお越しいただき、ありがとうございました。小さなお子様から、地球科学マニアや研究者の方まで来ていただいて、嬉しかったです。
          特に、「重力マイクロレンズシミュレーション」に興味を持っていただいた方が予想以上に多かったです。作成に携わった学科民も非常に喜んでいます。
        </p>
        <p className="mb-2 pl-4 py-3">
          「2重振り子」に関連して、「N体運動」（複数の物体が重力などにより互いに相互作用する運動）のカオスについて興味を持たれた方がいらっしゃいました。
          その場ではお見せできなかったのですが、それに関連したソースコードを<Link className="font-bold text-sky-700 hover:underline" href="https://github.com/chiwaku-wakwak/nbody_simulation">GitHub</Link> に掲載しました。
          5/25（日）も予定通り開催しますので、ぜひお越しください。
        </p>
        <figure className="my-3">
          <Image
            src="/trajectories.png"
            alt="ntai simulation result"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
            unoptimized
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図:3つの物体が重力に引かれ合いながら運動する様子のシミュレーション結果
          </figcaption>
        </figure>
        </main>
      <Footer />
    </FootnoteProvider>
  );
};

export default App;
