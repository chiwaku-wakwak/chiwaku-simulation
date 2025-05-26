"use client";

import React from "react";
import Header from "@/components/Header";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { FootnoteProvider } from "@/components/FootnoteContext";
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
          <span className="inline-block w-1 h-6 bg-blue-600 py-5 mr-2"></span>5
          / 24（土）
        </h2>
        <p className="mb-2 pl-4 py-3">
          今日（5/24）は朝早くから多くの皆様にお越しいただき、ありがとうございました。小さなお子様から、地球科学マニアや研究者の方まで来ていただき、よかったです。
          特に、「重力マイクロレンズシミュレーション」に興味を持っていただいた方が予想以上に多かったです。作成に携わった学科民も非常に喜んでいます。
        </p>
        <p className="mb-2 pl-4 py-3">
          「2重振り子」に関連して、「N体運動」（複数の物体が重力などにより互いに相互作用する運動）のカオスについて興味を持たれた方がいらっしゃいました。
          その場ではお見せできなかったので、それに関連したソースコードを
          <Link
            className="font-bold text-sky-700 hover:underline"
            href="https://github.com/chiwaku-wakwak/nbody_simulation"
          >
            GitHub
          </Link>{" "}
          に掲載しました。
          5/25（日）も予定通り開催しますので、ぜひお越しください。
        </p>
        <figure className="my-3">
          <Image
            src="/three_body.gif"
            alt="ntai simulation result"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
            unoptimized
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図1:3つの物体が重力に引かれ合いながら運動する様子のシミュレーション結果
          </figcaption>
        </figure>
        <h2 className="flex items-center px-3 py-2 bg-gray-100 text-gray-800 text-xl font-bold lg:text-2xl lg:w-2/3">
          <span className="inline-block w-1 h-6 bg-blue-600 py-5 mr-2"></span>5
          / 25（日）
        </h2>
        <p className="mb-2 pl-4 py-3">
          今日も昨日を上回る多くの方にお越しいただきまして、ありがとうございました。日本全国はるばるお越しいただき、お話できて大変こちらとしても良かったです。
        </p>
        <figure className="my-3">
          <Image
            src="https://pbs.twimg.com/media/GrzTkpnXsAEwiAg?format=jpg&name=large"
            alt="地球外からの来訪者"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto my-3"
            unoptimized
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図2:地球外からも多くの皆さんにお越しいただきました（笑）（credit:
            @chiwaku_waku）
          </figcaption>
        </figure>
        <figure className="my-3">
          <Image
            src="https://pbs.twimg.com/media/GrzQERHXMAEvIHx?format=jpg&name=medium"
            alt="会場の様子"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto my-3"
            unoptimized
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図3:会場でも盛況でした（credit: @chiwaku_waku）
          </figcaption>
        </figure>
        <p className="mb-2 pl-4 py-3">
          地震波の伝播のシミュレーションも多くの方に興味を持っていただき、特に低速度層での地震波の振る舞いに驚かれていました。
        </p>
        <figure className="my-3">
          <Image
            src="/seismic_teisokudo.jpg"
            alt="地震波の伝播のシミュレーション結果"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto my-3"
            unoptimized
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図4:地震波の伝播のシミュレーション結果
          </figcaption>
        </figure>
        <p className="mb-2 pl-4 py-3">
          重力マイクロレンズ法については、背景の光源が重力源の真後ろに、そんなに都合よく移動してくるようなシチュエーションはあるのか、という質問をいただきました。私たちはそこで明確に答えられなかったのですが、
          光源・重力源・観測者は常に宇宙の中で動いているのと、星の密度の高い銀河の中心部に望遠鏡を向けると、マイクロレンズ現象が起こる可能性が上がるとのことでした。
          それでもたくさんの星の中からマイクロレンズ現象を起こす天体を見つけなければならないので、大変な作業となります。
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
                  天文学辞典.「重力マイクロレンズ」.{" "}
                  <Link href="https://astro-dic.jp/gravitational-micro-lensing/">
                    https://astro-dic.jp/gravitational-micro-lensing/
                  </Link>
                  （2025年5月26日閲覧）.
                </li>
                <li className="py-1">
                  鈴木大介, & 住貴宏. (2015). 系外惑星 「遠い世界の物語」 その
                  5~ 重力マイクロレンズ法を用いた氷境界外側の系外惑星探査~.
                  日本惑星科学会誌遊星人, 24(1), 40-47.
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      </main>
      <Footer />
    </FootnoteProvider>
  );
};

export default App;
