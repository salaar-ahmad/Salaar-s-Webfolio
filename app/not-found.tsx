import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="phead" style={{ paddingBottom: 120 }}>
      <div className="wrap phead-in">
        <h1>This page does not exist.</h1>
        <p className="lead">The page you&apos;re looking for doesn&apos;t exist, or it has moved.</p>
        <div className="actions">
          <Link href="/" className="btn btn-ink">Back to the homepage</Link>
          <Link href="/projects" className="link">Case studies</Link>
        </div>
      </div>
    </div>
  );
}
