"use client";

import React from "react";
import Header from "@/components/Header";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { FootnoteProvider } from "@/components/FootnoteContext";
import Footnote from "@/components/Footnote";
import FootnoteList from "@/components/FootnoteList";
import Footer from "@/components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const App: React.FC = () => {
  return (
    <FootnoteProvider>
      <Header />
      {/* pt-20 = padding-top: 5rem (＝約80px。Header 高さに応じて調整) */}
      <main className="pt-25 px-4 text-left lg:pt-30 lg:px-20">
        <h1
          className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block"
          id="simulation"
        >
          重力マイクロレンズシミュレーションについて
        </h1>
        <div className="mb-1 py-1">
          <span className="inline-block w-1 h-6 bg-white py-1 mr-2"></span>
          <div className="inline-block px-2 py-1 bg-green-200 text-green-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            紹介記事
          </div>
          <div className="inline-block px-2 py-1 bg-blue-200 text-blue-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            一般相対論
          </div>
          <div className="inline-block px-2 py-1 bg-red-200 text-red-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            系外惑星探査
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          私たちが暮らす地球のような惑星が太陽系の外にどのくらい存在するのか—これは惑星科学における大きな問いの一つです。
        </p>
        <p className="text-gray-700 mb-4">
          1990
          年代以降、太陽系外惑星が次々と発見され、現在ではその数は5000個を超えています。こうした系外惑星が放つ光は極めて微弱であり、中心の恒星が放つ眩い輝きにかき消されてしまうため、直接的な観測は容易ではありません。
        </p>
        <p className="text-gray-700 mb-4">
          系外惑星の発見には、
          <Link
            href="https://astro-dic.jp/transit-method/"
            className="text-blue-600"
          >
            トランジット法
          </Link>
          など、いくつかの方法が知られています。今回紹介するのは、その中でも、
          <span className="font-bold">重力マイクロレンズ法</span>
          と呼ばれる方法です。
        </p>
        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">
          重力マイクロレンズ法ってどんな手法？
        </h2>
        <p className="text-gray-700 mb-4">
          重力レンズとはアインシュタインの一般相対性理論に基づく現象で、重い天体がその周囲の時空を歪めることによってその背後にある天体の光が曲げられる現象です。
          このとき、手前の重い天体（レンズ天体）がまるでレンズのように働き、背後の天体（ソース天体）の光が複数の経路を通って地球に届きます。
        </p>
        <figure className="my-3">
          <Image
            src="/microlens_1.png"
            alt="Gravitational Lens Simulation"
            width={600}
            height={430}
            className="rounded-lg shadow-lg mx-auto"
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図1: 手前の銀河の重力よって歪められた遠方の銀河(credit: NASA, ESA)
          </figcaption>
        </figure>
        <p className="text-gray-700 mb-4">
          天体が恒星などの小さな天体の場合は時空の歪みの程度が小さく、ソース天体の光が増幅され、時間変化に伴う光度変化が
          <span className="font-bold">一時的な増光現象</span>
          として観測されます。これが「重力マイクロレンズ現象」です。
          通常恒星だけがレンズとして働く場合、光度曲線は対称的な1つの滑らかなピークを持ちます。
        </p>
        <figure className="my-3">
          <Image
            src="/microlens_3.png"
            alt="Gravitational Lens Simulation"
            width={600}
            height={430}
            className="rounded-lg shadow-lg mx-auto"
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図2:
            恒星のみがレンズ天体の場合の光度曲線（シミュレーションによる例）
          </figcaption>
        </figure>
        <p className="text-gray-700 mb-4">
          さてここで問題です。
          <span className="font-bold underline">
            その恒星の周りに惑星が公転している場合
          </span>
          、観測される光度曲線はどのようになるでしょうか？
          惑星の質量も0ではないので、なにがしかの影響はありそうです。答えは、来場してからのお楽しみです。
        </p>
        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">
          シミュレーションを「つくる」
        </h2>
        <p className="text-gray-700 mb-4">
          シミュレーションを一言に作成するとはいっても、なかなか一筋縄ではいきません。実現するには、重力による光の曲がり方がどう定式化されるのかを理解しなければなりません。
        </p>
        <p className="text-gray-700 mb-4">
          このシミュレーションは、Hくん（地球惑星物理学科4年、本ページの編者Tの同期）が作成してくれたのですが、まずその定式化が難しく、途中計算にしても「
          <span className="font-bold">五次方程式が出てきた</span>
          、どうやって解くのか
          <Footnote number={1}>
            「五次方程式は代数的に解けない（解の公式がない）」ことが知られています。なんとか数値的に解く術はありますが、計算量が膨大になるため、注意が必要です。
          </Footnote>
          」と悪戦苦闘していました
          <Footnote number={2}>
            「今回の五月祭企画で、重力マイクロレンズシミュレーションをやろうといったの誰だよ」と嘆いていました...^_^;
            ちなみに考案者は僕ではありません（編者Tより）。
          </Footnote>
          。
        </p>
        <p className="text-gray-700 mb-4">
          この問題はなんとか解決したのですが、シミュレーションの実行には、膨大な計算量が必要です。時間分解能によって計算にかかる時間が大きく異なるため、その周辺の微調整を強いられました。
          何はともあれ、この「力作」とも言えるシミュレーションを、ぜひご来場いただき、体験してみてください。
        </p>
        <Accordion
          sx={{
            backgroundColor: "#e0f2f1", // 背景色
            color: "#263238", // テキスト色
            "&.Mui-expanded": {
              backgroundColor: "#e0f2f1", // 展開時の背景色（オプション）
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{ color: "#1a237e" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" sx={{ fontWeight: 700 }}>
              参考文献
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="overflow-scroll">
              <ul>
                <li className="py-1">
                  NASA Exoplanet Science Institute. (n.d.). NASA exoplanet
                  archive. California Institute of Technology.{" "}
                  <Link href="https://exoplanetarchive.ipac.caltech.edu/index.html">
                    https://exoplanetarchive.ipac.caltech.edu/index.html
                  </Link>
                </li>
                <li className="py-1">
                  河原創. (2018). 系外惑星探査 地球外生命をめざして.
                  東京大学出版会.
                </li>
                <li className="py-1">
                  B. Scott Gaudi. (2012) Microlensing Surveys for Exoplanets.
                  Annual Review of Astronomy andAstrophysics, 50, 411–53.
                  10.1146/annurev-astro-081811-12551812
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <FootnoteList />
        <div className="text-center mt-8"></div>
      </main>
      <Footer />
    </FootnoteProvider>
  );
};

export default App;
