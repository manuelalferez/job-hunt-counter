"use client";

export function Auth() {
  function login(value: string) {
    window.location.replace("/?password=" + value);
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const password = (event.target as HTMLFormElement).elements.namedItem(
      "password"
    ) as HTMLInputElement;
    login(password.value);
  }

  return (
    <form
      onSubmit={handleLogin}
      className="card w-1/2 p-1 border-4 border-lightgreen rounded-md shadow-md  flex flex-col gap-4 py-8 mx-auto"
    >
      <label
        htmlFor="password"
        className="text-4xl text-dark flex justify-center font-bold py-12 pb-8"
      >
        Login
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="input input-bordered input-lg w-full max-w-xs mx-auto bg-light"
      />
      <button
        type="submit"
        className="btn text-dark bg-light bg-opacity-75 hover:bg-light w-fit mx-auto"
      >
        Login
      </button>
    </form>
  );
}
