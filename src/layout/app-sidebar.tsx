"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Zap } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavActiveIndicator } from "./nav-active-indicator";
import { NavUser } from "./nav-user";
import { bottomNavLinks, navLinks } from "@/assets/nav-links";
import { cn } from "@/lib/utils";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

function BrandHeader() {
  const { state } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center justify-between gap-2">
        <SidebarMenuButton
          size="lg"
          className="w-fit cursor-default px-0 hover:bg-transparent active:bg-transparent"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-4 fill-current" />
          </div>
          {state === "expanded" && (
            <span className="truncate text-lg font-bold tracking-tight">
              Hinthar
            </span>
          )}
        </SidebarMenuButton>
        {state === "expanded" && (
          <SidebarTrigger className="size-7 shrink-0 text-muted-foreground" />
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function SidebarSearch() {
  const { state } = useSidebar();
  if (state !== "expanded") return null;

  return (
    <div className="relative px-2 pb-1">
      <Search className="pointer-events-none absolute left-4.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search"
        className="h-9 w-full rounded-lg border bg-muted/40 pl-9 pr-12 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
      />
      <kbd className="pointer-events-none absolute right-4.5 top-1/2 -translate-y-1/2 rounded border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
        ⌘K
      </kbd>
    </div>
  );
}

function BottomNav() {
  const { state } = useSidebar();
  const href = usePathname();

  return (
    <SidebarMenu className="gap-1.5">
      {bottomNavLinks.map((item) => {
        const active = href === item.url || href.split("?")[0] === item.url;
        return (
          <SidebarMenuItem key={item.name}>
            {active && <NavActiveIndicator />}
            <SidebarMenuButton
              asChild
              tooltip={state === "collapsed" ? item.name : undefined}
              className={cn(
                active
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                "relative h-11 text-[15px] px-3.5 py-3 gap-3 flex items-center rounded-lg transition-colors",
              )}
            >
              <Link href={item.url}>
                <item.icon className="size-5 shrink-0" />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BrandHeader />
        <SidebarSearch />
      </SidebarHeader>
      <SidebarContent>
        {navLinks.map((nav, index) => (
          <NavMain items={nav.mainNavGroup} title={nav.title} key={index} />
        ))}
      </SidebarContent>
      <SidebarFooter className="gap-3">
        <BottomNav />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
