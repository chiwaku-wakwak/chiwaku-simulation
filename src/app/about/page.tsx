"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FootnoteProvider } from "@/components/FootnoteContext";
import Footnote from "@/components/Footnote";
import FootnoteList from "@/components/FootnoteList";
import "../globals.css";

const App: React.FC = () => {
  return (
    <FootnoteProvider>
      <Header />
      {/* pt-20 = padding-top: 5rem (＝約80px。Header 高さに応じて調整) */}
      <main className="pt-23 pb-10 px-4 text-left lg:px-20">
        <h1
          className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block lg:text-3xl"
          id="simulation"
        >
          地惑、わくわく。パソコン、かたかた。
        </h1>
        <div className="mb-1 py-3">
          <div className="inline-block px-2 py-1 bg-green-200 text-green-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            進学を検討する人向け
          </div>
          <div className="inline-block px-2 py-1 bg-blue-200 text-blue-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            シミュレーション
          </div>
          <div className="inline-block px-2 py-1 bg-red-200 text-red-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            データ解析
          </div>
        </div>
        <p className="mb-2 py-1">
          地球惑星物理・環境学科では、シミュレーションやデータ解析など、研究に必要な技術を「きほんのき」から学ぶ講義・実習があるので紹介します。
        </p>

        <h2 className="flex items-center px-3 py-2 bg-gray-100 text-gray-800 text-xl font-bold lg:text-2xl lg:w-2/3">
          <span className="inline-block w-1 h-6 bg-blue-600 py-5 mr-2"></span>
          地球惑星物理学科
        </h2>
        <h3 className="text-lg font-bold text-gray-800 mt-5 lg:text-xl">
          <span className="inline-block w-1 h-6 bg-white py-1 mr-2"></span>
          地球惑星物理学演習（計算機演習）
        </h3>
        <div className="mb-1 py-1">
          <span className="inline-block w-1 h-6 bg-white py-1 mr-2"></span>
          <div className="inline-block px-2 py-1 bg-green-200 text-green-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            3年前期
          </div>
          <div className="inline-block px-2 py-1 bg-blue-200 text-blue-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            選択必修
          </div>
        </div>
        <div className="mb-2 py-3 px-3 bg-slate-100 rounded-md">
          <p className="mb-2 py-1">
            地球惑星物理学科の学生の大半が履修する、計算機を利用する際の基礎を学ぶ実習です。Linuxなど研究で使うオペレーションシステム（OS）
            について学んだ後、Fortran{" "}
            <Footnote number={1}>
              科学技術計算で用いられるプログラミング言語。地球惑星物理学分野でしか使わないのでは、と思ってしまうほどの化石言語。Web開発などに詳しい人に「Fortran使ってます!」と言えば、大抵の場合面白がってくれる。
            </Footnote>
            やPythonなどのプログラミング言語の基礎を学びます。
          </p>
          <p className="mb-2 py-1">
            次にその技能を使って、有限差分法の基礎や行列演算を用いた反復法などのシミュレーション手法を学びます。また、スペクトル解析などのデータ解析手法も学びます。
          </p>
          <p className="mb-2 py-1">
            週3日の実習で、長い場合で1日あたりに3時間程度の実習を行います
            <Footnote number={2}>3時間フルに使う回は少ない。</Footnote>
            。先生方や大学院生のティーチングアシスタントの方々が丁寧にサポートしてくださるので、初心者フレンドリーな実習だと感じます。FortranやPythonの使用教材は
            <Link
              href="https://amanotk.github.io/fortran-resume-public/"
              className="text-sky-700 underline"
            >
              オープンソース
            </Link>
            で公開されているので、興味がある人は眺めてみるのも良いと思います。
          </p>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mt-5 lg:text-xl">
          <span className="inline-block w-1 h-6 bg-white py-1 mr-2"></span>
          地球惑星物理学数値解析
        </h3>
        <div className="mb-1 py-1">
          <span className="inline-block w-1 h-6 bg-white py-1 mr-2"></span>
          <div className="inline-block px-2 py-1 bg-green-200 text-green-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            4年前期
          </div>
          <div className="inline-block px-2 py-1 bg-blue-200 text-blue-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            選択科目
          </div>
        </div>
        <div className="mb-6 py-3 px-3 bg-slate-100 rounded-md">
          <p className="mb-2 py-1"></p>
          <p className="mb-2 py-1"></p>
          <p className="mb-2 py-1"></p>
        </div>
        <h2 className="flex items-center px-3 py-2 bg-gray-100 text-gray-800 text-xl font-bold lg:text-2xl lg:w-2/3">
            <span className="inline-block w-1 h-6 bg-blue-600 py-5 mr-2"></span>
            地球惑星環境学科
          </h2>
        <FootnoteList />
      </main>
        <Footer />
    </FootnoteProvider>
  );
};

export default App;
