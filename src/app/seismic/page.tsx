import React from "react";
import WaveSpeedCanvas from "./WaveSpeedCanvas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-25 px-4 lg:px-20 text-left lg:pt-30">
      <h1
          className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block"
          id="simulation"
        >
          地震波伝播シミュレーション（お試し版）
        </h1>
        <div className="mb-1 pt-3">
          <span className="inline-block w-1 h-6 bg-white py-1 mr-2"></span>
          <div className="inline-block px-2 py-1 bg-green-200 text-green-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            お試し版
          </div>
          <div className="inline-block px-2 py-1 bg-red-200 text-red-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            地下構造探査
          </div>
        </div>
        <p className="mb-2 py-1"><span className="font-bold">画面をタップして</span>震源位置を動かすことができます（画面中の⚫️）。</p>
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
