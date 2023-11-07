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
    <Table className="w-fit mx-auto p-0 mb-12 border-0 border-blue-600 rounded-md shadow-xl bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className=" text-blue-800 text-xl">
            People contacted vs responded
          </TableHead>
          <TableHead className=" text-blue-800 text-xl">
            Interviews rate (people contacted)
          </TableHead>
          <TableHead className=" text-blue-800 text-xl">
            Interviews rate (applications submitted)
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-2xl font-mono font-bold text-blue-800 text-end">
            {peopleContactedVsResponded}%
          </TableCell>
          <TableCell className="text-2xl font-mono font-bold text-blue-800 text-end">
            {interviewsRatePeopleContacted}%
          </TableCell>
          <TableCell className="text-2xl font-mono font-bold text-blue-800 text-end">
            {interviewsRateApplicationsSubmitted}%
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
