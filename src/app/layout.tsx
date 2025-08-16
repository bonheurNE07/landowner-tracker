import "@/app/globals.css";
import AppProviders from "@/providers";
import { ThemeProvider } from "@/providers/theme-provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>LANDOWENER-TRACKER</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppProviders>{children}</AppProviders>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}