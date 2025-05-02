import React from "react";
import DoublePendulum from "./DoublePendulum";
import Link from "next/link";
import "../globals.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>二重振り子シミュレーション（家庭版）</h1>
      <p>⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>
      <p><Link href="/">トップに戻る</Link></p>
      <DoublePendulum />
    </div>
  );
};

export default App;