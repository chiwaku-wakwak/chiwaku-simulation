import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "「地惑、わくわく。」2025：シミュレーション班",
  description:
    "理学部地球惑星物理・環境学科シミュレーション班による五月祭展示。理学部1号館105教室で開催！",
  verification: {
    google: "3JinIgk3G3gjw9hWk90ReWaJhCl1ledsb7jzFV5Qwo0",
  },
  openGraph: {
    title: "「地惑、わくわく。」2025：シミュレーション班",
    description:
      "理学部地球惑星物理・環境学科シミュレーション班による五月祭展示。理学部1号館105教室で開催！",
    url: "https://chiwaku-simulation-2025.vercel.app/", // ←本番URLに書き換えてください
    siteName: "地惑シミュレーション班2025",
    images: [
      {
        url: "https://chiwaku-simulation-2025.vercel.app/kelvin-helmholtz.jpg", // ← OGP画像のURL
        width: 400,
        height: 400,
        alt: "地惑2025シミュレーション展示の告知画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "「地惑、わくわく。」2025：シミュレーション班",
    description:
      "理学部地球惑星物理・環境学科シミュレーション班による五月祭展示。理学部1号館105教室で開催！",
    images: ["https://chiwaku-simulation-2025.vercel.app/kelvin-helmholtz.jpg"],
    creator: "@chiwaku_waku", // ← 任意：Twitter IDがあれば入れる
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

