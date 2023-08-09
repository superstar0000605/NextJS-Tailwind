import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexus | Side Hustle Banking",
  description:
    "The bank for Gen-Z entrepreneurs. Manage any size company with a free business bank account and infinite debit cards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
