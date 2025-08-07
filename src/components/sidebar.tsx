"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {LayoutDashboard, Target, ChartCandlestick, BanknoteArrowDown} from "lucide-react";


export const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-18 lg:w-[200px] border-r border-gray-300 dark:border-gray-800/30  h-full bg-background px-0 py-6 flex flex-col justify-between">
      {/* Top section */}
      <div className="space-y-6">
        <Link
        key={"New Project"}
        href={"/projects/new"}
        >
          <button className="w-5/6 bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-4 py-3 mx-1.25 lg:mx-4 rounded-sm text-sm flex flex-row justify-center gap-2">
            + <span className="hidden lg:block">New Project</span>
          </button>
        </Link>

        <p className="text-white/80 text-sm mx-4 mt-4 hidden lg:block">Owner</p>

        <nav className="flex flex-col justify-between mt-8">
            <Link
                href="/dashboard"
                className={`flex items-center justify-center lg:justify-start gap-3 px-4 py-4 text-sm relative
                ${pathname === "/dashboard"
                    ? "dark:bg-black bg-gray-200/30 font-medium before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600"
                    : "dark:text-gray-500 text-gray-700 dark:hover:text-white hover:text-black transition-colors"
                }`}
            >
                {pathname === "/dashboard" ? <span><LayoutDashboard size={16} className="text-black dark:text-gray-50" /></span> : <span><LayoutDashboard size={16} className="text-gray-700 dark:text-gray-300" /></span>}
                <span className="hidden lg:block">Dashboard</span>
            </Link>
            <Link
                href="/projects"
                className={`flex items-center justify-center lg:justify-start gap-3 px-4 py-4 text-sm relative
                ${pathname === "/projects"
                    ? "dark:bg-black bg-gray-200/30 font-medium before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600"
                    : "dark:text-gray-500 text-gray-700 dark:hover:text-white hover:text-black transition-colors"
                }`}
            >
                {pathname === "/projects" ? <span><Target size={16} className="text-black dark:text-gray-50" /></span> : <span><Target size={16} className="text-gray-700 dark:text-gray-300" /></span>}
                <span className="hidden lg:block">Projects</span>
            </Link>
            <Link
                href="/stock"
                className={`flex items-center justify-center lg:justify-start gap-3 px-4 py-4 text-sm relative
                ${pathname === "/stock"
                    ? "dark:bg-black bg-gray-200/30 font-medium before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600"
                    : "dark:text-gray-500 text-gray-700 dark:hover:text-white hover:text-black transition-colors"
                }`}
            >
                {pathname === "/stock" ? <span><ChartCandlestick size={16} className="text-black dark:text-gray-50" /></span> : <span><ChartCandlestick size={16} className="text-gray-700 dark:text-gray-300" /></span>}
                <span className="hidden lg:block">Stock</span>
            </Link>
            <Link
                href="/expenses"
                className={`flex items-center justify-center lg:justify-start gap-3 px-4 py-4 text-sm relative
                ${pathname === "/expenses"
                    ? "dark:bg-black bg-gray-200/30 font-medium before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600"
                    : "dark:text-gray-500 text-gray-700 dark:hover:text-white hover:text-black transition-colors"
                }`}
            >
                {pathname === "/expenses" ? <span><BanknoteArrowDown size={16} className="text-black dark:text-gray-50" /></span> : <span><BanknoteArrowDown size={16} className="text-gray-700 dark:text-gray-300" /></span>}
                <span className="hidden lg:block">Expenses</span>
            </Link>
        </nav>
      </div>
      
    </aside>
  );
};
