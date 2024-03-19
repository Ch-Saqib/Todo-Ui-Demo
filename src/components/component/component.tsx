import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="grid gap-4 w-full max-w-sm">
        <div className="text-3xl font-bold tracking-tight">Todo App</div>
        <div className="flex flex-col gap-1">
          <Label className="text-base" htmlFor="task">
            Task
          </Label>
          <Input id="task" placeholder="Write Name Here " />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-base" htmlFor="description">
            Description
          </Label>
          <Textarea
            className="min-h-[100px]"
            id="description"
            placeholder="Write Description Here"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button size="lg">Add task</Button>
        </div>
        <Card>
          <CardContent className="p-0">
            <ul className="divide-y">
              <li className="flex items-center justify-between p-4">
                <div className="flex flex-col">
                  <span className="font-medium">Buy groceries</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Milk, eggs, bread, and butter
                  </span>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <TrashIcon className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function FileEditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
