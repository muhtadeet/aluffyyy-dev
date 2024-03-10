import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Mustakim Islam Alif | App Developer",
  description: "App Developer, Mustakim Islam Alif",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light bg-gradient-to-bl from-[#6A43C4] from-10% to-[#BC97FC] to-85% "
      suppressHydrationWarning
    >
      <body
        className={
          ubuntu.className &&
          "bg-gradient-to-bl from-[#6A43C4] from-10% to-[#BC97FC] to-85% "
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
