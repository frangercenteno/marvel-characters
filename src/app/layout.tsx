import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "@/shared/styles/reset.css";
import "@/shared/styles/globals.css";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel Characters",
  description: "A list of Marvel characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
