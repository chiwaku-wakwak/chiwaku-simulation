import React from "react";
import Link from "next/link";
import WaveSpeedCanvas from "./WaveSpeedCanvas";
import "../globals.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>地震波伝播シミュレーション（家庭版）</h1>
      <p>画面をタップして震源位置を動かします。</p>
      <p>⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>
      <p><Link href="/">トップに戻る</Link></p>
      <WaveSpeedCanvas />
    </div>
  );
};

export default App;
