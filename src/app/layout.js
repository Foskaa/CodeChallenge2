import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/cores/Navbar/page";
import Navbar from "@/components/cores/Footer/page";
import ReduxProvider from "@/providers/ReduxProvider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <Footer />
          {children}
          <Navbar />
        </ReduxProvider>
      </body>
    </html>
  );
}
