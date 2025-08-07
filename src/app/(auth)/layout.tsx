import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import ModeToggle from "@/components/themToggler";

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
  return (
    <div
      className={cn(
        robotoSans.className,
        "dark:bg-black bg-gray-50 min-h-screen flex flex-col"
      )}
    >
      {/* Header */}
      <header className="w-full p-4 flex justify-end">
        <ModeToggle />
      </header>

      {/* Page Content */}
      <main className="flex flex-1 items-center justify-center px-4">
        {children}
      </main>
    </div>
  );
}
