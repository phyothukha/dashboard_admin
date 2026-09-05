import {
  HelpCircle,
  LayoutPanelTop,
  Receipt,
  Settings,
  Settings2,
  Settings2Icon,
  SettingsIcon,
  Tv,
  Tv2,
  Tv2Icon,
  TvMinimal,
} from "lucide-react";
import {
  IconChecklist,
  IconLayoutDashboard,
  IconUser,
} from "@tabler/icons-react";

export interface NavLinkType {
  name: string;
  icon: React.ElementType;
  url: string;
  navGroup?: NavLinkType[];
}

export interface MainNavLinkType {
  title?: string;
  mainNavGroup: NavLinkType[];
}

export const navLinks: MainNavLinkType[] = [
  {
    title: "Menu",
    mainNavGroup: [
      {
        name: "Dashboard",
        icon: IconLayoutDashboard,
        url: "/dashboard",
      },
      {
        name: "User",
        icon: IconUser,
        url: "/users",
      },
      {
        name: "Tasks",
        icon: IconChecklist,
        url: "/tasks",
      },
      {
        name: "Transaction",
        icon: Receipt,
        url: "/transactions",
      },
    ],
  },
  {
    title: "Content",
    mainNavGroup: [
      {
        name: "Movie",
        icon: Tv2,
        url: "/movie",
        navGroup: [
          {
            name: "Banner",
            icon: Settings2,
            url: "/movie/banner",
          },
          {
            name: "Display",
            icon: Settings2Icon,
            url: "/movie/display",
          },
          {
            name: "Record",
            icon: Settings2Icon,
            url: "/movie/record",
          },
        ],
      },
      {
        name: "Series",
        icon: Tv,
        url: "/series",
        navGroup: [
          {
            name: "Banner",
            icon: Settings2,
            url: "/series/banner",
          },
          {
            name: "Display",
            icon: Settings2Icon,
            url: "/series/display",
          },
          {
            name: "Record",
            icon: Settings2Icon,
            url: "/series/record",
          },
        ],
      },
      {
        name: "Program",
        icon: Tv2Icon,
        url: "/programs",
        navGroup: [
          {
            name: "Banner",
            icon: Settings2,
            url: "/programs/banner",
          },
          {
            name: "Display",
            icon: Settings2Icon,
            url: "/programs/display",
          },
          {
            name: "Record",
            icon: Settings2Icon,
            url: "/programs/record",
          },
        ],
      },
      {
        name: "Short Video",
        icon: TvMinimal,
        url: "/short-video",
        navGroup: [
          {
            name: "Banner",
            icon: Settings2,
            url: "/short-video/banner",
          },
          {
            name: "Display",
            icon: Settings2Icon,
            url: "/short-video/display",
          },
          {
            name: "Record",
            icon: Settings2Icon,
            url: "/short-video/record",
          },
        ],
      },
      {
        name: "Genre",
        icon: LayoutPanelTop,
        url: "/genres",
      },
      {
        name: "Tags",
        icon: Settings,
        url: "/tags",
      },
    ],
  },
];

export const bottomNavLinks: NavLinkType[] = [
  {
    name: "Help Center",
    icon: HelpCircle,
    url: "/help",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    url: "/settings",
  },
];
