"use client";

import * as React from "react";
import { Zap } from "lucide-react";
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
import { NavUser } from "./nav-user";
import { navLinks } from "@/assets/nav-links";

// This is sample data.
const data = {
  user: {
    name: "Phyrous Admin",
    email: "admin@phyrous.com",
    avatar: "",
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
              Phyrous
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BrandHeader />
      </SidebarHeader>
      <SidebarContent>
        {navLinks.map((nav, index) => (
          <NavMain items={nav.mainNavGroup} title={nav.title} key={index} />
        ))}
      </SidebarContent>
      <SidebarFooter className="gap-3">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
