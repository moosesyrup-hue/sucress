import type { Metadata } from "next";
import { Inter, STIX_Two_Text, Marcellus } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sucress — Get Your Free 14-Packet Supply",
  description:
    "Try Sucress FREE — the only sugar replacement that's truly sugar-free. Made with glycine and non-GMO stevia. No credit card required. No subscription. Free shipping.",
  openGraph: {
    title: "Sucress — Get Your Free 14-Packet Supply",
    description:
      "Try Sucress FREE — the only sugar replacement that's truly sugar-free. No credit card. No subscription. Free shipping.",
    type: "website",
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
      className={`${inter.variable} ${stixTwoText.variable} ${marcellus.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
