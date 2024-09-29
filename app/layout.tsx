"use client";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { SnackbarProvider } from "notistack";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <SnackbarProvider autoHideDuration={3000}>
          <head>
            <link
              href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@400;700&family=Nunito:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>{children}</body>
        </SnackbarProvider>
      </StoreProvider>
    </html>
  );
}
