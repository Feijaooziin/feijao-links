import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Feijão Links",
    template: "%s | Feijão Links",
  },
  description:
    "Página de links do Leonardo Victor. Projetos, redes sociais e contatos em um só lugar.",
  applicationName: "Feijão Links",
  authors: [{ name: "Leonardo Victor" }],
  creator: "Leonardo Victor",
  keywords: ["links", "portfólio", "nextjs", "react", "feijão links"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
