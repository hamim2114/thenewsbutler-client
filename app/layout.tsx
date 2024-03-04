import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import main from './main.module.css';
import StoreProvider from '@/redux/StoreProvider';
import Header from './layouts/Header';
const inter = Inter({ subsets: ['latin'] });
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Newsbutler - Personalized News in a Cluttered World',
  description:
    "Newsbutler is a personalized news aggregator that helps you stay informed without the noise. It learns from your interactions, preferences, and reading habits to filter out the noise and deliver information that's not just relevant, but also aligned with your specific information needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen ${main.body_background_color}`}
      >
        <StoreProvider>
          <Theme>
            <Header />
            {children}
          </Theme>
        </StoreProvider>
      </body>
    </html>
  );
}
