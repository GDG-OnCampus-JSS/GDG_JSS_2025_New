import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

const customFont = localFont({
  src: [
    {
      path: "../../public/fonts/Product-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Product-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ProductSans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDG JSSATEN",
  description:
    "Our community unites web developers, app creators, ml enthusiasts, designers, and tech enthusiasts of all backgrounds. Through hands-on workshops, hackathons, and collaborative projects, we share knowledge and build real solutions.",
  metadataBase: new URL("https://gdg.jssaten.in"),
  icons: {
    icon: "/icons/gdsclogo.svg",
    apple: "/icons/gdsclogo.svg",
  },
  // openGraph: {
  //   title: "GDG JSSATEN",
  //   description:
  //     "Our community unites web developers, app creators, ml enthusiasts, designers, and tech enthusiasts of all backgrounds. Through hands-on workshops, hackathons, and collaborative projects, we share knowledge and build real solutions.",
  //   url: "https://gdg.jssaten.in",
  //   siteName: "GDG JSSATEN",
  //   images: [
  //     {
  //       url: "/icons/gdsclogo.svg",
  //       width: 512,
  //       height: 512,
  //       alt: "GDG JSSATEN logo",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary",
  //   title: "GDG JSSATEN",
  //   description:
  //     "Our community unites web developers, app creators, ml enthusiasts, designers, and tech enthusiasts of all backgrounds. Through hands-on workshops, hackathons, and collaborative projects, we share knowledge and build real solutions.",
  //   images: ["/icons/gdsclogo.svg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={customFont.variable}>
      <body className={`antialiased`}>
        {children}
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
