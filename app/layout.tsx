import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify App Rejection Predictor – Catch Issues Before Submission",
  description: "Scan your Shopify app code, permissions, and metadata to predict rejection likelihood and get specific fix recommendations before you submit."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4a903ba1-5840-4a5d-811f-bb0d5cc2ccdf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
