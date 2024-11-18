import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { antThemeToken } from "@/config/AppTheme";

export const metadata: Metadata = {
  title: "Cinephile",
  description: "Créer et partager des listes de films",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider theme={antThemeToken}> {children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
