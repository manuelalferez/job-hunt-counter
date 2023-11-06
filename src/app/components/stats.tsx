import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function Stats() {
  return (
    <Table className="w-fit mx-auto p-0 mb-12 border-0 border-blue-600 rounded-md shadow-xl bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className=" text-blue-800 text-xl">
            People contacted/responded
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
            5.4%
          </TableCell>
          <TableCell className="text-2xl font-mono font-bold text-blue-800 text-end">
            1.4%
          </TableCell>
          <TableCell className="text-2xl font-mono font-bold text-blue-800 text-end">
            0.4%
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
