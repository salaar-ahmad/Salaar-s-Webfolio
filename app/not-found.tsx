import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(4rem, 15vw, 10rem)",
          fontWeight: 800,
          color: "#4da6ff",
          margin: 0,
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          fontWeight: 600,
          color: "#fff",
          margin: "20px 0 10px",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "1rem",
          maxWidth: 400,
          marginBottom: 30,
        }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          background: "linear-gradient(135deg, #4da6ff, #6bb8ff)",
          color: "#fff",
          padding: "14px 32px",
          borderRadius: 30,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "0.95rem",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
      >
        Back to Home
      </Link>
    </section>
  );
}
