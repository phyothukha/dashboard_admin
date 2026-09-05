"use client";

import { DataTable } from "@/components/data-table";
import { CalendarEvent } from "@/data/schema";
import {
  calendarEventStatuses,
  calendarEventTypes,
} from "@/data/features-data";
import { columns } from "./column";

export function EventsTable({ data }: { data: CalendarEvent[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="title"
      searchPlaceholder="Search events..."
      itemLabel="Events"
      addNewLabel="Add New Event"
      filters={[
        { column: "status", title: "Status", options: calendarEventStatuses },
        { column: "type", title: "Type", options: calendarEventTypes },
      ]}
    />
  );
}
