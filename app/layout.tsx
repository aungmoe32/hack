import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryProvider } from "@/components/scheduler/QueryProvider";
import type { Metadata } from "next";
import { Inter, Oswald, Source_Sans_3 } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import AuthProvider from "./auth/Provider";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonProvider from "@/components/providers/SkeletonProvider";
import FakeAuthProvider from "../components/profile/FakeAuthProvider";
import ChatBot from "@/components/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWEEPERS",
  description: "SWEEPERS",
};
const sourceSans = Source_Sans_3({
  // weight: "500",
  subsets: ["latin"],
  variable: "--font-source-sans",
});
const oswald = Oswald({
  // weight: "500",
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="stylesheet" href="style.css"></link>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </head>

      <body
        className={`${inter.className} ${sourceSans.variable} ${oswald.variable} !font-source-sans`}
      >
        <ChatBot></ChatBot>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SkeletonProvider>
            <AuthProvider>
              <FakeAuthProvider>
                <QueryProvider>{children}</QueryProvider>
              </FakeAuthProvider>
            </AuthProvider>
            <Toaster></Toaster>
          </SkeletonProvider>
        </ThemeProvider>
        <script
          src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
          integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
          crossOrigin=""
        ></script>
        <script src="script.js"></script>
      </body>
    </html>
  );
}
