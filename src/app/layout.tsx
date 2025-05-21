import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Express Title - Fast Cash with Your Vehicle Title",
  description: "Get fast cash using your vehicle title with Express Title. Apply online or in-person at our Florida locations.",
  metadataBase: new URL("https://www.expresstitle.com"),
  openGraph: {
    title: "Express Title",
    description: "Fast cash title loans in Florida — apply online or in-person.",
    url: "https://www.expresstitle.com",
    siteName: "Express Title",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Express Title - Fast Cash with Your Vehicle Title",
    description: "Apply for a vehicle title loan in minutes with Express Title.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
