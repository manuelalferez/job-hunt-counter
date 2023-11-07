import Counter from "./components/counter";
import Stats from "./components/stats";
import { Card } from "./components/ui/card";
import { decreaseCounter, getCounter, incrementCounter } from "./lib/data";
import { isPasswordCorrect } from "./lib/utils";

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
    return await getCounter(title);
  }

  async function upCounter(title: string) {
    "use server";
    await incrementCounter(title);
  }

  async function downCounter(title: string) {
    "use server";
    await decreaseCounter(title);
  }

  async function checkIsAuthorized() {
    "use server";
    if (Object.keys(searchParams).length === 0) return false;
    if (!searchParams.password) return false;
    return isPasswordCorrect(searchParams.password);
  }

  const titles = [
    "Applications submitted",
    "People contacted",
    "People responded",
    "Interviews",
    "Offers",
  ];

  const isAuthorized = await checkIsAuthorized();

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
      {isAuthorized && (
        <div className="flex flex-col gap-16">
          <div className="flex justify-center gap-8 flex-wrap">
            {titles.map((title, index) => (
              <Counter
                key={index}
                title={title}
                fetchCounter={fetchCounter}
                upCounter={upCounter}
                downCounter={downCounter}
              />
            ))}
          </div>
          <div>
            <Stats fetchCounter={fetchCounter} />
          </div>
        </div>
      )}
      {!isAuthorized && (
        <Card className="flex justify-center py-12">
          <h1 className="text-4xl text-blue-800">Unauthorized ✋</h1>
        </Card>
      )}
    </main>
  );
}
