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

export function Task() {
  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="basis-2/3 leading-8">Title of The Task</CardTitle>
        <div>
          <Badge
            variant="outline"
            className="mr-2"
          >
            1st Jan, 2025
          </Badge>
          <Badge
            variant="outline"
            className="bg-sky-800"
          >
            normal
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription>Description of The Task</CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <Switch id="in-progress" />
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
