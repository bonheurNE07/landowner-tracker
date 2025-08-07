import QueryProvider from "./query-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <QueryProvider>
        <NuqsAdapter>{children}</NuqsAdapter>
      </QueryProvider>
  );
}
