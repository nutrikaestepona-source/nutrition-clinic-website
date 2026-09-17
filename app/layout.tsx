import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nutrika — Nutrición consciente",
  description:
    "Clínica de nutrición, psicología y acupuntura en Estepona. Un enfoque cercano para cuidar tu cuerpo y tu bienestar.",
  icons: {
    icon: "/logo/imago-coral.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
