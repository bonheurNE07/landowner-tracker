"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UserRound } from "lucide-react";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Register delay
    setTimeout(() => {
      // Simulated Register success
      setLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email field */}
      <div className="space-y-1">
        <Label htmlFor="email" className="flex items-center gap-2">
          Email or Username
        </Label>
        <div className="flex items-center gap-2 rounded-md p-2 border-input rounded-md border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
          <UserRound size={16} />
          <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          unstyled
          className="w-[250px] md:w-md selection:bg-primary selection:text-primary-foreground bg-transparent border-transparent focus:border-transparent focus:ring-0 focus-visible:ring-0 outline-none"

          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
      </div>

      {/* Password field */}
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••••••••••"
          className="focus:border-transparent focus:ring-0 focus-visible:ring-0 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* Submit button */}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Signing up..." : "Register"}
      </Button>
    </form>
  );
}
