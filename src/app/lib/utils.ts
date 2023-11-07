import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToSlug(input: string): string {
  const lowercaseInput = input.toLowerCase();
  const slug = lowercaseInput.replace(/\s+/g, "-");
  return slug;
}

export function isPasswordCorrect(password: string | null): boolean {
  if (password === null) return false;
  return password === process.env.PASSWORD;
}
