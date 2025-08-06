import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function formatEventTime(
  isoDate: string,
  format: "hour" | "day" = "hour",
): string {
  const date = new Date(isoDate);
  const now = new Date();
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const timeString = date.toLocaleTimeString("en-US", timeOptions);

  if (format === "day") {
    const day = date.getUTCDate();
    const suffix = getDaySuffix(day);
    return `${date.toLocaleDateString("en-US", { weekday: "long" })}, ${day}${suffix}`;
  }

  if (date.toDateString() === now.toDateString()) {
    return `Today, ${timeString}`;
  } else {
    return `${date.toLocaleDateString("en-US", { weekday: "long" })}, ${timeString}`;
  }
}


export function formatEventDate(
  isoDate: string,
  showTime: boolean = true
): string {
  const date = new Date(isoDate);

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const dateString = dateFormatter.format(date); // e.g., "15 Jun 2025"

  if (!showTime) return dateString;

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const timeString = timeFormatter.format(date); // e.g., "07:30 PM"

  return `${dateString}, ${timeString}`;
}


export function formatHour(isoDate: string): string {
  const date = new Date(isoDate);
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return date
    .toLocaleTimeString("en-US", timeOptions)
    .replace(/(\d+):(\d+)\s([AP]M)/, "$1:$2 $3");
}

export function formatAgoTime(isoDate: string): string {
  const now = new Date();
  const date = new Date(isoDate);
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  if (seconds < 60) return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  if (days < 7) return `${days} day${days !== 1 ? 's' : ''} ago`;
  if (weeks < 4) return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;
  return `${years} year${years !== 1 ? 's' : ''} ago`;
}


export function formatXAF(amount: number): string {
  return new Intl.NumberFormat("fr-CM", {
    style: "currency",
    currency: "XAF",
    // minimumFractionDigits: 2,
    // maximumFractionDigits: 2,
  }).format(amount);
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

export async function wait(ms: number) {
  return await new Promise((r) => setTimeout(r, ms));
}

export function getMonthAndDay(dateString: string) {
  const date = new Date(dateString);

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  return {
    month: months[date.getUTCMonth()].slice(0, 3),
    day: date.getUTCDate(),
  };
}


export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })

  return formatter.format(date)
}