"use client";

import { SignBand, SiteFooter } from "./v6/Chrome";

export default function ClientLayout({ children }) {
  return (
    <>
      <SignBand />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
