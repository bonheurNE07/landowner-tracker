"use client"

import { RegisterForm } from "@/components/RegisterForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="self-center justify-self-center">
      <div className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Get Registered
        </h1>
        <RegisterForm />
        </div>
    </div>
  )
}
