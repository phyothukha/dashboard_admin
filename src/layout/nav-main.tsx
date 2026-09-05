"use client";

import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";
import { NavLinkType } from "@/assets/nav-links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavActiveIndicator } from "./nav-active-indicator";

export function NavMain({
  items,
  title,
}: {
  items: NavLinkType[];
  title?: string;
}) {
  const { setOpenMobile, state } = useSidebar();
  const href = usePathname();

  function checkIsActive(href: string, item: NavLinkType, mainNav = false) {
    return (
      href === item.url || // /endpint?search=param
      href.split("?")[0] === item.url || // endpoint
      !!item?.navGroup?.filter((i) => i.url === href).length || // if child nav is active
      (mainNav &&
        href.split("/")[1] !== "" &&
        href.split("/")[1] === item?.url?.split("/")[1])
    );
  }
  return (
    <SidebarGroup>
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}

      <SidebarMenu className="gap-1.5">
        {items.map((item) => {
          if (!item.navGroup) {
            const active = checkIsActive(href, item);
            return (
              <SidebarMenuItem key={item.name}>
                {active && <NavActiveIndicator />}
                <SidebarMenuButton
                  asChild
                  className={cn(
                    active
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    "relative -ml-2 h-11 w-[calc(100%+0.5rem)] rounded-r-lg rounded-l-none py-3 pr-3.5 pl-[1.375rem] text-[15px] gap-3 flex items-center transition-colors",
                    "group-data-[collapsible=icon]:size-11! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0!",
                  )}
                >
                  <Link href={item.url} onClick={() => setOpenMobile(false)}>
                    {item.icon && <item.icon className="size-5 shrink-0" />}
                    <span className="group-data-[collapsible=icon]:hidden">
                      {item.name}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }
          if (state === "expanded") {
            const active = checkIsActive(href, item);
            return (
              <Collapsible
                key={item.name}
                asChild
                defaultOpen={checkIsActive(href, item, true)}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  {active && <NavActiveIndicator />}
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.name}
                      className={cn(
                        active
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                        "relative -ml-2 h-11 w-[calc(100%+0.5rem)] rounded-r-lg rounded-l-none py-3 pr-3.5 pl-[1.375rem] text-[15px] gap-3 flex items-center transition-colors",
                        "group-data-[collapsible=icon]:size-11! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0!",
                      )}
                    >
                      {item.icon && <item.icon className="size-5 shrink-0" />}
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.name}
                      </span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="CollapsibleContent">
                    <SidebarMenuSub>
                      {item.navGroup.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.name}>
                          <SidebarMenuSubButton
                            asChild
                            className={cn(
                              checkIsActive(href, subItem) &&
                                "bg-accent text-accent-foreground",
                              "h-9 text-[15px] px-4 py-2.5 flex items-center gap-2.5 rounded-md transition-colors",
                            )}
                          >
                            <Link
                              href={subItem.url}
                              onClick={() => setOpenMobile(false)}
                            >
                              {subItem.icon && (
                                <subItem.icon className="size-4 shrink-0" />
                              )}
                              <span>{subItem.name}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }
          const active = checkIsActive(href, item);
          return (
            <SidebarMenuItem key={item.name}>
              {active && <NavActiveIndicator />}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.name}
                    className={cn(
                      "relative",
                      active && "text-primary font-medium",
                    )}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.name}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start" sideOffset={4}>
                  <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {item.navGroup.map((sub) => (
                    <DropdownMenuItem
                      key={`${sub.name}-${sub.url}`}
                      asChild
                      className={cn(
                        checkIsActive(href, sub) && "bg-secondary",
                        "text-[14px] px-3 py-2 flex items-center gap-2 rounded-md transition-colors",
                      )}
                    >
                      <Link href={sub.url} onClick={() => setOpenMobile(false)}>
                        {sub.icon && <sub.icon className="w-4 h-4" />}
                        <span className="max-w-52 text-wrap">{sub.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
