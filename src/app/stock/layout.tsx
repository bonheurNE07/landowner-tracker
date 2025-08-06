import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

export const viewport: Viewport = {
  themeColor: "#000000",
};

const robotoSans = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const metadata: Metadata = {
  title: "LANDOWNER - Log in",
  description: "Login to Manage and explore your projects",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className={cn(robotoSans.className, "bg-black", "flex items-center justify-center", "min-h-screen")}>{children}</div>;
}
