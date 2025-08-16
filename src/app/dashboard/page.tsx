'use client'

import React from "react";
import MainLayout from "@/components/layout";
import { Navigations } from "@/components/dashboard/Navigations";
import StatCards from "@/components/dashboard/StatsCards";
import StockCalendar from "@/components/stockMovements";


export default function DashboardPage() {

  return (
    <MainLayout>
      <StatCards />
      <Navigations />
      <div className="w-full flex items-center justify-start gap-2 md:gap-4">
        <StockCalendar />
      </div>
    </MainLayout>
  );
}
