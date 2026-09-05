import React from "react";
import genres from "@/data/genres.json";
import { GenresTable } from "./components/genres-table";

const GenresPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Genres</h2>
        <p className="text-muted-foreground">
          Manage the genres used to categorize your content.
        </p>
      </div>
      <GenresTable data={genres} />
    </main>
  );
};

export default GenresPage;
