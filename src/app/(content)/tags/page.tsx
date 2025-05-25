import React from "react";

import data from "./components/data.json";
import { DataTable } from "./components/data-table";

const TagPage = () => {
  return (
    <div className=" w-full">
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User List</h2>
          <p className="text-muted-foreground">
            Manage your users and their roles here.
          </p>
        </div>
      </div>
      <DataTable data={data} />
    </div>
  );
};

export default TagPage;
