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
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

      <SidebarMenu>
        {items.map((item) => {
          if (!item.navGroup) {
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    checkIsActive(href, item) && " bg-secondary !text-primary",
                    "text-[15px]  px-4 py-2.5 gap-2 font-medium flex items-center rounded-lg transition-colors",
                  )}
                >
                  <Link href={item.url}>
                    {item.icon && <item.icon className="w-5 h-5" />}
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
                    <SidebarMenuButton
                      tooltip={item.name}
                      className={cn(
                        checkIsActive(href, item) && " !text-primary",
                        "text-[15px]  px-4 py-2.5 gap-2 font-medium flex items-center rounded-lg transition-colors",
                      )}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.name}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="CollapsibleContent">
                    <SidebarMenuSub>
                      {item.navGroup.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.name}>
                          <SidebarMenuSubButton
                            asChild
                            className={cn(
                              checkIsActive(href, subItem) && "bg-secondary",
                              "text-[14px] font-medium px-4 py-2.5 flex items-center gap-2 rounded-md transition-colors",
                            )}
                          >
                            <Link
                              href={subItem.url}
                              onClick={() => setOpenMobile(false)}
                            >
                              {subItem.icon && <subItem.icon />}
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
                    className={cn(
                      checkIsActive(href, item) &&
                        " bg-secondary !text-primary",
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
                      <Link href={sub.url}>
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
