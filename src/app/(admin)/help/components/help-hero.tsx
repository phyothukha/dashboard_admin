import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export function HelpHero() {
  return (
    <div className="rounded-xl border bg-gradient-to-br from-primary to-blue-700 px-6 py-10 text-center text-primary-foreground">
      <h2 className="text-2xl font-bold tracking-tight">
        How can we help you?
      </h2>
      <p className="mt-1 text-primary-foreground/80">
        Search our knowledge base or browse a category below.
      </p>
      <div className="relative mx-auto mt-5 max-w-md">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search for articles..."
          className="h-11 border-0 bg-white pl-9 text-foreground shadow-sm"
        />
      </div>
    </div>
  );
}
