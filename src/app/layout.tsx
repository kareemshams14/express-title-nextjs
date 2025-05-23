import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google"; // Added PT_Serif
import '../app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' }); // Added variable
const ptSerif = PT_Serif({ // Added PT_Serif configuration
  subsets: ["latin"], 
  weight: ['400', '700'], 
  variable: '--font-pt-serif' 
});

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
      <body className={`${inter.variable} ${ptSerif.variable} flex flex-col min-h-screen`}> {/* Updated font variables and flex classes */}
        <Navbar />
        <main className="flex-grow"> {/* Added flex-grow to push footer down */}
          {children}
        </main>
        <Footer />
        <script 
          src="https://widgets.leadconnectorhq.com/loader.js"  
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="682d1035c0a2524615ae0965"
          defer
        ></script>
      </body>
    </html>
  );
}
