import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Metadata } from "next";

const siteName = "Salaar Ahmad Furqan - Technical Project Manager";
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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
