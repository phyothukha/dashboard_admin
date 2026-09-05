import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "@/data/schema";
import { TasksTable } from "./components/tasks-table";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "./src/data/tasks.json"),
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const TasksPage = async () => {
  const tasks = await getTasks();

  return (
    <main className=" w-full h-full flex-1 flex-col space-y-5 mt-5 ">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">All Tasks</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
      </div>
      <TasksTable data={tasks} />
    </main>
  );
};

export default TasksPage;
