import localFont from "next/font/local";
import "./globals.css";

// const sairaCBold = localFont({
//   src: "./fonts/SairaCondensedBold.ttf",
//   variable: "--font-saira-bold",
//   weight: "100 900",
// });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "FMZ Leader Board",
  description: "The Finals Leader Board for Members of Final Malluz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
