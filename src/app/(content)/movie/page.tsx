import items from "@/data/content/movie-items.json";
import { ContentTable } from "@/components/content/content-table";

const genres = Array.from(new Set(items.map((item) => item.genre)));

const MoviePage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Movies</h2>
        <p className="text-muted-foreground">Manage your movie catalog here.</p>
      </div>
      <ContentTable
        data={items}
        itemLabel="Movies"
        addNewLabel="Add New Movie"
        genres={genres}
      />
    </main>
  );
};

export default MoviePage;
