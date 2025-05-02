import React from "react";
import Image from "next/image";
import "./globals.css";

const App: React.FC = () => {
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
    } as React.CSSProperties,
    title: {
      margin: 0,
      fontSize: "24px",
    } as React.CSSProperties,
    link: {
      marginLeft: "10px",
    } as React.CSSProperties,
  };
  return (
    <div className="App">
      <div style={styles.header}>
        <h1 style={styles.title}>五月祭地球惑星系：シミュレーション班</h1>
        <a
          style={styles.link}
          href="https://github.com/random776/seismic_tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Replacing <img> with <Image /> */}
          <Image
            src="/github-mark.png"
            alt="GitHub Mark"
            width={30}
            height={30}
          />
        </a>
      </div>
      <p>⚠️ 五月祭開始までこのurlを一般公開しないこと.</p>
      <ul>
        <li>
          <a href="/seismic">地震波伝播シミュレーション</a>
        </li>
        <li>
          <a href="/pendulum">二重振り子シミュレーション</a>
        </li>
      </ul>
    </div>
  );
};

export default App;
