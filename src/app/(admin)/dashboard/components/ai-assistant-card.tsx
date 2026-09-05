"use client";

import * as React from "react";
import { ArrowUp, Expand, Mic, Paperclip, Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AiAssistantCard() {
  const [value, setValue] = React.useState("");

  return (
    <Card className="py-5">
      <CardHeader className="px-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">AI Assistant</span>
          <Button variant="ghost" size="icon" className="size-7">
            <Expand className="size-4 text-muted-foreground" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center px-5">
        <div className="relative flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-400 shadow-[0_0_30px_-4px] shadow-primary/60">
          <Sparkles className="size-6 text-primary-foreground" />
        </div>

        <div className="mt-5 flex w-full items-center gap-1 rounded-full border bg-secondary/40 px-2 py-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="size-7 shrink-0 rounded-full text-muted-foreground"
          >
            <Paperclip className="size-4" />
          </Button>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Ask me anything..."
            className="h-7 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <Button
            variant="ghost"
            size="icon"
            className="size-7 shrink-0 rounded-full text-muted-foreground"
          >
            <Mic className="size-4" />
          </Button>
          <Button
            size="icon"
            className="size-7 shrink-0 rounded-full"
            aria-label="Send"
          >
            <ArrowUp className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
