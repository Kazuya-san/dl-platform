import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@/providers/query-client.provider";

import Script from "next/script";
import { Suspense } from "react";
import Custom404 from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dlabz Platform",
  description: "Gaming | Web3",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/gh/Drarig29/brackets-viewer.js/dist/brackets-viewer.min.js"
      ></Script>
      <body className={inter.className}>
        <Suspense fallback={<Custom404 />}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <QueryClientProvider>
              <UserProvider>{children}</UserProvider>
              <Toaster />
            </QueryClientProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
