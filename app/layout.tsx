import type { Metadata } from "next";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";

export const metadata: Metadata = {
  title: "Jimmy's Chicken Shack — Late Night Quick Pick",
  description:
    "Fast guided ordering for late night cravings. Skip the menu overload. Get your fix in seconds.",
  keywords: "Jimmy's Chicken Shack, late night food, chicken, quick order",
  openGraph: {
    title: "Jimmy's Chicken Shack — Late Night Quick Pick",
    description: "Fast guided ordering for late night cravings.",
    type: "website",
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
        <link rel="icon" href="/mobile-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#0d0a04" />
      </head>
      <body className="bg-brand-dark text-brand-cream min-h-screen">
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}
