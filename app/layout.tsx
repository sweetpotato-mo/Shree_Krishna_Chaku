import type { Metadata } from "next";
import "./globals.css";
import { Favicon } from "@/components/Favicon";

export const metadata: Metadata = {
  title:
    "Shree Krishna Chaku | Tokha's Heritage, Refined Over Four Generations",
  description:
    "A 4th-generation artisanal Chaku production from Tokha-3, Dekwo, Kathmandu. Traditionally crafted, SO2 free, no added colors or preservatives.",
  icons: {
    icon: "/LOGO_White.png",
    apple: "/LOGO_White.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Favicon />
        {children}
      </body>
    </html>
  );
}
