import type { Metadata } from "next";
import React from "react";
import { z } from "zod";
import { chatSchema } from "@/data/schema";
import chats from "@/data/chats.json";
import { ChatsTable } from "./components/chats-table";

export const metadata: Metadata = {
  title: "Chat",
  description: "Your recent conversations across all channels.",
};

async function getChats() {
  return z.array(chatSchema).parse(chats);
}

const ChatPage = async () => {
  const data = await getChats();

  return (
    <main className="w-full h-full flex-1 flex-col space-y-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Chat</h2>
        <p className="text-muted-foreground">
          Your recent conversations across all channels.
        </p>
      </div>
      <ChatsTable data={data} />
    </main>
  );
};

export default ChatPage;
