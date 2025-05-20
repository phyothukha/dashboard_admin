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
      {/* <div className="-mx-4 flex-1 overflow-auto  py-1 lg:flex-row lg:space-y-0 lg:space-x-12"> */}
      <DataTable data={data} />
      {/* </div> */}
    </div>
  );
};

export default TagPage;
