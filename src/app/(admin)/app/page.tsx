import React from "react";
import { z } from "zod";
import { appSchema } from "@/data/schema";
import apps from "@/data/apps.json";
import { AppsTable } from "./components/apps-table";

async function getApps() {
  return z.array(appSchema).parse(apps);
}

const AppsPage = async () => {
  const data = await getApps();

  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Apps</h2>
        <p className="text-muted-foreground">
          Manage the apps connected to your workspace.
        </p>
      </div>
      <AppsTable data={data} />
    </main>
  );
};

export default AppsPage;
