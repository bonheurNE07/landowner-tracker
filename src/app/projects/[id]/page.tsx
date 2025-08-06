"use client"

import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-xl">
    <div className="flex items-center justify-center mb-6 text-gray-300">
        <Link href="/dashboard" className="block text-2xl hover:text-blue-600"><span>---</span> Dashboard</Link>
    </div>
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome back</h1>
        <LoginForm />
    </div>
  )
}
