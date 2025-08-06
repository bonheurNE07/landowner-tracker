"use client"

import { useState } from "react"
import { UserRound } from 'lucide-react';
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login logic
    setTimeout(() => {
      alert(`Logging in with ${email}...`)
      setLoading(false)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-row items-center justify-start gap-2 w-full px-4 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
        <label htmlFor="email"><UserRound size={24}/></label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 focus:outline-none focus:ring-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email or username"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-300"
      >
        {loading ? "Signing in..." : "Login"}
      </button>
    </form>
  )
}
