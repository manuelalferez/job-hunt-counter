import { Auth } from "../components/login";

export default function Page() {
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
        <Auth />
      </div>
    </main>
  );
}
