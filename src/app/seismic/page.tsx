import React from "react";
import WaveSpeedCanvas from "./WaveSpeedCanvas";
import Header from "@/components/Header";
import "../globals.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-25 px-2">
        <h1 className="text-2xl font-bold mb-4">
          地震波伝播シミュレーション（家庭版）
        </h1>
        <p className="mb-2">画面をタップして震源位置を動かします。</p>
        <p className="mb-2">⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>
        <WaveSpeedCanvas />
      </main>
    </>
  );
};

export default App;
