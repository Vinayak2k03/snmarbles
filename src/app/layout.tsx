import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "S.N. Marbles | Premium Marble Slabs from Kishangarh",
  description: "S.N. Marbles is a marble trading and processing company based in Kishangarh, Rajasthan, specializing in high-quality marble slabs and customized stone solutions for residential and commercial projects across India.",
  keywords: ["marble", "marble slabs", "Kishangarh marble", "premium marble", "Italian marble", "marble flooring", "S.N. Marbles", "Rajasthan marble"],
  authors: [{ name: "S.N. Marbles" }],
  openGraph: {
    title: "S.N. Marbles | Premium Marble Slabs from Kishangarh",
    description: "Premium marble slabs and customized stone solutions for residential and commercial projects across India.",
    type: "website",
    locale: "en_IN",
    siteName: "S.N. Marbles",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
