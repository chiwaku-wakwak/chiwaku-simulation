import React from "react";
import WaveSpeedCanvas from "./WaveSpeedCanvas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20 px-4 lg:px-20 text-left">
      <h1
          className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block"
          id="simulation"
        >
          地震波伝播シミュレーション（お試し版）
        </h1>
        <p className="mb-2 py-5">画面をタップして震源位置を動かします。</p>
        <p className="mb-2">⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>
        <p className="mb-2 py-1">
          ⚠️ ページが正しく動かない場合は、JavaScriptが有効になっていない可能性があります。ブラウザの設定を確認してください。
        </p>
        <WaveSpeedCanvas />
      </main>
      <Footer />
    </>
  );
};

export default App;
