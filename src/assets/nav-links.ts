import {
  Bell,
  Info,
  LayoutPanelTop,
  MessageCircle,
  Settings,
  Settings2,
  Settings2Icon,
  User,
} from "lucide-react";

export interface NavLinkType {
  name: string;
  icon: React.ElementType;
  url: string;
  navGroup?: NavLinkType[];
}

export const navLinks: NavLinkType[] = [
  {
    name: "Dashboard",
    icon: LayoutPanelTop,
    url: "/dashboard",
  },
  {
    name: "Settings",
    icon: Settings,
    url: "/settings",
    navGroup: [
      {
        name: "Settings",
        icon: Settings2,
        url: "/settings/setting-1",
      },
      {
        name: "Settings-1",
        icon: Settings2Icon,
        url: "/settings/setting-2",
      },
    ],
  },
  {
    name: "Profile",
    icon: User,
    url: "/profile",
    navGroup: [
      {
        name: "Profile",
        icon: Settings2,
        url: "/profile/profile-1",
      },
      {
        name: "Profile-1",
        icon: Settings2Icon,
        url: "/profile/profile-2",
      },
    ],
  },
  {
    name: "Notifications",
    icon: Bell,
    url: "/notifications",
    navGroup: [
      {
        name: "Notifications",
        icon: Settings2,
        url: "/notifications/notification-1",
      },
      {
        name: "Notifications-1",
        icon: Settings2Icon,
        url: "/notifications/notification-2",
      },
    ],
  },
  {
    name: "Messages",
    icon: MessageCircle,
    url: "/messages",
    navGroup: [
      {
        name: "Settings",
        icon: Settings2,
        url: "/messages/message-1",
      },
      {
        name: "Settings-1",
        icon: Settings2Icon,
        url: "/messages/message-2",
      },
    ],
  },
  {
    name: "Help",
    icon: Info,
    url: "/help",
  },
];
