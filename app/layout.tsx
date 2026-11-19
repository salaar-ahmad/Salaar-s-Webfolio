import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";

const sign = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const siteName = "Salaar Ahmad Furqan | Technical Project Manager";
const siteDescription = "Top Rated Technical Project Manager specializing in ClickUp, SAP, Azure DevOps, Agile methodologies, and enterprise automation. Delivering mission-critical projects across global teams.";
const siteUrl = "https://salaarahmad.com"; // Update with your actual domain

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | Salaar Ahmad Furqan`,
  },
  description: siteDescription,
  keywords: ["Project Manager", "ClickUp Expert", "SAP", "Azure DevOps", "Agile", "Technical Project Management", "Automation", "Enterprise Solutions"],
  authors: [{ name: "Salaar Ahmad Furqan" }],
  creator: "Salaar Ahmad Furqan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sign.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
