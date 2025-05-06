"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Link as Scroll } from "react-scroll";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-sky-700">
        <div className="flex-grow pt-25 pb-10 px-4 lg:px-25">
          {/* 画像を右寄せするために flex を追加 */}
          <div className="flex justify-end py-3">
            <Image
              src="/simulation_photo.png"
              alt="シミュレーション班の写真"
              width={450}
              height={350}
              className="rounded-md mb-2 object-contain"
            />
          </div>

          <h1 className="text-2xl font-bold mb-4 text-slate-200 lg:text-6xl">
            地球と惑星の「謎」を
          </h1>
          <h1 className="text-2xl font-bold mb-4 text-slate-200 lg:text-6xl">
            <span className="text-cyan-300 text-3xl lg:text-5xl">仮想現実</span>
            で解き明かせ。
          </h1>
          <p className="text-slate-200 py-2 lg:w-2/3">
            21世紀の理学・工学分野で、なくてはならない手法になっているシミュレーション。地球・惑星科学においても、気象予報や太陽活動の予測などで大いに活用されています。
          </p>
          <p className="text-slate-200 py-3 lg:w-2/3">
            身近で直感的なテーマを中心に、その一端をみなさんにも体感していただくために、今回展示するシミュレーションの計画・立案・作成を数ヶ月前から行いました。楽しんでいただければ大変嬉しいです。
          </p>
          <Scroll
            to="simulation"
            smooth={true}
            duration={400}
            offset={-30}
            className="inline-block px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold rounded-lg shadow-md transition"
          >
            はじめる
          </Scroll>
        </div>
      </div>
      <div className="flex-grow pt-0 pb-10 px-4 lg:px-25" id="simulation">
        <h2 className="text-xl font-bold mt-8 mb-4" id="simulation">
          お試しシミュレーション
        </h2>

        <p className="mb-2">
          シミュレーションのイメージを掴んでいただくために、実際の企画で展示するシミュレーションの簡易版をここに置きます。
        </p>

        <div className="grid sm:grid-cols-2 gap-4 items-stretch md:grid-cols-3 gap-4 items-stretch">
          <Link href="/pendulum" className="h-full">
            <div className="border-[0.5px] border-[#6a75e1] h-full flex flex-col rounded-xl p-4 shadow-sm hover:bg-gray-50 transition">
              <Image
                src="/pendulum.jpg"
                alt="二重振り子シミュレーション"
                width={500}
                height={400}
                className="rounded-xl mb-2 object-cover h-48"
              />
              <hr className="border-t border-gray-300 mb-2" />
              <h3 className="text-lg font-semibold mt-auto">
                二重振り子シミュレーション
              </h3>
              <p className="text-sm text-gray-600">
                カオスな運動をする二重振り子の動きを数値シミュレーションで再現します。
              </p>
            </div>
          </Link>

          <Link href="/seismic" className="h-full">
            <div className="border-[0.5px] border-[#6a75e1] h-full flex flex-col rounded-xl p-4 shadow-sm hover:bg-gray-50 transition">
              <Image
                src="/seismic.jpg"
                alt="地震波伝播シミュレーション"
                width={400}
                height={250}
                className="rounded-xl mb-2 object-cover h-48"
              />
              <hr className="border-t border-gray-300 mb-2" />
              <h3 className="text-lg font-semibold mt-auto">
                地震波伝播シミュレーション
              </h3>
              <p className="text-sm text-gray-600">
                地震波の伝わり方を可視化し、地質や構造の影響を学べます。
              </p>
            </div>
          </Link>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">お知らせ</h2>
        <h3 className="text-lg font-bold mb-2">五月祭総選挙について</h3>
        <p className="mb-2">
          五月祭では、来場者の投票と評価を総合的に判断して人気企画を決定する「五月祭総選挙」を実施しています。投票は、第
          98 回五月祭 HP
          の企画詳細ページの「企画紹介」欄から行うことができます。本企画への投票をよろしくお願いいたします！
        </p>
      </div>
      <Footer />
    </div>
  );
}
