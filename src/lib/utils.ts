import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function wait(ms: number) {
  return await new Promise((r) => setTimeout(r, ms));
}

export function truncateString(input: string): string {
  if (input.length <= 30) {
    return input;
  }
  return input.substring(0, 30) + "...";
}

export function truncateLargeString(input: string, max_length: number = 30): string {
  if (input.length <= max_length) {
    return input;
  }
  return input.substring(0, max_length) + "...";
}

