import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "@uploadthing/react/styles.css";
import "./globals.css";
import { AlertProvider } from "@/context/AlertContext";
import AlertContainer from "@/components/general/AlertContainer";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VisiblePaths",
  description: "VisiblePaths is a platform for your cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <AlertProvider>
          <AlertContainer />
          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
