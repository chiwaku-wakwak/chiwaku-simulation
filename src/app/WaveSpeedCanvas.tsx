"use client";

import React, { useRef, useEffect, useState } from "react";

// -------------------- 型定義 --------------------
type Ray = {
  x: number;
  y: number;
  theta: number;
  active: boolean;
};

const canvasWidth = 800;
const canvasHeight = 400;

// -------------------- 波速関数 --------------------
function waveSpeed2(x: number, y: number): number {
  if (y > 0) return 0;
  else if (y > -5) return 0.2 * -y + 1.0;
  else if (y >= -7 && y <= -5) return 2 * -y - 8.0;
  else return 0.2 * -y + 4.6;
}

// -------------------- 座標変換 --------------------
function screenToPhysical(px: number, py: number): { x: number; y: number } {
  const x = (px / canvasWidth) * 40 - 25;
  const y = ((canvasHeight - py) / canvasWidth) * 40 - 15;
  return { x, y };
}

function physicalToScreen(x: number, y: number): { px: number; py: number } {
  const px = ((x + 25) / 40) * canvasWidth;
  const py = canvasHeight - ((y + 15) / 40) * canvasWidth;
  return { px, py };
}

// -------------------- 数値微分 --------------------
function gradvx(x: number, y: number, dx = 1e-5): number {
  return (waveSpeed2(x + dx, y) - waveSpeed2(x - dx, y)) / (2 * dx);
}

function gradvy(x: number, y: number, dy = 1e-5): number {
  return (waveSpeed2(x, y + dy) - waveSpeed2(x, y - dy)) / (2 * dy);
}

// -------------------- Ray Equation --------------------
function rayequation(ray: Ray, dt: number): Ray {
  if (!ray.active) return ray;
  const v = waveSpeed2(ray.x, ray.y);
  const x_new = ray.x + v * Math.cos(ray.theta) * dt;
  const y_new = ray.y + v * Math.sin(ray.theta) * dt;
  const theta_new =
    ray.theta +
    dt *
      (gradvx(x_new, y_new) * Math.sin(ray.theta) -
        gradvy(x_new, y_new) * Math.cos(ray.theta));
  const active = y_new <= 0;
  return { ...ray, x: x_new, y: y_new, theta: theta_new, active };
}

function speedToColor(v: number): string {
  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));

  // 色定義：速度に対応するRGB
  const colorStops = [
    { v: 0.0, r: 255, g: 255, b: 255 }, // 白
    { v: 1.5, r: 135, g: 206, b: 235 }, // 薄水色
    { v: 3.0, r: 0, g: 191, b: 255 }, // 水色
    { v: 4.5, r: 30, g: 144, b: 255 }, // 青
    { v: 6.0, r: 0, g: 0, b: 139 }, // 濃紺
  ];

  v = clamp(v, 0, 6);

  // どの区間に属するかを探す
  for (let i = 0; i < colorStops.length - 1; i++) {
    const c1 = colorStops[i];
    const c2 = colorStops[i + 1];
    if (v >= c1.v && v <= c2.v) {
      const t = (v - c1.v) / (c2.v - c1.v); // 線形補間係数
      const r = Math.round(c1.r + (c2.r - c1.r) * t);
      const g = Math.round(c1.g + (c2.g - c1.g) * t);
      const b = Math.round(c1.b + (c2.b - c1.b) * t);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }

  // デフォルト色
  return "#00008b";
}

// -------------------- React コンポーネント --------------------
const WaveSpeedCanvas: React.FC = () => {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const [rays, setRays] = useState<Ray[]>([]);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number }>({
    x: 2,
    y: -2,
  });
  const [locked, setLocked] = useState(false);
  const [started, setStarted] = useState(false);
  const dt = 0.01;
  const angles = Array.from(
    { length: 7200 },
    (_, i) => (i * Math.PI) / 10 / 360
  );

  // 初期描画（背景＋グリッド）
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 色の変更

    for (let py = 0; py < canvasHeight; py++) {
      for (let px = 0; px < canvasWidth; px++) {
        const { x, y } = screenToPhysical(px, py);
        const v = waveSpeed2(x, y);
        ctx.fillStyle = speedToColor(v);
        ctx.fillRect(px, py, 1, 1);
      }
    }

    // グリッド
    ctx.strokeStyle = "#cccccc";
    ctx.lineWidth = 0.5;
    for (let x = -40; x <= 40; x++) {
      const { px: x1, py: y1 } = physicalToScreen(x, -20);
      const { px: x2, py: y2 } = physicalToScreen(x, 0);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    for (let y = -20; y <= 0; y++) {
      const { px: x1, py: y1 } = physicalToScreen(-40, y);
      const { px: x2, py: y2 } = physicalToScreen(40, y);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // 目盛（X軸・Y軸のラベル）
    ctx.fillStyle = "black";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let x = -40; x <= 40; x++) {
      const { px: x1, py: y1 } = physicalToScreen(x, -20);
      const { px: x2, py: y2 } = physicalToScreen(x, 0);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // X軸ラベルを表示
      if (x % 5 === 0) {
        ctx.fillStyle = "black";
        ctx.font = "12px sans-serif";
        ctx.fillText(`${x}`, x1 + 2, y2 - 2);
      }
    }

    // 初期震源描画
    const { px, py } = physicalToScreen(origin.x, origin.y);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, 2 * Math.PI);
    ctx.fill();
  }, [origin]);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setRays((prevRays) => prevRays.map((ray) => rayequation(ray, dt)));
      setTime((t) => t + dt);
    }, 10);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const canvas = fgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "red";
    rays.forEach((ray) => {
      const { px, py } = physicalToScreen(ray.x, ray.y);
      ctx.beginPath();
      ctx.arc(px, py, 0.8, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [rays]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (locked) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const { x, y } = screenToPhysical(px, py);
    setOrigin({ x, y });
  };

  const handleStart = () => {
    setLocked(true);

    if (!started) {
      // 初回のみレイ生成
      setRays(
        angles.map((theta) => ({
          x: origin.x,
          y: origin.y,
          theta,
          active: true,
        }))
      );
      setStarted(true); // もう再生成しない
    }

    setRunning(true); // アニメーションを再開
  };

  const handleStop = () => {
    setRunning(false);
    setLocked(false);
  };

  return (
    <div>
      <div>
        {running === false  && started === false && (
          <button onClick={handleStart}>開始</button>
        )}
        {running === false && started === true && (
            <button onClick={handleStart}>再開</button>
            )}
        {running === true && <button onClick={handleStop}>停止</button>}
        <button
          onClick={() => {
            setOrigin({ x: origin.x, y: origin.y });
            setRays([]);
            setTime(0);
            setStarted(false);
            setRunning(false);
            setLocked(false);
          }}
        >
          リセット
        </button>
        <div className="time">
          <span>時刻: {time.toFixed(2)} 秒</span>
        </div>
        <div className="time">
          <span>
            震源位置: ({origin.x.toFixed(2)}, {origin.y.toFixed(2)})
          </span>
        </div>
      </div>
      <canvas
        ref={bgCanvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ position: "absolute", zIndex: 0, border: "1px solid black" }}
        onClick={handleClick}
      />
      <canvas
        ref={fgCanvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ position: "absolute", zIndex: 1, pointerEvents: "none" }}
      />
    </div>
  );
};

export default WaveSpeedCanvas;
