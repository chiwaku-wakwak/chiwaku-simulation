"use client";

import React, { useState, useRef, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Link from "next/link";
import Image from "next/image";

const DoublePendulum: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [time, setTime] = useState(0);
  const [, setIsRunning] = useState(false);
  const startRef = useRef(false);
  const zeroRef = useRef(true);
  const resetRef = useRef(false);
  const numberRef = useRef(0);

  const l1Ref = useRef(0.5);
  const l2Ref = useRef(0.25);
  const m1Ref = useRef(2);
  const m2Ref = useRef(0.5);

  const [array, setArray] = useState<number[]>([
    numberRef.current,
    m1Ref.current,
    m2Ref.current,
    l1Ref.current,
    l2Ref.current,
  ]);

  const init_theta = (1.2 * Math.PI) / 2;

  const θ1Ref = useRef(init_theta);
  const θ2Ref = useRef(init_theta);
  const ω1Ref = useRef(0);
  const ω2Ref = useRef(0);

  const g = 9.81;
  const dt = 0.015;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (window.innerWidth < 800) {
        canvas.width = window.innerWidth - 50;
      } else {
        canvas.width = 750;
      }
      canvas.height = window.innerHeight * 0.6;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      const originX = canvas.width / 2;
      const originY = canvas.height / 3;
      const scale =
        Math.min(canvas.width, canvas.height) /
        (2 * (l1Ref.current + l2Ref.current));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dθ1dt = (_θ1: number, _θ2: number, _ω1: number, _ω2: number) => _ω1;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dθ2dt = (_θ1: number, _θ2: number, _ω1: number, _ω2: number) => _ω2;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dω1dt = (_θ1: number, _θ2: number, _ω1: number, _ω2: number) => {
        const num1 = -g * (2 * m1Ref.current + m2Ref.current) * Math.sin(_θ1);
        const num2 = -m2Ref.current * g * Math.sin(_θ1 - 2 * _θ2);
        const num3 =
          -2 *
          Math.sin(_θ1 - _θ2) *
          m2Ref.current *
          (_ω2 ** 2 * l2Ref.current +
            _ω1 ** 2 * l1Ref.current * Math.cos(_θ1 - _θ2));
        const den =
          l1Ref.current *
          (2 * m1Ref.current +
            m2Ref.current -
            m2Ref.current * Math.cos(2 * _θ1 - 2 * _θ2));
        return (num1 + num2 + num3) / den;
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dω2dt = (_θ1: number, _θ2: number, _ω1: number, _ω2: number) => {
        const num =
          2 *
          Math.sin(_θ1 - _θ2) *
          (_ω1 ** 2 * l1Ref.current * (m1Ref.current + m2Ref.current) +
            g * (m1Ref.current + m2Ref.current) * Math.cos(_θ1) +
            _ω2 ** 2 * l2Ref.current * m2Ref.current * Math.cos(_θ1 - _θ2));
        const den =
          l2Ref.current *
          (2 * m1Ref.current +
            m2Ref.current -
            m2Ref.current * Math.cos(2 * _θ1 - 2 * _θ2));
        return num / den;
      };

      const rk4 = () => {
        if (resetRef.current) {
          θ1Ref.current = init_theta;
          θ2Ref.current = init_theta;
          ω1Ref.current = 0;
          ω2Ref.current = 0;
          resetRef.current = false;
          setTime(0);
          return;
        }

        const k1_θ1 = dθ1dt(
          θ1Ref.current,
          θ2Ref.current,
          ω1Ref.current,
          ω2Ref.current
        );
        const k1_θ2 = dθ2dt(
          θ1Ref.current,
          θ2Ref.current,
          ω1Ref.current,
          ω2Ref.current
        );
        const k1_ω1 = dω1dt(
          θ1Ref.current,
          θ2Ref.current,
          ω1Ref.current,
          ω2Ref.current
        );
        const k1_ω2 = dω2dt(
          θ1Ref.current,
          θ2Ref.current,
          ω1Ref.current,
          ω2Ref.current
        );

        const k2_θ1 = dθ1dt(
          θ1Ref.current + 0.5 * dt * k1_θ1,
          θ2Ref.current + 0.5 * dt * k1_θ2,
          ω1Ref.current + 0.5 * dt * k1_ω1,
          ω2Ref.current + 0.5 * dt * k1_ω2
        );
        const k2_θ2 = dθ2dt(
          θ1Ref.current + 0.5 * dt * k1_θ1,
          θ2Ref.current + 0.5 * dt * k1_θ2,
          ω1Ref.current + 0.5 * dt * k1_ω1,
          ω2Ref.current + 0.5 * dt * k1_ω2
        );
        const k2_ω1 = dω1dt(
          θ1Ref.current + 0.5 * dt * k1_θ1,
          θ2Ref.current + 0.5 * dt * k1_θ2,
          ω1Ref.current + 0.5 * dt * k1_ω1,
          ω2Ref.current + 0.5 * dt * k1_ω2
        );
        const k2_ω2 = dω2dt(
          θ1Ref.current + 0.5 * dt * k1_θ1,
          θ2Ref.current + 0.5 * dt * k1_θ2,
          ω1Ref.current + 0.5 * dt * k1_ω1,
          ω2Ref.current + 0.5 * dt * k1_ω2
        );

        const k3_θ1 = dθ1dt(
          θ1Ref.current + 0.5 * dt * k2_θ1,
          θ2Ref.current + 0.5 * dt * k2_θ2,
          ω1Ref.current + 0.5 * dt * k2_ω1,
          ω2Ref.current + 0.5 * dt * k2_ω2
        );
        const k3_θ2 = dθ2dt(
          θ1Ref.current + 0.5 * dt * k2_θ1,
          θ2Ref.current + 0.5 * dt * k2_θ2,
          ω1Ref.current + 0.5 * dt * k2_ω1,
          ω2Ref.current + 0.5 * dt * k2_ω2
        );
        const k3_ω1 = dω1dt(
          θ1Ref.current + 0.5 * dt * k2_θ1,
          θ2Ref.current + 0.5 * dt * k2_θ2,
          ω1Ref.current + 0.5 * dt * k2_ω1,
          ω2Ref.current + 0.5 * dt * k2_ω2
        );
        const k3_ω2 = dω2dt(
          θ1Ref.current + 0.5 * dt * k2_θ1,
          θ2Ref.current + 0.5 * dt * k2_θ2,
          ω1Ref.current + 0.5 * dt * k2_ω1,
          ω2Ref.current + 0.5 * dt * k2_ω2
        );

        const k4_θ1 = dθ1dt(
          θ1Ref.current + dt * k3_θ1,
          θ2Ref.current + dt * k3_θ2,
          ω1Ref.current + dt * k3_ω1,
          ω2Ref.current + dt * k3_ω2
        );
        const k4_θ2 = dθ2dt(
          θ1Ref.current + dt * k3_θ1,
          θ2Ref.current + dt * k3_θ2,
          ω1Ref.current + dt * k3_ω1,
          ω2Ref.current + dt * k3_ω2
        );
        const k4_ω1 = dω1dt(
          θ1Ref.current + dt * k3_θ1,
          θ2Ref.current + dt * k3_θ2,
          ω1Ref.current + dt * k3_ω1,
          ω2Ref.current + dt * k3_ω2
        );
        const k4_ω2 = dω2dt(
          θ1Ref.current + dt * k3_θ1,
          θ2Ref.current + dt * k3_θ2,
          ω1Ref.current + dt * k3_ω1,
          ω2Ref.current + dt * k3_ω2
        );

        θ1Ref.current += (dt / 6) * (k1_θ1 + 2 * k2_θ1 + 2 * k3_θ1 + k4_θ1);
        θ2Ref.current += (dt / 6) * (k1_θ2 + 2 * k2_θ2 + 2 * k3_θ2 + k4_θ2);
        ω1Ref.current += (dt / 6) * (k1_ω1 + 2 * k2_ω1 + 2 * k3_ω1 + k4_ω1);
        ω2Ref.current += (dt / 6) * (k1_ω2 + 2 * k2_ω2 + 2 * k3_ω2 + k4_ω2);
      };

      if (startRef.current) {
        rk4();
        setTime((prev) => prev + dt);
      }

      if (resetRef.current) {
        θ1Ref.current = init_theta;
        θ2Ref.current = init_theta;
        ω1Ref.current = 0;
        ω2Ref.current = 0;
        resetRef.current = false;
        setTime(0);
      }

      const x1 = originX + l1Ref.current * scale * Math.sin(θ1Ref.current);
      const y1 = originY + l1Ref.current * scale * Math.cos(θ1Ref.current);
      const x2 = x1 + l2Ref.current * scale * Math.sin(θ2Ref.current);
      const y2 = y1 + l2Ref.current * scale * Math.cos(θ2Ref.current);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 第1アーム（origin → x1, y1）
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.moveTo(originX, originY);
      ctx.lineTo(x1, y1);
      ctx.stroke();

      // 第2アーム（x1, y1 → x2, y2）
      ctx.beginPath();
      ctx.strokeStyle = "gray";
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(x1, y1, 8, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.arc(x2, y2, 8, 0, 2 * Math.PI);
      ctx.fill();

      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const handleReset = () => {
    resetRef.current = true;
  };

  const handleStart = () => {
    startRef.current = !startRef.current;
    zeroRef.current = false;
    setIsRunning(startRef.current); // 状態を更新して再レンダリングを誘発
  };

  const handleNumber = () => {
    if (numberRef.current === 1) {
      // 物理量とレンダリングする量を分けて代入する
      numberRef.current = 2;
      m1Ref.current = 2;
      m2Ref.current = 0.5;
      l1Ref.current = 0.25;
      l2Ref.current = 0.5;
    } else if (numberRef.current === 2) {
      numberRef.current = 0;
      m1Ref.current = 2;
      m2Ref.current = 0.5;
      l1Ref.current = 0.5;
      l2Ref.current = 0.25;
    } else if (numberRef.current === 0) {
      numberRef.current = 1;
      m1Ref.current = 0.5;
      m2Ref.current = 2.0;
      l1Ref.current = 0.5;
      l2Ref.current = 0.25;
    }
    setArray([
      numberRef.current,
      m1Ref.current,
      m2Ref.current,
      l1Ref.current,
      l2Ref.current,
    ]);
  };

  return (
    <>
      {startRef.current && (
        <button className="function" onClick={handleStart}>
          停止
        </button>
      )}
      {!startRef.current && zeroRef.current && (
        <button className="function" onClick={handleStart}>
          開始
        </button>
      )}
      {!startRef.current && !zeroRef.current && (
        <button className="function" onClick={handleStart}>
          再開
        </button>
      )}
      <button className="function" onClick={handleReset}>
        リセット
      </button>
      <button className="function" onClick={handleNumber}>
        条件{array[0] + 1}
      </button>
      <div className="time">
        <span>時刻: {time.toFixed(2)} 秒</span>
      </div>
      <div className="time_epicenter">
        <div className="time">
          棒の長さ: {array[3]} m, {array[4]} m
        </div>
        <div className="time">
          おもりの質量: {array[1]} kg, {array[2]} kg
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden", // コンテンツがはみ出さないようにする
        }}
      >
        <canvas ref={canvasRef} />
        <div className="px-2 py-4 max-w-3xl">
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
              <Typography component="span" sx={{ fontWeight: 700 }}>ひとことメモ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="py-1">
                見ての通り、振り子を二つ繋げたものを動かしている様子を再現しています。
              </p>
              <p className="py-2">
                普通の振り子（単振り子）は単純な往復運動をしますが、おもりが一つ増えるだけで、運動が複雑になります。
              </p>
              <p className="py-2">
                五月祭当日は、<span className="font-bold">条件設定をいろいろ「いじれる」シミュレーションを展示してますので、面白さをより体感いただけます</span>。ぜひご来場してください！（以下は開発中の画面）
              </p>
              <Image
              src="/pendulum_tenji.jpg"
              alt="シミュレーション班の写真"
              width={450}
              height={450}
              className="rounded-md mb-2 object-contain"
            />
            </AccordionDetails>
          </Accordion>
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
              <Typography component="span" sx={{ fontWeight: 700 }}>キーワード・参考文献</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="px-3">
                <li className="py-1">カオス理論：二重振り子では、初期条件のわずかな違いが運動に大きな影響を与えることがあります。これがカオス的な振る舞いの一例です。NHKの<Link href="https://www.nhk.jp/p/ts/Y5R676NK92/blog/bl/pmg0p5PX8L/bp/pPZlrkyg6v/" className="text-sky-700 font-bold">「笑わない数学」</Link>のブログが結構わかりやすそう（2025年5月11日閲覧）。</li>
                <li className="py-1">今回参照した基礎方程式：Troy Shinbrot, Celso Grebogi, Jack Wisdom & James A. Yorke, “Chaos in a Double Pendulum,” Am. J. Phys., 60, 6, pp. 491-499, June 1992.</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          
          
        </div>
      </div>
    </>
  );
};

export default DoublePendulum;
