import Counter from "./components/counter";
import Stats from "./components/stats";
import { Card } from "./components/ui/card";
import { decreaseCounter, getCounter, incrementCounter } from "./lib/data";
import { isPasswordCorrect } from "./lib/utils";

type SearchParams = {
  password?: string | null;
};

export default function Home({ searchParams }: { searchParams: SearchParams }) {
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

  function isAuthorized() {
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

  return (
    <main className="p-24 flex flex-col gap-16">
      <h1 className="text-6xl text-blue-800 flex justify-center">
        Applications
      </h1>
      {isAuthorized() && (
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
      {!isAuthorized() && (
        <Card className="flex justify-center py-12">
          <h1 className="text-4xl text-blue-800">Unauthorized ✋</h1>
        </Card>
      )}
    </main>
  );
}
