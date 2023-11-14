import { redirect } from "next/navigation";
import Counter from "./components/counter";
import { MonthsStats } from "./components/months-stats";
import Stats from "./components/stats";
import {
  decreaseCounter,
  getCounter,
  getIncrementThisWeek,
  incrementCounter,
} from "./lib/data";
import { createSlug } from "./lib/utils";

type SearchParams = {
  password?: string | null;
};

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  if (Object.keys(searchParams).length === 0 || !searchParams.password) {
    return redirect("/login");
  }

  async function fetchCounter(title: string) {
    "use server";
    const key = createSlug(searchParams.password as string, title);
    return await getCounter(key);
  }

  async function fetchIncrementThisWeek(title: string) {
    "use server";
    const key = createSlug(searchParams.password as string, title);
    return await getIncrementThisWeek(key);
  }

  async function upCounter(title: string) {
    "use server";
    const key = createSlug(searchParams.password as string, title);
    await incrementCounter(key);
  }

  async function downCounter(title: string) {
    "use server";
    const key = createSlug(searchParams.password as string, title);
    await decreaseCounter(key);
  }

  const titles = [
    "Applications submitted",
    "People contacted",
    "People responded",
    "Interviews",
    "Offers",
  ];

  return (
    <main className="p-24 flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl text-dark flex justify-center font-bold">
          Applications
        </h1>
        <h2 className="text-center text-dark text-lg italic">
          Interviews is just a number game. A random game. Your interview
          performance says nothing about you. It says nothing about your worth.
          It says nothing about your intelligence and it says nothing about how
          good Software Engineer you are.
        </h2>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex justify-center gap-8 flex-wrap">
          {titles.map((title, index) => (
            <Counter
              key={index}
              title={title}
              fetchCounter={fetchCounter}
              fetchIncrementThisWeek={fetchIncrementThisWeek}
              upCounter={upCounter}
              downCounter={downCounter}
            />
          ))}
        </div>
        <div>
          <h1 className="text-4xl text-dark flex justify-center font-bold py-12 pb-8">
            Global Insights
          </h1>
          <Stats fetchCounter={fetchCounter} />
          <h1 className="text-4xl text-dark flex justify-center font-bold py-12 pb-8">
            Monthly Insights
          </h1>
          <MonthsStats password={searchParams.password} />
        </div>
      </div>
    </main>
  );
}
