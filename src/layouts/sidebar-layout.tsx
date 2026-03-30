import { Outlet } from "react-router-dom";

import AppSidebar from "@/components/dashboard/app-sidebar";
import { RouteProgress } from "@/components/route-progress";
import { SidebarProvider } from "@/components/ui/sidebar";

function SidebarLayout() {
  return (

    <SidebarProvider>

      <RouteProgress />

      <AppSidebar />

      <div className="w-full overflow-auto bg-gray-50">

        <div className=" overflow-auto ">

          <Outlet />

        </div>

      </div>

    </SidebarProvider>

  );
}

export default SidebarLayout;
