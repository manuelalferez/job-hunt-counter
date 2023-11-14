import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getList } from "./data";

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

export interface MonthlyCountTable {
  [monthYear: string]: number;
}

export async function generateMonthlyCountTable(
  title: string
): Promise<{ key: string; value: number }[]> {
  const key = convertToSlug(title);
  const data = await getList(key);
  const monthlyCounts: MonthlyCountTable = {};
  if (data === null)
    return Object.entries(monthlyCounts).map(([key, value]) => ({
      key,
      value,
    }));

  data.forEach((entry) => {
    const timestamp = parseInt(entry.timeStamp);
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const monthKey = formatDate(`${year}-${month}`);
    if (!monthlyCounts[monthKey]) {
      monthlyCounts[monthKey] = 0;
    }

    monthlyCounts[monthKey] += entry.count;
  });

  return Object.entries(monthlyCounts).map(([key, value]) => ({ key, value }));
}

function formatDate(inputDate: string) {
  const [year, month] = inputDate.split("-");

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedMonth = monthNames[parseInt(month) - 1]; // Adjust month index

  return `${formattedMonth} ${year}`;
}
