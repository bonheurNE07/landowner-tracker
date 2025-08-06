"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md border dark:border-gray-700"
    >
      {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
    </button>
  );
}
