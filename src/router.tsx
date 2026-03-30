import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import DataNotFound from "./components/error/data-not-found";
import AgriculturalLoading from "./components/loadings/agricultural-loading";
import { ROUTE_PATHS } from "./constants/routes/route-paths";
import SidebarLayout from "./layouts/sidebar-layout";

const NotMatch = lazy(() => import("./pages/not-match"));

// MM calendar
const MMCalendarList = lazy(() => import("./features/mm-calendar/pages/list"));

// Dashboard
const DashboardList = lazy(() => import("./features/dashboard/pages/dashboard-list"));

export function ProtectedOutlet() {
  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to={ROUTE_PATHS.LOGIN} />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedOutlet />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTE_PATHS.DASHBOARD} />,
      },
      {
        element: <SidebarLayout />,
        errorElement: <DataNotFound />,
        children: [
          {
            path: "dashboard",
            element: (
              <Suspense fallback={<div className="flex items-center justify-center w-full h-screen"><AgriculturalLoading /></div>}>
                <DashboardList />
              </Suspense>
            ),
          },
          {
            path: "mm-calendar",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<div className="flex items-center justify-center w-full h-screen"><AgriculturalLoading /></div>}>
                    <MMCalendarList />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<div className="flex items-center justify-center w-full h-screen"><AgriculturalLoading /></div>}>
        <NotMatch />
      </Suspense>
    ),
  },
]);
