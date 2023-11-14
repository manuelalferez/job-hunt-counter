export default async function Stats({
  fetchCounter,
}: {
  fetchCounter: (title: string) => Promise<string>;
}) {
  const peopleContacted = await fetchCounter("People contacted");
  const peopleResponded = await fetchCounter("People responded");
  const interviews = await fetchCounter("Interviews");
  const applicationsSubmitted = await fetchCounter("Applications submitted");

  const peopleContactedVsResponded = (
    (Number(peopleResponded) / Number(peopleContacted)) *
    100
  ).toFixed(2);

  const interviewsRatePeopleContacted = (
    (Number(interviews) / Number(peopleContacted)) *
    100
  ).toFixed(2);

  const interviewsRateApplicationsSubmitted = (
    (Number(interviews) / Number(applicationsSubmitted)) *
    100
  ).toFixed(2);

  return (
    <div className="border-4 rounded-md border-lightgreen mx-auto w-fit h-fit mb-12 bg-light">
      <table className="table w-fit  p-0 border-0  rounded-md shadow-md bg-light hover:bg-light">
        <thead>
          <tr className="border-none">
            <th className=" text-dark text-xl hover:bg-light bg-light">
              People contacted vs responded
            </th>
            <th className=" text-dark text-xl hover:bg-light bg-light">
              Interviews rate (people contacted)
            </th>
            <th className=" text-dark text-xl hover:bg-light bg-light">
              Interviews rate (applications submitted)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-3xl font-mono font-bold text-dark text-end hover:bg-light bg-light">
              {peopleContactedVsResponded}%
            </td>
            <td className="text-3xl font-mono font-bold text-dark text-end hover:bg-light bg-light">
              {interviewsRatePeopleContacted}%
            </td>
            <td className="text-3xl font-mono font-bold text-dark text-end hover:bg-light bg-light">
              {interviewsRateApplicationsSubmitted}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
