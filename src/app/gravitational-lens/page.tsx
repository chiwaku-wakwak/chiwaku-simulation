import React from "react";
import Header from "@/components/Header";
import "../globals.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* pt-20 = padding-top: 5rem (＝約80px。Header 高さに応じて調整) */}
      <main className="pt-23 px-4 text-left lg:px-20">
        <h1
          className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block"
          id="simulation"
        >
          重力レンズシミュレーションについて（建設中）
        </h1>
        <p className="mb-2 py-5">⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>
      </main>
    </>
  );
};

export default App;
