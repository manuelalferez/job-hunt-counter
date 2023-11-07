import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-8 mt-48 mb-12">
      <p>
        Created with love by{" "}
        <a
          href="https://manuelalferez.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark underline"
        >
          Manuel
        </a>
      </p>

      <Button className="bg-light bg-opacity-75 hover:bg-light">
        <a
          href="https://github.com/manuelalferez/job-hunt-counter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          Source code
        </a>
      </Button>
    </footer>
  );
}
