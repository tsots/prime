import "@/styles/main.scss";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import MobileHeader from "@/components/header/MobileHeader";
import DesktopHeader from "@/components/header/DesktopHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Bonema Engineering",
    template: "%s | Bonema Engineering",
  },
  description:
    "Comprehensive range of renewable energy solutions to industrial, commercial, and residential clients",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: "Tsotetsi Mosala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileHeader />
        <DesktopHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
