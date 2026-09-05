"use client";

import { DataTable } from "@/components/data-table";
import { Chat } from "@/data/schema";
import { chatChannels, chatStatuses, mapOptions } from "@/data/features-data";
import { columns } from "./column";

export function ChatsTable({ data }: { data: Chat[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="contactName"
      searchPlaceholder="Search conversations..."
      itemLabel="Chats"
      addNewLabel="New Chat"
      filters={[
        {
          column: "status",
          title: "Status",
          options: mapOptions(chatStatuses),
        },
        {
          column: "channel",
          title: "Channel",
          options: mapOptions(chatChannels),
        },
      ]}
    />
  );
}
