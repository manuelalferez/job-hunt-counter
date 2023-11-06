import Counter from "./components/counter";
import Stats from "./components/stats";

export default function Home() {
  return (
    <main className="p-24 flex flex-col gap-16">
      <h1 className="text-6xl text-blue-800 flex justify-center">
        Applications
      </h1>
      <div className="flex justify-center gap-8 flex-wrap">
        <Counter title="Applications submitted" />
        <Counter title="People contacted" />
        <Counter title="People responded" />
        <Counter title="Interviews" />
        <Counter title="Offers" />
      </div>
      <div>
        <Stats />
      </div>
    </main>
  );
}
