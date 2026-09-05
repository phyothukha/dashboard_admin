import banners from "@/data/content/series-banners.json";
import { BannerTable } from "@/components/content/banner-table";

const SeriesBannerPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Series Banners</h2>
        <p className="text-muted-foreground">
          Manage promotional banners shown on the series section.
        </p>
      </div>
      <BannerTable
        data={banners}
        itemLabel="Banners"
        addNewLabel="Add New Banner"
      />
    </main>
  );
};

export default SeriesBannerPage;
