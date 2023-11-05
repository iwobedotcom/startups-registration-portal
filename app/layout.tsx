import type { Metadata } from "next";
import { metadata as Meta } from "@/config/config";
import { Inter, Open_Sans } from "next/font/google";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "@/utils";
import { MUIProvider } from "@/providers";
import "slick-carousel/slick/slick.css";
import "./assets/css/globals.css";
import "./assets/css/react-slick.css";
import { NextPageWithLayout } from "@/interfaces/layout";
import Header from "@/components/header";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: Meta.title.default,
    template: Meta.title.template,
  },
  description: Meta.description,
  applicationName: Meta.applicationName,
  keywords: [...Meta.keywords],
  icons: { ...Meta.icons },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MUIProvider>
      <html lang="en">
        <body className={openSans.className}>
          <Header />
          {children}
        </body>
      </html>
    </MUIProvider>
  );
}
