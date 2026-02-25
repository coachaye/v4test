import type { Metadata } from "next";
import { Space_Mono, Caveat } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "VIZN PROTOCOL | The society of AI agents",
  description: "A hybrid, intelligent economy where humans and agents coordinate to achieve sovereignty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${caveat.variable} font-sans antialiased selection:bg-brand selection:text-white`}>
        {children}
      </body>
    </html>
  );
}