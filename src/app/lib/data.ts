import "server-only";

import { kv } from "@vercel/kv";
import { convertToSlug } from "./utils";

export async function incrementCounter(title: string) {
  const key = convertToSlug(title);
  const timeStamp = new Date().valueOf().toString();
  await kv.lpush(key, { count: 1, timeStamp: timeStamp });
}

export async function decreaseCounter(title: string) {
  const key = convertToSlug(title);
  const timeStamp = new Date().valueOf().toString();
  await kv.lpush(key, { count: -1, timeStamp: timeStamp });
}

export async function getList(
  title: string
): Promise<{ count: number; timeStamp: string }[] | null> {
  try {
    const key = convertToSlug(title);
    const list: { count: number; timeStamp: string }[] | null = await kv.lrange(
      key,
      0,
      -1
    );
    return list;
  } catch (error) {
    console.error(`Error in getList: "${error}`);
    return null;
  }
}

// Function to calculate the sum of count from the list
export async function getCounter(title: string): Promise<number> {
  const key = convertToSlug(title);
  try {
    const list = await getList(title);

    if (list === null) {
      const timeStamp = new Date().valueOf().toString();
      await kv.hset(key, { count: 0, timeStamp: timeStamp });
      return 0;
    }

    return list.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
  } catch (error) {
    console.error(`Error in getCounter: "${error}`);
    return 0;
  }
}

export async function getIncrementThisWeek(title: string): Promise<number> {
  const list = await getList(title);
  if (list === null) return 0;
  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime();

  // Calculate the start of the current week
  const startOfWeekTimestamp =
    currentTimestamp - currentDate.getDay() * 24 * 60 * 60 * 1000;

  // Use reduce to sum 'count' for elements within the current week
  const sumOfCountWithinWeek = list.reduce((acc, curr) => {
    if (
      Number(curr.timeStamp) >= startOfWeekTimestamp &&
      Number(curr.timeStamp) <= currentTimestamp
    ) {
      acc += curr.count;
    }
    return acc;
  }, 0);
  return sumOfCountWithinWeek;
}
