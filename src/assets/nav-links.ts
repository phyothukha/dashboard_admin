import {
  Bell,
  Info,
  LayoutPanelTop,
  MessageCircle,
  Settings,
  Settings2,
  Settings2Icon,
  Tv,
  Tv2,
  Tv2Icon,
  TvMinimal,
  User,
} from "lucide-react";

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
    mainNavGroup: [
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
