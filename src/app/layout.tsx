import "@/app/globals.css";
import { cn } from "@/lib/utils";
import AppProviders from "@/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "dark font-lekton antialiased",
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
