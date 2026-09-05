import React from "react";
import { z } from "zod";
import { calendarEventSchema } from "@/data/schema";
import events from "@/data/calendar-events.json";
import { EventsTable } from "./components/events-table";

async function getEvents() {
  return z.array(calendarEventSchema).parse(events);
}

const CalendarPage = async () => {
  const data = await getEvents();

  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Calendar</h2>
        <p className="text-muted-foreground">
          Upcoming meetings, deadlines, and events.
        </p>
      </div>
      <EventsTable data={data} />
    </main>
  );
};

export default CalendarPage;
