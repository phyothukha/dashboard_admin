import type { Metadata } from "next";
import React from "react";
import { z } from "zod";
import { calendarEventSchema } from "@/data/schema";
import events from "@/data/calendar-events.json";
import { EventsTable } from "./components/events-table";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Upcoming meetings, deadlines, and events.",
};

async function getEvents() {
  return z.array(calendarEventSchema).parse(events);
}

const CalendarPage = async () => {
  const data = await getEvents();

  return (
    <main className="w-full h-full flex-1 flex-col space-y-5">
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
