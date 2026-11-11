"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // The V5 homepage ships its own header and footer, so it skips the classic chrome and preloader.
  if (pathname === "/") return <>{children}</>;

  if (loading) return <Preloader />;

  const isHomePage = pathname === "/classic";

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!isHomePage && <Footer />}
    </>
  );
}
