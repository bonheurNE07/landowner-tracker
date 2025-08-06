// app/dashboard/layout.tsx

import React from "react";
import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Landowner App</h2>
        <nav className="space-y-3">
          <Link href="/dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link href="/projects" className="block text-gray-700 hover:text-blue-600">Projects</Link>
          <Link href="/stock" className="block text-gray-700 hover:text-blue-600">Stock</Link>
          <Link href="/expenses" className="block text-gray-700 hover:text-blue-600">Expenses</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
