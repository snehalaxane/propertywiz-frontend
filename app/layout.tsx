// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
});
export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={`${poppins.className} flex flex-col min-h-screen`}>

        {/* Header always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer always visible */}
        <Footer />
      </body>
    </html>
  );
}


