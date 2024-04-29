"use client";

import { useEffect, useState } from "react";
import {
  DownIcon,
  LoadingIcon,
  IncrementIcon,
  UpIcon,
} from "./ui/counter-icons";

export default function Counter({
  title,
  fetchCounter,
  fetchIncrementThisWeek,
  downCounter,
  upCounter,
}: {
  title: string;
  fetchCounter: (title: string) => Promise<number>;
  fetchIncrementThisWeek: (title: string) => Promise<number>;
  downCounter: (title: string) => Promise<void>;
  upCounter: (title: string) => Promise<void>;
}) {
  const [count, setCount] = useState(0);
  const [incrementThisWeek, setIncrementThisWeek] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const value = await fetchCounter(title);
      setCount(Number(value));

      const increment = await fetchIncrementThisWeek(title);
      setIncrementThisWeek(Number(increment));
    };

    fetchData();
    setIsLoading(false);
  }, [title]);

  const up = async () => {
    setCount(count + 1);
    await upCounter(title);
  };

  const down = async () => {
    if (count === 0) return;
    setCount(count - 1);
    await downCounter(title);
  };

  return (
    <div className="card w-fit p-1 border-4 bg-black bg-opacity-10 rounded-md shadow-md">
      <div className="p-4 flex justify-center flex-col items-center">
        <div className="card-title text-xl font-bold">{title}</div>
        <h1 className="text-8xl pt-2 font-mono font-bold">
          {isLoading ? <LoadingIcon /> : count}
        </h1>
        {incrementThisWeek !== 0 && (
          <div className="stat-desc font-mono text-start flex gap-1">
            <IncrementIcon />
            <span className="font-bold">{incrementThisWeek}</span> this week
          </div>
        )}
      </div>
      <div>
        <button
          onClick={down}
          className="btn text-black text-opacity-30 w-1/2 hover:text-black border-none hover:bg-transparent bg-transparent shadow-none rounded-none"
        >
          <DownIcon />
        </button>
        <button
          onClick={up}
          className="btn text-black text-opacity-30 w-1/2 hover:text-black border-none hover:bg-transparent bg-transparent shadow-none rounded-none"
        >
          <UpIcon />
        </button>
      </div>
    </div>
  );
}
