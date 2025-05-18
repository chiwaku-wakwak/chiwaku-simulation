"use client";

import React from "react";
import Header from "@/components/Header";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { FootnoteProvider } from "@/components/FootnoteContext";
import Footnote from "@/components/Footnote";
import FootnoteList from "@/components/FootnoteList";
import Footer from "@/components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { MathJaxContext } from "better-react-mathjax";
import { MathJax } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/ams"] },
  tex: {
    packages: { "[+]": ["ams"] },
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
  },
};

const App: React.FC = () => {
  return (
    <FootnoteProvider>
      <Header />
      {/* pt-20 = padding-top: 5rem (＝約80px。Header 高さに応じて調整) */}
      <main className="pt-25 px-4 text-left lg:pt-30 lg:px-20">
        <h1
          className="text-2xl font-bold text-gray-800 text-left border-b-2 border-green-500 pb-0 inline-block"
          id="simulation"
        >
          流体のシミュレーションについて
        </h1>
        <div className="mb-1 py-1">
          <span className="inline-block w-1 h-6 bg-white py-1 mr-2"></span>
          <div className="inline-block px-2 py-1 bg-green-200 text-green-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            紹介記事
          </div>
          <div className="inline-block px-2 py-1 bg-blue-200 text-blue-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            流体力学
          </div>
          <div className="inline-block px-2 py-1 bg-red-200 text-red-900 text-sm font-semibold mr-2 mb-2 rounded-md">
            擬スペクトル法
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          皆さんは、流体という言葉を聞いて、どのようなものを想像するでしょうか？
          水や空気、あるいはそれらの流れを思い浮かべる方が多いと思います。多分大体あっています。
          流体力学は、そのような
          <span className="font-bold">「決まった形を持たないもの」</span>
          の動きを扱う学問です。気象予報や気候予測などには、流体力学の知見が欠かせません。空気や海水の流れが天気や気候に影響するからです。
        </p>
        <p className="text-gray-700 mb-4">
          ところで、その流体の動きをシミュレートするといっても、あまりイメージのわかない人もいるかもしれません。今回の記事を通して、そのイメージが少し明確になれば嬉しく思います。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-4 mb-4">
          とりあえず眺めてみよう
        </h2>

        <p className="text-gray-700 mb-4">
          これは、「
          <span className="font-bold">ケルヴィン・ヘルムホルツ不安定性</span>
          （Kelvin-Helmholtz
          instability、以下KH不安定性）」と呼ばれる現象をシミュレートしたものです。流体内で大きな速度差がある時に、わずかに揺らぎを与えると、流体の表面に波が立ちます。
        </p>

        <figure className="my-3">
          <Image
            src="/kh-instability.gif"
            alt="Gravitational Lens Simulation"
            width={500}
            height={500}
            className="rounded-lg shadow-lg mx-auto"
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図1:
            シミュレーション結果（初期状態の残像が残ってしまっていることに注意）
          </figcaption>
        </figure>

        <p className="text-gray-700 mb-4">
          これは実際の自然界でも条件がそろえば発生する現象です。
          例えば、雲の上に風が吹くと、雲の表面に波のような模様ができることがあります。これは、雲の中の水滴や氷晶が、風によって揺らされてできたものです（図2）。
        </p>
        <figure className="my-3">
          <Image
            src="/kh.jpg"
            alt="Clouds with Kelvin-Helmholtz instability"
            width={500}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            図2: KH不安定性を示す雲の例（credit: GRAHAMUK at the
            English-language Wikipedia）
          </figcaption>
        </figure>
        <h2 className="text-xl font-bold text-gray-800 mt-4 mb-4">
          流体力学の定式化
        </h2>

        <MathJaxContext config={config}>
          <p className="text-gray-700 mb-4">
            流体力学シミュレーションでは、ただ闇雲に計算しているわけではありません。物理法則に裏打ちされていなければなりません。通常、流体力学では下の
            <span className="font-bold">
              ナヴィエ・ストークス方程式（Navier-Stokes equation、NS方程式）
            </span>
            を用います。ある地点での流体の速度{" "}
            <MathJax inline>{`\\(\\boldsymbol{u}\\)`}</MathJax> が時刻{" "}
            <MathJax inline>{`\\(t\\)`}</MathJax>{" "}
            に従ってどのように動くのかを定式化したものです。
          </p>
          <div className="text-center mt-10">
            {/* ブロック数式は \[ ... \] で囲む */}
            <MathJax>
              {`\\[
            \\frac{\\partial \\boldsymbol{u}}{\\partial t} + \\boldsymbol{u} \\cdot \\nabla \\boldsymbol{u} = -\\frac{1}{\\rho} \\nabla p + \\nu \\nabla^2 \\boldsymbol{u} 
          \\]`}
            </MathJax>
          </div>
          <p className="text-gray-700 mb-4">
            ここで、<MathJax inline>{`\\(\\rho\\)`}</MathJax> は流体の密度、
            <MathJax inline>{`\\(p\\)`}</MathJax> は圧力、
            <MathJax inline>{`\\(\\nu\\)`}</MathJax>{" "}
            は粘性（動粘性係数）を表します。この式自体は、「こんなものあるんだ」程度で構いません。この式を
            <span className="font-bold">
              「なんとかして」コンピュータで扱える形にし
            </span>
            、数値計算を行なっているわけです。
          </p>
          <p className="text-gray-700 mb-4">
            このNS方程式も含め、物理法則の多くは、
            <span className="font-bold">微分方程式</span>
            で表現されます。なんだかよくわからないですが、実際には少しだけ時間が経ったときに、位置や速さなど、注目している量がどのように変化するかを表しているに過ぎません。
            <Footnote number={1}>
              これは厳密には不十分な説明で、時間発展型の微分方程式に限った話である。実際には磁束保存の式など、時刻tに依存しない微分方程式もある。
            </Footnote>
            よって、実際にシミュレーションするときも、
            <span className="font-bold">
              時間を少しだけ進めて、注目したい量の変化を計算し、それを繰り返し、合算する
            </span>
            ことで、最終的な値を求めていきます。
          </p>
          <p className="text-gray-700 mb-4">
            原理的には、この操作は手計算でできます。しかし、多くの場合あまりにも時間がかかり過ぎます。リチャードソンという人が、1920年に手計算で気象予報を試みましたが、6時間後の気象予報に1ヶ月もかかってしまったそうです
            <Footnote number={2}>
              しかも全然合っていなかったらしい。かわいそう（https://www.jma.go.jp/jma/kishou/know/whitep/1-3-2.html）
            </Footnote>
            。
            よって、現代的な数値シミュレーションのほとんどはコンピュータを用いて行われます。
          </p>
          <h2 className="text-xl font-bold text-gray-800 mt-4 mb-4">
            今回用いた数値計算手法
          </h2>
          <p className="text-gray-700 mb-4">
            今回は、「渦度法」と「
            <span className="font-bold">擬スペクトル法</span>
            」と「1次精度オイラー法」という手法を用いています。渦度法は、流体の運動を渦度という量で表現する方法です。渦度とは、流体の回転の強さを表す量で、流体の運動をより簡単に扱うことができます。擬スペクトル法は、流体の運動をフーリエ級数展開（何？でかまいません）して表現する方法です。これにより、シミュレーションを実行するプログラミングコードの記述が非常に簡単になります。
          </p>
          <h2 className="text-xl font-bold text-gray-800 mt-4 mb-4">
            付録：実際に作成したプログラム
          </h2>
          <p className="text-gray-700 mb-4">
            ここでは、実際に作成したプログラムを紹介します。PythonのJupyter
            Notebookのローカル環境で実行しました。環境によってはもしかしたら動かないかもしれないので、ご了承ください<Footnote number={3}>
              Google Colaboratoryでも実行したのですが、微妙に変な挙動をします（結果の出力はされるのですが...）
            </Footnote>。
          </p>
          <p className="text-gray-700 mb-4">
            ところで、手軽にPythonを始めたい人は、
            <Link
              href="https://colab.research.google.com/"
              className="text-blue-500 hover:underline"
            >
              Google Colaboratory
            </Link>
            を使うと良いです。Googleが提供しているJupyter
            Notebook環境で、Pythonのコードを簡単に実行できます。Google
            アカウントがあれば、すぐに使えます。
          </p>
          <Accordion
            sx={{
              backgroundColor: "#c0f2f1", // 背景色
              color: "#263238", // テキスト色
              "&.Mui-expanded": {
                backgroundColor: "#c0f2f1", // 展開時の背景色（オプション）
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon sx={{ color: "#1a237e" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" sx={{ fontWeight: 700 }}>
                プログラムのソースコード
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <pre className="bg-gray-100 text-gray-700 p-4 rounded overflow-x-auto mb-4 text-sm">
                <code>
                  {`import numpy as np
import matplotlib.pyplot as plt
from matplotlib import animation, rc

# --- パラメータ設定 ---
Nx, Ny = 256, 256
Lx, Ly = 2.0, 2.0
dt = 0.0002
nu = 1e-4
steps = 30000

# --- 通し番号と画像を保存する配列 ---
i = 0
ims = []

# --- グリッド生成 ---
x = np.linspace(0, Lx, Nx, endpoint=False)
y = np.linspace(0, Ly, Ny, endpoint=False)
X, Y = np.meshgrid(x, y)

# --- 波数ベクトル ---
kx = 2 * np.pi * np.fft.fftfreq(Nx, d=Lx/Nx)
ky = 2 * np.pi * np.fft.fftfreq(Ny, d=Ly/Ny)
KX, KY = np.meshgrid(kx, ky)
K2 = KX**2 + KY**2
K2[0, 0] = 1e-10

# --- 初期条件 ---
U0 = 1.0
delta = 0.05
vorticity = -(U0 / delta) * (1 / np.cosh((Y - Ly/2) / delta))**2

mode_x = 2
disturbance = .02 * np.random.randn(Ny, Nx)
vorticity += disturbance

omega_hat = np.fft.fft2(vorticity)

# --- アニメーション準備 ---
fig, ax = plt.subplots(figsize=(6, 5))
contour = ax.contourf(X, Y, vorticity, levels=50, cmap='RdBu', alpha=0.7)
cbar = plt.colorbar(contour, ax=ax)
cbar.set_label("Vorticity")
title = ax.set_title("KH Instability Simulation")
time_text = ax.text(0.8, 1.02, f"t = {0:.4f}", fontsize="small", transform=ax.transAxes)
ims = [[im, time_text]]

def dealias(f_hat):
    cutoff_x = int(Nx * 2/3)
    cutoff_y = int(Ny * 2/3)
    f_hat[cutoff_y:Ny - cutoff_y, :] = 0
    f_hat[:, cutoff_x:Nx - cutoff_x] = 0
    return f_hat

for i in range(steps):

    # ψ の計算
    psi_hat = omega_hat / K2

    # 速度計算
    u = np.fft.ifft2(1j * KY * psi_hat)
    v = -np.fft.ifft2(1j * KX * psi_hat)

    # 対流・拡散項
    dwdx = np.fft.ifft2(1j * KX * omega_hat)
    dwdy = np.fft.ifft2(1j * KY * omega_hat)
    convection = np.real(u * dwdx + v * dwdy)
    diffusion = nu * np.real(np.fft.ifft2(-K2 * omega_hat))

    # Euler更新
    omega = np.real(np.fft.ifft2(omega_hat))
    omega += dt * (-convection + diffusion)
    omega_hat = np.fft.fft2(omega)

    # 描画更新
    if (i % 1000 == 0 or i == 0) and (i < steps):
        im = ax.imshow(omega, extent=[0, Lx, 0, Ly], origin='lower',
        cmap='RdBu', vmin=-20, vmax=2, animated=True)
        time_text = ax.text(0.8, 1.02, f"t = {i*dt:.4f}", fontsize="small", transform=ax.transAxes)
        ims.append([im, time_text])

# --- アニメーション作成 ---
anim = animation.ArtistAnimation(fig, ims, interval=150, blit=True)
rc("animation", html="jshtml")
plt.close()
anim.save("./plot10.gif", writer='imagemagick')
`}
                </code>
              </pre>
            </AccordionDetails>
          </Accordion>
        </MathJaxContext>
        <Accordion
          sx={{
            backgroundColor: "#e0f2f1", // 背景色
            color: "#263238", // テキスト色
            "&.Mui-expanded": {
              backgroundColor: "#e0f2f1", // 展開時の背景色（オプション）
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{ color: "#1a237e" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" sx={{ fontWeight: 700 }}>
              参考文献
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li className="py-1">巽 友正. 流体力学. (1982). 培風館.</li>
              <li className="py-1">
                2021年度東大理学部物理学科アクティブマター班. (2021).
                流体モデルのシミュレーション.{" "}
                <Link href="https://event.phys.s.u-tokyo.ac.jp/physlab2021/articles/zj1e8jlry75q/">
                  https://event.phys.s.u-tokyo.ac.jp/physlab2021/articles/zj1e8jlry75q/
                </Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <FootnoteList />
        <div className="text-center mt-8"></div>
      </main>
      <Footer />
    </FootnoteProvider>
  );
};

export default App;
