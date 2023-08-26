import "./globals.css";

import { Montserrat } from "next/font/google";
const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Hexa Shop",
  description:
    "Discover a world of endless shopping possibilities at our online store. Browse, choose, and order your favorite products from the comfort of your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
