import React from "react";
import { z } from "zod";
import { userSchema } from "@/data/schema";
import users from "@/data/users.json";
import { UsersTable } from "./components/users-table";

async function getUsers() {
  return z.array(userSchema).parse(users);
}

const UserPage = async () => {
  const data = await getUsers();

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

      <UsersTable data={data} />
    </main>
  );
};

export default UserPage;
