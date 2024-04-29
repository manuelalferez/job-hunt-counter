export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-8 mt-48 mb-12">
      <p>
        Created with love by{" "}
        <a
          href="https://manuelalferez.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Manuel
        </a>
      </p>

      <button className="btn">
        <a
          href="https://github.com/manuelalferez/job-hunt-counter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </button>
    </footer>
  );
}
