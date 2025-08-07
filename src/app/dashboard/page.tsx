import React from "react";
import MainLayout from "@/components/layout";


export default function DashboardPage() {
  return (
    <MainLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-900 dark:text-gray-200 text-sm font-medium">Welcome to your dashboard. Here you can manage projects and track progress.</p>
      
      {/* Example content area */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg shadow-sm bg-card">
          <h2 className="font-semibold mb-2">Card Title</h2>
          <p className="text-sm text-gray-500">Card content goes here.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-card">
          <h2 className="font-semibold mb-2">Another Card</h2>
          <p className="text-sm text-gray-500">More content goes here.</p>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}
