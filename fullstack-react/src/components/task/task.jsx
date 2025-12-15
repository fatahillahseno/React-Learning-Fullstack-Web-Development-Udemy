import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function Task(props) {
  const {
    title = "This is the default title",
    description = "This is the default description",
    status = "todo",
    priority = "normal",
    dueDate = new Date("2025-01-01T12:00:00.000Z"),
  } = props;

  let formattedDate = dueDate.toLocaleDateString("id", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
        <div>
          <Badge
            variant="outline"
            className="mr-2"
          >
            {formattedDate}
          </Badge>
          <Badge
            variant="outline"
            className={` 
              ${priority === "low" && "bg-green-500"}
              ${priority === "normal" && "bg-blue-500"}
              ${priority === "high" && "bg-red-500"}
            `}
          >
            {priority}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <Switch
            checked={status === "inProgress" ? true : false}
            onCheckedChange={() => {
              console.log("Switch Change");
            }}
            id="in-progress"
          />
          <Label
            className="ml-4 "
            htmlFor="in-progress"
          >
            In Progress
          </Label>
        </div>
        <Button>Completed</Button>
      </CardFooter>
    </Card>
  );
}
