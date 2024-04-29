import { off } from "process";
import { createSlug, generateMonthlyCountTable } from "../lib/utils";

export async function MonthsStats({ password }: { password: string }) {
  const applicationsSubmitted = await generateMonthlyCountTable(
    createSlug(password, "Applications submitted")
  );
  const peopleContacted = await generateMonthlyCountTable(
    createSlug(password, "People contacted")
  );
  const peopleResponded = await generateMonthlyCountTable(
    createSlug(password, "People responded")
  );
  const interviews = await generateMonthlyCountTable(
    createSlug(password, "Interviews")
  );
  const offers = await generateMonthlyCountTable(
    createSlug(password, "Offers")
  );

  return (
    <div className="mx-auto w-fit h-fit mb-12 border-4 rounded-md">
      <table className="table w-fit p-0 pb-none border-0 rounded-none shadow-md text-xl bg-black bg-opacity-10">
        <thead>
          <tr className="border-none text-xl text-black">
            <th className="text-xl">Month</th>
            <th className="text-xl">Applications submitted</th>
            <th className="text-xl">People contacted</th>
            <th className="text-xl">People responded</th>
            <th className="text-xl">Interviews</th>
            <th className="text-xl">Offers</th>
          </tr>
        </thead>
        <tbody>
          {applicationsSubmitted.length === 0 &&
            offers.length === 0 &&
            interviews.length === 0 &&
            peopleResponded.length === 0 &&
            peopleContacted.length === 0 && (
              <div className="p-4">No data yet...</div>
            )}
          {applicationsSubmitted.map((row, index) => (
            <tr key={index} className="border-none">
              <td className="text-xl font-bold">{row.key}</td>
              <td className="text-xl font-mono text-end tabular-nums">
                {row.value}
              </td>
              <td className="text-xl font-mono text-end tabular-nums">
                {peopleContacted[index]?.value}
              </td>
              <td className="text-xl font-mono text-end tabular-nums">
                {peopleResponded[index]?.value}
              </td>
              <td className="text-xl font-mono text-end tabular-nums">
                {interviews[index]?.value}
              </td>
              <td className="text-xl font-mono text-end tabular-nums">
                {offers[index]?.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
