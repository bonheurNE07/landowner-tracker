"use client";

import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="self-center justify-self-center">
      <div className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome back
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
