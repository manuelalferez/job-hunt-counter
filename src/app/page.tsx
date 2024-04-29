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

  async function checkIsAuthorized() {
    "use server";
    if (Object.keys(searchParams).length === 0) return false;
    if (!searchParams.password) return false;
    return true;
  }

  const isAuthorized = await checkIsAuthorized();

  return (
    <main className="p-24 flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl flex justify-center font-bold">Applications</h1>
        <h2 className="text-center text-lg italic">
          Interviews is just a number game. A random game. Your interview
          performance says nothing about you. It says nothing about your worth.
          It says nothing about your intelligence and it says nothing about how
          good Software Engineer you are.
        </h2>
      </div>

      {isAuthorized && (
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
            <h1 className="text-4xl flex justify-center font-bold py-12 pb-8">
              Global Insights
            </h1>
            <Stats fetchCounter={fetchCounter} />
            <h1 className="text-4xl flex justify-center font-bold py-12 pb-8">
              Monthly Insights
            </h1>
            <MonthsStats password={searchParams.password!} />
          </div>
        </div>
      )}
      {!isAuthorized && (
        <div className="card flex flex-col gap-4 items-center justify-center py-12 my-12 border-4 shadow-md">
          <h1 className="text-4xl">Unauthorized ✋</h1>
          <p className="">
            Please, enter the password to access the data. The password is
            provided in the URL as a query parameter.
          </p>
        </div>
      )}
    </main>
  );
}
