import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../UI/Card";
import { Badge } from "../UI/Badge";
import { CalendarIcon, BriefcaseIcon } from "lucide-react";

const driveResults = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    date: "2023-05-15",
    result: "Shortlisted",
  },
  {
    id: 2,
    company: "Data Dynamics Corp",
    date: "2023-06-02",
    result: "Appeared",
  },
  {
    id: 3,
    company: "Global Solutions Ltd",
    date: "2023-06-20",
    result: "Not Shortlisted",
  },
  {
    id: 4,
    company: "Future Systems",
    date: "2023-07-10",
    result: "Offer Made",
  },
  {
    id: 5,
    company: "Quantum Computing Co",
    date: "2023-07-25",
    result: "Appeared",
  },
];

const getResultColor = (result) => {
  switch (result) {
    case "Shortlisted":
      return "bg-blue-100 text-blue-800";
    case "Appeared":
      return "bg-yellow-100 text-yellow-800";
    case "Not Shortlisted":
      return "bg-red-100 text-red-800";
    case "Offer Made":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Events() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Placement Drives</CardTitle>
        <CardDescription>
          Your participation and results in recent placement drives
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {driveResults.map((drive) => (
            <li
              key={drive.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4"
            >
              <div className="flex items-start space-x-4">
                <BriefcaseIcon className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-semibold">{drive.company}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(drive.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <Badge className={`mt-2 sm:mt-0 ${getResultColor(drive.result)}`}>
                {drive.result}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
