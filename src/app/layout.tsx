import type { Metadata } from 'next';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/providers/theme-provider';
import { Footer } from '@/components/footer';
import Script from 'next/script';

const nippo = localFont({
  src: './fonts/Nippo-Medium.otf',
  variable: '--font-nippo',
  weight: '100 900',
});

const noto_sans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oneshot.gg',
  description: 'The Ultimate Gaming Platform',
};

export default function RootLayout({
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
      <body className={`${noto_sans.className} ${nippo.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-[2400px] mx-auto">
            <UserProvider>
              <Navbar />
              {children}
              <Footer />
            </UserProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
