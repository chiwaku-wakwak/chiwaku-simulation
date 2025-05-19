"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ? "text-blue-600 font-semibold" : "";

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50 opacity-90">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 bg-white">
        {/* ロゴとタイトル */}
        <div className="flex items-center space-x-3">
          <span className="no-underline">
            <Link href="/" className="flex items-center space-x-3 no-underline">
              {/* ロゴ画像 */}
              <Image
                src="/chiwaku.png" // ロゴのパスに置き換えてください
                alt="ロゴ"
                width={60} // お好みで調整
                height={60}
                className="h-14 w-auto lg:h-16"
              />
              {/* タイトルテキスト */}
              <div className="flex flex-col leading-tight">
                <p className="text-lg md:text-xl font-semibold text-gray-700 lg:text-xl">
                  <code>Chiwaku Wakwak</code>
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-700 lg:text-xl">
                  <code>Simulation 2025</code>
                </p>
              </div>
            </Link>
          </span>
        </div>

        {/* ハンバーガー */}
        <div className="lg:hidden bg-white">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none text-gray-700"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* ナビゲーション（PC） */}
        <nav className="hidden lg:flex space-x-6 text-gray-700 text-sm">
          <Link href="/" className={isActive("/")}>
            ホーム
          </Link>
          <Link href="/pendulum" className={isActive("/pendulum")}>
            二重振り子
          </Link>
          <Link href="/seismic" className={isActive("/seismic")}>
            地震波
          </Link>
          <Link
            href="/gravitational-lens"
            className={isActive("/gravitational-lens")}
          >
            重力レンズ
          </Link>
          <Link
            href="https://sites.google.com/g.ecc.u-tokyo.ac.jp/chiwakuwakuwaku2025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700"
          >
            地惑全体
          </Link>
          <Link
            href="https://github.com/chiwaku-wakwak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700"
          >
            GitHub
          </Link>
        </nav>
      </div>

      {/* ナビゲーション（モバイル） */}
      {isOpen && (
        <div className="lg:hidden px-4 py-6 pb-3 bg-white">
          <nav className="flex flex-col space-y-2 text-gray-700 text-sm">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={isActive("/")}
            >
              ホーム
            </Link>
            <Link
              href="/pendulum"
              onClick={() => setIsOpen(false)}
              className={isActive("/pendulum")}
            >
              二重振り子
            </Link>
            <Link
              href="/seismic"
              onClick={() => setIsOpen(false)}
              className={isActive("/seismic")}
            >
              地震波
            </Link>
            <Link
              href="/gravitational-lens"
              className={isActive("/gravitational-lens")}
            >
              重力レンズ
            </Link>
            <Link
              href="https://sites.google.com/g.ecc.u-tokyo.ac.jp/chiwakuwakuwaku2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700"
            >
              地惑全体
            </Link>
            <Link
              href="https://github.com/chiwaku-wakwak"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
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
