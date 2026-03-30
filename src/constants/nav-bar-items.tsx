import { Calendar, LayoutDashboard } from "lucide-react";

import { ROUTE_PATHS } from "./routes/route-paths";

// Menu items.
export const navBarItems: any = [
  {
    title: "Dashboard",
    url: ROUTE_PATHS.DASHBOARD,
    icon: LayoutDashboard,
    isActive: false,

  },
  {
    title: "MM Calendar",
    url: "/mm-calendar",
    icon: Calendar,

  },
];
