import "./globals.css";
import localFont from "next/font/local";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={customFont.variable}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
