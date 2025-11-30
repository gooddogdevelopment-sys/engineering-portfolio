import type { Metadata } from 'next';
import { MantineProvider } from '@mantine/core';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@mantine/core/styles.css';
import './globals.css';

const gaId = process.env.NEXT_PUBLIC_GA_ID ?? '';

const getGAId = (): string => {
  if (!gaId) {
    console.warn('Google Analytics ID is not set.');
  }
  return gaId;
};

export const metadata: Metadata = {
  title: 'Portfolio - Brandon Decker',
  description: 'Senior Software Engineer showcasing coding experience and projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>{children}</MantineProvider>
        <GoogleAnalytics gaId={getGAId()} />
      </body>
    </html>
  );
}
