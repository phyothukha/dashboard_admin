import display from "@/data/content/short-video-display.json";
import { DisplayTable } from "@/components/content/display-table";

const sections = Array.from(new Set(display.map((item) => item.section)));

const ShortVideoDisplayPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Short Videos Display
        </h2>
        <p className="text-muted-foreground">
          Control which short videos appear in each home page section, and in
          what order.
        </p>
      </div>
      <DisplayTable
        data={display}
        itemLabel="Items"
        addNewLabel="Add To Display"
        sections={sections}
      />
    </main>
  );
};

export default ShortVideoDisplayPage;
