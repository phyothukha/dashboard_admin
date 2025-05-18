import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "./data/schema";
import { DataTable } from "./components/data-table";
// import { columns } from "./components/data-table-column-header";
import { UserNav } from "./components/user-nav";
import { columns } from "./components/column";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/src/app/(admin)/help/data/tasks.json"),
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const HelpPage = async () => {
  const tasks = await getTasks();

  return (
    <>
      <div className=" h-full flex-1 flex-col space-y-8  ">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
};

export default HelpPage;
