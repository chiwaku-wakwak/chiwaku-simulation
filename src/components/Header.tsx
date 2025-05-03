"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 bg-white">
        {/* ロゴとタイトル */}
        <div className="flex items-center space-x-3">
          <span className="no-underline">
            <Link href="/">
              <span className="text-lg md:text-xl font-semibold text-gray-700">
                五月祭地球惑星系：シミュレーション班
              </span>
            </Link>
          </span>
        </div>

        {/* ハンバーガー */}
        <div className="md:hidden bg-white">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* ナビゲーション（PC） */}
        <nav className="hidden md:flex space-x-6 text-gray-700 text-sm">
          <Link href="/pendulum">二重振り子</Link>
          <Link href="/seismic">地震波</Link>
          <Link
            href="https://github.com/random776/seismic_tsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </nav>
      </div>

      {/* ナビゲーション（モバイル） */}
      {isOpen && (
        <div className="md:hidden px-4 py-6 pb-3 bg-white">
          <nav className="flex flex-col space-y-2 text-gray-700 text-sm">
            <Link href="/pendulum" onClick={() => setIsOpen(false)}>
              二重振り子
            </Link>
            <Link href="/seismic" onClick={() => setIsOpen(false)}>
              地震波
            </Link>
            <Link
              href="https://github.com/random776/seismic_tsx"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
