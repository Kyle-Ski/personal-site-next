import '../styles/globals.css'
import { DarkModeProvider } from '../hooks/useDarkMode';
import Script from 'next/script';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'Kyle Czajkowski - Full-Stack Developer & Mountain Enthusiast',
  description: "Software engineer specializing in React, TypeScript, and Node.js. Sharing insights on web development, outdoor adventures, and gear reviews from the Colorado mountains.",
  keywords: 'full-stack developer, react, typescript, software engineer, outdoor gear, 14ers, colorado, web development, mountains',
  authors: [{ name: 'Kyle Czajkowski', url: 'https://kyle.czajkowski.tech' }],
  icons: {
    icon: '/Me.jpg', // Consider updating from Me.jpg to a proper favicon
    apple: '/Me.jpg',
  },
  openGraph: {
    title: 'Kyle Czajkowski - Developer & Adventurer',
    description: 'Software engineer specializing in React, TypeScript, and Node.js. Sharing insights on web development, outdoor adventures, and gear reviews from the Colorado mountains.',
    images: ['/CrestonesAtSunrise.jpeg'],
    url: 'https://kyle.czajkowski.tech',
    siteName: 'Kyle Czajkowski',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@SkiRoyJenkins',
    title: 'Kyle Czajkowski - Developer & Adventurer',
    description: 'Software engineer specializing in React, TypeScript, and Node.js. Sharing insights on web development, outdoor adventures, and gear reviews.',
    images: ['/CrestonesAtSunrise.jpeg'],
  },
  alternates: {
    canonical: 'https://kyle.czajkowski.tech'
  },
  verification: {
    // Add your verification codes if you have them
    // google: 'your-google-site-verification',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJR2GX3');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJR2GX3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Application content */}
        <DarkModeProvider>
          <NavBar />
          {children}
          <Footer />
          <BackToTop />
        </DarkModeProvider>
      </body>
    </html>
  );
}