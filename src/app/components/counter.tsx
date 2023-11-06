"use client";

import { useState } from "react";
import { Card, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { DownIcon, UpIcon } from "./ui/counter-icons";

export default function Counter({ title }: { title: string }) {
  const [count, setCount] = useState(0);

  const up = () => setCount(count + 1);
  const down = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <Card className="w-fit p-1 border-0 border-blue-600 rounded-md shadow-xl">
      <div className="p-4 flex justify-center flex-col items-center">
        <CardDescription className="text-xl font-bold text-blue-800">
          {title}
        </CardDescription>
        <h1 className="text-6xl pt-2 text-blue-800 font-mono font-bold">
          {count}
        </h1>
      </div>
      <Button
        variant="outline"
        onClick={down}
        className="text-blue-200 w-1/2 hover:text-blue-600 border-none rounded-none hover:bg-blue-50"
      >
        <DownIcon />
      </Button>
      <Button
        variant="outline"
        onClick={up}
        className="text-blue-200 w-1/2 hover:text-blue-600 border-none rounded-none hover:bg-blue-50"
      >
        <UpIcon />
      </Button>
    </Card>
  );
}
