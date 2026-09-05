import items from "@/data/content/programs-items.json";
import { ContentTable } from "@/components/content/content-table";

const genres = Array.from(new Set(items.map((item) => item.genre)));

const ProgramPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Programs</h2>
        <p className="text-muted-foreground">Manage your TV programs here.</p>
      </div>
      <ContentTable
        data={items}
        itemLabel="Programs"
        addNewLabel="Add New Program"
        genres={genres}
      />
    </main>
  );
};

export default ProgramPage;
