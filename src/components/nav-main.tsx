"use client";

import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
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
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavMain({ items }: { items: NavLinkType[] }) {
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
      <SidebarMenu>
        {items.map((item) => {
          if (!item.navGroup) {
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    className={`${checkIsActive(href, item) ? "bg-secondary text-primary" : ""}`}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }
          if (state === "expanded") {
            return (
              <Collapsible
                key={item.name}
                asChild
                defaultOpen={checkIsActive(href, item, true)}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.name}>
                      {item.icon && <item.icon />}
                      <span
                        className={cn(
                          checkIsActive(href, item) && " !text-primary",
                        )}
                      >
                        {item.name}
                      </span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="CollapsibleContent">
                    <SidebarMenuSub>
                      {item.navGroup.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.name}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              href={subItem.url}
                              onClick={() => setOpenMobile(false)}
                              className={`${checkIsActive(href, subItem) ? " bg-secondary  !text-primary" : ""}`}
                            >
                              {/* {subItem.icon && <subItem.icon />} */}
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
          return (
            <SidebarMenuItem key={item.name}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.name}
                    isActive={checkIsActive(href, item)}
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
                    <DropdownMenuItem key={`${sub.name}-${sub.url}`} asChild>
                      <Link
                        href={sub.url}
                        className={`${checkIsActive(href, sub) ? "bg-secondary text-primary" : ""}`}
                      >
                        {sub.icon && <sub.icon />}
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
