import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quickbeard",
  description: "For research purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"${inter.className} bg-slate-50 dark:bg-[#0d1117]"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
