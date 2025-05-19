"use client";

import React from "react";
import Header from "@/components/Header";
import "../globals.css";
import Image from "next/image";
import { FootnoteProvider } from "@/components/FootnoteContext";
import Footnote from "@/components/Footnote";
import FootnoteList from "@/components/FootnoteList";
import Footer from "@/components/Footer";

const App: React.FC = () => {
  return (
    <FootnoteProvider>
      <Header />
      {/* pt-20 = padding-top: 5rem (＝約80px。Header 高さに応じて調整) */}
      <main className="pt-25 px-4 text-left lg:pt-30 lg:px-20">
        <h1 className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block">
          アクセス（Google Map）
        </h1>
        <p className="text-gray-700 py-3">
          シミュレーション班を含む展示企画の出展は、東京大学本郷キャンパス
          <span className="font-bold">理学部1号館（西棟）105教室</span>
          で開催します。
        </p>
        <ul className="px-4 lg:px-20">
          <li className="mb-1 py-1">
            正門を入ってまっすぐ進むと、「安田講堂」が見えます。
          </li>
          <li className="mb-1 py-1">
            安田講堂の背後に、「理学部1号館」があります。
            <span className="font-bold">写真に写っているのが西棟です</span>
            <Footnote number={1}>
              写真に撮るとき、どうしても安田講堂と理学部一号館は一緒に写ってしまいます。理学部一号館が安田講堂の景観を邪魔をしているとも、安田講堂が理学部一号館の景観の邪魔をしているとも言われます。
            </Footnote>
            。
          </li>
          <li className="mb-1 py-1">
            直木賞を受賞された作家の伊与原新さんの特別講演会（5/24 15:00～）は、
            <span className="font-bold">理学部1号館（東棟）2階285教室</span>
            で執り行われます。 東棟は西棟のさらに奥にあります
            <Footnote number={2}>
              東棟、中央棟、西棟の順に並んでおります。
            </Footnote>
            ので、お間違いのないようご注意ください。
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {/* マップ部分：固定サイズ（自由） */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.507049827116!2d139.7608345106844!3d35.71374647246231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c2fc33dd137%3A0xef984c2eff28848e!2z55CG5a2m6YOoMeWPt-mkqA!5e0!3m2!1sja!2sjp!4v1747670687093!5m2!1sja!2sjp"
              width="100%"
              height="450"
              className="w-full border-green-300 border-2 rounded-lg shadow-lg"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* 画像部分：アスペクト比固定でカバー表示 */}
          <div className="w-full max-w-[500px] aspect-[4/3] relative">
            <Image
              src="/access.jpg"
              alt="東京大学本郷キャンパス理学部1号館"
              fill
              className="object-cover border-green-300 border-2 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <FootnoteList />
        <div className="flex flex-col lg:flex-row lg:gap-10 my-5"></div>
      </main>
      <Footer />
    </FootnoteProvider>
  );
};

export default App;
