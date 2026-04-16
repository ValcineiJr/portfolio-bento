import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valcinei | Front-End Engineer",
  description: "Portfólio de Valcinei - Desenvolvedor Front-End & UI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Colocamos as classes globais diretamente aqui! */}
      <body className="bg-[#0D0D12] text-slate-200 antialiased selection:bg-purple-500/30">
        {children}
      </body>
    </html>
  );
}