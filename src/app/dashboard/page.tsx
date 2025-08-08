'use client'

import React from "react";
import MainLayout from "@/components/layout";
import { Bitcoin } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useCapital } from '@/hooks/useCapital'
import { useBudget } from "@/hooks/useBudget";
import { useProjectStats } from "@/hooks/useSteps";
import { useStockStats } from "@/hooks/useStockStats";

export default function DashboardPage() {
  const { data: capital, isLoading: capitalLoading } = useCapital()
  const { data: budget, isLoading: budgetLoading } = useBudget()
  const { data: projects, isLoading: projectLoading } = useProjectStats()
  const { data: stock, isLoading: stockLoading } = useStockStats()
  return (
    <MainLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-900 dark:text-gray-200 text-sm font-medium">Welcome to your dashboard. Here you can manage projects and track progress.</p>
      
      {/* Example content area */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4  ">
        <Card className="shadow-sm border border-gray-200 dark:border-gray-800 gap-1 py-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex justify-between"><span>CAPITAL</span><Bitcoin size={22} /></CardTitle>
          </CardHeader>
          <CardContent>
            {capitalLoading ? (
              <>
                <p className="text-gray-500">...</p>
                <p className="text-gray-500">...</p>
              </>
            ) : (
              <>
                <p className="text-md font-normal">USD: <span className="text-green-500">{capital?.usd} $</span></p>
                <p className="text-md font-normal">CDF: <span className="text-green-500">{capital?.cdf} Fc</span></p>
              </>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground mt-1"><span className="text-green-600">{capital?.UsedPercentage}%</span> Deja Utiliser</p>
          </CardFooter>
        </Card>

        <Card className="shadow-sm border border-gray-200 dark:border-gray-800 gap-1 py-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex justify-between"><span>BUDGET</span><Bitcoin size={22} /></CardTitle>
          </CardHeader>
          <CardContent>
            {budgetLoading ? (
              <>
                <p className="text-gray-500">...</p>
                <p className="text-gray-500">...</p>
              </>
            ) : (
              <>
                <p className="text-md font-normal">USD: <span className="text-green-500">{budget?.totalUsd} $</span></p>
                <p className="text-md font-normal">CDF: <span className="text-green-500">{budget?.totalCdf} Fc</span></p>
              </>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground mt-1"><span className="text-green-600">{budget?.completedPercentage}%</span> Deja Utiliser</p>
          </CardFooter>
        </Card>

        <Card className="shadow-sm border border-gray-200 dark:border-gray-800 gap-1 py-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex justify-between"><span>PROJECTS</span><Bitcoin size={22} /></CardTitle>
          </CardHeader>
          <CardContent>
            {projectLoading ? (
              <>
                <p className="text-gray-500">...</p>
                <p className="text-gray-500">...</p>
              </>
            ) : (
              <>
                <p className="text-md font-normal">Encours: <span className="text-green-500">{projects?.ongoing} Etapes</span></p>
                <p className="text-md font-normal">Terminer: <span className="text-green-500">{projects?.completed} Etapes</span></p>
              </>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground mt-1"><span className="text-green-600">{projects?.terminatedPercentage}%</span> Deja Utiliser</p>
          </CardFooter>
        </Card>

        <Card className="shadow-sm border border-gray-200 dark:border-gray-800 gap-1 py-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex justify-between"><span>STOCK</span><Bitcoin size={22} /></CardTitle>
          </CardHeader>
          <CardContent>
            {stockLoading ? (
              <>
                <p className="text-gray-500">...</p>
                <p className="text-gray-500">...</p>
              </>
            ) : (
              <>
                <p className="text-md font-normal">Reception Total: <span className="text-green-500">{stock?.totalReceived}</span></p>
                <p className="text-md font-normal">Consomation: <span className="text-green-500">{stock?.totalConsumed}</span></p>
              </>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground mt-1"><span className="text-green-600">{stock?.consumedPercentage}%</span> Deja Utiliser</p>
          </CardFooter>
        </Card>
      </div>
    </div>
    </MainLayout>
  );
}
