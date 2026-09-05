import {
  CalendarDays,
  FolderKanban,
  Grid2x2,
  HelpCircle,
  MessageSquare,
  SettingsIcon,
  ShoppingBag,
  Target,
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
        name: "Users",
        icon: IconUser,
        url: "/users",
      },
      {
        name: "Tasks",
        icon: IconChecklist,
        url: "/tasks",
      },
      {
        name: "Goals",
        icon: Target,
        url: "/goals",
      },
      {
        name: "App",
        icon: Grid2x2,
        url: "/app",
      },
      {
        name: "Chat",
        icon: MessageSquare,
        url: "/chat",
      },
      {
        name: "Calendar",
        icon: CalendarDays,
        url: "/calendar",
      },
      {
        name: "Products",
        icon: ShoppingBag,
        url: "/products",
      },
      {
        name: "Projects",
        icon: FolderKanban,
        url: "/projects",
      },
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
    ],
  },
];
