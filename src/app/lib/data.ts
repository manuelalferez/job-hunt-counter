import "server-only";

import { kv } from "@vercel/kv";
import { convertToSlug } from "./utils";

export async function incrementCounter(title: string) {
  const key = convertToSlug(title);
  const count = (await kv.get(key)) as string;
  await kv.set(key, (parseInt(count) + 1).toString());
}

export async function decreaseCounter(title: string) {
  const key = convertToSlug(title);
  const count = (await kv.get(key)) as string;
  await kv.set(key, (parseInt(count) - 1).toString());
}

export async function getCounter(title: string): Promise<string> {
  const key = convertToSlug(title);
  const counter = (await kv.get(key)) as string;
  if (counter === null) {
    await kv.set(key, "0");
    return "0";
  }
  return counter;
}
