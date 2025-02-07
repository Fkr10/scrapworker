import "@/styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { Footer, Header } from "@/components";

export const metadata = {
  title: "ScrapWorker - Turn Scrap Into Cash",
  description:
    "ScrapWorker - Turn your scrap into cash. Simplify recycling, earn rewards, and contribute to a cleaner, greener planet. Join us for efficient scrap management and environmentally-friendly solutions.",
  keywords: [
    "Scrap",
    "Recycling",
    "Cash for Scrap",
    "ScrapWorker",
    "Environment",
    "Waste Management",
    "Scrap Collection",
    "Scrap Metal",
    "E-Waste Recycling",
    "Scrap Disposal",
    "Eco-friendly Recycling",
    "Sustainable Waste Solutions",
    "Scrap Management",
    "Recyclable Materials",
    "Green Living",
  ],
  authors: [{ name: "ScrapWorker Team" }],
  themeColor: "#50A755",
  openGraph: {
    title: "ScrapWorker - Turn Scrap Into Cash",
    description:
      "Turn your scrap into cash with ScrapWorker. Simplify recycling and earn rewards while helping the environment.",
    url: "https://www.scrapworker.com",
    siteName: "ScrapWorker",
    images: [
      {
        url: "https://www.scrapworker.com/assets/img/logo.svg",
        width: 1200,
        height: 630,
        alt: "ScrapWorker Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScrapWorker - Turn Scrap Into Cash",
    description:
      "Turn your scrap into cash with ScrapWorker. Simplify recycling and earn rewards while helping the environment.",
    site: "@ScrapWorker",
    creator: "@ScrapWorker",
    images: ["https://www.scrapworker.com/assets/img/logo.svg"],
  },
  alternates: {
    canonical: "https://www.scrapworker.com/",
  },
  robots: "index, follow",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        />
        {/* Fonts  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://www.scrapworker.com/assets/vendor/fontawesome-free/css/all.min.css"
        />
      </head>
      <body>
        <div className="App">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
