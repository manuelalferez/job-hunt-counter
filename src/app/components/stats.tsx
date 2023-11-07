import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

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
      <Table className="w-fit  p-0 border-0  rounded-md shadow-md bg-light hover:bg-light">
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className=" text-dark text-xl hover:bg-light bg-light">
              People contacted vs responded
            </TableHead>
            <TableHead className=" text-dark text-xl hover:bg-light bg-light">
              Interviews rate (people contacted)
            </TableHead>
            <TableHead className=" text-dark text-xl hover:bg-light bg-light">
              Interviews rate (applications submitted)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-3xl font-mono font-bold text-dark text-end hover:bg-light bg-light">
              {peopleContactedVsResponded}%
            </TableCell>
            <TableCell className="text-3xl font-mono font-bold text-dark text-end hover:bg-light bg-light">
              {interviewsRatePeopleContacted}%
            </TableCell>
            <TableCell className="text-3xl font-mono font-bold text-dark text-end hover:bg-light bg-light">
              {interviewsRateApplicationsSubmitted}%
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
