import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import SmoothScrollProvider from "@/src/providers/SmoothScrollProvider";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali-sans",
  subsets: ["bengali"],
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-bengali-serif",
  subsets: ["bengali"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "দারুল হুদা মাদরাসা",
    template: "%s | দারুল হুদা মাদরাসা",
  },
  description:
    "দারুল হুদা মাদরাসা — ইসলামী ও আধুনিক শিক্ষার সমন্বিত একটি শিক্ষা প্রতিষ্ঠান।",
};

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="bn"
      translate="no"
      suppressHydrationWarning
      className={`${notoSerifBengali.variable} ${notoSansBengali.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col max-w-screen overflow-x-clip mx-auto"
      >
        <SmoothScrollProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
