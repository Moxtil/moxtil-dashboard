import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import GraphContext from "./analytics/graphContext";
import NavWrappar from "./components/navbar/NavWrappar";
const ubuntu = Ubuntu({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <GraphContext>
          <div className="mainContainer">
            <NavWrappar />
            <div style={{ width: "100%" }} className="container">
              {children}
            </div>
          </div>
        </GraphContext>
      </body>
    </html>
  );
}
