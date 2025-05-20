"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";

type Ray = {
  x: number;
  y: number;
  theta: number;
  active: boolean;
};

function waveSpeed2(x: number, y: number, num: number): number {
  if (num === 0) {
    if (y > 0) return 0;
    else if (y > -5) return 0.2 * -y + 1.0;
    else if (y >= -7 && y <= -5) return 2 * -y - 8.0;
    else return 0.2 * -y + 4.6;
  } else {
    if (y > 0) return 0;
    else if (0 < -y && -y <= 4) return -(-y) + 6.0;
    else if (4 < -y && -y <= 6) return 2.0;
    else if (6 < -y) return (-y) - 4.0;
    else return 6.0;
  }
}

function gradvx(x: number, y: number, num: number, dx = 1e-7): number {
  return (waveSpeed2(x + dx, y, num) - waveSpeed2(x - dx, y, num)) / (2 * dx);
}

function gradvy(x: number, y: number, num: number, dy = 1e-7): number {
  return (waveSpeed2(x, y + dy, num) - waveSpeed2(x, y - dy, num)) / (2 * dy);
}

function rayequation(ray: Ray, dt: number, num: number): Ray {
  if (!ray.active) return ray;
  const v = waveSpeed2(ray.x, ray.y, num);
  const x_new = ray.x + v * Math.cos(ray.theta) * dt;
  const y_new = ray.y + v * Math.sin(ray.theta) * dt;
  const theta_new =
    ray.theta +
    dt *
      (gradvx(x_new, y_new, num) * Math.sin(ray.theta) -
        gradvy(x_new, y_new, num) * Math.cos(ray.theta));
  const active = y_new <= 0;
  return { ...ray, x: x_new, y: y_new, theta: theta_new, active };
}

function speedToColor(v: number): string {
  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));
  const colorStops = [
    { v: 0.0, r: 255, g: 255, b: 255 },
    { v: 1.5, r: 135, g: 206, b: 235 },
    { v: 3.0, r: 0, g: 191, b: 255 },
    { v: 4.5, r: 30, g: 144, b: 255 },
    { v: 6.0, r: 0, g: 0, b: 139 },
  ];

  v = clamp(v, 0, 6);
  for (let i = 0; i < colorStops.length - 1; i++) {
    const c1 = colorStops[i];
    const c2 = colorStops[i + 1];
    if (v >= c1.v && v <= c2.v) {
      const t = (v - c1.v) / (c2.v - c1.v);
      const r = Math.round(c1.r + (c2.r - c1.r) * t);
      const g = Math.round(c1.g + (c2.g - c1.g) * t);
      const b = Math.round(c1.b + (c2.b - c1.b) * t);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }
  return "#00008b";
}

// ---- Responsive 座標変換 ----
function screenToPhysical(
  px: number,
  py: number,
  canvasWidth: number,
  canvasHeight: number
): { x: number; y: number } {
  const x = (px / canvasWidth) * 40;
  const y = ((canvasHeight - py) / canvasWidth) * 40 - 15;
  return { x, y };
}

function physicalToScreen(
  x: number,
  y: number,
  canvasWidth: number,
  canvasHeight: number
): { px: number; py: number } {
  const px = (x / 40) * canvasWidth;
  const py = canvasHeight - ((y + 15) / 40) * canvasWidth;
  return { px, py };
}

const WaveSpeedCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 400 });
  const [rays, setRays] = useState<Ray[]>([]);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [origin, setOrigin] = useState({ x: 2, y: -2 });
  const [locked, setLocked] = useState(false);
  const [started, setStarted] = useState(false);
  const [number, setNumber] = useState(0);

  const dt = 0.01;
  const angles = Array.from(
    { length: 7200 },
    (_, i) => (i * Math.PI) / 10 / 360
  );

  const drawBackground = useCallback(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvasSize;
    ctx.clearRect(0, 0, width, height);

    for (let py = 0; py < height; py++) {
      for (let px = 0; px < width; px++) {
        const { x, y } = screenToPhysical(px, py, width, height);
        const v = waveSpeed2(x, y, number);
        ctx.fillStyle = speedToColor(v);
        ctx.fillRect(px, py, 1, 1);
      }
    }

    // グリッドと震源
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 0.5;
    for (let x = -40; x <= 40; x++) {
      const { px: x1, py: y1 } = physicalToScreen(x, -20, width, height);
      const { px: x2, py: y2 } = physicalToScreen(x, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    for (let y = -20; y <= 0; y++) {
      const { px: x1, py: y1 } = physicalToScreen(-40, y, width, height);
      const { px: x2, py: y2 } = physicalToScreen(40, y, width, height);
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
      const { px: x1, py: y1 } = physicalToScreen(x, -20, width, height);
      const { px: x2, py: y2 } = physicalToScreen(x, 0, width, height);
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

    const { px, py } = physicalToScreen(origin.x, origin.y, width, height);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, 2 * Math.PI);
    // --- 速度凡例（Legend） ---
    const legendX = width - 50; // 右下に配置（必要に応じて調整）
    const legendY = height - 120;
    const legendWidth = 20;
    const legendHeight = 100;
    const numSteps = 50;

    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.fillRect(legendX - 5, legendY - 30, 70, legendHeight + 40);

    for (let i = 0; i <= numSteps; i++) {
      const v = (i / numSteps) * 6.0;
      ctx.fillStyle = speedToColor(v);
      ctx.fillRect(
        legendX,
        legendY + (1 - i / numSteps) * legendHeight,
        legendWidth,
        legendHeight / numSteps
      );
    }

    ctx.strokeStyle = "gray";
    ctx.strokeRect(legendX, legendY, legendWidth, legendHeight);
    ctx.fillStyle = "black";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("6.0", legendX + 25, legendY);
    ctx.fillText("3.0", legendX + 25, legendY + legendHeight / 2);
    ctx.fillText("0.0", legendX + 25, legendY + legendHeight);
    ctx.fillText("速度", legendX, legendY - 15);
    ctx.fill();
  }, [canvasSize, origin, number]);

  useEffect(() => {
    drawBackground();
  }, [drawBackground]);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setRays((prev) => prev.map((ray) => rayequation(ray, dt, number)));
      setTime((t) => t + dt);
    }, 10);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const canvas = fgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.fillStyle = "red";
    rays.forEach((ray) => {
      const { px, py } = physicalToScreen(
        ray.x,
        ray.y,
        canvasSize.width,
        canvasSize.height
      );
      ctx.beginPath();
      ctx.arc(px, py, 0.8, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [rays, canvasSize]);

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width < 800) {
          setCanvasSize({ width: width - 15, height: (width - 15) / 2 });
        } else if (width > 800) {
          setCanvasSize({ width: 800, height: 400 });
        }
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (locked) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const px = e.clientX - rect.left;

    const py = e.clientY - rect.top;

    const { x, y } = screenToPhysical(
      px,

      py,

      canvasSize.width,

      canvasSize.height
    );

    setOrigin({ x, y });
  };
  const handleStart = () => {
    setLocked(true);
    if (!started) {
      setRays(
        angles.map((theta) => ({
          x: origin.x,
          y: origin.y,
          theta,
          active: true,
        }))
      );
      setStarted(true);
    }
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
    setLocked(false);
  };

  return (
    <div ref={containerRef} style={{ width: "100%", position: "relative" }}>
      <div className="button_container">
        {running === false && started === false && (
          <button className="function" onClick={handleStart}>
            開始
          </button>
        )}
        {running === false && started === true && (
          <button className="function" onClick={handleStart}>
            再開
          </button>
        )}
        {running === true && (
          <button className="function" onClick={handleStop}>
            停止
          </button>
        )}
        <button
          className="function"
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
        <button
          className="function"
          onClick={() => {
            if (number === 0) {
              setNumber(1);
              setOrigin({ x: origin.x, y: origin.y });
            } else if (number === 1) {
              setNumber(0);
              setOrigin({ x: origin.x, y: origin.y });
            }
          }}
        >
          速度分布{number + 1}
        </button>
        <div className="time_epicenter">
          <div className="time">
            <span>時刻: {time.toFixed(2)} 秒</span>
          </div>
          <div className="time">
            <span>
              震源位置: ({origin.x.toFixed(2)}, {origin.y.toFixed(2)})
            </span>
          </div>
        </div>
      </div>
      <div
        className="relative wave_speed"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "850px",
          marginBottom: "10px",
          aspectRatio: "2 / 1", // 幅 : 高さ = 2 : 1
          overflow: "hidden", // コンテンツがはみ出さないようにする
        }}
      >
        <canvas
          ref={bgCanvasRef}
          width={canvasSize.width}
          height={canvasSize.width / 2}
          onClick={handleClick}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />

        {/* 前景キャンバス */}
        <canvas
          ref={fgCanvasRef}
          width={canvasSize.width}
          height={canvasSize.width / 2}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </div>
      <div className="max-w-4xl py-2">
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
              ひとことメモ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className="py-1">
              地下の震源から発生した地震波が広がる様子を再現しています。地中は均一な物質でできているとは限らないので、場合によって複雑な伝わり方をします。
            </p>
            <p className="py-2">
              地球の内部の構造を探査するときは、この「地下構造が違うと波の伝わり方も違う」という性質が利用されています。五月祭の現地の地惑の企画では、<span className="font-bold">さまざまな条件設定・地下構造で波の伝わり方をシミュレート</span>できます（以下は開発中の画面です）。
            </p>
            <Image
              src="/seismic_simulation.png"
              alt="シミュレーション班の写真"
              width={450}
              height={350}
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
            <Typography component="span" sx={{ fontWeight: 700 }}>
              キーワード・参考文献
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li className="py-1">
                シミュレーションの構築には、金森博雄『地震の物理』（岩波書店、1991）を参考にしています。
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default WaveSpeedCanvas;
