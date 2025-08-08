"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useEffect } from "react";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 6 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  useEffect(() => {
  if (!isServer && process.env.NODE_ENV === "development") {
    import("../mocks/browser").then(({ worker }) => {
      worker.start({ onUnhandledRequest: "bypass" })
      console.log("%c🔶 MSW Started", "color: orange")
    })
  }
  }, [])


  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
