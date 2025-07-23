"use client";

import "./globals.css";
import AntdApp from "antd/es/app";
import { theme } from "antd/es";
import ConfigProvider from "antd/es/config-provider";
import {
  CitizenRegisterProvider,
  CurrentUserProvider,
  UserLoginProvider,
} from "@/providers/auth-provider";
import { MunicipalityRegisterProvider } from "@/providers/auth-provider";
import { ServiceProviderProvider } from "@/providers/serviceProvider-provider";
import { IncidentProvider } from "@/providers/incident-provider";
import { TechnicianProvider } from "@/providers/technician-providers";
import { CitizenProvider } from "@/providers/citizen-provider";
import { ImageProvider } from "@/providers/image-provider";

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
          <CurrentUserProvider>
            <ImageProvider>
              <CitizenProvider>
                <TechnicianProvider>
                  <IncidentProvider>
                    <ServiceProviderProvider>
                      <MunicipalityRegisterProvider>
                        <CitizenRegisterProvider>
                          <UserLoginProvider>
                            <AntdApp>{children}</AntdApp>
                          </UserLoginProvider>
                        </CitizenRegisterProvider>
                      </MunicipalityRegisterProvider>
                    </ServiceProviderProvider>
                  </IncidentProvider>
                </TechnicianProvider>
              </CitizenProvider>
            </ImageProvider>
          </CurrentUserProvider>
        </body>
      </ConfigProvider>
    </html>
  );
}
