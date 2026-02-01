import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Salaar Ahmad Furqan",
  description: "Client testimonials and reviews from Upwork and ClickUp projects",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
