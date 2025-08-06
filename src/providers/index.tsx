import QueryProvider from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <NuqsAdapter>{children}</NuqsAdapter>
      </QueryProvider>
    </ThemeProvider>
  );
}
