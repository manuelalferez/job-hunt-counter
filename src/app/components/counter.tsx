"use client";

import { useEffect, useState } from "react";
import { Card, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { DownIcon, LoadingIcon, UpIcon } from "./ui/counter-icons";

export default function Counter({
  title,
  fetchCounter,
  downCounter,
  upCounter,
}: {
  title: string;
  fetchCounter: (title: string) => Promise<string>;
  downCounter: (title: string) => Promise<void>;
  upCounter: (title: string) => Promise<void>;
}) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const value = await fetchCounter(title);
      setCount(Number(value));
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
    <Card className="w-fit p-1 border-4 border-lightgreen rounded-md shadow-md bg-light">
      <div className="p-4 flex justify-center flex-col items-center">
        <CardDescription className="text-xl font-bold text-dark">
          {title}
        </CardDescription>
        <h1 className="text-8xl pt-2 text-dark font-mono font-bold">
          {isLoading ? <LoadingIcon /> : count}
        </h1>
      </div>
      <Button
        variant="outline"
        onClick={down}
        className="text-lightgreen w-1/2 hover:text-dark border-none rounded-none hover:bg-light bg-light"
      >
        <DownIcon />
      </Button>
      <Button
        variant="outline"
        onClick={up}
        className="text-lightgreen w-1/2 hover:text-dark border-none rounded-none hover:bg-light bg-light"
      >
        <UpIcon />
      </Button>
    </Card>
  );
}
