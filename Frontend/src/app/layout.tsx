"use client";

import "./globals.css";
import AntdApp from "antd/es/app";
import { theme } from "antd/es";
import ConfigProvider from "antd/es/config-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkAlgorithm } = theme;
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff6500",
            colorInfo: "#ff6500",
            colorTextBase: "#ffffff",
            colorBgBase: "#1e3e62",
            fontSize: 14,
          },
          components: {
            Input: {
              colorText: "rgb(255,255,255)",
            },
          },
          algorithm: darkAlgorithm,
        }}
      >
        <body
          // style={{ display: "inline-flex", width: "100vw", height: "100vh" }}
        >
          <AntdApp>{children}</AntdApp>
        </body>
      </ConfigProvider>
    </html>
  );
}
