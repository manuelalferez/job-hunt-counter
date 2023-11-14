import { generateMonthlyCountTable } from "../lib/utils";

export async function MonthsStats() {
  const applicationsSubmitted = await generateMonthlyCountTable(
    "Applications submitted"
  );
  const peopleContacted = await generateMonthlyCountTable("People contacted");
  const peopleResponded = await generateMonthlyCountTable("People responded");
  const interviews = await generateMonthlyCountTable("Interviews");
  const offers = await generateMonthlyCountTable("Offers");

  return (
    <div className="border-4 rounded-md border-lightgreen mx-auto w-fit h-fit mb-12 bg-light">
      <table className="table w-fit p-0 pb-none border-0 rounded-md shadow-md bg-light hover:bg-light text-xl">
        <thead>
          <tr className="border-none text-xl">
            <th className="text-dark text-xl hover:bg-light bg-light">Month</th>
            <th className="text-dark text-xl hover:bg-light bg-light">
              Applications submitted
            </th>
            <th className="text-dark text-xl hover:bg-light bg-light">
              People contacted
            </th>
            <th className="text-dark text-xl hover:bg-light bg-light">
              People responded
            </th>
            <th className="text-dark text-xl hover:bg-light bg-light">
              Interviews
            </th>
            <th className="text-dark text-xl hover:bg-light bg-light">
              Offers
            </th>
          </tr>
        </thead>
        <tbody>
          {applicationsSubmitted.map((row, index) => (
            <tr key={index} className="border-none">
              <td className="hover:bg-light bg-light text-dark text-xl font-bold">
                {row.key}
              </td>
              <td className="hover:bg-light bg-light text-dark text-xl font-mono text-end tabular-nums">
                {row.value}
              </td>
              <td className="hover:bg-light bg-light text-dark text-xl font-mono text-end tabular-nums">
                {peopleContacted[index]?.value}
              </td>
              <td className="hover:bg-light bg-light text-dark text-xl font-mono text-end tabular-nums">
                {peopleResponded[index]?.value}
              </td>
              <td className="hover:bg-light bg-light text-dark text-xl font-mono text-end tabular-nums">
                {interviews[index]?.value}
              </td>
              <td className="hover:bg-light bg-light text-dark text-xl font-mono text-end tabular-nums">
                {offers[index]?.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
