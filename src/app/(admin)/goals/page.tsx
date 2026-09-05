import React from "react";
import { z } from "zod";
import { goalSchema } from "@/data/schema";
import goals from "@/data/goals.json";
import { GoalsTable } from "./components/goals-table";

async function getGoals() {
  return z.array(goalSchema).parse(goals);
}

const GoalsPage = async () => {
  const data = await getGoals();

  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Goals</h2>
        <p className="text-muted-foreground">
          Track progress against your team&apos;s goals.
        </p>
      </div>
      <GoalsTable data={data} />
    </main>
  );
};

export default GoalsPage;
