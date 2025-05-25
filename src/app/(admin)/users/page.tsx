import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./components/column";
import { taskSchema } from "@/data/schema";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "./src/data/tasks.json"),
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const UserPage = async () => {
  const tasks = await getTasks();
  return (
    <main className=" w-full h-full flex-1 flex-col space-y-5 mt-5 ">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User Lists</h2>
          <p className="text-muted-foreground">
            Manage your users and their roles here.
          </p>
        </div>
      </div>

      <DataTable data={tasks} columns={columns} />
    </main>
  );
};

export default UserPage;
