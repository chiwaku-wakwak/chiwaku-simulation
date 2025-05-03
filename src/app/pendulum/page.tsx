import React from "react";
import DoublePendulum from "./DoublePendulum";
import Header from "@/components/Header";
import "../globals.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* pt-20 = padding-top: 5rem (＝約80px。Header 高さに応じて調整) */}
      <main className="pt-25 px-4">
        <h1 className="text-2xl font-semibold mb-4">
          二重振り子シミュレーション（家庭版）
        </h1>
        <p className="mb-2">⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>

        <DoublePendulum />
      </main>
    </>
  );
};

export default App;
