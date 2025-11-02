import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to use colors object directly in className
export function colorClass(property: "text" | "bg" | "border", color: string) {
  return `${property}-[${color}]`;
}
