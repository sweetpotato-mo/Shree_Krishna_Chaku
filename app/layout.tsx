import { Favicon } from "@/components/Favicon";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Shree Krishna Chaku | Tokha's Heritage, Refined Over Four Generations",
  description:
    "A 4th-generation artisanal Chaku production from Tokha-3, Dekwo, Kathmandu. Traditionally crafted, SO2 free, no added colors or preservatives.",
  icons: {
    icon: "/GoldLogo%20copy_No_BG.png",
    apple: "/GoldLogo%20copy_No_BG.png",
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
