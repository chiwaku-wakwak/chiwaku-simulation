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
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white opacity-100 xl:text-5xl">
              地球と惑星の「謎」を
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white opacity-100 xl:text-5xl">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-cyan-300 xl:!text-7xl">
                仮想現実
              </span>
              で解き明かせ。
            </h1>

            <p className="text-white opacity-100 py-1">
              21世紀の理学・工学分野で、なくてはならない手法になっている「数値シミュレーション」。地球・惑星科学においても、気象予報や太陽活動の理解などで大いに活用されています。
            </p>
            <p className="text-white opacity-100 py-4">
              その一端をみなさんにも体感していただくため、身近で直感的なテーマを中心に、今回展示するシミュレーションの計画・立案・作成を数ヶ月前から行いました。楽しんでいただければ大変嬉しいです。
            </p>
            <Scroll
              to="simulation"
              smooth={true}
              duration={600} // ミリ秒でスクロール時間を指定
              offset={-128} // 固定ヘッダーがあれば、その高さ分マイナスにする
              className="inline-block px-6 py-2 border border-sky-300 bg-sky-500 hover:bg-sky-600 hover:border-sky-500 text-white text-lg font-semibold rounded-4xl shadow-md transition cursor-pointer"
            >
              はじめる <ChevronDown className="inline ml-2" />
            </Scroll>
          </div>
          <div className="flex justify-end py-10 lg:py-0 px-2"></div>
        </div>
      </div>
      <div id="simulation" className="scroll-mt-32"></div>
      <div className="flex-grow pt-0 pb-10 px-4 lg:px-25 bg-white">
        <h2
          className="text-xl py-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block"
          id="simulation"
        >
          このサイトについて
        </h2>
        <p className="mb-2 pt-3 text-red-700">
          2025年度の五月祭は終了いたしました。多くの来場者の方々にお越しいただき、ありがとうございました。
          Webサイトだけでも楽しんでいただけることを心がけて制作しましたので、ゆっくりしていってください。
        </p>
        <p className="mb-2 pt-3">
          私たちは、理学部地球惑星系2学科の五月祭「
          <span className="font-bold">シミュレーション班</span>
          」です。「二重振り子」「地震波伝播」「重力マイクロレンズ法」のシミュレーションを展示します！
          <span className="font-bold">理学部1号館・105教室</span>
          にて、皆様をお待ちしております。
        </p>
        <p className="mb-2 pt-1">
          なお、
          <span className="font-bold">
            「地惑、わくわく。」2025企画全体のWebサイト
          </span>
          は
          <Link
            href="https://sites.google.com/g.ecc.u-tokyo.ac.jp/chiwakuwakuwaku2025"
            className="font-bold text-blue-700 hover:underline"
          >
            こちら
          </Link>
          です（当班のサイトのみ別のシステムが必要であるため、このように特設サイトを設置しております）。
        </p>
        <div className="py-3">
          <Link
            href="/access"
            className="inline-block px-6 py-2 border border-green-600 bg-green-300 hover:bg-green-400 hover:border-sky-500 text-sky-900 text-lg font-semibold rounded-2xl shadow-md transition"
          >
            アクセス <ChevronRight className="inline ml-2" />
          </Link>
        </div>
        <h2
          className="text-xl py-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block"
          id="simulation"
        >
          お試しシミュレーション・紹介記事
        </h2>

        <p className="mb-2 py-3">
          シミュレーションのイメージを掴んでいただくために、実際の企画で展示する「二重振り子」「地震波伝播」シミュレーションの簡易版をおきます。また、「重力マイクロレンズ」シミュレーションの紹介記事もおきます。ぜひご覧ください。
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
                src="/seismic_sim.jpg"
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
                src="/microlens_3.png"
                alt="重力レンズシミュレーション"
                width={500}
                height={400}
                className="rounded-xl mb-2 object-cover h-48"
              />
              <hr className="border-t border-gray-300 mb-2" />
              <h3 className="text-lg font-semibold mt-auto">
                重力マイクロレンズシミュレーション
              </h3>
              <p className="text-sm text-gray-600">
                一般相対論と、系外惑星探査と、何が関係あるの？
              </p>
            </div>
          </Link>
        </div>
        <h2 className="text-xl py-5 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block">
          お知らせ
        </h2>
        <h3 className="text-lg font-bold mb-2 pt-8">
          地惑、わくわく。公式Twitter（現X）アカウント
        </h3>
        <p className="mb-2">
          旧Twitter（X）で企画情報をお伝えします。ぜひフォローしてください。
          <Link
            href="https://x.com/chiwaku_waku"
            className="text-sky-700 hover:underline font-bold"
          >
            @chiwaku_waku
          </Link>
        </p>
        <h3 className="text-lg font-bold mb-2 pt-8">五月祭総選挙について</h3>
        <p className="mb-2">
          皆さんのご支援が私たちの励みとなり、来年以降の展示拡充にも繋がります。
          本展示を通して地球や惑星のふしぎを感じていただけた方は、投票のご協力よろしくお願いいたします！
        </p>
        <div className="flex flex-col bg-slate-200 p-2 rounded-md">
          <h3 className="mb-2 font-bold underline text-lg">投票方法</h3>
          <p className="mb-2">
            <span className="font-bold">オンライン投票</span>の場合は、第 98
            回五月祭HPの「
            <Link
              href="https://gogatsusai.jp/98/visitor/project/184"
              className="font-bold text-sky-700 hover:underline"
            >
              企画詳細ページ
            </Link>
            」からご投票になれるほか、
            <span className="font-bold">現地投票</span>
            もしております。投票場所は
            <Link
              href="https://gogatsusai.jp/98/visitor/_nuxt/mfa-map.ConIUQjC.webp"
              className="font-bold text-sky-700 hover:underline"
            >
              こちら
            </Link>
            からご確認ください。
          </p>
          <h3 className="mb-2 font-bold underline text-lg">投票期間</h3>
          <ul className="list-disc list-inside mb-2">
            <li className="mb-2">
              オンライン投票の場合：5月24日（土）9:00～5月25日（日）
              <span className="font-bold">16:00</span>
            </li>
            <li className="mb-2">
              現地投票の場合：
              <ul className="list-disc list-inside pl-5 mt-1">
                <li className="mb-1">5月24日（土） 9:00～18:00</li>
                <li>
                  5月25日（日） 9:00～<span className="font-bold">16:00</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <h3 className="text-lg font-bold mb-2 pt-8">
          地惑雑誌「Solarnaut」に寄稿しました。
        </h3>
        <p className="mb-2">
          五月祭で販売する雑誌「
          <Link
            className="text-sky-700 hover:underline font-bold"
            href="https://sites.google.com/g.ecc.u-tokyo.ac.jp/chiwakuwakuwaku2025/contents/booklet?authuser=0"
          >
            Solarnaut vol.1
          </Link>
          」に、今回展示するシミュレーションの特集記事「
          <span className="font-bold">
            シミュレーション科学の世界へようこそ！
          </span>
          」を寄稿しました。高校生もしくはそれ以下の皆さんには割引があります！
          ぜひお読みください。
        </p>
      </div>
      <div className="">
        <div className="px-4 mx-2 my-8 py-5 bg-white/95 rounded-md lg:mx-20 shadow-2xl">
          <h2 className="text-xl pt-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block">
            ところでこのWebサイトの背景画像は？
          </h2>

          <p className="mb-2 py-3">
            この画像は、学生が行った「ケルヴィン・ヘルムホルツ不安定性」の数値シミュレーションの結果画像（一部色彩調整）です。個別に紹介記事を書いているのでぜひお読みください。
          </p>

          <div className="pb-3">
            <Link
              href="/kelvin-helmholtz"
              className="inline-block px-6 py-2 border border-green-600 bg-green-300 hover:bg-green-400 hover:border-sky-500 text-sky-900 text-lg font-semibold rounded-2xl shadow-md transition"
            >
              読む <ChevronRight className="inline ml-2" />
            </Link>
          </div>
          <h2 className="text-xl pt-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block">
            五月祭当日ブログ
          </h2>

          <p className="mb-2 py-3">
            五月祭当日、展示の様子や企画の展示でお見せしきれなかったものなどを紹介します（5月25日分更新）。
          </p>

          <div className="pb-3">
            <Link
              href="/blog"
              className="inline-block px-6 py-2 border border-green-600 bg-green-300 hover:bg-green-400 hover:border-sky-500 text-sky-900 text-lg font-semibold rounded-2xl shadow-md transition"
            >
             読む <ChevronRight className="inline ml-2" />
            </Link>
          </div>
          <h2 className="text-xl pt-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block">
            地球惑星物理・環境学科での「パソコン」授業
          </h2>

          <p className="mb-2 py-3">
            地球惑星物理・環境学科では、シミュレーションやデータ解析など、パソコンに触れる授業があります。学生の実感とともに紹介します。
          </p>

          <div className="pb-3">
            <Link
              href="/about"
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

          <h2 className="text-xl pt-8 font-bold text-gray-800 text-left border-b-2 border-sky-500 pb-0 inline-block">
            シミュレーション班公式GitHub
          </h2>

          <p className="mb-2 py-3">
            今回の展示に使ったソースコードを、こちらの「GitHub」と呼ばれるプラットフォームに掲載しています（随時更新です）。ぜひご参照ください！
          </p>
          <div className="pb-3">
            <Link
              href="https://github.com/chiwaku-wakwak"
              className="inline-block px-6 py-2 border border-green-600 bg-green-300 hover:bg-green-400 hover:border-sky-500 text-sky-900 text-lg font-semibold rounded-2xl shadow-md transition"
            >
              閲覧する <ChevronRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
