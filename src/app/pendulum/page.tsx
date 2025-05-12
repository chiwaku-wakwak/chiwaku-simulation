import React from "react";
import DoublePendulum from "./DoublePendulum";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* pt-20 = padding-top: 5rem (＝約80px。Header 高さに応じて調整) */}
      <main className="pt-24 px-4 justify-start lg:px-25">
        <h1
          className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block"
          id="simulation"
        >
          二重振り子シミュレーション（お試し版）
        </h1>
        <p className="mb-2 py-3">
          ⚠️ 五月祭開始までこのurlを一般公開しないこと.
        </p>
        <p className="mb-2 py-1">
          ⚠️ ページが正しく動かない場合は、JavaScriptが有効になっていない可能性があります。ブラウザの設定を確認してください。
        </p>

        <DoublePendulum />
      </main>
      <Footer />
    </>
  );
};

export default App;
