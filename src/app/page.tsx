"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Link as Scroll } from "react-scroll";
import { ChevronDown, ChevronRight } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <Image
          src="/kelvin-helmholtz.jpg"
          alt="シミュレーション班の写真"
          fill
          className="object-cover min-w-full min-h-full opacity-90"
        />
      </div>
      <div className="">
        <div className="flex-grow pt-30 pb-10 px-1 lg:px-25 lg:pt-22 lg:px-4">
          {/* 画像を右寄せするために flex を追加 */}
          <div className="flex justify-end lg:py-35 px-2"></div>

          <div className="inline-block bg-sky-700/80 px-1 py-8 rounded-md lg:w-2/3 lg:px-5">
            <h1 className="text-3xl font-bold mb-4 text-white opacity-100 lg:text-5xl">
              地球と惑星の「謎」を
            </h1>
            <h1 className="text-3xl font-bold mb-2 text-white opacity-100 lg:text-5xl">
              <span className="text-5xl font-bold mb-2 text-cyan-300 lg:!text-7xl">
                仮想現実
              </span>
              で解き明かせ。
            </h1>

            <div className="flex justify-end py-10 lg:py-0 px-2"></div>

            <p className="text-white opacity-100 py-1">
              21世紀の理学・工学分野で、なくてはならない手法になっている「数値シミュレーション」。地球・惑星科学においても、気象予報や太陽活動の理解などで大いに活用されています。
            </p>
            <p className="text-white opacity-100 py-4">
              その一端をみなさんにも体感していただくため、身近で直感的なテーマを中心に、今回展示するシミュレーションの計画・立案・作成を数ヶ月前から行いました。楽しんでいただければ大変嬉しいです。
            </p>
            <Scroll
              to="simulation"
              smooth={true}
              duration={400}
              offset={-30}
              className="inline-block px-6 py-2 border border-sky-300 bg-sky-500 hover:bg-sky-600 hover:border-sky-500 text-white text-lg font-semibold rounded-4xl shadow-md transition"
            >
              はじめる <ChevronDown className="inline ml-2" />
            </Scroll>
          </div>
        </div>
      </div>
      <div
        className="flex-grow pt-0 pb-5 px-4 lg:px-25 lg:py-0 opacity-0"
        id="simulation"
      ></div>
      <div className="flex-grow pt-0 pb-10 px-4 lg:px-25 bg-white">
        <h2
          className="text-xl py-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block"
          id="simulation"
        >
          注意点
        </h2>

        <p className="mb-2 pt-3">
          ⚠️
          工事中：シミュレーション統括が許可を出すまでこのurlを一般公開しないこと.
        </p>
        <h2
          className="text-xl py-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block"
          id="simulation"
        >
          お試しシミュレーション
        </h2>

        <p className="mb-2 py-3">
          シミュレーションのイメージを掴んでいただくために、実際の企画で展示するシミュレーションの簡易版をここに置きます（重力レンズシミュレーションは紹介文のみ）。
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
                width={500}
                height={400}
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

          <Link href="/gravitational-lens" className="h-full">
            <div className="border-[0.5px] border-[#6a75e1] h-full flex flex-col rounded-xl p-4 shadow-sm hover:bg-gray-50 transition">
              <Image
                src="/no_image.jpg"
                alt="重力レンズシミュレーション"
                width={500}
                height={400}
                className="rounded-xl mb-2 object-cover h-48"
              />
              <hr className="border-t border-gray-300 mb-2" />
              <h3 className="text-lg font-semibold mt-auto">
                重力レンズシミュレーション
              </h3>
              <p className="text-sm text-gray-600">
                一般相対性理論によって説明される重力レンズ効果が「系外惑星探査」に応用できることを、シミュレーションを用いて再現します。
              </p>
            </div>
          </Link>
        </div>
        <h2 className="text-xl py-5 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block">
          お知らせ
        </h2>
        <h3 className="text-lg font-bold mb-2 pt-8">五月祭総選挙について</h3>
        <p className="mb-2">
          五月祭では、来場者の投票と評価を総合的に判断して人気企画を決定する「五月祭総選挙」を実施しています。投票は、第
          98 回五月祭 HP
          の企画詳細ページの「企画紹介」欄から行うことができます。本企画への投票をよろしくお願いいたします！
        </p>
      </div>
      <div className="">
        <div className="px-4 mx-2 my-8 py-5 bg-white/95 rounded-md lg:mx-20 shadow-2xl">
          <h2 className="text-xl pt-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block">
            地球惑星物理・環境学科でのコンピュータ教育を知る
          </h2>

          <p className="mb-2 py-3">
            地球惑星物理・環境学科では、コンピュータを用いたシミュレーション研究を行うための基礎的な教育が行われています。学生の実感も含めてご紹介します。
          </p>

          <div className="pb-3">
            <Link
              href="https://www.eps.s.u-tokyo.ac.jp/?s=%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"
              className="inline-block px-6 py-2 border border-green-600 bg-green-300 hover:bg-green-400 hover:border-sky-500 text-sky-900 text-lg font-semibold rounded-2xl shadow-md transition"
            >
              読む <ChevronRight className="inline ml-2" />
            </Link>
          </div>

          <h2 className="text-xl pt-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block">
            地球惑星科学専攻でのシミュレーション研究を知る
          </h2>

          <p className="mb-2 py-3">
            地球・惑星科学のなかでも、シミュレーションを用いた研究は多岐にわたります。研究内容を一般向けに紹介している「
            <Link href="https://www.eps.s.u-tokyo.ac.jp/?s=%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3">
              プレスリリース
            </Link>
            」を読んでみましょう（地球惑星科学専攻HPに飛びます）。
          </p>
          <div className="pb-3">
            <Link
              href="https://www.eps.s.u-tokyo.ac.jp/?s=%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"
              className="inline-block px-6 py-2 border border-green-600 bg-green-300 hover:bg-green-400 hover:border-sky-500 text-sky-900 text-lg font-semibold rounded-2xl shadow-md transition"
            >
              調べる <ChevronRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
