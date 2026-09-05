import records from "@/data/content/series-records.json";
import { RecordTable } from "@/components/content/record-table";

const SeriesRecordPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Series Records</h2>
        <p className="text-muted-foreground">
          A log of recent changes made to series content.
        </p>
      </div>
      <RecordTable data={records} itemLabel="Records" />
    </main>
  );
};

export default SeriesRecordPage;
