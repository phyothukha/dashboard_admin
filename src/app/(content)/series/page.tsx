import items from "@/data/content/series-items.json";
import { ContentTable } from "@/components/content/content-table";

const genres = Array.from(new Set(items.map((item) => item.genre)));

const SeriesPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Series</h2>
        <p className="text-muted-foreground">
          Manage your series catalog here.
        </p>
      </div>
      <ContentTable
        data={items}
        itemLabel="Series"
        addNewLabel="Add New Series"
        genres={genres}
      />
    </main>
  );
};

export default SeriesPage;
