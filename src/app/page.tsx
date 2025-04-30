import React from "react";
import WaveSpeedCanvas from "./WaveSpeedCanvas";
import "./globals.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>地震波伝播シミュレーション（家庭版）</h1>
      <p>⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>
      <WaveSpeedCanvas />
    </div>
  );
};

export default App;
