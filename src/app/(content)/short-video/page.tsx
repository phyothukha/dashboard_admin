import items from "@/data/content/short-video-items.json";
import { ContentTable } from "@/components/content/content-table";

const genres = Array.from(new Set(items.map((item) => item.genre)));

const ShortVideoPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Short Videos</h2>
        <p className="text-muted-foreground">Manage your short videos here.</p>
      </div>
      <ContentTable
        data={items}
        itemLabel="Short Videos"
        addNewLabel="Add New Short Video"
        genres={genres}
      />
    </main>
  );
};

export default ShortVideoPage;
